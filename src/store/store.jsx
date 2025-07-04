import { configureStore } from "@reduxjs/toolkit";
import  todoReducer  from "./logic/logic";

export const store = configureStore({
    reducer: {
        todo : todoReducer,
    },
})