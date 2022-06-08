import { cls } from '@libs/utils';
import type { NextPage } from 'next'
import { useRouter } from 'next/router';
import { useState } from 'react';

const Quiz: NextPage = () => {
  const [choice, setChoice] = useState("");
  const router = useRouter();
  return (
   <div className='h-screen flex items-center justify-center'>
    <div className="h-1/2 flex justify-center">
      <div className="block p-6 rounded-lg shadow-lg bg-white max-w-xs">
        <h5 className="text-gray-900 text-xl leading-tight font-medium mb-2">응용 프로그램에서 사용할 수 있도록, 운영 체제나 프로그래밍 언어가 제공하는 기능을 제어할 수 있게 만든 인터페이스는 무엇인가?</h5>
        <div className="flex mt-8 space-x-3 items-center justify-center mb-16">
          <button className={cls("px-2 py-1 rounded-xl text-sm text-center shadow-md", choice==="choice1" ? "border-2 border-rose-700 bg-red-300 text-white animate-bounce" : "text-slate-700")} onClick={() => setChoice("choice1")}>Protocol</button>
          <button className={cls("px-2 py-1 rounded-xl text-sm text-center shadow-md", choice==="choice2" ? "border-2 border-rose-700 bg-red-300 text-white animate-bounce" : "text-slate-700")} onClick={() => setChoice("choice2")}>UI</button>
          <button className={cls("px-2 py-1 rounded-xl text-sm text-center shadow-md", choice==="choice3" ? "border-2 border-rose-700 bg-red-300 text-white animate-bounce" : "text-slate-700")} onClick={() => setChoice("choice3")}>ORM</button>
          <button className={cls("px-2 py-1 rounded-xl text-sm text-center shadow-md", choice==="choice4" ? "border-2 border-rose-700 bg-red-300 text-white animate-bounce" : "text-slate-700")} onClick={() => setChoice("choice4")}>API</button>
        </div>
        <button type="button" onClick={() => router.push(`/answer/1`)} className="inline-block px-6 py-2.5 w-full bg-slate-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-slate-700 hover:shadow-lg focus:bg-slate-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-slate-800 active:shadow-lg transition duration-150 ease-in-out">제출</button>
      </div>
    </div>
   </div>
 );
}

export default Quiz;