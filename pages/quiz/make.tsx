import useMutation from '@libs/useMutation';
import { cls } from '@libs/utils';
import Layout from 'components/layout'
import type { NextPage } from 'next'
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
 
interface MakeQuizForm {
  quiz: string;
  answer: number;
  choice1: string;
  choice2: string;
  choice3: string;
  choice4: string;
  user?: string; 
};

interface MakeQuizResult {
  ok:boolean;
  error?:string;
}

const QuizMake: NextPage = () => {
  const { data:session, status } = useSession();
  const router = useRouter();
  const { register, handleSubmit, formState:{ isValid } } = useForm<MakeQuizForm>({
    mode:"onChange"
  });
  const [ makequiz, { loading } ] = useMutation<MakeQuizResult>("/api/quiz/makeQuiz")
  const onValid = (dataForm:MakeQuizForm) => {
    if(loading) return;
    makequiz({...dataForm, user:session?.user?.name});
    router.push({pathname:'/'});
  };
  useEffect(()=>{
    if(status!=="authenticated"){
      router.push("/");
    }
  },[router, status]);
  return (
    <Layout title='퀴즈만들기'>
      <div className='text-white font-bold text-3xl'>퀴즈를 만들어 보아요!</div>  
      <form onSubmit={handleSubmit(onValid)} className="flex flex-col w-2/3 space-y-4 items-center">
        <textarea
          {...register("quiz",{
            required:"문제를 입력해주세요!"
          })} 
          placeholder='문제' 
          rows={3} 
          className='appearance-none w-full md:w-2/3 px-3 py-2 border-4 border-gray-500 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-sky-500 focus:border-sky-500' 
        />
        <div className='flex flex-col space-y-2 w-1/2'>
            <input
              {...register("choice1",{
                required:"내용을 입력하세요!"
              })} 
              type="text" 
              placeholder='보기 1번' 
              className='appearance-none px-3 py-2 border-4 border-gray-500 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-sky-500 focus:border-sky-500' 
            /> 
            <input
              {...register("choice2",{
                required:"내용을 입력하세요!"
              })} 
              type="text" 
              placeholder='보기 2번' 
              className='appearance-none px-3 py-2 border-4 border-gray-500 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-sky-500 focus:border-sky-500' 
            />
            <input
              {...register("choice3",{
                required:"내용을 입력하세요!"
              })} 
              type="text" 
              placeholder='보기 3번' 
              className='appearance-none px-3 py-2 border-4 border-gray-500 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-sky-500 focus:border-sky-500' 
            /> 
            <input
              {...register("choice4",{
                required:"내용을 입력하세요!"
              })} 
              type="text" 
              placeholder='보기 4번' 
              className='appearance-none px-3 py-2 border-4 border-gray-500 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-sky-500 focus:border-sky-500' 
            />
        </div>
        <div className="flex flex-col space-y-1 items-center">
          <span className="flex items-center select-none text-sm text-gray-400">
            보기 중 정답 번호(숫자만)
          </span>
          <select {...register("answer",{
              required:"정답을 입력하세요!"
            })}
            className='appearance-none w-1/2 text-xs px-3 py-2 border-4 border-gray-500 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-sky-500 focus:border-sky-500 text-center'
          >
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={4}>4</option>
          </select>
        </div>
        <div className='w-full md:w-2/3'>
            <button
              disabled={!isValid || loading} 
              className={cls('px-4 w-full py-2 rounded-xl text-slate-700 text-2xl bg-white font-bold text-center shadow-md hover:text-slate-900 hover:border-2', !isValid ? 'opacity-20' : '')}
            >
                퀴즈 만들기
            </button>
        </div>
      </form>
    </Layout>
 );
}

export default QuizMake;