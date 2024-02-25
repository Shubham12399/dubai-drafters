import { createSlice } from "@reduxjs/toolkit";

const bookingData = createSlice({
  name: "Booking Data",
  initialState: {},
  reducers: {
    setBookingData: (state, { payload }) => {
      state[payload.key] = payload.value;
    },
  },
});
export default bookingData.reducer;
export const {setBookingData} = bookingData.actions;