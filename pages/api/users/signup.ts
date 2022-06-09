import client from "@libs/client";
import withHandler, { ResponseType } from "@libs/withHandler";
import { NextApiRequest, NextApiResponse } from "next";
import { hash, compare } from "bcryptjs";

async function handler(req:NextApiRequest, res:NextApiResponse<ResponseType>){
    const { name, password, email } = req.body;
    const exist = await client.user.findUnique({
        where:{
            email
        }
    });
    if(exist){
      return res.status(400).json({ok:false});
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