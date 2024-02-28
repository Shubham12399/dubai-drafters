import { useDispatch, useSelector } from "react-redux";
import { setBookingProcess } from "../../redux/slices/bookingProcessSlice.js";
import "../../App.css";
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
import { setBookingData } from "../../redux/slices/BookingData.js";
import { Link } from "react-router-dom";
// import BookingProcess from "./BookingProcess.jsx";
const Step1 = () => {
  const dispatch = useDispatch();
  const [usersQuantity, setUsersQuantity] = useState({});
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);
  const [isDateModal, setIsDateModal] = useState(false);
  const selectDatesStore = useSelector((store) => store.selectDateSlice);
  const [selectedDate, setSelectedDate] = useState({ ...selectDatesStore[0] });
  const [calenderDate, setCalenderDate] = useState("");
  const [allDates, setAllDates] = useState([]);
  const [selectionType, setSelectionType] = useState("");
  const bookingData = useSelector((store) => store.bookingData);
  const hasRendered = useRef(false);
  useEffect(() => {
    setAllDates(selectDatesStore);
    console.log(hasRendered);

    if (bookingData?.selectedDate?.date && !hasRendered.current) {
      console.log(selectedDate);
      console.log(new Date(JSON.parse(selectedDate?.status !== "Today")));
      setCalenderDate(new Date(JSON.parse(bookingData?.selectedDate.date)));
      return;
    }
    if (selectedDate?.date) {
      setCalenderDate(new Date(JSON.parse(selectedDate?.date)));
    }
  }, [selectDatesStore, selectedDate, bookingData]);

  useEffect(() => {
    setSelectionType("Indivisual");
  }, []);
  // useEffect(() => {

  // },[bookingData]);

  useEffect(() => {
    if (bookingData?.adults) {
      setAdults(bookingData?.adults);
    }
    if (bookingData?.children) {
      setChildren(bookingData?.children);
    }
    if (bookingData?.selectedDate) {
      console.log(bookingData);

      let updatedDateObj = {
        ...bookingData.selectedDate,
        active: true,
      };
      console.log(selectDatesStore[0]);
      dispatch(
        setselectDateSlice([
          ...[...selectDatesStore]
            .map((e) => ({ ...e, active: false }))
            .filter((e) => {
              if (
                !(
                  e.day == bookingData.selectedDate.day &&
                  e.month == bookingData.selectedDate.month
                )
              ) {
                //statement
                return e;
              }
            }),
          updatedDateObj,
        ])
      );
    }
  }, [bookingData, dispatch]);

  const handleNextProcess = () => {
    dispatch(setBookingProcess(2));
  };

  const shiftActiveFlagToSelectedDate = useCallback(() => {
    const activeFlagShiftedArray = [...selectDatesStore].map((e) => {
      if (e.day == selectedDate.day && e.month == selectedDate.month) {
        return { ...e, active: true, date: e.date };
      } else {
        return { ...e, active: false, date: e.date };
      }
    });
    console.log(activeFlagShiftedArray);
    dispatch(setselectDateSlice([...activeFlagShiftedArray]));
    console.log(activeFlagShiftedArray);
  }, [selectedDate, dispatch]); // dont add selectDatesStore dependencies

  const handleSelectedDate = (date) => {
    const month = date.toLocaleString("default", { month: "long" });
    const day = date.toLocaleString().split("/")[1];
    const year = date.getFullYear();
    console.log(month);
    const weekendDay = date.getDay();

    console.log(new Date(date));

    const arr = [
      ...[...selectDatesStore]
        .map((e) => ({ ...e, active: false }))
        .filter((e) => {
          if (!(e.day == day && e.month == month)) {
            //statement
            return e;
          }
        }),
    ];
    arr.splice(1, 0, {
      month: month,
      day: day,
      year: year,
      date: JSON.stringify(new Date(date)),
      active: true,
    });
    dispatch(setselectDateSlice([...arr]));
    hasRendered.current = true;
    // shiftActiveFlagToSelectedDate();
    setSelectedDate({
      month: month,
      day: day,
      year: year,
      date: JSON.stringify(new Date(date)),
      active: true,
    });
    setCalenderDate(date);
    setIsDateModal(false);

    // this code will help to full left to div
    // const allDatesContainer = document.querySelector(".all-dates-container");
    // allDatesContainer.scrollLeft = allDatesContainer.scrollWidth;
  };

  const setSelectedDateByOnClickOnDatesTags = (jsonDate) => {
    console.log(jsonDate);
    setSelectedDate(jsonDate);
    hasRendered.current = true;
  };

  // useEffect(() => {
  //   const allDatesContainer = document.querySelector(".all-dates-container");
  //   allDatesContainer.scrollLeft = allDatesContainer.scrollWidth;
  // },[]);
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

  if (!bookingData.destination && !bookingData.type) {
    console.log("selectedDate, adults, children");
    return (
      <div className="w-full h-screen backdrop-blur-sm fixed z-[99999] bg-transparent flex justify-center items-center top-0">
        <div className="w-[300px] h-fit py-4 px-3 text-richblack-900">
          <h2 className="text-lg text-center">
            Please Book Any Tour For Select <br /> Dates and more options{" "}
          </h2>
          <div className="flex justify-center ">
            <Link
              to={"/all-tours"}
              className="text-xs block w-fit px-3 py-1 rounded-full border border-richblack-900 text-richblack-900 mt-4"
            >
              View All Tours
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="w-full max-w-maxWidthContent mx-auto py-3 pb-20">
        {/* Body data */}
        <div>
          {/* select date */}
          <div className="flex justify-between px-4 items-center ">
            <h1>Select Date</h1>

            {/* <div
              className="flex gap-x-2 text-sm items-center cursor-pointer"
              onClick={() => setIsDateModal(true)}
            >
              <GoCalendar className="text-[#ff612c]"></GoCalendar>
              <p className="GTE_light text-xs">More Dates</p>
            </div> */}
          </div>

          {/* Dates */}
          <div className="px-4 mt-2">
            {/* date
            <span className="text-xs text-[#ff612c] ">
              Feb 4<span className="ml-1"> </span>
            </span> */}

            <div className="py-3">
              <span className="text-xs text-[#ff612c] block">Chosen date</span>
              <span className="">Today</span>
              <h3>7 Feburary , Saturday</h3>
              {/* <button
            to={"/all-tours"}
            className="text-xs block w-fit px-3 py-1 rounded-full border border-richblack-900 text-richblack-900 mt-2"
          >
            View Some Dates
          </button> */}
            </div>
            <div className="flex justify-between items-center ">
              <span className="text-xs text-[#ff612c] block">
                Some other dates
              </span>
              {/* <div
                className="flex gap-x-2 text-sm items-center cursor-pointer"
                onClick={() => setIsDateModal(true)}
              >
                <GoCalendar className="text-[#ff612c]"></GoCalendar>
                <p className="GTE_light text-xs">More Dates</p>
              </div> */}
            </div>
            {/* Dates */}
            <div className="grid gap-0 grid-cols-3 overflow-auto mt-4 hide-scrollbar all-dates-container">
              {/* All cards */}

              {allDates.map((e, i) => {
                // const isActive =
                return (
                  <Date2Component
                    key={i}
                    e={e}
                    bookingData={bookingData}
                    setSelectedDateByOnClickOnDatesTags={
                      setSelectedDateByOnClickOnDatesTags
                    }
                    adults={adults}
                  ></Date2Component>
                );
              })}
              <div
                className={`min-w-[80px] flex flex-col justify-center text-richblack-500 text-xs border border-richblack-25 cursor-pointer `}
                onClick={() => setIsDateModal(true)}
              >
                <div className="pt-3 flex flex-col justify-center items-center">
                  <GoCalendar className="text-[#ff612c] text-base mb-1"></GoCalendar>

                  <p className="text-sm GTE_light ">More Dates</p>
                </div>
              </div>
            </div>
          </div>

          <hr className="mt-2 mb-4" />

          {/* Quantity Selection */}
          <div className="px-4 tour_quantity_selection">
            <h1 className="mb-2">Select Travellers</h1>

            <div className="flex gap-x-2 w-fit p-1 rounded-lg relative ">
              <div
                className={`relative z-10 text-sm text-richblack-800 p-2 tab_item cursor-pointer select-none ${
                  selectionType == "Indivisual" && " active "
                }`}
                onClick={() => setSelectionType("Indivisual")}
              >
                <p className="select-none GTE_light">Indivisual</p>
              </div>
              <div
                className={`relative z-10 text-sm text-richblack-800 p-2 tab_item cursor-pointer select-none ${
                  selectionType == "Group" && " active "
                }`}
                onClick={() => setSelectionType("Group")}
              >
                <p className="select-none GTE_light">Group</p>
              </div>
              <div className="absolute z-0 top-0 h-full py-1 bg_tab_switcher_parent select-none">
                <div className="text-sm h-full text-richblack-800 shadow-sm p-2 rounded-md bg-white border border-richblack-100 bg_tab_switcher"></div>
              </div>
            </div>

            <div className="py-2 ">
              <div className="b-white rounded-xl drop-shadow-2xl p-4 pt-3 border shadow-lg">
                {/* Adults */}
                {selectionType == "Indivisual" && (
                  <>
                    <div className="flex justify-between items-center pr-4 pb-3 text-sm select-none border-b">
                      <h2 className="GTE_light">Adults</h2>
                      <div className="flex gap-x-6 items-center">
                        <div
                          className="p-2 rounded-full bg-[#eee] cursor-pointer"
                          onClick={() =>
                            setAdults((prev) => (prev > 1 ? prev - 1 : 1))
                          }
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
                    <div className="flex justify-between items-center pr-4 pt-3 text-sm select-none">
                      <h2 className="GTE_light">
                        Children ( 0 - 3 year ){" "}
                        <span className="text-xs text-[#ff612c]">Free</span>
                      </h2>
                      <div className="flex gap-x-6 items-center">
                        <div
                          className="p-2 rounded-full bg-[#eee] cursor-pointer"
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
                  </>
                )}

                {/* Group */}
                {selectionType == "Group" && (
                  <div>
                    <div className="flex justify-between items-center pr-4 text-sm select-none border-b pb-3">
                      <h2 className="GTE_light">Group</h2>
                      <div className="flex gap-x-6 items-center">
                        <div
                          className="p-2 rounded-full bg-[#eee] cursor-pointer"
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
                    <span className="text-xs mt-2 block GTE_light">
                      * A group must have at least 25 adults.
                    </span>
                    <span className="text-xs block GTE_light">
                      * The price per group is AED {488 * 25} .
                    </span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Next Button  */}
        <div className="fixed z-20 bottom-0 w-full max-w-maxWidthContent bg-white py-2 px-4 flex items-center justify-center">
          <ActionButton
            onClick={() => {
              if (usersQuantity.adults > 0) {
                dispatch(
                  setBookingData({ key: "selectedDate", value: selectedDate })
                );
                dispatch(setBookingData({ key: "adults", value: adults }));
                dispatch(setBookingData({ key: "children", value: children }));
                handleNextProcess();
              } else {
                alert("Please Select At Least One Adult 😊");
              }
            }}
          >
            Next
          </ActionButton>
        </div>

        {/* select Date Modal */}
        {isDateModal && (
          <Modal
            title={"Select Date"}
            setModal={setIsDateModal}
            className="pb-14"
          >
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

const DateComponent = ({
  e,
  adults,
  bookingData,
  setSelectedDateByOnClickOnDatesTags,
}) => {
  console.log(e, adults, bookingData, setSelectedDateByOnClickOnDatesTags);
  return (
    <div
      className={`min-w-[80px] bg-[#eee] flex flex-col justify-center text-richblack-500 text-xs rounded-lg border border-richblack-25 cursor-pointer ${
        e?.active && "!bg-[#ff612c] !text-white !border-[#ff612c]"
      } `}
      onClick={() => setSelectedDateByOnClickOnDatesTags(e)}
    >
      <div className="pt-3 flex flex-col items-center">
        <h1 className="text-center GTE_light">
          <p className="text-xs GTE_light ">
            {e?.status ? e.status : e?.month}
          </p>
          <p className="text-sm pb-1">{e?.day}</p>
        </h1>
      </div>

      <div className="bg-white rounded-lg rounded-tl-none rounded-tr-none py-2 flex items-center justify-center text-richblack-400 text-xs">
        {bookingData?.currency == "doller" ? "AED " : "RS "}{" "}
        {adults * bookingData?.price}
      </div>
      {/* <span className="GTE_light text-xs">Starting</span> */}
    </div>
  );
};

// Date 2 Components-----------------------------------------------------------------------------------------------------------
const Date2Component = ({
  e,
  adults,
  bookingData,
  setSelectedDateByOnClickOnDatesTags,
}) => {
  console.log(e, adults, bookingData, setSelectedDateByOnClickOnDatesTags);
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  return (
    <div
      className={`min-w-[80px] flex flex-col justify-center text-richblack-500 text-xs border border-richblack-25 cursor-pointer ${
        e?.active && "!bg-[#ff612c] !text-white !border-[#ff612c] "
      } `}
      onClick={() => setSelectedDateByOnClickOnDatesTags(e)}
    >
      <div className="py-3 flex flex-col">
        <h1 className="pl-4 GTE_light">
          <p className="text-xs GTE_light ">
            {e?.status ? e.status : e?.month}
          </p>
          <p className="text-sm mt-1">
            {" "}
            {e?.day} {months[new Date(JSON.parse(e?.date)).getMonth()]}
          </p>
          <p className="text-xs pb-1 mt-2">
          {bookingData?.currency == "doller" ? "AED " : "RS "}{" "}
        {adults * bookingData?.price}
          </p>
        </h1>
      </div>

     
      {/* <span className="GTE_light text-xs">Starting</span> */}
    </div>
  );
};
export default Step1;
