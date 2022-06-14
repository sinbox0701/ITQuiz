import { combineReducers } from "redux";
import { currentStateSlice } from "./quiz/currentStateSlice";
import { quizTenSlice } from "./quiz/quizTenSlice";

const rootReducer = combineReducers({
    quizState: currentStateSlice.reducer,
    quizTen: quizTenSlice.reducer
});

export default rootReducer;