import { createSlice } from "@reduxjs/toolkit";
import { CurrentState } from "./type";

const initialState: CurrentState = {
    curNum: 0,
    curScore: 0,
    select: true,
}

export const currentStateSlice = createSlice({
    name:'currentState',
    initialState,
    reducers: {
        increaseNumber: (state) => {
            state.curNum += 1;
        },
        resetNumber: (state) => {
            state.curNum = 0;
        },
        increaseScore: (state) => {
            state.curScore += 1;
        },
        resetScore: (state) => {
            state.curScore = 0;
        },
        selectTrue: (state) => {
            state.select = true;
        },
        selectFalse: (state) => {
            state.select = false;
        },
    }
});

export const { increaseNumber, resetNumber, increaseScore, resetScore, selectFalse, selectTrue  } = currentStateSlice.actions;
export default currentStateSlice.reducer;