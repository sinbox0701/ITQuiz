import NextAuth from "next-auth/next";
import Credentials from "next-auth/providers/credentials";

export default  NextAuth({
    providers: [
        Credentials({
            credentials:{
                email:{ label:"E-Mail", type:"email", placeholder:"user@email.com" },
                password:{ label:"password", type:"password", placeholder:"비밀번호" }
            },
            authorize(credentials,req){
                if(credentials.email === "test@email.com" && credentials.password === "1234"){
                    const user = { id: 1, name: "J Smith", email: "test@email.com" }
                }

                if (user) {
                    // Any object returned will be saved in `user` property of the JWT
                    return user
                } else {
                    // If you return null or false then the credentials will be rejected
                    return null
                }
            }
        })
    ],
    secret:process.env.SECRET
}) 