import type { NextPage } from 'next'
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';
import { useAppSelector } from 'redux/app/hooks';
import { increaseNumber } from 'redux/slices/quiz/currentStateSlice';

const Answer: NextPage = () => {
  const router = useRouter();
  const quizState = useAppSelector((state) => state.quizState);
  const quizTen = useAppSelector((state) => state.quizTen);
  const { curNum, curScore } = quizState;
  const { quizzes } = quizTen;
  const dispatch = useDispatch();
  const ratio = (data:number) => {
    let totals = (quizzes[curNum].total_c1 +  quizzes[curNum].total_c2 + quizzes[curNum].total_c3 + quizzes[curNum].total_c4);
    if(totals === 0) {
      return 0;
    }
    return Math.round((data/totals)*100);
  }
  const nextButton = () => {
    if(curNum === 9 ){
      router.push("/score");
    }
    else {
      dispatch(increaseNumber());
      router.push(`/quiz`)
    }
  };
  return (
   <div className='h-screen flex items-center justify-center'>
    <div className="h-2/3 flex justify-center">
      <div className="block p-6 rounded-lg shadow-lg bg-white max-w-xs">
        <h5 className="text-red-500 text-xl leading-tight font-medium mb-2">{`정답: ${quizzes[curNum]?.answer}`}</h5>
        {quizzes[curNum]?.description ? (
          <p className='text-gray-700 text-base'>
            {quizzes[curNum]?.description}
          </p>
        ):null}
        <div className="flex flex-col mt-4 space-y-2 items-start justify-center mb-4">
          <div className="px-2 py-1 text-slate-700 rounded-xl text-sm text-center shadow-md">{`1. ${quizzes[curNum]?.choice1}: ${ratio(quizzes[curNum]?.total_c1)}%`}</div>
          <div className="px-2 py-1 text-slate-700 rounded-xl text-sm text-center shadow-md">{`2. ${quizzes[curNum]?.choice2}: ${ratio(quizzes[curNum]?.total_c2)}%`}</div>
          <div className="px-2 py-1 text-slate-700 rounded-xl text-sm text-center shadow-md">{`3. ${quizzes[curNum]?.choice3}: ${ratio(quizzes[curNum]?.total_c3)}%`}</div>
          <div className="px-2 py-1 text-slate-700 rounded-xl text-sm text-center shadow-md">{`4. ${quizzes[curNum]?.choice4}: ${ratio(quizzes[curNum]?.total_c4)}%`}</div>
        </div>
        <button type="button" onClick={nextButton} className="mt-2 inline-block px-6 py-2.5 w-full bg-slate-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-slate-700 hover:shadow-lg focus:bg-slate-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-slate-800 active:shadow-lg transition duration-150 ease-in-out">
          {curNum === 9 ? `결과 보러 가기`: `다음 문제로 가기`}
        </button>
        <div className='mt-4 flex flex-col items-center justify-center text-6xl'>
          <div className='mb-4'><span className='text-red-400'>{curScore}</span><span className='text-slate-600'>/{curNum+1}</span></div>
          {curScore/(curNum + 1) <= 0.4 ? (
            <div>😱</div>
          ) : (curScore/(curNum + 1) <=0.7 ? ( 
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