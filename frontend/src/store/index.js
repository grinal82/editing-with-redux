import { configureStore } from "@reduxjs/toolkit";
import myReducer from './reducer'

const store = configureStore({
    reducer: {
        myReducer: myReducer
    }
})

export default store