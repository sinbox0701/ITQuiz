import { NextApiRequest, NextApiResponse } from "next";

export interface ResponseType {
    ok: boolean;
    [key:string]: any;
};

type method = "GET"|"POST"|"DELETE";

interface ConfigType {
    methods: method[];
    handler: (req:NextApiRequest, res:NextApiResponse) => void;
    isPrivate?: boolean;
};

export default function withHandler({
    methods,
    handler,
    isPrivate=true
}:ConfigType){
  return async function(req:NextApiRequest, res:NextApiResponse):Promise<any>{
    if(req.method && !methods.includes(req.method as any)){//any타입의 req.method가 존재하는지
      return res.status(405).end();
    }
    try{
      await handler(req, res);
    }catch(error){
      return res.status(500).json({error});
    }
  }
}