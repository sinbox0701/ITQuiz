import { cls } from '@libs/utils';
import type { NextPage } from 'next'
import { useRouter } from 'next/router';
import { useState } from 'react';

const Answer: NextPage = () => {
  const [current, setCurrent] = useState(1);
  const [total, setTotal] = useState(1);
  const router = useRouter();
  return (
   <div className='h-screen flex items-center justify-center'>
    <div className="h-2/3 flex justify-center">
      <div className="block p-6 rounded-lg shadow-lg bg-white max-w-xs">
        <h5 className="text-red-500 text-xl leading-tight font-medium mb-2">정답: API</h5>
        <p className='text-gray-700 text-base'>
          API는 Application Programing Interface로 어플리케이션 SW의 기능을 제어할 수 있게 만든 인터페이스이다.
        </p>
        <div className="flex flex-col mt-4 space-y-2 items-start justify-center mb-4">
          <div className="px-2 py-1 text-slate-700 rounded-xl text-sm text-center shadow-md">Protocol: 12%</div>
          <div className="px-2 py-1 text-slate-700 rounded-xl text-sm text-center shadow-md">UI: 3%</div>
          <div className="px-2 py-1 text-slate-700 rounded-xl text-sm text-center shadow-md">ORM: 1%</div>
          <div className="px-2 py-1 text-slate-700 rounded-xl text-sm text-center shadow-md">API: 84%</div>
        </div>
        <button type="button" onClick={() => router.push("/score")} className="mt-2 inline-block px-6 py-2.5 w-full bg-slate-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-slate-700 hover:shadow-lg focus:bg-slate-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-slate-800 active:shadow-lg transition duration-150 ease-in-out">
          다음 문제로 가기
        </button>
        <div className='mt-4 flex flex-col items-center justify-center text-6xl'>
          <div className='mb-4'><span className='text-red-400'>{current}</span><span className='text-slate-600'>/{total}</span></div>
          {current/total <= 0.4 ? (
            <div>😱</div>
          ) : (current/total <=0.7 ? ( 
            <div>😳</div> 
          ) : (
            <div>😆</div>
          ))}
        </div>
      </div>
    </div>
   </div>
 );
}

export default Answer;