import client from "@libs/client";
import withHandler, { ResponseType } from "@libs/withHandler";
import { NextApiRequest, NextApiResponse } from "next";

async function handler(req:NextApiRequest, res:NextApiResponse<ResponseType>){
    const { choice, id } = req.body;
    const last = choice.substr(-1);
    const exist = await client.quiz.findUnique({
        where:{
            id
        },
        
    });
    
    if(!exist){
        return res.json({ok:false, error:"ID ERROR"});
    }
    if(+last === 1){
        await client.quiz.update({
            where:{
                id:exist.id
            },
            data:{
                total_c1: exist.total_c1+1
            }
        });
        return res.json({ok:true});
    }
    else if(+last === 2){
        await client.quiz.update({
            where:{
                id:exist.id
            },
            data:{
                total_c2: exist.total_c2+1
            }
        });
        return res.json({ok:true});
    }
    else if(+last === 3){
        await client.quiz.update({
            where:{
                id:exist.id
            },
            data:{
                total_c3: exist.total_c3+1
            }
        });
        return res.json({ok:true});
    }
    else if(+last === 4){
        await client.quiz.update({
            where:{
                id:exist.id
            },
            data:{
                total_c4: exist.total_c4+1
            }
        });
        return res.json({ok:true});
    }else {
        return res.json({ok:false});
    }
};

export default withHandler({methods:["POST"], handler, isPrivate:false});