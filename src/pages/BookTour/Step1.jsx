import { useDispatch, useSelector } from "react-redux";
import { setBookingProcess } from "../../redux/slices/bookingProcessSlice.js";
import {
  GoCalendar,
  GoChevronLeft,
  GoChevronRight,
  GoDash,
  GoPlus,
} from "react-icons/go";
import ActionButton from "../../components/common/ActionButton.jsx";
import { useCallback, useEffect, useRef, useState } from "react";
import Modal from "../../components/Modal.jsx";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { setselectDateSlice } from "../../redux/slices/SelectDateSlice.js";
const Step1 = () => {
  const dispatch = useDispatch();
  const [usersQuantity, setUsersQuantity] = useState({});
  const [adults, setAdults] = useState(0);
  const [children, setChildren] = useState(0);
  const [isDateModal, setIsDateModal] = useState(false);
  const [selectedDate, setSelectedDate] = useState("");
  const [calenderDate, setCalenderDate] = useState("");
  const [allDates, setAllDates] = useState([]);
  const selectDatesStore = useSelector((store) => store.selectDateSlice);
  const hasRendered = useRef(false);

  useEffect(() => {
    setAllDates(selectDatesStore);
  }, [selectDatesStore]);

  const handleNextProcess = () => {
    dispatch(setBookingProcess(2));
  };

  const shiftActiveFlagToSelectedDate = useCallback(() => {
    const activeFlagShiftedArray = [...selectDatesStore].map((e) => {
      if (e.day == selectedDate.day && e.month == selectedDate.month) {
        return { ...e, active: true };
      } else {
        return { ...e, active: false };
      }
    });
    dispatch(setselectDateSlice([...activeFlagShiftedArray]));
    console.log(activeFlagShiftedArray);
  }, [selectedDate, dispatch]); // dont add selectDatesStore dependencies

  const handleSelectedDate = (date) => {
    const month = date.toLocaleString("default", { month: "long" });
    const day = date.toLocaleString().split("/")[1];
    const year = date.getFullYear();
    console.log(month);
    const weekendDay = date.getDay();

    dispatch(
      setselectDateSlice([
        ...[...selectDatesStore]
          .map((e) => ({ ...e, active: false }))
          .filter((e) =>{
            if(!((e.day == day) && (e.month == month))){
              //statement
              return e
            }
          }),
        {
          month: month,
          day: day,
          year: year,
          active: true,
        },
      ])
    );
    hasRendered.current = true;
    // shiftActiveFlagToSelectedDate();
    setSelectedDate({ month: month, day: day, year: year, active: true });
    setCalenderDate(date);
    setIsDateModal(false);
  };

  const setSelectedDateByOnClickOnDatesTags = (jsonDate) => {
    setSelectedDate(jsonDate);
    hasRendered.current = true;
  };

  useEffect(() => {
    if (hasRendered.current) {
      shiftActiveFlagToSelectedDate();
    }
  }, [shiftActiveFlagToSelectedDate]);

  // handle after every Status to be False and when date matched in selected date so trigger them to true

  // handle after every Changes User Quantity
  useEffect(() => {
    setUsersQuantity({ adults: adults, children: children });
  }, [adults, children]);

  return (
    <>
      <div className="w-full max-w-maxWidthContent mx-auto py-3">
        {/* Body data */}
        <div>
          {/* select date */}
          <div className="flex justify-between px-4 items-center ">
            <h1>Select Date</h1>

            <div
              className="flex gap-x-2 text-sm items-center cursor-pointer"
              onClick={() => setIsDateModal(true)}
            >
              <GoCalendar className="text-[#ff612c]"></GoCalendar>
              <p className="GTE_light text-xs">More Dates</p>
            </div>
          </div>

          <div className="px-4 mt-2">
            {/* dates */}
            <span className="text-xs text-[#ff612c] ">
              Feb 4<span className="ml-1"> </span>
            </span>

            {/* Dates */}
            <div className="flex gap-x-2 overflow-auto mt-1 hide-scrollbar ">
              {/* All cards */}

              {allDates.map((e) => {
                // const isActive =
                return (
                  <>
                    {/* Active Card */}
                    <div
                      className={`min-w-[65px] bg-richblack-25 flex flex-col justify-center text-richblack-500 text-xs rounded-lg border border-richblack-25 cursor-pointer ${
                        e?.active &&
                        "!bg-[#ff612c] !text-white !border-[#ff612c]"
                      } `}
                      onClick={() => setSelectedDateByOnClickOnDatesTags(e)}
                    >
                      <div className="pt-2 flex flex-col items-center">
                        <h1 className="text-center GTE_light">
                          <p className="text-[10px] GTE_light ">
                            {e?.status ? e.status : e?.month}
                          </p>
                          <p className="text-sm">{e?.day}</p>
                        </h1>
                      </div>

                      <div className="bg-white rounded-lg rounded-tl-none rounded-tr-none py-1 flex items-center justify-center text-richblack-400 text-[10px]">
                        AED {adults * 400}
                      </div>
                      {/* <span className="GTE_light text-xs">Starting</span> */}
                    </div>
                  </>
                );
              })}
            </div>
          </div>

          <hr className="mt-8 mb-4" />

          {/* Quantity Selection */}
          <div className="px-4">
            <h1 className="mb-2">Select Travellers</h1>
            {/* Adults */}
            <div className="flex justify-between items-center pr-4 mb-4 text-sm select-none">
              <h2>Adults</h2>
              <div className="flex gap-x-6 items-center">
                <div
                  className="p-2 rounded-full bg-richblack-25 cursor-pointer"
                  onClick={() => setAdults((prev) => (prev > 0 ? prev - 1 : 0))}
                >
                  <GoDash></GoDash>
                </div>
                <div className="w-[10px]">{adults}</div>
                <div
                  className="p-2 rounded-full bg-white shadow-md cursor-pointer"
                  onClick={() => setAdults((prev) => prev + 1)}
                >
                  <GoPlus></GoPlus>
                </div>
              </div>
            </div>

            {/* Children */}
            <div className="flex justify-between items-center pr-4 text-sm select-none">
              <h2>
                Children ( 0 - 3 year ){" "}
                <span className="text-xs text-[#ff612c]">Free</span>
              </h2>
              <div className="flex gap-x-6 items-center">
                <div
                  className="p-2 rounded-full bg-richblack-25 cursor-pointer"
                  onClick={() =>
                    setChildren((prev) => (prev > 0 ? prev - 1 : 0))
                  }
                >
                  <GoDash></GoDash>
                </div>
                <div className="w-[10px]">{children}</div>
                <div
                  className="p-2 rounded-full bg-white shadow-md cursor-pointer"
                  onClick={() => setChildren((prev) => prev + 1)}
                >
                  <GoPlus></GoPlus>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Next Button  */}
        <div className="absolute bottom-0 w-full bg-white py-2 px-4 flex items-center justify-center">
          <ActionButton onClick={handleNextProcess}>Next</ActionButton>
        </div>

        {/* select Date Modal */}
        {isDateModal && (
          <Modal title={"Select Date"} setModal={setIsDateModal} className="pb-4">
            <Calendar
              className={"!border-none !select-none"}
              onChange={(value) => handleSelectedDate(value)}
              value={calenderDate}
              prevLabel={
                <div className="flex items-center justify-center ">
                  <GoChevronLeft></GoChevronLeft>
                </div>
              }
              nextLabel={
                <div className="flex items-center justify-center ">
                  <GoChevronRight></GoChevronRight>
                </div>
              }
            ></Calendar>
          </Modal>
        )}
      </div>
    </>
  );
};

export default Step1;
