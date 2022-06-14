import { Quiz } from "@prisma/client";

export interface CurrentState {
    curNum: number;
    curScore: number;
    select: boolean;
}

export interface QuizState {
    quizTotal: number;
    quizzes: Quiz[]
}

interface DefaultAction {
    type: string;
}

export interface Setting_Actions extends DefaultAction {
    payload: Quiz;
}