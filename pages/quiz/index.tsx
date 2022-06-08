import Layout from '@components/layout'
import type { NextPage } from 'next'
 
const QuizMake: NextPage = () => {
  return (
    <Layout title='회원가입'>
      <div className='text-white font-bold text-3xl'>퀴즈를 만들어 보아요!</div>  
      <form className="flex flex-col w-2/3 space-y-4 items-center">
        <textarea placeholder='문제' rows={3} className='appearance-none w-full md:w-2/3 px-3 py-2 border-4 border-gray-500 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-sky-500 focus:border-sky-500' />
        <div className='flex flex-col space-y-2 w-1/2'>
            <input type="text" placeholder='보기 1번' className='appearance-none px-3 py-2 border-4 border-gray-500 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-sky-500 focus:border-sky-500' /> 
            <input type="text" placeholder='보기 2번' className='appearance-none px-3 py-2 border-4 border-gray-500 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-sky-500 focus:border-sky-500' />
            <input type="text" placeholder='보기 3번' className='appearance-none px-3 py-2 border-4 border-gray-500 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-sky-500 focus:border-sky-500' /> 
            <input type="text" placeholder='보기 4번' className='appearance-none px-3 py-2 border-4 border-gray-500 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-sky-500 focus:border-sky-500' />
        </div>
        <div className="flex flex-col space-y-1 items-center">
          <span className="flex items-center select-none text-sm text-gray-400">
            보기 중 정답 번호(숫자만)
          </span>
          <input type="text" className='appearance-none w-1/2 text-xs px-3 py-2 border-4 border-gray-500 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-sky-500 focus:border-sky-500' /> 
        </div>
        <div className='w-full md:w-2/3'>
            <button className='px-4 w-full py-2 rounded-xl text-slate-700 text-2xl bg-white font-bold text-center shadow-md hover:text-slate-900 hover:border-2'>퀴즈 만들기</button>
        </div>
      </form>
    </Layout>
 );
}

export default QuizMake;