import { Button, IconButton } from "@material-tailwind/react";
import { FaCity, FaFile, FaFileAlt, FaHome, FaUser } from "react-icons/fa";
import { GrHomeRounded } from "react-icons/gr";
import { PiAirplaneTilt } from "react-icons/pi";


const BottomNav = () => {
  return (
    <div className="md:hidden flex gap-x-0 items-center border bg-white fixed bottom-0 z-[99999] shadow-md rounded-tl-md rounded-tr justify-center w-full ">
      <div className="normal-case text-[10px] bg-white text-richblack-400 cursor-pointer flex justify-center items-center flex-col px-3 w-1/4 select-none py-1 transition-all group">
        <GrHomeRounded className="text-[16px] my-1 group-hover:text-[#ff612c]"></GrHomeRounded>
        <span className="text-xs">Home</span>
      </div>
      <div className="normal-case text-[10px] bg-white text-richblack-400 cursor-pointer flex justify-center items-center flex-col px-3 w-1/4 select-none py-1 transition-all group">
        <PiAirplaneTilt className="text-[16px] my-1 group-hover:text-[#ff612c] -rotate-90"></PiAirplaneTilt>
        <span className="text-xs">Services</span>
      </div>
      <div className="normal-case text-[10px] bg-white text-richblack-400 cursor-pointer flex justify-center items-center flex-col px-3 w-1/4 select-none py-1 transition-all group">
        <FaCity className="text-[16px] my-1 group-hover:text-[#ff612c]"></FaCity>
        <span className="text-xs">Cites</span>{" "}
      </div>
      <div className="normal-case text-[10px] bg-white text-richblack-400 cursor-pointer flex justify-center items-center flex-col px-3 w-1/4 select-none py-1 transition-all group">
        <FaUser className="text-[16px] my-1 group-hover:text-[#ff612c]"></FaUser>
        <span className="text-xs">Profile</span>{" "}
      </div>
    </div>
  );
};

export default BottomNav;
