import client from "@libs/client";
import withHandler, { ResponseType } from "@libs/withHandler";
import { NextApiRequest, NextApiResponse } from "next";
import { hash } from "bcryptjs";

async function handler(req:NextApiRequest, res:NextApiResponse<ResponseType>){
    const { name, password, email, passwordConfirm } = req.body;
    const exist = await client.user.findUnique({
        where:{
            email
        }
    });
    if(exist){
      return res.json({ok:false, error:"이미 존재하는 계정입니다!"});
    }
    if(password !== passwordConfirm){
        return res.json({ok:false, error:"비밀번호를 다시 확인해주세요!"});
    }
    const hashedPassword = await hash(password, 10);
    await client.user.create({
        data:{
            name,
            email,
            password:hashedPassword
        }
    });
    return res.json({ok:true});
};

export default withHandler({methods:["POST"], handler, isPrivate:false});