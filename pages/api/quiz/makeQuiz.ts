import client from "@libs/client";
import withHandler, { ResponseType } from "@libs/withHandler";
import { NextApiRequest, NextApiResponse } from "next";

async function handler(req:NextApiRequest, res:NextApiResponse<ResponseType>){
    const { quiz, answer, choice1, choice2, choice3, choice4, user } = req.body;
    console.log(req.body);
    const exist = await client.quiz.findUnique({
        where:{
            quiz
        }
    });
    if(exist){
        return res.json({ok:false, error:"이미 존재하는 문제입니다!"});
    }
    await client.quiz.create({
        data:{
            quiz,
            answer:+answer,
            choice1,
            choice2,
            choice3,
            choice4,
            ...(user && {author:user})
        }
    });
    return res.json({ok:true});
};

export default withHandler({methods:["POST"], handler, isPrivate:false});