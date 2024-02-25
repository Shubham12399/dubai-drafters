import { createSlice } from "@reduxjs/toolkit";

const bookingData = createSlice({
  name: "Booking Data",
  initialState: {},
  reducers: {
    setBookingData: (state, { payload }) => {
      state[payload.key] = payload.value;
    },
    removeBookingData:(state ,{payload}) => {
      state = {};
    }
  },
});
export default bookingData.reducer;
export const {setBookingData,removeBookingData} = bookingData.actions;