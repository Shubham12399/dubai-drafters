import { createSlice } from "@reduxjs/toolkit";

const bookingProcess = createSlice({
  name: "BookingProcess",
  initialState: 1,
  reducers: {
    setBookingProcess: (_, action) => {
      return action.payload;
    },
  },
});

export default bookingProcess.reducer;
export const { setBookingProcess } = bookingProcess.actions;
