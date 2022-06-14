import { createSlice } from "@reduxjs/toolkit";
import { QuizState, Setting_Actions } from "./type";


const initialState: QuizState = {
    quizTotal: 0,
    quizzes:[]
}

export const quizTenSlice = createSlice({
    name:'quizTen',
    initialState,
    reducers: {
        settingQuiz: (state, actions:Setting_Actions) => {
            state.quizzes[state.quizTotal] = actions.payload
            state.quizTotal += 1;
        },
        resetTotal:(state) => {
            state.quizTotal = 0;
        },
        resetQuiz: (state) => {
            state.quizTotal = 0;
            state.quizzes = [];
        }
    }
});

export const { settingQuiz, resetTotal, resetQuiz } = quizTenSlice.actions;
export default quizTenSlice.reducer;