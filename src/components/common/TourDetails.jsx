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
import { Button } from "@material-tailwind/react";
import { FaPaperPlane, FaPlane, FaPlus, FaStar } from "react-icons/fa";
import { useState } from "react";
import CollapseComp from "./Collapse";
import checkImg from "../../assets/images/check.png";

const TourDetails = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  
  return (
    <div className="pb-16 text-richblue-700">
      <Navigation></Navigation>
      <div className="relative h-[170px] w-full md:h-[60vh] select-none">
        <img
          loading="lazy"
          src={img}
          alt="travel 1920x450 banner.png"
          className="h-full object-cover object-right"
        />
        <div className="absolute top-2 left-2 text-xl w-fit cursor-pointer p-2 text-white GTE_light">
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
            veniam ipsum modi, sapiente quae, delectus odit impedit velit alias?
            Facilis.
          </p>
        </div>
      </div>

      {/* <div className="max-w-maxWidthContent mx-auto px-4 my-4">
        <h1>Image Gallery</h1>
        <div className="flex flex-wrap my-2 gap-x-2 gap-y-2 justify-start">
          <img 
          loading="lazy"
            src={img1}
            alt={`${img1}`}
            className="h-[60px] aspect-auto object-cover rounded-md "
          />
          <img 
          loading="lazy"
            src={img2}
            alt={`${img1}`}
            className="h-[60px] aspect-auto object-cover rounded-md "
          />
          <img 
          loading="lazy"
            src={img3}
            alt={`${img1}`}
            className="h-[60px] aspect-auto object-cover rounded-md "
          />
          <img 
          loading="lazy"
            src={img4}
            alt={`${img1}`}
            className="h-[60px] aspect-auto object-cover rounded-md "
          />
          <img 
          loading="lazy"
            src={img1}
            alt={`${img1}`}
            className="h-[60px] aspect-auto object-cover rounded-md "
          />
          <img 
          loading="lazy"
            src={img2}
            alt={`${img1}`}
            className="h-[60px] aspect-auto object-cover rounded-md "
          />
          <img 
          loading="lazy"
            src={img3}
            alt={`${img1}`}
            className="h-[60px] aspect-auto object-cover rounded-md "
          />
          <img 
          loading="lazy"
            src={img4}
            alt={`${img1}`}
            className="h-[60px] aspect-auto object-cover rounded-md "
          />
          <img 
          loading="lazy"
            src={img1}
            alt={`${img1}`}
            className="h-[60px] aspect-auto object-cover rounded-md "
          />
             <img 
             loading="lazy"
            src={img4}
            alt={`${img1}`}
            className="h-[60px] aspect-auto object-cover rounded-md "
          />
          <img 
          loading="lazy"
            src={img2}
            alt={`${img1}`}
            className="h-[60px] aspect-auto object-cover rounded-md "
          />
          <img 
          loading="lazy"
            src={img3}
            alt={`${img1}`}
            className="h-[60px] aspect-auto object-cover rounded-md "
          />
       
        </div>
      </div> */}

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
      <div className="max-w-maxWidthContent mx-auto mt-6 flex flex-col ">
        <CollapseComp isCollapsed={true} title="Overview" className={"px-4"}>
          <div className="pt-2 pb-3">
            <h1>Dubai Safari Abu Dhabi </h1>
            <p className="text-sm leading-relaxed mt-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
              laudantium aliquam dolorum cumque error, similique voluptate nisi
              consequuntur ipsam suscipit fugiat expedita nobis! Lorem ipsum,
              dolor sit amet consectetur adipisicing elit.{" "}
              <span className="text-caribbeangreen-300 text-xs">...more</span>
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
            <div className="py-2 mb-2">
              <h3 className="text-xs text-[#ff612c]">Date</h3>
              <p className="mt-1 text-sm"> 3 Feb - 10 Feb 2024</p>
            </div>
            <hr />

            {/* Tour Schedule */}
            <div className="py-2 mb-2 mt-3 ">
              <h3 className="text-xs text-[#ff612c]">Tour Schedule</h3>
              {/* Days */}
              <div className="flex gap-x-2 overflow-auto mt-4 hide-scrollbar ">
                <div className="min-w-fit px-3 py-0 bg-[#ff621c] flex flex-col justify-center text-white text-xs rounded-md ">
                  <h1 className="text-center GTE_light">1 <span className="text-xs GTE_light">Day</span></h1>
                  {/* <span className="GTE_light text-xs">Starting</span> */}
                </div>
                <div className="min-w-fit px-3 py-0 bg-white flex flex-col justify-center text-richblack-900 border border-richblack-100 text-xs rounded-md ">
                  <h1 className="text-center GTE_light">2 <span className="text-xs GTE_light">Day</span></h1>
                  {/* <span className="GTE_light text-xs">Starting</span> */}
                </div>
                <div className="min-w-fit px-3 py-0 bg-white flex flex-col justify-center text-richblack-900 border border-richblack-100 text-xs rounded-md ">
                  <h1 className="text-center GTE_light">3 <span className="text-xs GTE_light">Day</span></h1>
                  {/* <span className="GTE_light text-xs">Starting</span> */}
                </div>
                <div className="min-w-fit px-3 py-0 bg-white flex flex-col justify-center text-richblack-900 border border-richblack-100 text-xs rounded-md ">
                  <h1 className="text-center GTE_light">4 <span className="text-xs GTE_light">Day</span></h1>
                  {/* <span className="GTE_light text-xs">Starting</span> */}
                </div>
                <div className="min-w-fit px-3 py-0 bg-white flex flex-col justify-center text-richblack-900 border border-richblack-100 text-xs rounded-md ">
                  <h1 className="text-center GTE_light">5 <span className="text-xs GTE_light">Day</span></h1>
                  {/* <span className="GTE_light text-xs">Starting</span> */}
                </div>
              

                <div className="min-w-fit px-3 py-1 flex flex-col justify-center text-richblack-900 text-sm rounded-md border border-[#ff612c]">
                  <h1 className="text-center text-xl GTE_light flex justify-center text-[#ff612c]">
                    <GoPlus className=""></GoPlus>
                    </h1>
                  <span className="GTE_light text-xs text-[#ff612c]"></span>
                </div>
              </div>

              {/* Outlets */}
              <div className="pt-6">
                  
                  <div>
                    <div className="flex justify-between items-center">
                    <p>Visit place</p>

                    <p className="text-xs text-richblack-600 text-right border-b border-[#ff612c]">Date - 03/09/2024</p>
                    </div>
                    
                    <div className="flex gap-x-1 mt-4 overflow-auto hide-scrollbar rounded-md">
                      <img src={img} alt="" className="h-[170px] object-cover object-right"/>
                      <img src={img3} alt="" className="h-[170px] object-cover object-right"/>
                      <img src={img4} alt="" className="h-[170px] object-cover object-right"/>
                    </div>

                    <h3 className="mt-4">Food Activity</h3>
                     <p className="text-sm mt-2">Vegitables , Non-Vegitable ,  Sweets , Special Recepies</p>
                    <h3 className="mt-4">Living Room</h3>
                     <p className="text-sm mt-2">Book now to select Homtels</p>
                  </div>
              </div>
            </div>


          </div>
        </CollapseComp>
        <CollapseComp title="Inclusions" className={"px-4"}>
          This is Collapsible Box
        </CollapseComp>
      </div>

      {/* Last Div  */}
      {
        <div className="fixed bottom-0 w-full bg-white py-3  z-[999] flex gap-x-2 items-stretch px-4 max-w-maxContent mx-auto -mt-0 md:-mt-5 left-1/2 -translate-x-1/2 shadow-[0_0_20px_rgba(0,0,0,0.2)] GTE_light">
          <button className="flex-grow normal-case py-2 rounded-md px-2 text-xs sm:text-lg text-white bg-[#ff612c] hover:border-[#f77031] GTE_light">
            Book Now
          </button>
          <button className="normal-case py-2 rounded-md w-fit px-5 text-xs sm:text-lg text-[#ff621c]  border border-[#ff612c] GTE_light">
            Add To Cart
          </button>
        </div>
      }
    </div>
  );
};

export default TourDetails;
