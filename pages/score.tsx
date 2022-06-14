import { cls } from '@libs/utils';
import type { NextPage } from 'next'
import { useRouter } from 'next/router';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useAppSelector } from 'redux/app/hooks';
import { resetNumber, resetScore } from 'redux/slices/quiz/currentStateSlice';
import { resetQuiz, resetTotal } from 'redux/slices/quiz/quizTenSlice';

const Score: NextPage = () => {
  const [current, setCurrent] = useState(8);
  const [total, setTotal] = useState(10);
  const router = useRouter();
  const quizState = useAppSelector((state) => state.quizState);
  const quizTen = useAppSelector((state) => state.quizTen);
  const { curNum, curScore, select } = quizState;
  const { quizzes, quizTotal} = quizTen;
  const dispatch = useDispatch();
  const nextButton = () => {
    dispatch(resetNumber());
    dispatch(resetScore());
    dispatch(resetTotal());
    dispatch(resetQuiz());
    console.log(quizzes);
    router.push("/")
  };
  return (
   <div className='h-screen flex items-center justify-center'>
    <div className="h-1/2 flex justify-center">
      <div className="block p-6 rounded-lg shadow-lg bg-white max-w-xs">
        <h5 className="text-slate-700 text-xl leading-tight font-medium">Score</h5>
        <div className='flex flex-col items-center justify-center text-9xl'>
          <div><span className='text-red-400'>{curScore}</span><span className='text-slate-600'>/{curNum+1}</span></div>
          {curScore/(curNum + 1) <= 0.4 ? (
            <div className='animate-ping'>😱</div>
          ) : (curScore/(curNum + 1) <=0.7 ? ( 
            <div className='animate-ping'>😳</div> 
          ) : (
            <div className='animate-ping'>😆</div>
          ))}
        </div>
        <button type="button" onClick={nextButton} className="mt-16 inline-block px-6 py-2.5 w-full bg-slate-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-slate-700 hover:shadow-lg focus:bg-slate-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-slate-800 active:shadow-lg transition duration-150 ease-in-out">
          처음으로
        </button>
      </div>
    </div>
   </div>
 );
}

export default Score;