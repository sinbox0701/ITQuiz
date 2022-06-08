import Layout from '@components/layout'
import type { NextPage } from 'next'
 
const Home: NextPage = () => {
 return (
    <Layout title="IT Quiz">
      <div className='text-white text-5xl font-semibold animate-bounce hover:animate-spin md:text-8xl'>
        <span className='text-stone-400'>I</span> <span className='text-white'>T</span> <span className='text-red-500'>Q</span> <span className='text-orange-500'>U</span> <span className='text-yellow-500'>I</span> <span className='text-sky-500'>Z</span>
      </div>
      <div className='flex flex-col space-y-1 items-center justify-center'>
        <button className='px-4 py-2 rounded-xl text-slate-700 text-2xl bg-white text-center shadow-md hover:text-slate-900 hover:border-2'>시작하기</button>
        <div className='text-white text-sm p-2 hover:animate-pulse cursor-pointer'>퀴즈 만들러 가기</div>
      </div>
    </Layout>
 );
}

export default Home