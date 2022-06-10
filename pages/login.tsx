import Layout from 'components/layout'
import type { NextPage } from 'next'
import { RedirectableProviderType } from 'next-auth/providers'
import { signIn } from 'next-auth/react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useForm } from 'react-hook-form'

interface LoginForm {
  email: string;
  password: string;
}

// declare module 'next-auth/providers'{
//   interface RedirectableProviderType{

//   }
// }

type ResultType = RedirectableProviderType & {
  error: string | undefined;
  status: number;
  ok: boolean;
  url: string | null;
}

const Login: NextPage = () => {
  const router = useRouter();
  const { register, handleSubmit, formState:{errors}, setError } = useForm<LoginForm>({
    mode:"onChange"
  });
  const onValid = async (data:LoginForm) => {
    const result = await signIn<ResultType>("credentials",{
      redirect:false,
      email:data.email,
      password:data.password
    });
    console.log(result?.error);
    if (!result?.error) {
      router.replace("/");
    } else {
      if(result?.error.includes("비밀번호")){
        setError("password",{
          message:result?.error
        })
      }
      else{

        setError("email",{
          message:result?.error
        })
      }
    }
  };
  return (
    <Layout title='로그인'>
      <div className='text-white font-bold text-3xl'>LOGIN</div>  
      <form  onSubmit={handleSubmit(onValid)} className="flex flex-col w-2/3 space-y-4 items-center">
        <input
          {...register("email",{
            required:"이메일을 입력하세요!"
          })} 
          type="email" 
          placeholder='이메일' 
          className='appearance-none w-full md:w-2/3 px-3 py-2 border-4 border-gray-500 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-sky-500 focus:border-sky-500' 
        /> 
        {errors.email?.message ? (
          <div className='text-red-500'>{errors.email?.message}</div>
        ):null}  
        <input
          {...register("password",{
            required:"비밀번호를 입력하세요",
            minLength:{
              message:"6자 이상 입력해주세요",
              value:6
            }
          })} 
          type="password" 
          placeholder='비밀번호' 
          className='appearance-none w-full md:w-2/3 px-3 py-2 border-4 border-gray-500 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-sky-500 focus:border-sky-500' 
        /> 
        {errors.password?.message ? (
          <div className='text-red-500'>{errors.password?.message}</div>
        ):null}  
        <div className='w-full md:w-2/3'>
            <button className='px-4 w-full py-2 rounded-xl text-slate-700 text-2xl bg-white font-bold text-center shadow-md hover:text-slate-900 hover:border-2'>로그인</button>
            <div className='text-white text-sm p-2 flex justify-between'>
                <Link href={`/`}>
                  <div className='hover:animate-pulse cursor-pointer'>퀴즈 풀러가기</div>
                </Link>
                <Link href={`/signup`}>
                  <div className='hover:animate-pulse cursor-pointer'>아직 회원이 아니시라면? →</div>
                </Link>
            </div>
        </div>
      </form>
    </Layout>
 );
}

export default Login;