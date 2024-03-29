import { Button, Tooltip } from '@material-tailwind/react';
import React from 'react'
import TourCard from '../../common/TourCard';
import { FaStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { MdOutlineAddShoppingCart } from 'react-icons/md';
import img1 from "../../../assets/images/IMG-20240205-WA0063.jpg";
import img2 from "../../../assets/images/IMG-20240205-WA0067.jpg";
import img3 from "../../../assets/images/IMG-20240205-WA0065.jpg";
import img4 from "../../../assets/images/IMG-20240205-WA0070.jpg";

const TypeTours = () => {
  return (
    <>
     {/* our Adventures Tours  -------------------------------------------------------------------------------  */}
     <div className="md:mt-12 mb-4 max-w-[970px] mx-auto pl-3 md:px-6">
          <h1 className="text-lg md:text-2xl font-medium mt-6 md:top-0 flex justify-between items-baseline pr-2">
            Adventure
            <Button className="text-[10px] bg-transparent shadow-none md:text-xs font-normal rounded-lg cursor-pointer py-0 md:py-1 px-2 text-[#ff621c] border border-[#ff612c] hover:bg-[#ff7a4d] hover:text-white normal-case">
              See All
            </Button>
          </h1>
          <p className="text-xs md:text-sm mt-1 text-richblack-500 hidden md:block ">
            Experience the thrill of discovering off-the-beaten-path gems and
            famous landmarks in top destinations worldwide - your wanderlust
            awaits!
          </p>
          <div className="mt-3 flex gap-x-2 md:gap-x-4 md:mt-4 overflow-auto hide-scrollbar pb-6">
            <TourCard
              tourTitle={"India Gate Full Day Tour"}
              tourImg="https://res.cloudinary.com/responsivebreakpoints/image/upload/c_scale,w_200/v1710420324/IMG-20240205-WA0063_v4wa9d.jpg"
              tourPrice={355.0}
              starsCount={4}
            ></TourCard>
            <div className="min-w-[140px] w-[130px] sm:w-[160px] md:min-w-[170px] md:w-[170px] rounded-xl overflow-hidden relative bg-white shadow-md">
              <div className="w-full">
                <img
                  loading="lazy"
                  src="https://res.cloudinary.com/responsivebreakpoints/image/upload/c_scale,w_200/v1710420324/IMG-20240205-WA0063_v4wa9d.jpg"
                  alt=""
                  className="w-full h-[110px] sm:h-[110px] object-cover"
                />
              </div>
              <div className="px-3 sm:px-4 my-2 mb-3 sm:my-4 ">
                <Tooltip content={"Evenning Desert Saudi Arabia, late Night"}>
                  <h3 className="text-[13px] sm:text-sm font-medium line-clamp-2">
                    Evening Desert S..{" "}
                  </h3>
                </Tooltip>
                <h3 className="text-xs font-medium text-richblack-900 mt-1">
                  AED 135.00
                </h3>
                <div className="flex items-center justify-between flex-wrap sm:flex-nowrap mt-0 sm:mt-1">
                  {/* <p className="text-[8px] text-richblack-200 flex items-center mt-1">277 Reviews</p> */}
                  <div className="flex mt-1 sm:mt-0 gap-x-1 items-center">
                    <FaStar className="text-yellow-100 text-[8px]"></FaStar>
                    <FaStar className="text-yellow-100 text-[8px]"></FaStar>
                    <FaStar className="text-yellow-100 text-[8px]"></FaStar>
                    <FaStar className="text-yellow-100 text-[8px]"></FaStar>
                    <FaStar className="text-yellow-100 text-[8px]"></FaStar>
                  </div>
                </div>
                <div className="flex !items-strech gap-1 mt-3">
                  <Link to="/tour/tour1">
                  <Button
                    size="sm"
                    variant="outlined"
                    className="normal-case py-[.4rem] rounded-md w-[70px] px-2 text-[10px] sm:text-[10px] hover:bg-[#ff621c] hover:text-white text-[#ff612c] border-[#ff612c] font-normal"
                  >
                    Book Now
                  </Button>
                  </Link>

                  <button className="bg-none relative z-20 px-1 pl-2 ml-3 border-none before:w-full before:h-full before:bg-none before:hover:bg-richblack-25 before:absolute before:top-0 before:left-[1px] before:py-2 before:rounded-full before:z-0">
                    <MdOutlineAddShoppingCart className="text-lg relative z-30 text-richblack-500"></MdOutlineAddShoppingCart>

                  </button>
                </div>
              </div>
            </div>
            <div className="min-w-[140px] w-[130px] sm:w-[160px] md:min-w-[170px] md:w-[170px] rounded-xl overflow-hidden relative bg-white shadow-md">
              <div className="w-full">
                <img
                  loading="lazy"
                  src="https://res.cloudinary.com/responsivebreakpoints/image/upload/c_scale,w_200/v1710420324/IMG-20240205-WA0063_v4wa9d.jpg"
                  alt=""
                  className="w-full h-[110px] sm:h-[110px] object-cover"
                />
              </div>
              <div className="px-3 sm:px-4 my-2 mb-3 sm:my-4 ">
                <h3 className="text-[13px] sm:text-sm font-medium line-clamp-2">
                  Evening Desert S...{" "}
                </h3>
                <h3 className="text-xs font-medium text-richblack-900 mt-1">
                  AED 135.00
                </h3>
                <div className="flex items-center justify-between flex-wrap sm:flex-nowrap mt-0 sm:mt-1">
                  {/* <p className="text-[8px] text-richblack-200 fex items-center mt-1">277 Reviews</p> */}
                  <div className="flex mt-1 sm:mt-0 gap-x-1 items-center">
                    <FaStar className="text-yellow-100 text-[8px]"></FaStar>
                    <FaStar className="text-yellow-100 text-[8px]"></FaStar>
                    <FaStar className="text-yellow-100 text-[8px]"></FaStar>
                    <FaStar className="text-yellow-100 text-[8px]"></FaStar>
                    <FaStar className="text-yellow-100 text-[8px]"></FaStar>
                  </div>
                </div>
                <div className="flex !items-strech gap-1 mt-3">
                  <Button
                    size="sm"
                    variant="outlined"
                    className="normal-case py-[.4rem] rounded-md w-[70px] px-2 text-[10px] sm:text-[10px] hover:bg-[#ff621c] hover:text-white text-[#ff612c] border-[#ff612c] font-normal"
                  >
                    Book Now
                  </Button>
                  <button className="bg-none relative z-20 px-1 pl-2 ml-3 border-none before:w-full before:h-full before:bg-none before:hover:bg-richblack-25 before:absolute before:top-0 before:left-[1px] before:py-2 before:rounded-full before:z-0">
                    <MdOutlineAddShoppingCart className="text-lg relative z-30 text-richblack-500"></MdOutlineAddShoppingCart>
                  </button>
                </div>
              </div>
            </div>
            <div className="min-w-[140px] w-[130px] sm:w-[160px] md:min-w-[170px] md:w-[170px] rounded-xl overflow-hidden relative bg-white shadow-md">
              <div className="w-full">
                <img
                  loading="lazy"
                  src="https://res.cloudinary.com/responsivebreakpoints/image/upload/c_scale,w_200/v1710420324/IMG-20240205-WA0063_v4wa9d.jpg"
                  alt=""
                  className="w-full h-[110px] sm:h-[110px] object-cover"
                />
              </div>
              <div className="px-3 sm:px-4 my-2 mb-3 sm:my-4 ">
                <h3 className="text-[13px] sm:text-sm font-medium line-clamp-2">
                  Evening Desert S...{" "}
                </h3>
                <h3 className="text-xs font-medium text-richblack-900 mt-1">
                  AED 135.00
                </h3>
                <div className="flex items-center justify-between flex-wrap sm:flex-nowrap mt-0 sm:mt-1">
                  {/* <p className="text-[8px] text-richblack-200 flex items-center mt-1">277 Reviews</p> */}{" "}
                  <div className="flex mt-1 sm:mt-0 gap-x-1 items-center">
                    <FaStar className="text-yellow-100 text-[8px]"></FaStar>
                    <FaStar className="text-yellow-100 text-[8px]"></FaStar>
                    <FaStar className="text-yellow-100 text-[8px]"></FaStar>
                    <FaStar className="text-yellow-100 text-[8px]"></FaStar>
                    <FaStar className="text-yellow-100 text-[8px]"></FaStar>
                  </div>
                </div>
                <div className="flex !items-strech gap-1 mt-3">
                  <Button
                    size="sm"
                    variant="outlined"
                    className="normal-case py-[.4rem] rounded-md w-[70px] px-2 text-[10px] sm:text-[10px] hover:bg-[#ff621c] hover:text-white text-[#ff612c] border-[#ff612c] font-normal"
                  >
                    Book Now
                  </Button>
                  <button className="bg-none relative z-20 px-1 pl-2 ml-3 border-none before:w-full before:h-full before:bg-none before:hover:bg-richblack-25 before:absolute before:top-0 before:left-[1px] before:py-2 before:rounded-full before:z-0">
                    <MdOutlineAddShoppingCart className="text-lg relative z-30 text-richblack-500"></MdOutlineAddShoppingCart>
                  </button>
                </div>
              </div>
            </div>
            <div className="min-w-[140px] w-[130px] sm:w-[160px] md:min-w-[170px] md:w-[170px] rounded-xl overflow-hidden relative bg-white shadow-md">
              <div className="w-full">
                <img
                  loading="lazy"
                  src="https://res.cloudinary.com/responsivebreakpoints/image/upload/c_scale,w_200/v1710420324/IMG-20240205-WA0063_v4wa9d.jpg"
                  alt=""
                  className="w-full h-[110px] sm:h-[110px] object-cover"
                />
              </div>
              <div className="px-3 sm:px-4 my-2 mb-3 sm:my-4 ">
                <h3 className="text-[13px] sm:text-sm font-medium line-clamp-2">
                  Evening Desert S...{" "}
                </h3>
                <h3 className="text-xs font-medium text-richblack-900 mt-1">
                  AED 135.00
                </h3>
                <div className="flex items-center justify-between flex-wrap sm:flex-nowrap mt-0 sm:mt-1">
                  {/* <p className="text-[8px] text-richblack-200 flex items-center mt-1">277 Reviews</p> */}{" "}
                  <div className="flex mt-1 sm:mt-0 gap-x-1 items-center">
                    <FaStar className="text-yellow-100 text-[8px]"></FaStar>
                    <FaStar className="text-yellow-100 text-[8px]"></FaStar>
                    <FaStar className="text-yellow-100 text-[8px]"></FaStar>
                    <FaStar className="text-yellow-100 text-[8px]"></FaStar>
                    <FaStar className="text-yellow-100 text-[8px]"></FaStar>
                  </div>
                </div>
                <div className="flex !items-strech gap-1 mt-3">
                  <Button
                    size="sm"
                    variant="outlined"
                    className="normal-case py-[.4rem] rounded-md w-[70px] px-2 text-[10px] sm:text-[10px] hover:bg-[#ff621c] hover:text-white text-[#ff612c] border-[#ff612c] font-normal"
                  >
                    Book Now
                  </Button>
                  <button className="bg-none relative z-20 px-1 pl-2 ml-3 border-none before:w-full before:h-full before:bg-none before:hover:bg-richblack-25 before:absolute before:top-0 before:left-[1px] before:py-2 before:rounded-full before:z-0">
                    <MdOutlineAddShoppingCart className="text-lg relative z-30 text-richblack-500"></MdOutlineAddShoppingCart>
                  </button>
                </div>
              </div>
            </div>
            <div className="min-w-[140px] w-[130px] sm:w-[160px] md:min-w-[170px] md:w-[170px] rounded-xl overflow-hidden relative bg-white shadow-md">
              <div className="w-full">
                <img
                  loading="lazy"
                  src="https://res.cloudinary.com/responsivebreakpoints/image/upload/c_scale,w_200/v1710420324/IMG-20240205-WA0063_v4wa9d.jpg"
                  alt=""
                  className="w-full h-[110px] sm:h-[110px] object-cover"
                />
              </div>
              <div className="px-3 sm:px-4 my-2 mb-3 sm:my-4 ">
                <h3 className="text-[13px] sm:text-sm font-medium line-clamp-2">
                  Evening Desert S...{" "}
                </h3>
                <h3 className="text-xs font-medium text-richblack-900 mt-1">
                  AED 135.00
                </h3>
                <div className="flex items-center justify-between flex-wrap sm:flex-nowrap mt-0 sm:mt-1">
                  {/* <p className="text-[8px] text-richblack-200 flex items-center mt-1">277 Reviews</p> */}{" "}
                  <div className="flex mt-1 sm:mt-0 gap-x-1 items-center">
                    <FaStar className="text-yellow-100 text-[8px]"></FaStar>
                    <FaStar className="text-yellow-100 text-[8px]"></FaStar>
                    <FaStar className="text-yellow-100 text-[8px]"></FaStar>
                    <FaStar className="text-yellow-100 text-[8px]"></FaStar>
                    <FaStar className="text-yellow-100 text-[8px]"></FaStar>
                  </div>
                </div>
                <div className="flex !items-strech gap-1 mt-3">
                  <Button
                    size="sm"
                    variant="outlined"
                    className="normal-case py-[.4rem] rounded-md w-[70px] px-2 text-[10px] sm:text-[10px] hover:bg-[#ff621c] hover:text-white text-[#ff612c] border-[#ff612c] font-normal"
                  >
                    Book Now
                  </Button>
                  <button className="bg-none relative z-20 px-1 pl-2 ml-3 border-none before:w-full before:h-full before:bg-none before:hover:bg-richblack-25 before:absolute before:top-0 before:left-[1px] before:py-2 before:rounded-full before:z-0">
                    <MdOutlineAddShoppingCart className="text-lg relative z-30 text-richblack-500"></MdOutlineAddShoppingCart>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
    </>
  )
}

export default TypeTours;