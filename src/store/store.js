// Sore for the reduxjs application
import { configureStore } from "@reduxjs/toolkit";
import countReducer from "./reducers/counter.js";
import cartReducer from "./reducers/cart.js";

const store = configureStore({
    reducer : {
        countReducer,
        cartReducer
    },
    devTools : true,
});

export default store