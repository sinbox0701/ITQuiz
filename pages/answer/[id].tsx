import type { NextPage } from 'next'

const Answer: NextPage = () => {
 return (
   <div>
     <div className='h-screen flex flex-col space-y-8 items-center justify-center bg-black'>
       <div className='text-white text-8xl font-semibold animate-bounce'>
         <span className='text-stone-400'>I</span> <span className='text-white'>T</span> <span className='text-red-500'>Q</span> <span className='text-orange-500'>U</span> <span className='text-yellow-500'>I</span> <span className='text-sky-500'>Z</span>
        </div>
       <button className='px-4 py-2 rounded-xl text-slate-700 text-2xl bg-white text-center shadow-md'>시작하기</button>
     </div>
   </div>
 );
}

export default Answer;