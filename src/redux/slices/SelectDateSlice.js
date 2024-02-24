import { createSlice } from "@reduxjs/toolkit";

// function selectWeek(date) {
//     return Array(7).fill(new Date(date)).map((el, idx) =>
//       new Date(el.setDate(el.getDate() - el.getDay() + idx)))
//   }

function getNext7Days() {
  var dates = [];
  var today = new Date(); // Get today's date
  for (var i = 0; i < 7; i++) {
    var nextDate = new Date(today);
    nextDate.setDate(today.getDate() + i);
    // var options = {
    //   weekday: "long",
    //   year: "numeric",
    //   month: "long",
    //   day: "numeric",
    // };
    dates.push(nextDate);
    // dates.push(nextDate.toLocaleDateString("en-US", options));
  }
  return dates;
}
console.log(getNext7Days())
// const nextAllWeekDays = selectWeek(new Date());
const nextSevenDays = getNext7Days();

const nextDaysObj = nextSevenDays.map((el) => {
  var options = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    };
  const stringDate = el.toLocaleDateString("en-US", options);
  console.log(stringDate)
  const weekName = stringDate.trim().split(",")[0];
  const monthName = stringDate.trim().split(",")[1].split(" ")[1];
  const day = stringDate.trim().split(",")[1].split(" ")[2];
  const year = stringDate.trim().split(",")[2];
  const date = el;
  console.log(el)
  return {
    status: weekName,
    day: day,
    year: year,
    date:JSON.stringify(date),
    active: false,
  };
});

const removedTwoDaysInnextDaysObjArr = nextDaysObj.splice(2,nextDaysObj.length - 1);
// const nextAllDays = nextAllWeekDays.filter(
//   (e) =>
//     new Date(e).toLocaleString().split("/")[1] >
//     new Date().toLocaleString().split("/")[1]
// );
// console.log(nextAllDays);
//   console.log(nextAllWeekDays.filter(e=>new Date(e).toLocaleString().split("/")[1] > new Date().toLocaleString().split("/")[1]));
const selectDateSlice = createSlice({
  name: "selectDateSlice",
  initialState: [
    {
      ...nextDaysObj[0],
      status: "Today",
      active: true,
    },
    {
      ...nextDaysObj[1],
      status: "Tomorrow",
    },
    ...removedTwoDaysInnextDaysObjArr,
  ],
  reducers: {
    setselectDateSlice: (state, action) => {
      return action.payload;
    },
  },
});

export default selectDateSlice.reducer;
export const { setselectDateSlice } = selectDateSlice.actions;
