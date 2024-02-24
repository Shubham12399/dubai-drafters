import { useDispatch, useSelector } from "react-redux";
import { setBookingProcess } from "../../redux/slices/bookingProcessSlice";
import ActionButton from "../../components/common/ActionButton";
import { useEffect, useState } from "react";

const Step2 = () => {
  const dispatch = useDispatch();
  const handleNextProcess = () => {
    dispatch(setBookingProcess(3));
  };
  const [tourDetails, setTourDetails] = useState({});
  const selectDate = useSelector((store) => store.selectDateSlice);

  useEffect(() => {
    console.log(selectDate.filter((e) => e.active));
    setTourDetails(selectDate.filter((e) => e.active)[0]);
  }, [selectDate]);

  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  var date;
  if (tourDetails?.date !== undefined) {
    date = new Date(JSON.parse(JSON.parse(tourDetails?.date))).toLocaleString(
      "en-US",
      options
    );
    // console.log(JSON.parse(JSON.parse(tourDetails?.date)));
    // console.log(date);
  }

  return (
    <>
      <div className="max-w-maxWidthContent mx-auto py-4">
        <div className="px-4 flex justify-between items-center">
          <h1>Select Tour Options</h1>
          <p className="text-xs text-richblack-300">
            {/* {tourDetails.status == "Today"
              ? new Date().toLocaleDateString()
              : tourDetails.day +
                "  " +
                tourDetails.month +
                "  " +
                tourDetails.year} */}
            {date}
          </p>
        </div>

        <div className="flex gap-x-3 items-center px-4 mt-2">
          <label
            htmlFor="sharing-transfer"
            className="flex gap-x-2 items-start bg-white rounded-lg shadow-lg w-fit p-3 pb-2 cursor-pointer"
          >
            <input
              type="radio"
              id="sharing-transfer"
              name="tour-tabs"
              checked
              className="mt-2 mr-1"
            />
            <p className="text-sm leading-tight">
              Sharing <br /> Transfer
            </p>
          </label>
          <label
            htmlFor="private-transfer"
            className="flex gap-x-2 items-start bg-white rounded-lg shadow-lg w-fit p-3 pb-2 cursor-pointer"
          >
            <input
              type="radio"
              id="private-transfer"
              name="tour-tabs"
              className="mt-2 mr-1"
            />
            <p className="text-sm leading-tight">
              Private
              <br /> Transfer
            </p>
          </label>
        </div>

        <div className="absolute bottom-0 w-full max-w-maxWidthContent bg-white py-2 px-4 flex items-center justify-center">
          <ActionButton onClick={handleNextProcess}>Next</ActionButton>
        </div>
      </div>
    </>
  );
};

export default Step2;
