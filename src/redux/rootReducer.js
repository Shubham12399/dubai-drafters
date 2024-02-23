import { combineReducers } from "@reduxjs/toolkit";
import { configureStore } from "@reduxjs/toolkit";
import typeSlice from "./slices/typeSlice";
import bookingProcessSlice from "./slices/bookingProcessSlice";
import SelectDateSlice from "./slices/SelectDateSlice";

// combine all slices 
const combinedReducers = combineReducers({
        typeSlice:typeSlice,
        bookingProcessSlice:bookingProcessSlice,
        selectDateSlice:SelectDateSlice
});

// configure store 
const store = configureStore({ 
    reducer:combinedReducers
})


export default store;