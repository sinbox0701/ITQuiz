import Layout from '@components/layout'
import type { NextPage } from 'next'
import Link from 'next/link'
 
const SignUp: NextPage = () => {
 return (
    <Layout title='회원가입'>
      <div className='text-white font-bold text-3xl'>SIGN UP</div>  
      <form className="flex flex-col w-2/3 space-y-4 items-center">
        <input type="text" placeholder='이름' className='appearance-none w-full md:w-2/3 px-3 py-2 border-4 border-gray-500 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-sky-500 focus:border-sky-500' /> 
        <input type="email" placeholder='이메일' className='appearance-none w-full md:w-2/3 px-3 py-2 border-4 border-gray-500 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-sky-500 focus:border-sky-500' /> 
        <input type="password" placeholder='비밀번호' className='appearance-none w-full md:w-2/3 px-3 py-2 border-4 border-gray-500 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-sky-500 focus:border-sky-500' /> 
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