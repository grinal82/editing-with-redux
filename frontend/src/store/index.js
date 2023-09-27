import { configureStore } from "@reduxjs/toolkit";
import myReducer from './reducer'

const store = configureStore({
    reducer: {
        itemsReducer: myReducer
    }
})

export default store