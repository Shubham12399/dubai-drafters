import { Button, IconButton } from "@material-tailwind/react";
import { FaCity, FaFile, FaFileAlt, FaHome, FaUser } from "react-icons/fa";

const BottomNav = () => {
  return (
    <div className="md:hidden flex gap-x-0 items-center border bg-white fixed bottom-0 z-[99999] shadow-md rounded-tl-md rounded-tr justify-center w-full ">
        <div className="normal-case text-[10px] bg-white text-richblack-400 cursor-pointer flex justify-center items-center flex-col px-3 w-1/4 select-none py-2 hover:bg-[#ff612c] hover:!text-white transition-all">
            <FaHome className="text-[16px] my-1"></FaHome>
            Home
        </div>
        <div className="normal-case text-[10px] bg-white text-richblack-400 cursor-pointer flex justify-center items-center flex-col px-3 w-1/4 select-none py-2 hover:bg-[#ff612c] hover:!text-white transition-all">
            <FaFileAlt className="text-[16px] my-1"></FaFileAlt>
            Services
        </div>
        <div className="normal-case text-[10px] bg-white text-richblack-400 cursor-pointer flex justify-center items-center flex-col px-3 w-1/4 select-none py-2 hover:bg-[#ff612c] hover:!text-white transition-all">
            <FaCity className="text-[16px] my-1"></FaCity>
            Cites
        </div>
        <div className="normal-case text-[10px] bg-white text-richblack-400 cursor-pointer flex justify-center items-center flex-col px-3 w-1/4 select-none py-2 hover:bg-[#ff612c] hover:!text-white transition-all">
            <FaUser className="text-[16px] my-1"></FaUser>
            Profile
        </div>
    </div>
  )
}

export default BottomNav;