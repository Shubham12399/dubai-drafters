import { combineReducers } from "@reduxjs/toolkit";
import { configureStore } from "@reduxjs/toolkit";
import typeSlice from "./slices/typeSlice";
import bookingProcessSlice from "./slices/bookingProcessSlice";
import SelectDateSlice from "./slices/SelectDateSlice";
import BookingData from "./slices/BookingData";
import cartReducer from "./slices/Cart";
// combine all slices 
const combinedReducers = combineReducers({
        typeSlice:typeSlice,
        bookingProcessSlice:bookingProcessSlice,
        selectDateSlice:SelectDateSlice,
        bookingData:BookingData,
        cartSlice:cartReducer
});

// configure store 
const store = configureStore({ 
    reducer:combinedReducers
})


export default store;