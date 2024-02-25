import { useDispatch, useSelector } from "react-redux";
import { setBookingProcess } from "../../redux/slices/bookingProcessSlice";
import ActionButton from "../../components/common/ActionButton";
import { useCallback, useEffect, useState } from "react";
import { format } from "date-fns";
import "../../App.css";
import { GoX } from "react-icons/go";
import { Button } from "@material-tailwind/react";
import { addItem, updateAllItem } from "../../redux/slices/Cart";
import { useNavigate } from "react-router";
import { v4 as uuidv4 } from 'uuid';
const Step2 = () => {
  const dispatch = useDispatch();
  const handleNextProcess = () => {
    dispatch(setBookingProcess(3));
  };
  const [tourDetails, setTourDetails] = useState({});
  const selectDate = useSelector((store) => store.selectDateSlice);
  const bookingData = useSelector((store) => store.bookingData);
  const [radioValue, setRadioValue] = useState("sharing-transfer");
  const [totalPrice, setTotalPrice] = useState(0);
  const cart = useSelector((store) => store.cartSlice);
  console.log(bookingData);
  const navigate = useNavigate();
  useEffect(() => {
    console.log(selectDate.filter((e) => e.active));
    setTourDetails(selectDate.filter((e) => e.active)[0]);
  }, [selectDate]);

  // const options = {
  //   weekday: "long",
  //   year: "numeric",
  //   month: "long",
  //   day: "numeric",
  // };

  const handleAddToCartItem = () => {
    let item = {
      id:uuidv4(),
      ...bookingData,
      totalPrice: bookingData?.adults * bookingData?.price,
      transferType: radioValue,
    };
    if(bookingData.id){
      const filteredCart = [...cart.items.filter(e => e.id != bookingData?.id)];
      localStorage.setItem("cartItems" , JSON.stringify([...filteredCart,item]));
      dispatch(updateAllItem(filteredCart));
    }else{
      localStorage.setItem("cartItems" , JSON.stringify([...cart.items , item ]));
    }
    dispatch(addItem(item));
   
    navigate("/cart");
  };

  var date;
  if (tourDetails?.date !== undefined) {
    date = format(new Date(JSON.parse(tourDetails?.date)), "dd/MM/yyyy");

    // date = new Date(JSON.parse(tourDetails?.date)).toLocaleDateString(
    //   "en-US",
    //   options
    // );
  }

  return (
    <>
      <div className="max-w-maxWidthContent mx-auto py-4">
        <div className="px-4 flex justify-between items-center">
          <h1>Select Tour Options</h1>
          <span></span>
          <p className="text-xs text-richblack-300">Date : {date}</p>
        </div>

        {/* Tabs  */}
        <div className="flex gap-x-3 items-center px-4 mt-3">
          <Tab
            name={
              <>
                Sharing <br />
                Transfers
              </>
            }
            labelName={"sharing-transfer"}
            checked={true}
            radioValue={radioValue}
            setRadioValue={setRadioValue}
          ></Tab>
          {/* <label
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
          </label> */}
          <Tab
            name={
              <>
                Private <br />
                Transfers
              </>
            }
            radioValue={radioValue}
            labelName={"private-transfer"}
            setRadioValue={setRadioValue}
          ></Tab>
        </div>

        {/* Details */}
        <div className="p-4">
          <div className="rounded-lg bg-white shadow-md px-3 py-4 border">
            <h3>Desert safari</h3>

            <span className="text-sm text-[#ff612c] block mt-2">
              More Details
            </span>

            <div>
              <section className="grid grid-cols-3 justify-between items-center text-[13px] mt-4 ">
                <p className="GTE_light">Adult</p>
                <p className="flex items-center w-[60px] min-w-fit GTE_light text-[13px]">
                  {bookingData?.adults}
                  <GoX></GoX> {bookingData?.price}
                </p>
                <p className="text-right GTE_light">
                  {bookingData?.currency == "doller" ? "AED " : "RS "}{" "}
                  {bookingData?.adults * bookingData?.price}
                </p>
              </section>
              {bookingData?.children !== 0 && (
                <section className="grid grid-cols-3 justify-between items-center text-[13px] mt-3">
                  <p className="GTE_light">Children</p>
                  <p className="flex justify-between items-center w-[60px] min-w-fit GTE_light">
                    {bookingData?.children}
                  </p>
                  <p className="text-right GTE_light"> Free </p>
                </section>
              )}

              <hr className="mt-3" />
              <div>
                <section className="grid grid-cols-2 justify-between items-center text-[13px] my-3">
                  <p className="GTE_light">Total</p>
                  <p className="text-right GTE_light">
                    {bookingData?.currency == "doller" ? "AED " : "RS "}{" "}
                    {bookingData?.adults * bookingData?.price}{" "}
                  </p>
                </section>
                <div className="flex justify-end">
                  <ActionButton
                    className={"!w-fit text-xs py-2 px-4 rounded-md"}
                    onClick={() => handleAddToCartItem()}
                  >
                    Add To Cart
                  </ActionButton>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Next Button
        <div className="absolute bottom-0 w-full max-w-maxWidthContent bg-white py-2 px-4 flex items-center justify-center">
          <ActionButton onClick={handleNextProcess}>Next</ActionButton>
        </div> */}
      </div>
    </>
  );
};

// Tabs Section
const Tab = ({ name, labelName, radioValue, setRadioValue }) => {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    setIsActive(labelName === radioValue);
  }, [labelName, radioValue]);

  const handleOnchange = (value) => {
    setRadioValue(value);
  };
  // "sharing-transfer"
  return (
    <Button
      className={`flex gap-x-2 p-0  items-start border  bg-white rounded-lg shadow-lg w-fit cursor-pointer text-richblack-900 normal-case font-thin`}
    >
      <label
        htmlFor={`${labelName}`}
        className={`flex gap-x-2 items-start border border-transparent bg-white rounded-lg  w-fit p-3 pb-2 cursor-pointer ${
          isActive && " !border-[#ff612c] "
        }`}
      >
        <input
          type="radio"
          id={`${labelName}`}
          name="tour-tabs"
          value={labelName}
          onChange={() => handleOnchange(labelName)}
          checked={labelName === radioValue}
          className="mt-2 mr-1 !text-[#ff612c] accent-[#ff612c]"
        />
        <p
          className={`text-sm GTE_light leading-tight ${
            isActive && "text-[#ff612c]"
          }`}
        >
          {name}
        </p>
      </label>
    </Button>
  );
};

export default Step2;
