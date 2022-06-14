import client from "@libs/client";
import withHandler, { ResponseType } from "@libs/withHandler";
import { NextApiRequest, NextApiResponse } from "next";

async function handler(req:NextApiRequest, res:NextApiResponse<ResponseType>){
  const { select } = req.query;
  if(select === 'true'){
    const quizzes = await client.quiz.findMany({
      where:{
        author:'admin'
      },
      orderBy:[
        {
          submitCount:'asc',
        },
        {
          createdAt:'desc'
        }
      ],
      take:10
    });
    quizzes.map(async (quiz) => {
      await client.quiz.update({
        where:{
          id:quiz.id
        },
        data:{
          submitCount:quiz.submitCount+1
        }
      })
    });
    return res.json({ok:true, quizzes});  
  }else {
    const quizzes = await client.quiz.findMany({
      where:{
        NOT:{
          author:'admin'
        }
      },
      orderBy:[
        {
          submitCount:'asc',
        },
        {
          createdAt:'desc'
        }
      ],
      take:10
    });
    quizzes.map(async (quiz) => {
      await client.quiz.update({
        where:{
          id:quiz.id
        },
        data:{
          submitCount:quiz.submitCount+1
        }
      })
    });
    return res.json({ok:true, quizzes});
  }  
};

export default withHandler({methods:["GET"], handler, isPrivate:false});