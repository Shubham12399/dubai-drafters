import HeaderSection from "../core/home/HeaderSection";
import Navigation from "./Navigation";
import img from "../../assets/images/travel 1920x450 banner.png";
import img1 from "../../assets/images/IMG-20240205-WA0063.jpg";
import img2 from "../../assets/images/IMG-20240205-WA0067.jpg";
import img3 from "../../assets/images/IMG-20240205-WA0065.jpg";
import img4 from "../../assets/images/IMG-20240205-WA0070.jpg";
import { Collapse } from "react-collapse";
import {
  GoAlert,
  GoArrowLeft,
  GoCheck,
  GoCheckCircle,
  GoClock,
  GoLocation,
  GoPlus,
  GoProject,
  GoTag,
} from "react-icons/go";
import { Button, useTabs } from "@material-tailwind/react";
import { FaPaperPlane, FaPlane, FaPlus, FaStar } from "react-icons/fa";
import { useEffect, useState } from "react";
import CollapseComp from "./Collapse";
import checkImg from "../../assets/images/check.png";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { setBookingData } from "../../redux/slices/BookingData";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";

const TourDetails = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isDrag, setIsDrag] = useState(true);
  const { scrollY } = useScroll();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [directionMove , setDirectionMove] = useState(0);
  useMotionValueEvent(scrollY, "change", (latest) => {
    let previousValue = scrollY.getPrevious();
    if (latest > previousValue) {
      setIsDrag(false);
    } else {
      if (latest == 0 && directionMove < 0) {
        setIsDrag(true);
      }
    }
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <motion.div key={"tourDetails"} transition={{stiffness:100}} initial={{x:"100%",opacity:0}} animate={{x:0,opacity:100}}  exit={{x:"100%"}} className="pb-4 text-richblue-700">
      <Navigation></Navigation>
      {/* <motion.div className="fixed z-0 w-full h-screen left-0 top-0 bg-[rgba(0,0,0,0.1)]"></motion.div> */}

      <motion.div
        // drag={"y"}
        // whileDrag={{
        //   scale: 1,
        //   marginInline: "auto",
        //   borderRadius: "1rem",
        //   transition: {
        //     duration: 0.3,
        //   },
        // }}
        // dragElastic={0.2}
        // dragTransition={{ bounceStiffness: 600, bounceDamping: 80 }}
        // // dragDirectionLock={{
        // //   screenY:true
        // // }}
        // onDragStart={(e) => {
        //   console.log(e);
        //   setDirectionMove(e.movementY);
        //   if (e.movementY < 0) {
        //     setIsDrag(false);
        //   }
        // }}
        // dragListener={isDrag}
        // dragConstraints={{
        //   top: 0,
        //   bottom: "0px",
        // }}
        // dragSnapToOrigin={{
        //   y: true,
        // }}
        // initial={{
        //   borderRadius: "1rem",
        //   y: 300,
        //   // height:"400px",
        // }}
        // animate={{
        //   borderRadius: 0,
        //   y: 0,
        //   // height:"100vh"
        // }}
        // transition={{ duration: 0.8, delay: 0.2 }}
        className="bg-white relative z-50 h-auto overflow-hidden"
      >
        <div className="max-h-auto min-h-fit">
          <div className="relative h-[170px] w-full md:h-[60vh] select-none">
            <img
              loading="lazy"
              src={img}
              alt="travel 1920x450 banner.png"
              className="h-full object-cover object-right"
            />
            <div className="absolute top-2 left-2 text-xl w-fit cursor-pointer p-2 text-white GTE_light" onClick={()=>window.history.back()}>
              <GoArrowLeft></GoArrowLeft>
            </div>
            <div className="w-full px-8 relative -mt-4">
              <button className="flex-grow w-full normal-case py-2 rounded-md px-2 text-xs sm:text-lg text-white bg-[#ff612c] hover:border-[#f77031] GTE_light">
                Book Now
              </button>
            </div>
          </div>
          {/* <div className= "relative z-[999] flex gap-x-2 items-center px-4 max-w-maxWidthContent mx-auto -mt-0 md:-mt-5">
         
         <button size="sm" className="flex-grow normal-case py-[.4rem] rounded-md w-[70px] px-2 text-sm sm:text-lg border-[#ff621c] text-white  border-[#ff612c] font-normal hover:border-[#f77031]">Book Now</button>

         </div> */}

          {/* Description */}
          <div className="max-w-maxWidthContent mx-auto px-4 my-4 pt-4">
            <div>
              {/* <FaPlane className="min-w-fit mt-1"></FaPlane> */}
              {/* <span className="text-[11px] px-2 py-1 bg-[#ff641c27] text-[#ff621c] rounded-xl">
            Adventureus Tour
          </span> */}
              <h1 className="GTE_medium text-lg md:text-xl max-w-[80%] sm:max-w-[300px] md:max-w-[600px] text-richblue-700">
                Desert Safari Abu Dhabi
              </h1>
            </div>
            <div className="mt-3">
              <h3>AED 390</h3>

              <div className="flex justify-between items-center  mb-4">
                {/* Stars */}
                <div className="flex sm:mt-0 gap-x-1 items-center ">
                  <FaStar className="text-yellow-100 text-[14px]"></FaStar>
                  <FaStar className="text-yellow-100 text-[14px]"></FaStar>
                  <FaStar className="text-yellow-100 text-[14px]"></FaStar>
                  <FaStar className="text-yellow-100 text-[14px]"></FaStar>
                  <FaStar className="text-yellow-100 text-[14px]"></FaStar>
                </div>
                {/* Type and Destintion  */}
                <div className="flex gap-x-1 items-center">
                  {/* <span className="text-[13px] text-richblack-400 !GTE_light mr-4 py-1 rounded-md">
              <span className="GTE_light text-richblack-600">Type - </span>{" "}
              Adventure
            </span>
            <span className="text-[13px] text-richblack-400 !GTE_light py-1 rounded-md">
              <span className="GTE_light text-richblack-600">
                Destination -{" "}
              </span>{" "}
              Dubai
            </span> */}
                  <span className="text-sm text-richblue-600 px-2 py-1 flex gap-x-2 items-center">
                    <GoLocation></GoLocation>
                    Dubai
                  </span>
                  <span className="text-sm text-richblue-600 px-2 py-1 flex gap-x-2 items-center">
                    <GoTag></GoTag>
                    Adventure
                  </span>
                </div>
              </div>

              <div>
                <p>Visitors</p>
                <div className="mt-2 flex gap-x-0 ">
                  <img
                    loading="lazy"
                    src={img2}
                    alt=""
                    className="w-[50px] relative z-[4] rounded-full aspect-square object-cover bg-white shadow-sm p-[2px]"
                  />
                  <img
                    loading="lazy"
                    src={img1}
                    alt=""
                    className="w-[50px] relative  z-[3] -ml-3 rounded-full aspect-square object-cover bg-white shadow-sm p-[2px]"
                  />
                  <img
                    loading="lazy"
                    src={img3}
                    alt=""
                    className="w-[50px] relative z-[2]  -ml-3 rounded-full aspect-square object-cover bg-white shadow-sm p-[2px]"
                  />
                  <img
                    loading="lazy"
                    src={img4}
                    alt=""
                    className="w-[50px] relative z-[1] -ml-3 rounded-full aspect-square object-cover bg-white shadow-sm p-[2px]"
                  />
                  <img
                    loading="lazy"
                    src={img}
                    alt=""
                    className="w-[50px] relative z-[0]  -ml-3 rounded-full aspect-square object-cover bg-white shadow-sm p-[2px]"
                  />
                </div>
              </div>
            </div>

            <div className="pt-4">
              <p>Description</p>
              <p className="GTE_light text-sm pr-4 mt-2 text-richblue-800">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque
                vitae possimus porro nisi, id quam. Totam itaque fugit dolores
                veniam ipsum modi, sapiente quae, delectus odit impedit velit
                alias? Facilis.
              </p>
            </div>
          </div>

          {/* Lists  */}
          <div className="max-w-maxWidthContent mx-auto px-4">
            <div className="flex items-center rounded-lg py-2 pr-3 border-[#ff641c84]">
              <div className="text-richblack-900 p-3 rounded-xl bg-white flex justify-center items-center shadow-md mr-2">
                <GoClock></GoClock>
              </div>
              <div className="GTE_light pl-2">
                <h4 className="text-[13px] GTE_regular text-richblue-800">
                  Operating Hours
                </h4>
                <p className="text-xs text-richblack-400 GTE_light">
                  Activity will start at 02:30 PM (Approx){" "}
                </p>
              </div>
            </div>
            <div className="flex items-center rounded-lg py-2 pr-3 border-[#ff641c84]">
              <div className="text-richblack-900 p-3 rounded-xl bg-white flex justify-center items-center shadow-md mr-2">
                <GoAlert></GoAlert>
              </div>
              <div className="GTE_light pl-2">
                <h4 className="text-[13px] GTE_regular text-richblue-800">
                  Instant Confirmations
                </h4>
                <p className="text-xs text-richblack-400 GTE_light">
                  Activity will start at 02:30 PM (Approx){" "}
                </p>
              </div>
            </div>
            <div className="flex items-center rounded-lg py-2 pr-3 border-[#ff641c84]">
              <div className="text-richblack-900 p-3 rounded-xl bg-white flex justify-center items-center shadow-md mr-2">
                <GoCheckCircle></GoCheckCircle>
              </div>
              <div className="GTE_light pl-2">
                <h4 className="text-[13px] GTE_regular text-richblue-800">
                  Free Cancellation 48 hours prior{" "}
                </h4>
                <p className="text-xs text-richblack-400 GTE_light">
                  Activity will start at 02:30 PM (Approx){" "}
                </p>
              </div>
            </div>
          </div>

          {/* Collapse Section */}
          <div className="max-w-maxWidthContent bg-white mx-auto mt-6 flex flex-col ">
            <CollapseComp
              isCollapsed={true}
              title="Overview"
              className={"px-4"}
            >
              <div className="pt-2 pb-3">
                <h1>Dubai Safari Abu Dhabi </h1>
                <p className="text-sm leading-relaxed mt-2">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
                  laudantium aliquam dolorum cumque error, similique voluptate
                  nisi consequuntur ipsam suscipit fugiat expedita nobis! Lorem
                  ipsum, dolor sit amet consectetur adipisicing elit.{" "}
                  <span className="text-caribbeangreen-300 text-xs">
                    ...more
                  </span>
                </p>

                <ul className=" text-sm mt-4">
                  <li className="px-2 py-2 flex gap-x-4 items-start ">
                    <div className="w-[25px] aspect-square rounded-full flex items-center justify-center bg-green-50 mt-1">
                      <GoCheck className="text-caribbeangreen-300"></GoCheck>
                    </div>
                    <p className="GTE_regular text-richblack-600">
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    </p>
                  </li>
                  <li className="px-2 py-2 flex gap-x-4 items-start ">
                    <div className="w-[25px] aspect-square rounded-full flex items-center justify-center bg-green-50 mt-1">
                      <GoCheck className="text-caribbeangreen-300"></GoCheck>
                    </div>
                    <p className="GTE_regular text-richblack-600">
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    </p>
                  </li>
                  <li className="px-2 py-2 flex gap-x-4 items-start ">
                    <div className="w-[25px] aspect-square rounded-full flex items-center justify-center bg-green-50 mt-1">
                      <GoCheck className="text-caribbeangreen-300"></GoCheck>
                    </div>
                    <p className="GTE_regular text-richblack-600">
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    </p>
                  </li>
                  <li className="px-2 py-2 flex gap-x-4 items-start ">
                    <div className="w-[25px] aspect-square rounded-full flex items-center justify-center bg-green-50 mt-1">
                      <GoCheck className="text-caribbeangreen-300"></GoCheck>
                    </div>
                    <p className="GTE_regular text-richblack-600">
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    </p>
                  </li>
                  <li className="px-2 py-2 flex gap-x-4 items-start ">
                    <div className="w-[25px] aspect-square rounded-full flex items-center justify-center bg-green-50 mt-1">
                      <GoCheck className="text-caribbeangreen-300"></GoCheck>
                    </div>
                    <p className="GTE_regular text-richblack-600">
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    </p>
                  </li>
                  <li className="px-2 py-2 flex gap-x-4 items-start ">
                    <div className="w-[25px] aspect-square rounded-full flex items-center justify-center bg-green-50 mt-1">
                      <GoCheck className="text-caribbeangreen-300"></GoCheck>
                    </div>
                    <p className="GTE_regular text-richblack-600">
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    </p>
                  </li>
                </ul>
              </div>
            </CollapseComp>
            <CollapseComp title="Itinerary" className={"px-4"}>
              <div>
                <div className="py-2 ">
                  <h3 className="text-xs text-[#ff612c]">Destination</h3>
                  <h2 className="mt-1 text-sm"> Dubai Safari Full Day Tour</h2>
                </div>

                <hr />
              </div>
            </CollapseComp>
            <CollapseComp title="Inclusions" className={"px-4"}>
              This is Collapsible Box
            </CollapseComp>
          </div>

          {/* Last Div  */}
          {
            <div className="fixed bottom-0 w-full bg-white py-3 z-[999] flex gap-x-2 items-stretch px-4 max-w-maxContent mx-auto -mt-0 md:-mt-5 left-1/2 -translate-x-1/2 shadow-[0_0_20px_rgba(0,0,0,0.2)] GTE_light">
              <button
                className="flex-grow normal-case py-2 rounded-md px-2 text-xs sm:text-lg text-white bg-[#ff612c] hover:border-[#f77031] GTE_light"
                onClick={() => {
                  dispatch(
                    setBookingData({ key: "currency", value: "doller" })
                  );
                  dispatch(setBookingData({ key: "price", value: 488 }));
                  dispatch(
                    setBookingData({
                      key: "destination",
                      value: "Dubai Safari",
                    })
                  );
                  dispatch(setBookingData({ key: "type", value: "Adventure" }));
                  navigate("/booking");
                }}
              >
                Book Now
              </button>
              <button className="normal-case py-2 rounded-md w-fit px-5 text-xs sm:text-lg text-[#ff621c]  border border-[#ff612c] GTE_light">
                Add To Cart
              </button>
            </div>
          }
        </div>
      </motion.div>
    </motion.div>
  );
};

export default TourDetails;
