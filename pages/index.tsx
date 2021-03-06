import Layout from 'components/layout'
import type { NextPage } from 'next'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useSession, } from 'next-auth/react'; 
import { useDispatch } from 'react-redux';
import { selectFalse, selectTrue } from 'redux/slices/quiz/currentStateSlice';
import { useEffect } from 'react';
import { useAppSelector } from 'redux/app/hooks';

const Home: NextPage = () => {
  const router = useRouter();
  const { status } = useSession();
  const dispatch = useDispatch();
  const quizTen = useAppSelector((state) => state.quizTen);
  const { quizTotal } = quizTen;
  const onNextButtonOne = () => {
    dispatch(selectTrue());
    router.replace(`/quiz`);
  }
  const onNextButtonTwo = () => {
    dispatch(selectFalse());
    router.replace(`/quiz`);
  }
  
  return (
    <Layout title="IT Quiz">
      <div className='text-white text-5xl font-semibold animate-bounce hover:animate-spin md:text-8xl'>
        <span className='text-stone-400'>I</span> <span className='text-white'>T</span> <span className='text-red-500'>Q</span> <span className='text-orange-500'>U</span> <span className='text-yellow-500'>I</span> <span className='text-sky-500'>Z</span>
      </div>
      <button onClick={onNextButtonOne} className='px-4 py-2 w-2/3 rounded-xl text-slate-700 text-2xl font-bold bg-white text-center shadow-md hover:text-slate-900 hover:border-2'>기본 퀴즈 풀러가기</button>
      <div className='w-full flex flex-col space-y-1 items-center justify-center'>
        <button onClick={onNextButtonTwo} className='px-4 py-2 w-2/3 rounded-xl text-slate-700 text-2xl font-bold bg-white text-center shadow-md hover:text-slate-900 hover:border-2'>다양한 퀴즈 풀러가기</button>
        {status !== "authenticated" ? ( 
          <Link href={`/login`}>
            <div className='text-white text-sm p-2 hover:animate-pulse cursor-pointer'>로그인하고 퀴즈만들기</div>
          </Link>
        ):(
          <Link href={`/quiz/make`}>
            <div className='text-white text-sm p-2 hover:animate-pulse cursor-pointer'>퀴즈 만들러 가기</div>
          </Link>
        )}
      </div>
    </Layout>
 );
}

export default Home