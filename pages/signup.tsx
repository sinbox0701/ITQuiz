import useMutation from '@libs/useMutation';
import Layout from 'components/layout'
import type { NextPage } from 'next'
import Link from 'next/link'
import { useRouter } from 'next/router';
import { FieldErrors, useForm } from 'react-hook-form'

interface SignupForm {
  name: string;
  email: string;
  password: string;
}

interface SignupResult {
  ok:boolean;
}

const SignUp: NextPage = () => {
  const router = useRouter();
  const { register, handleSubmit, formState:{errors}, } = useForm<SignupForm>({
    mode:"onChange"
  });
  const [signup, {data, loading, error}] = useMutation<SignupResult>("/api/users/signup")
  const onValid = (dataForm:SignupForm) => {
    if(loading) return;
    signup(dataForm);
    // router.push({pathname:'/login'})
  };

  return (
    <Layout title='회원가입'>
      <div className='text-white font-bold text-3xl'>SIGN UP</div>  
      <form onSubmit={handleSubmit(onValid)} className="flex flex-col w-2/3 space-y-4 items-center">
        <input 
          {...register("name",{
            required: "이름을 입력하세요!",
          })}
          type="text" 
          placeholder='이름' 
          className='appearance-none w-full md:w-2/3 px-3 py-2 border-4 border-gray-500 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-sky-500 focus:border-sky-500' 
        />
        {errors.name?.message ? (
          <div className='text-red-500'>{errors.name?.message}</div>
        ):null} 
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
        <input type="password" placeholder='비밀번호 확인' className='appearance-none w-full md:w-2/3 px-3 py-2 border-4 border-gray-500 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-sky-500 focus:border-sky-500' /> 
        <div className='w-full md:w-2/3'>
            <button className='px-4 w-full py-2 rounded-xl text-slate-700 text-2xl bg-white font-bold text-center shadow-md hover:text-slate-900 hover:border-2'>회원가입</button>
            <div className='text-white text-sm p-2 flex justify-between'>
              <Link href={`/`}>
                <div className='hover:animate-pulse cursor-pointer'>퀴즈 풀러가기</div>
              </Link>
              <Link href={`/login`}>
                <div className='hover:animate-pulse cursor-pointer'>퀴즈 만들러가기</div>
              </Link>
            </div>
        </div>
      </form>
    </Layout>
 );
}

export default SignUp;