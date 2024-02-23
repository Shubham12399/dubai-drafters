import { useDispatch } from "react-redux";
import { setBookingProcess } from "../../redux/slices/bookingProcessSlice";
import ActionButton from "../../components/common/ActionButton";

const Step2 = () => {
  const dispatch = useDispatch();
  const handleNextProcess = () => {
    dispatch(setBookingProcess(3));
  };

  return (
    <>
      <h1>Step 2</h1>
      <div className="absolute bottom-0 w-full bg-white py-2 px-4 flex items-center justify-center">
          <ActionButton onClick={handleNextProcess}>Next</ActionButton>
        </div>
    </>
  );
};

export default Step2;
