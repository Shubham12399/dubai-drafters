import { combineReducers } from "@reduxjs/toolkit";
import { configureStore } from "@reduxjs/toolkit";
import typeSlice from "./slices/typeSlice";

// combine all slices 
const combinedReducers = combineReducers({
        typeSlice:typeSlice,
});

// configure store 
const store = configureStore({ 
    reducer:combinedReducers
})


export default store;