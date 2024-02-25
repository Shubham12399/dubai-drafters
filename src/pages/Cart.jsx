import { useDispatch, useSelector } from "react-redux";
import BottomNav from "../components/common/BottomNav";
import Navigation from "../components/common/Navigation";
import { Link, useNavigate } from "react-router-dom";
import img1 from "../assets/images/IMG-20240205-WA0070.jpg";
import { FaStar } from "react-icons/fa";
import { rating } from "@material-tailwind/react";
import { useEffect, useState } from "react";
import { GoPencil, GoTrash } from "react-icons/go";
import ActionButton from "../components/common/ActionButton";
import { setBookingData } from "../redux/slices/BookingData";
import { format } from "date-fns";
import { setBookingProcess } from "../redux/slices/bookingProcessSlice";
import BackArrow from "../components/common/BackArrow";
import { updateAllItem } from "../redux/slices/Cart";

// ************************************************** Cart **********************************************************

const Cart = () => {
  const cartItems = useSelector((store) => store.cartSlice);
  const [bookingItem, setBookingItem] = useState({});
  //   console.log(cartItems);

  const [totalCartItemPrice, setTotalCartItemPrice] = useState(0);

  useEffect(() => {
    setBookingItem(cartItems.items[cartItems.items.length - 1]);
  }, [cartItems]);

  useEffect(() => {
    if (cartItems?.items.length !== 0) {
      const totalPrice = cartItems?.items.reduce(
        (total, acc) => total + acc.totalPrice,
        0
      );
      setTotalCartItemPrice(totalPrice);
    }
  }, [cartItems]);

  return (
    <>
      <Navigation></Navigation>
      <div className="w-full max-w-maxWidthContent mx-auto mb-28">
        <div className="mt-3 px-3 pt-3 flex gap-x-2 items-center">
          <BackArrow></BackArrow>
          <h1>Checkout Tours</h1>
        </div>
        <div className=" mt-4 px-3 text-[13px]">Total Cart Items : <span>{cartItems.items.length}</span></div>

        <div className="mt-2">
          {cartItems.items.length == 0 && (
            <div>
              <h3 className="text-richblack-100 text-center mt-4">
                No Any Tour Items
              </h3>
              <div className="flex justify-center ">
                <Link
                  to={"/all-tours"}
                  className="text-xs block w-fit px-3 rounded-full border border-richblack-900-richblackborder-richblack-50black-900 mt-4"
                >
                  Select Tours
                </Link>
              </div>
            </div>
          )}
          {cartItems.items.length !== 0 && (
            <div className="">
              <div>{/* <p className="text-[#ff612c]">Cart Items</p> */}</div>
              <div className="mt-2">
                {cartItems.items.map((item, index) => {
                  return (
                    <CartItem
                      key={index}
                      itemObj={{ ...item }}
                      index={index}
                      setBookingItem={setBookingItem}
                      cartItems={cartItems?.items}
                    ></CartItem>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Bottom Checkout button  */}
      {cartItems.items.length > 1 && (
        <div
          className="bg-[#ff612c] rounded-none rounded-bl-none rounded-br-none px-4 pb-4 fixed bottom-0 w-full border gap-x-2 items-start"
          style={{
            boxShadow: "0 0 8px rgba(0,0,0,0.2)",
          }}
        >
          <div className="px-4 -mt-9 w-full">
            <ActionButton
              className={
                "w-full text-sm py-3 px-3 rounded-lg mt-4 bg-red-200 border-none"
              }
            >
              Checkout All
            </ActionButton>
          </div>
          <div className="pt-2 flex justify-between items-center px-4 text-white">
            <h3 className="leading-tight GTE_light text-base">Total Payable</h3>
            <p className="text-base mt-1 GTE_light">AED {totalCartItemPrice}</p>
          </div>
        </div>
      )}
      {/* {cartItems.items.length !== 0 && (
        <div
          className="bg-white rounded-lg p-4 fixed bottom-0 w-full border flex gap-x-2 items-start"
          style={{
            boxShadow: "0 0 8px rgba(0,0,0,0.2)",
          }}
        >
          <img
            src={img1}
            alt=""
            className="w-[100px] h-[50px] object-cover rounded-md"
          />
          <div className="ml-1">
            <h3 className="leading-tight text-sm">
              {bookingItem?.destination}
            </h3>
            <p className="text-xs mt-1">AED : {bookingItem?.totalPrice}</p>
          </div>
          <div className="flex justify-end px-4">
            <ActionButton className={"w-fit text-xs py-1 px-3 rounded-md mt-4"}>
              Book Now
            </ActionButton>
          </div>
        </div>
      )} */}

      {/* <BottomNav></BottomNav> */}
    </>
  );
};

// ************************************************** Cart Item **********************************************************

const CartItem = ({ itemObj, index, setBookingItem, cartItems }) => {
  const [cartAdults, setCartAdults] = useState(0);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  var {
    currency,
    price,
    destination,
    type,
    totalPrice,
    transferType,
    selectedDate,
    adults,
    children,
  } = itemObj;

  useEffect(() => {
    setCartAdults(adults);
  }, [adults]);

  const editBookingData = () => {
    dispatch(setBookingProcess(1));
    Object.entries(itemObj).forEach(([key, value]) => {
      dispatch(setBookingData({ key: key, value: value }));
    });
    dispatch(setBookingData({ key: "active", value: true }));

    navigate("/booking");
  };

  const deleteBookingData = () => {
    // localStorage
    localStorage.setItem("cartItems" , JSON.stringify(cartItems.filter((e) => e.id !== itemObj?.id)));
    dispatch(updateAllItem(cartItems.filter((e) => e.id !== itemObj?.id)));
  };

  var [itemDate, setItemDate] = useState();

  useEffect(() => {
    if (selectedDate?.date !== undefined) {
      const fomateddate = format(
        new Date(JSON.parse(selectedDate?.date)),
        "dd/MM/yyyy"
      );
      setItemDate(fomateddate);
    }
  }, []);

  console.log(itemObj);
  return (
    <>
      <div
        className={` grid grid-cols-12 relative px-1 pb-2 pt-4 hover:bg-[rgba(0,0,0,0.0)] shadow hover:shadow-md transition-all mb-4 mx-3 rounded-lg border hover:border-[#ff612c] ${
          // index == 0 && " !bg-[rgba(0,0,0,0.05)] " ""
          ""
        } cursor-pointer`}
        onClick={(e) => {
          e.stopPropagation();
          setBookingItem(itemObj);
        }}
      >
        <div className="absolute w-fit right-6 top-7 flex gap-x-4 items-center">
          <GoTrash
            className="text-sm hover:text-[#ff612c] cursor-pointer"
            onClick={() => deleteBookingData()}
          ></GoTrash>
          <GoPencil
            className="text-sm hover:text-[#ff612c] cursor-pointer"
            onClick={() => editBookingData()}
          ></GoPencil>
        </div>
        {/* <div className=" col-span-3 flex-grow">
          <img
            src={img1}
            alt=""
            className="w-[100px] h-[70px] mt-1 object-cover rounded-lg"
          />
        </div> */}
        <div className="col-span-9 pl-3">
          <span className="text-[9px] px-2 py-[2px] bg-[#ff612c] text-white rounded-lg">
            Adventure
          </span>
          <h2 className="text-lg mt-1">{destination}</h2>

          <div className="flex gap-x-[2px] mt-1">
            {[...new Array(5)].map((e, i) => (
              <FaStar key={i} className="text-yellow-100 text-[8px]"></FaStar>
            ))}
          </div>

          <p className="text-xs leading-tight !font-sans hidden">
            {" "}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
            eaque id reiciendis sed deleniti deserunt expedita sunt aut
            distinctio odit!
          </p>
        </div>
        <div className="col-span-12 grid grid-cols-12 items-center my-2">
          <div className="text-[13px] flex gap-x-4 border-r py-0 border-richblack-50 col-span-6 pl-3">
            <p>Adults : {adults}</p>
            <p>Children : {children}</p>
          </div>
          <div className="text-[13px] pl-4 col-span-6 py-1 border-richblack-50">
            <p>Travel Date : {itemDate}</p>
          </div>

          <div className="col-span-12 flex items-center gap-x-2 px-3">
            <p className="text-[13px]">Transfer Type : </p>
            <p className="text-sm GTE_regular text-richblack-400">
              {transferType}
            </p>
          </div>
          <div className="col-span-12 flex items-center gap-x-2 px-3">
            <p className="text-[13px]">Time : </p>
            <p className="text-sm GTE_regular text-richblack-400">{"16:00"}</p>
          </div>
          <div className="col-span-12 flex items-center gap-x-2 px-3">
            <p className="text-[13px]">Duration : </p>
            <p className="text-sm GTE_regular text-richblack-400">
              {"5 hours (Approx)"}
            </p>
          </div>
          <div className="col-span-12 flex items-start gap-x-2 px-3">
            <p className="text-[13px] min-w-fit">Transfer Timing : </p>
            <p className="text-sm GTE_regular text-richblack-400">
              Pick will done between 02:30PM to 03:00PM
            </p>
          </div>
          <div className="col-span-12 flex items-center gap-x-2 px-3">
            <p className="text-[13px]">Total Price : </p>
            <p className="text-sm GTE_regular text-richblack-400">
              AED {totalPrice}
            </p>
          </div>

          {/* <div className="text-[13px] pl-4 col-span-3 ">
            <p className="normal-case">{transferType}</p>
          </div> */}
          <div className="col-span-12 flex justify-end px-4">
            <ActionButton
              className={"w-fit text-[13px] py-[7px] px-3 rounded-md mt-4"}
            >
              Book Now
            </ActionButton>
          </div>
        </div>
        {/* <hr className="col-span-12 px-8"/> */}
      </div>
      {/* <hr /> */}
    </>
  );
};
// const CartItem = ({ itemObj, index, setBookingItem }) => {
//   const [cartAdults, setCartAdults] = useState(0);
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   var {
//     currency,
//     price,
//     destination,
//     type,
//     totalPrice,
//     transferType,
//     selectedDate,
//     adults,
//     children,
//   } = itemObj;

//   useEffect(() => {
//     setCartAdults(adults);
//   }, [adults]);

//   const handleBookingData = () => {
//     dispatch(setBookingProcess(1));
//     Object.entries(itemObj).forEach(([key, value]) => {
//       dispatch(setBookingData({ key: key, value: value }));
//     });
//     dispatch(setBookingData({ key: "active", value: true }));

//     navigate("/booking");
//   };

//   var [itemDate, setItemDate] = useState();

//   useEffect(() => {
//     if (selectedDate?.date !== undefined) {
//       const fomateddate = format(
//         new Date(JSON.parse(selectedDate?.date)),
//         "dd/MM/yyyy"
//       );
//       setItemDate(fomateddate);
//     }
//   }, []);

//   console.log(selectedDate);
//   return (
//     <>
//       <div
//         className={` grid grid-cols-12 relative px-3 pb-4 pt-2 ${
//           index == 0 && " !bg-[rgba(0,0,0,0.05)] "
//         } cursor-pointer`}
//         onClick={(e) => {
//           e.stopPropagation();
//           setBookingItem(itemObj);
//         }}
//       >
//         <div
//           className="absolute w-fit right-4 top-3"
//           onClick={() => handleBookingData()}
//         >
//           <GoPencil className="text-sm hover:text-[#ff612c] cursor-pointer"></GoPencil>
//         </div>
//         <div className=" col-span-3 flex-grow">
//           <img
//             src={img1}
//             alt=""
//             className="w-[100px] h-[70px] mt-1 object-cover rounded-lg"
//           />
//         </div>
//         <div className="col-span-9 pl-3">
//           <span className="text-[9px] px-2 py-[2px] bg-[#ff612c] text-white rounded-lg">
//             Adventure
//           </span>
//           <h2 className="text-sm">{destination}</h2>

//           <p className="text-[13px] GTE_light">
//             Total Price : {totalPrice} ( each Adult {price} )
//           </p>
//           <div className="flex gap-x-[2px] mt-1">
//             {[...new Array(5)].map((e, i) => (
//               <FaStar key={i} className="text-yellow-100 text-[8px]"></FaStar>
//             ))}
//           </div>

//           <p className="text-[13px] leading-tight !font-sans hidden">
//             {" "}
//             Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
//             eaque id reiciendis sed deleniti deserunt expedita sunt aut
//             distinctio odit!
//           </p>
//         </div>
//         <div className="col-span-12 grid grid-cols-12 pt-2 items-center">
//           <div className="text-xs flex gap-x-3 border-r py-1 border-richblack-50 col-span-5 pl-1">
//             <p>Adults : {adults}</p>
//             <p>Children : {children}</p>
//           </div>
//           <div className="text-xs pl-2 col-span-4 border-r py-1 border-richblack-50">
//             <p>Date : {itemDate}</p>
//           </div>
//           <div className="text-xs pl-4 col-span-3 ">
//             <p className="normal-case">{transferType}</p>
//           </div>
//         </div>
//         {/* <div className="col-span-12 flex justify-end px-4">
//       <ActionButton className={"w-fit text-xs py-1 px-3 rounded-md mt-4"}>Book Now</ActionButton>
//       </div> */}
//       </div>
//       <hr />
//     </>
//   );
// };

export default Cart;
