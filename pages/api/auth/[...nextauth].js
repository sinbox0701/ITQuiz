import NextAuth from "next-auth/next";
import Credentials from "next-auth/providers/credentials";
import client from "@libs/client";
import { compare } from "bcryptjs";

export default  NextAuth({
    providers: [
        Credentials({
            credentials:{
                email:{ label:"E-Mail", type:"email", placeholder:"user@email.com" },
                password:{ label:"password", type:"password", placeholder:"비밀번호" }
            },
            async authorize(credentials, req){
                const user = await client.user.findUnique({
                    where:{
                        email:String(credentials.email)
                    },
                    select:{
                        name:true,
                        email:true,
                        password:true,
                        isAdmin:true
                    }
                })
                if(!user) {
                    throw new Error("이메일을 찾을 수 없습니다!");
                }
                const isValid = await compare(credentials.password,user.password);
                if (!isValid) {
                    throw new Error("비밀번호를 틀렸습니다!");
                }
                return { name: user.name, email: user.email, password:user.password, isAdmin:user.isAdmin };
            }
        })
    ],
    secret:process.env.SECRET
}) 