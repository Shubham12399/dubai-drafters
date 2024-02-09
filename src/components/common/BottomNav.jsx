import { useState } from "react";
import {
  FaCity,
  FaFile,
  FaFileAlt,
  FaHome,
  FaHotel,
  FaPlane,
  FaUser,
} from "react-icons/fa";
import { GrHomeRounded } from "react-icons/gr";
import { PiAirplaneTilt } from "react-icons/pi";
import Modal from "../Modal";
import { Link } from "react-router-dom";

const BottomNav = () => {
  const [openService, setOpenServices] = useState(false);

  return (
    <div className="md:hidden flex gap-x-0 items-center bg-white fixed bottom-0 z-[99999] shadow-md rounded-tl-md rounded-tr justify-center w-full " style={{
      boxShadow:"0 0 20px rgba(0,0,0,0.1)"
    }}>
      <Link to={"/"} className="normal-case text-[10px] bg-white text-richblack-700 cursor-pointer flex justify-center items-center flex-col px-3 w-1/4 select-none py-1 transition-all group hover:border-t-2 border-t-[#ff621c]">
        <GrHomeRounded className="text-[16px] my-1 group-hover:text-[#ff612c]"></GrHomeRounded>
        <span className="text-xs">Home</span>
      </Link>
      <div
        className="normal-case text-[10px] bg-white text-richblack-700 cursor-pointer flex justify-center items-center flex-col px-3 w-1/4 select-none py-1 transition-all group hover:border-t-2 border-t-[#ff621c]"
        onClick={() => setOpenServices(true)}
      >
        <PiAirplaneTilt className="text-[16px] my-1 group-hover:text-[#ff612c] -rotate-90"></PiAirplaneTilt>
        <span className="text-xs">Services</span>
      </div>
      <div className="normal-case text-[10px] bg-white text-richblack-700 cursor-pointer flex justify-center items-center flex-col px-3 w-1/4 select-none py-1 transition-all group hover:border-t-2 border-t-[#ff621c]">
        <FaCity className="text-[16px] my-1 group-hover:text-[#ff612c]"></FaCity>
        <span className="text-xs">Cites</span>{" "}
      </div>
      <div className="normal-case text-[10px] bg-white text-richblack-700 cursor-pointer flex justify-center items-center flex-col px-3 w-1/4 select-none py-1 transition-all group hover:border-t-2 border-t-[#ff621c]">
        <FaUser className="text-[16px] my-1 group-hover:text-[#ff612c]"></FaUser>
        <span className="text-xs">Profile</span>{" "}
      </div>

      {/*---------------------------------- Open Service Modal ---------------------------- */}

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
      )}
    </div>
  );
};

export default BottomNav;
