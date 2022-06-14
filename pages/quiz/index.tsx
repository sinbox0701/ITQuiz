import useMutation from '@libs/useMutation';
import { cls } from '@libs/utils';
import { Quiz } from '@prisma/client';
import type { NextPage } from 'next'
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useAppSelector } from 'redux/app/hooks';
import { increaseNumber, increaseScore } from 'redux/slices/quiz/currentStateSlice';
import { resetQuiz, settingQuiz } from 'redux/slices/quiz/quizTenSlice';
import useSWR from 'swr';

interface QuizResponse {
  ok: boolean;
  quizzes: Quiz[]
}

interface AnswerResult {
  ok:boolean;
  error?:string;
}

const Quiz: NextPage = () => {
  const [choice, setChoice] = useState("");
  const router = useRouter();
  const [ correctAnswer, {data, loading, error} ] = useMutation<AnswerResult>("/api/answer/correctAnswer")
  const quizState = useAppSelector((state) => state.quizState);
  const quizTen = useAppSelector((state) => state.quizTen);
  const { curNum, curScore, select } = quizState;
  const { quizzes, quizTotal} = quizTen;
  const { data:quiz10 } = useSWR<QuizResponse>(`/api/quiz?select=${select}`);
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(resetQuiz());
    quiz10?.quizzes.forEach((quiz)=>dispatch(settingQuiz(quiz)));
  },[quiz10,dispatch])

  const answerButton = () => {
    if(quiz10?.quizzes[curNum].answer === +(choice.slice(-1)) ){
      dispatch(increaseScore())
    }
    correctAnswer({choice, id:quizzes[curNum].id});
    router.push(`/answer/${quizzes[curNum].id}`)
    setChoice("");
  };
  console.log(quizzes);
  console.log(quizTotal);
  return (
   <div className='h-screen flex items-center justify-center'>
    <div className="h-1/2 flex justify-center">
      <div className="block p-6 rounded-lg shadow-lg bg-white max-w-xs">
        <h5 className="text-gray-900 text-xl leading-tight font-medium mb-2">{quizzes[curNum]?.quiz}</h5>
        <div className="flex mt-8 space-x-3 items-center justify-center mb-16">
          <button className={cls("px-2 py-1 rounded-xl text-sm text-center shadow-md", choice==="choice1" ? "border-2 border-rose-700 bg-red-300 text-white animate-bounce" : "text-slate-700")} onClick={() => setChoice("choice1")}>{quizzes[curNum]?.choice1}</button>
          <button className={cls("px-2 py-1 rounded-xl text-sm text-center shadow-md", choice==="choice2" ? "border-2 border-rose-700 bg-red-300 text-white animate-bounce" : "text-slate-700")} onClick={() => setChoice("choice2")}>{quizzes[curNum]?.choice2}</button>
          <button className={cls("px-2 py-1 rounded-xl text-sm text-center shadow-md", choice==="choice3" ? "border-2 border-rose-700 bg-red-300 text-white animate-bounce" : "text-slate-700")} onClick={() => setChoice("choice3")}>{quizzes[curNum]?.choice3}</button>
          <button className={cls("px-2 py-1 rounded-xl text-sm text-center shadow-md", choice==="choice4" ? "border-2 border-rose-700 bg-red-300 text-white animate-bounce" : "text-slate-700")} onClick={() => setChoice("choice4")}>{quizzes[curNum]?.choice4}</button>
        </div>
        <button 
          disabled={choice===""} 
          type="button" 
          onClick={answerButton} 
          className={cls("inline-block px-6 py-2.5 w-full bg-slate-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-slate-700 hover:shadow-lg focus:bg-slate-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-slate-800 active:shadow-lg transition duration-150 ease-in-out",choice==="" ? 'opacity-20' : '')}
          >
            제출
          </button>
      </div>
    </div>
   </div>
 );
}

export default Quiz;