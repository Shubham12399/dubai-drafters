import { useState } from "react";
import {
  FaCity,
  FaFileAlt,
  FaHotel,
  FaPlane,
  FaUser,
} from "react-icons/fa";
// import { GrHomeRounded } from "react-icons/gr";
// import { PiAirplaneTilt } from "react-icons/pi";
// import Modal from "../Modal";
import { Link } from "react-router-dom";
// import { AnimatePresence, motion } from "framer-motion";
// import { GoX } from "react-icons/go";
// import planer1 from "../../assets/icons/planner2.jpg";
// import hotelIcon from "../../assets/icons/hotel.jpg";
import Home from "../../assets/icons/home.svg";
import TourIcon from "../../assets/icons/plane-line.svg";
import HotelsIcon from "../../assets/icons/hotel-line.svg";
import PacakgesIcon from "../../assets/icons/package.svg";
import CalenderIcon from "../../assets/icons/calendar-line.svg";
const BottomNav = () => {
  // const [openService, setOpenServices] = useState(false);

  return (
//    <div
//      className="md:hidden flex gap-x-0 items-center bg-white fixed bottom-0 z-[99999] shadow-md rounded-tl-md rounded-tr justify-center w-full "
//      style={{
//        boxShadow: "0 0 20px rgba(0,0,0,0.1)",
//      }}
//    >
//      <Link
//        to={"/"}
//        className="normal-case text-[10px] bg-white text-richblack-700 cursor-pointer flex justify-center items-center flex-col px-3 w-1/4 select-none py-1 transition-all group border hover:border-t-2 border-t-[#ff621c] relative z-50"
//      >
//        <GrHomeRounded className="w-[20px] my-1 group-hover:text-[#ff612c]"></GrHomeRounded>
//        <span className="text-xs">Home</span>
//      </Link>
//      <div
//        className="normal-case text-[10px] bg-white text-richblack-700 cursor-pointer flex justify-center items-center flex-col px-3 w-1/4 select-none py-1 transition-all group border hover:border-t-2 border-t-[#ff621c] relative z-50"
//        // onClick={() => setOpenServices(prev=>!prev)}
//      >
//        <PiAirplaneTilt className="text-[16px] my-1 group-hover:text-[#ff612c] -rotate-90"></PiAirplaneTilt>
//        <span className="text-xs">Services</span>
//      </div>
//      <div className="normal-case text-[10px] bg-white text-richblack-700 cursor-pointer flex justify-center items-center flex-col px-3 w-1/4 select-none py-1 transition-all group border hover:border-t-2 border-t-[#ff621c] relative z-50">
//        <FaCity className="text-[16px] my-1 group-hover:text-[#ff612c]"></FaCity>
//        <span className="text-xs">Cites</span>{" "}
//      </div>
//      <div className="normal-case text-[10px] bg-white text-richblack-700 cursor-pointer flex justify-center items-center flex-col px-3 w-1/4 select-none py-1 transition-all group border hover:border-t-2 border-t-[#ff621c] relative z-50">
//        <FaUser className="text-[16px] my-1 group-hover:text-[#ff612c]"></FaUser>
//        <span className="text-xs">Profile</span>{" "}
//      </div>

//      {/*---------------------------------- Open Service Modal ---------------------------- */}
// {/* 
//      {openService && (
//        <Modal
//          title={
//            <div className="flex items-center gap-x-2 GTE_light">
//              {" "}
//              Services{" "}
//            </div>
//          }
//          setModal={setOpenServices}
//        >
//          <div className=" mx-auto">
//            <div className="flex justify-between items-center flex-wrap px-1 gap-y-1 my-2">
//              <Link
//                to={"/tours"}
//                className=" w-[70px] h-[70px] flex flex-col gap-y-1 justify-center items-center text-richblack-800 rounded-full cursur-pointe7 borde group border-richblack-500"
//              >
//                <FaPlane className="group-hover:text-[#ff612c]"></FaPlane>
//                <div className="text-center text-xs md:text-sm GTE_light">Tours</div>
//              </Link>
//              <div className=" w-[70px] h-[70px] flex flex-col gap-y-1 justify-center items-center text-richblack-800 rounded-full cursor-pointer borde group border-richblack-500">
//                <FaCity className="group-hover:text-[#ff612c]"></FaCity>
//                <div className="text-center text-xs md:text-sm GTE_light">Packages</div>
//              </div>
//              <div className=" w-[70px] h-[70px] flex flex-col gap-y-1 justify-center items-center text-richblack-800 rounded-full cursor-pointer borde group border-richblack-500">
//                <FaHotel className="group-hover:text-[#ff612c]"></FaHotel>
//                <div className="text-center text-xs md:text-sm GTE_light">Hotel</div>
//              </div>
//              <div className=" w-[70px] h-[70px] flex flex-col gap-y-1 justify-center items-center text-richblack-800 rounded-full cursor-pointer borde group border-richblack-500">
//                <FaFileAlt className="group-hover:text-[#ff612c]"></FaFileAlt>
//                <div className="text-center text-xs md:text-sm GTE_light">Planner</div>
//              </div>
//            </div>
//          </div>
//        </Modal>
//      )} */}

   
//      {/* <AnimatePresence>
//        {openService && (
//          <motion.div
//            initial={{
//              bottom: "-650px",
//            }}
//            animate={{
//              bottom: "-300px",
//            }}
//            exit={{
//              bottom: "-650px",
//            }}
//            className="fixed w-full mt-64 h-[600px] border bg-white shadow-xl rounded-2xl z-0 py-4 px-4"
//          >
//             <div className=" max-w-maxContentTab mx-auto ">
//   <div className="flex justify-between px-2 items-center border-b">
//     <div className="select-none text-sm">{"title"}</div>
//     <div
//          className="relative before:w-full before:h-full before:rounded-full before:absolute before:top-0 before:left-0  before:hover:bg-[rgba(0,0,0,0.04)] rounded-full p-2 -mr-2 cursor-pointer"
//          onClick={() => {
//            setOpenServices(false);
//          }}
//        >
//          <GoX className="text-lg text-richblack-900"></GoX>
//        </div>
//      </div>
// </div>
//          </motion.div>
//        )}
//      </AnimatePresence> */}
//    </div>
   <div
     className="md:hidden flex gap-x-0 items-center bg-white fixed bottom-0 z-[99999] shadow-md rounded-tl-md rounded-tr justify-center w-full "
     style={{
       boxShadow: "0 0 20px rgba(0,0,0,0.1)",
     }}
   >
     <Link
       to={"/"}
       className="normal-case text-[10px] bg-white text-richblack-700 cursor-pointer flex justify-center items-center flex-col px-3 w-1/4 select-none py-1 transition-all group border hover:border-t-2 border-t-[#ff621c] relative z-50"
     >
       <img src={Home} className="w-[20px] my-1 group-hover:text-[#ff612c]"></img>
       <span className="text-xs">Home</span>
     </Link>
    
     <Link
       to={"/tours"} className="normal-case text-[10px] bg-white text-richblack-700 cursor-pointer flex items-center flex-col px-3 w-1/4 select-none py-1 transition-all group border hover:border-t-2 border-t-[#ff621c] relative z-50">
       <img src={TourIcon} className="w-[24px] pt-1 my-1 group-hover:text-[#ff612c]"></img>
       <span className="text-xs mt-[1px]">Tours</span>{" "}
     </Link>
     <Link
       to={"/"} className="normal-case text-[10px] bg-white text-richblack-700 cursor-pointer flex items-center flex-col px-3 w-1/4 select-none py-1 transition-all group border hover:border-t-2 border-t-[#ff621c] relative z-50">
       <img src={PacakgesIcon} className="w-[20px] my-1 group-hover:text-[#ff612c]"></img>
       <span className="text-xs">Packages</span>{" "}
     </Link>
     <Link
       to={"/"} className="normal-case text-[10px] bg-white text-richblack-700 cursor-pointer flex items-center flex-col px-3 w-1/4 select-none py-1 transition-all group border hover:border-t-2 border-t-[#ff621c] relative z-50">
       <img src={HotelsIcon} className="w-[20px] my-1 group-hover:text-[#ff612c]"></img>
       <span className="text-xs">Hotels</span>{" "}
     </Link>
     <Link
       to={"/"} className="normal-case text-[10px] bg-white text-richblack-700 cursor-pointer flex justify-center items-center flex-col px-3 w-1/4 select-none py-1 transition-all group border hover:border-t-2 border-t-[#ff621c] relative z-50">
       <img src={CalenderIcon} className="w-[18px] my-1 group-hover:text-[#ff612c]"></img>
       <span className="text-xs">Planner</span>{" "}
     </Link>
     {/* <Link
       to={"/hotels"} className="normal-case text-[10px] bg-white text-richblack-700 cursor-pointer flex justify-center items-center flex-col px-3 w-1/4 select-none py-1 transition-all group border hover:border-t-2 border-t-[#ff621c] relative z-50">
       <img src={HotelsIcon} className="w-[16px] my-1 group-hover:text-[#ff612c]"></img>
       <span className="text-xs">Hotels</span>{" "}
     </Link>
     <Link
       to={"/hotels"} className="normal-case text-[10px] bg-white text-richblack-700 cursor-pointer flex justify-center items-center flex-col px-3 w-1/4 select-none py-1 transition-all group border hover:border-t-2 border-t-[#ff621c] relative z-50">
       <img src={CalenderIcon} className="w-[16px] my-1 group-hover:text-[#ff612c]"></img>
       <span className="text-xs">Planner</span>{" "}
     </Link> */}

     {/*---------------------------------- Open Service Modal ---------------------------- */}
{/* 
     {openService && (
       <Modal
         title={
           <div className="flex items-center gap-x-2 GTE_light">
             {" "}
             Services{" "}
           </div>
         }
         setModal={setOpenServices}
       >
         <div className=" mx-auto">
           <div className="flex justify-between items-center flex-wrap px-1 gap-y-1 my-2">
             <Link
               to={"/tours"}
               className=" w-[70px] h-[70px] flex flex-col gap-y-1 justify-center items-center text-richblack-800 rounded-full cursur-pointe7 borde group border-richblack-500"
             >
               <FaPlane className="group-hover:text-[#ff612c]"></FaPlane>
               <div className="text-center text-xs md:text-sm GTE_light">Tours</div>
             </Link>
             <div className=" w-[70px] h-[70px] flex flex-col gap-y-1 justify-center items-center text-richblack-800 rounded-full cursor-pointer borde group border-richblack-500">
               <FaCity className="group-hover:text-[#ff612c]"></FaCity>
               <div className="text-center text-xs md:text-sm GTE_light">Packages</div>
             </div>
             <div className=" w-[70px] h-[70px] flex flex-col gap-y-1 justify-center items-center text-richblack-800 rounded-full cursor-pointer borde group border-richblack-500">
               <FaHotel className="group-hover:text-[#ff612c]"></FaHotel>
               <div className="text-center text-xs md:text-sm GTE_light">Hotel</div>
             </div>
             <div className=" w-[70px] h-[70px] flex flex-col gap-y-1 justify-center items-center text-richblack-800 rounded-full cursor-pointer borde group border-richblack-500">
               <FaFileAlt className="group-hover:text-[#ff612c]"></FaFileAlt>
               <div className="text-center text-xs md:text-sm GTE_light">Planner</div>
             </div>
           </div>
         </div>
       </Modal>
     )} */}

   
     {/* <AnimatePresence>
       {openService && (
         <motion.div
           initial={{
             bottom: "-650px",
           }}
           animate={{
             bottom: "-300px",
           }}
           exit={{
             bottom: "-650px",
           }}
           className="fixed w-full mt-64 h-[600px] border bg-white shadow-xl rounded-2xl z-0 py-4 px-4"
         >
            <div className=" max-w-maxContentTab mx-auto ">
  <div className="flex justify-between px-2 items-center border-b">
    <div className="select-none text-sm">{"title"}</div>
    <div
         className="relative before:w-full before:h-full before:rounded-full before:absolute before:top-0 before:left-0  before:hover:bg-[rgba(0,0,0,0.04)] rounded-full p-2 -mr-2 cursor-pointer"
         onClick={() => {
           setOpenServices(false);
         }}
       >
         <GoX className="text-lg text-richblack-900"></GoX>
       </div>
     </div>
</div>
         </motion.div>
       )}
     </AnimatePresence> */}
   </div>
  );
};




// <AnimatePresence>
// {openService && (
//   <motion.div
//     transition={{
//       duration: 0.9,
//       ease: "easeOut",
//     }}
//     initial={{
//       bottom: "-300px",
//     }}
//     animate={{
//       bottom: 0,
//     }}
//     exit={{
//       bottom: "-500px",
//     }}
//     className={`w-full rounded-tl-2xl rounded-tr-2xl -bottom-[600px] bg-white p-4 absolute min-h-[10vh] drop-shadow-lg pb-44  
// `}
//     onClick={(e) => e.stopPropagation()}
//   >
//     <div className=" max-w-maxContentTab mx-auto ">
//       <div className="flex justify-between px-2 items-center border-b">
//         <div className="select-none text-sm">{"title"}</div>
//         <div
//           className="relative before:w-full before:h-full before:rounded-full before:absolute before:top-0 before:left-0  before:hover:bg-[rgba(0,0,0,0.04)] rounded-full p-2 -mr-2 cursor-pointer"
//           onClick={() => {
//             setOpenServices(false);
//           }}
//         >
//           <GoX className="text-lg text-richblack-900"></GoX>
//         </div>
//       </div>
// //       <div>{children}</div>
// //     </div>
//   </motion.div>
// )}
// </AnimatePresence>

export default BottomNav;
