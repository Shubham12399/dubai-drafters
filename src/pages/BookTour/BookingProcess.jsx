import { useDispatch, useSelector } from "react-redux";
import Step1 from "./Step1";
import Step2 from "./Step2";
import FinalStep from "./FinalStep";
import { setBookingProcess } from "../../redux/slices/bookingProcessSlice";
import Navigation from "../../components/common/Navigation";
import BackArrow from "../../components/common/BackArrow";

const BookingProcess = () => {
  const bookingProcess = useSelector((store) => store.bookingProcessSlice);
  const dispatch = useDispatch();
console.log(bookingProcess);
  const handleBack = () => {
    if (bookingProcess > 1) {
      dispatch(setBookingProcess(bookingProcess - 1));
      return;
    }
    window.history.back();
  };

  return (
    <>
    <Navigation></Navigation>
      <div>
        <div className="bg-red-50 py-2">
          <div className="mx-auto w-full max-w-maxWidthContent flex justify-start items-center text-richblack-900 px-2">
            <BackArrow handlerFn={handleBack} className={"ml-3 mr-3"}></BackArrow>
            <h2 className="GTE_light text-sm">Desert Safari Abu Dhabi</h2>
          </div>
        </div>
        <div>
          {bookingProcess && bookingProcess == 1 && <Step1></Step1>}
          {bookingProcess && bookingProcess == 2 && <Step2></Step2>}
          {bookingProcess && bookingProcess == 3 && <FinalStep></FinalStep>}
        </div>
      </div>
    </>
  );
};

export default BookingProcess;
