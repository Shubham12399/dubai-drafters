import { FaPlane, FaStar } from "react-icons/fa";
import Navigation from "../components/common/Navigation";
import { MdOutlineAddShoppingCart } from "react-icons/md";
import { Button, Tooltip } from "@material-tailwind/react";
import img1 from "../assets/images/travel 1920x450 banner.png";
import img2 from "../assets/images/IMG-20240205-WA0067.jpg";
import img3 from "../assets/images/IMG-20240205-WA0065.jpg";
import img4 from "../assets/images/IMG-20240205-WA0070.jpg";
import BottomNav from "../components/common/BottomNav";

import { GoChevronRight } from "react-icons/go";
import SearchInput from "../components/common/SearchInput";
import { Link } from "react-router-dom";
const Category = () => {
    // const {title , description } = data;
  return (
    <>
    <Navigation></Navigation>
    <img src={img1} alt="" className="h-[140px] md:h-[300px] w-full object-cover object-center" />
    <div className="-mt-5 relative z-[999]">
    <SearchInput></SearchInput>
    </div>

    <div className="bg-deep-orange-50 pt-12 pb-5 -mt-10">
        <div className="max-w-maxWidthContent mx-auto">
          <h3 className="text-[16px] md:text-xl text-center GTE_Bold">
            Adventure Tours & Activities
          </h3>
          {/* <p className="GTE_light text-xs md:text-sm leading-tight px-4 py-2 text-center">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis
            ut atque, modi itaque iste nulla nesciunt alias consequuntur
            deleniti culpa soluta ducimus, facere vitae. Quo dolore culpa facere
            doloremque vitae.
          </p> */}
          <div className="ml-4 md:ml-0 flex md:justify-center gap-x-2 md:gap-x-4 items-center mt-3 overflow-auto hide-scrollbar">
            <div>
              <div className="w-[60px] h-[60px] md:w-[80px] md:h-[80px] rounded-full bg-white"></div>
              <p className="text-xs md:text-sm text-center mt-1">lorem 20</p>
            </div>
            <div>
              <div className="w-[60px] h-[60px] md:w-[80px] md:h-[80px] rounded-full bg-white"></div>
              <p className="text-xs md:text-sm text-center mt-1">lorem 20</p>
            </div>
            <div>
              <div className="w-[60px] h-[60px] md:w-[80px] md:h-[80px] rounded-full bg-white"></div>
              <p className="text-xs md:text-sm text-center mt-1">lorem 20</p>
            </div>
            <div>
              <div className="w-[60px] h-[60px] md:w-[80px] md:h-[80px] rounded-full bg-white"></div>
              <p className="text-xs md:text-sm text-center mt-1">lorem 20</p>
            </div>
            <div>
              <div className="w-[60px] h-[60px] md:w-[80px] md:h-[80px] rounded-full bg-white"></div>
              <p className="text-xs md:text-sm text-center mt-1">lorem 20</p>
            </div>
          </div>
        </div>
      </div>

    <div className="w-full max-w-maxWidthContent mx-auto py-4 px-4 mt-0">
        <div>
            <h1 className="GTE_medium md:mt-4 text-richblack-900 text-[16px] flex gap-x-2 items-center">
              Best Tour and Activities in Adventure 
            </h1>
            <p className="GTE_light text-[13px] md:text-sm text-richblack-500 leading-tight mt-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Et labore, adipisci beatae dicta deserunt, non velit quas obcaecati cumque saepe exercitationem explicabo ipsum eum consequuntur optio earum nostrum dolor. Nam?
            <span className="text-[#ff621c] block mt-1"> ...More </span>
            </p>
            <div className="mt-3 text-[16px] GTE_medium text-richblack-900 md:text-lg flex gap-x-2 items-center flex-wrap">
            <FaPlane className="text-sm text-[#ff621c]"></FaPlane> 44 Activities founded in Adventure Tour

            <div className="flex items-center gap-x-2 mt-2 md:mt-0 md:ml-4">
            <Link
            to={"/all-tours"}
            className="text-xs block w-fit px-3 py-1 rounded-full border border-richblack-900 text-richblack-900"
          >
            View All Tours
          </Link>
            <Link
            to={"/all-tours"}
            className="text-xs block w-fit px-3 py-1 rounded-full border border-richblack-900 text-richblack-900"
          >
            Selected Tour
          </Link>
            </div>

            </div>
        </div>

    </div>


    <div className="mb-4 max-w-[970px] mx-auto px-3 ">
    <div className="flex justify-between items-center pb-2 px-2">
           
  
            <div className="flex gap-y-4 min-w-fit justify-between items-center">
              <div className="flex items-center">
                <span className="min-w-max mr-3 text-sm md:block">
                  Sort By :
                </span>
                <div className="w-max flex gap-x-3 items-center md:bg-transparent md:shadow-none">
                  {/* <h3 className="text-[13px] md:text-sm GTE_light text-[#2e3844] flex gap-x-2 items-center ">
                  Most Popular
                </h3> */}
                  <span
                    className="text-xs text-richblack-900 select-none cursor-pointer GTE_light flex justify-between pr-1 items-center min-w-max px-2 py-1 border border-richblack-900 rounded-md "
                  >
                    Most Popular
                    <GoChevronRight className="rotate-90 ml-3"></GoChevronRight>
                  </span>
                  {/* <div className="flex">
                <div className="w-full rounded-lg bg-white md:bg-transparent md:shadow-none ">
                  {/* <h3 className="text-[13px] md:text-sm GTE_light text-[#2e3844] flex gap-x-2 items-center ">
                  Price
                </h3> */}
                  <span
                    className="text-xs text-richblack-900 select-none cursor-pointer GTE_light flex justify-between pr-1 w-full items-center min-w-max px-2 py-1 border border-richblack-900 rounded-md "
                  >
                    Price Range
                    <GoChevronRight className="rotate-90 ml-3"></GoChevronRight>
                  </span>
                  {/* </div>
              </div> */}
                </div>
              </div>
            </div>
          </div>
        <div className="mt-1 flex flex-wrap justify-between gap-2 md:gap-x-4 md:mt-4 overflow-auto hide-scrollbar pb-6 px-2">
          <div className="min-w-[48.5%] w-[48.5%] sm:w-[160px] md:min-w-[170px] md:w-[170px] rounded-xl overflow-hidden relative bg-white shadow-xl ">
            <div className="w-full">
              <img
                src={img4}
                alt=""
                className="w-full h-[110px] sm:h-[110px] object-cover"
              />
            </div>
            <div className="px-3 sm:px-4 my-2 mb-3 sm:my-4 ">
              <Tooltip content={"Evenning Desert Saudi Arabia, late Night"}>
                <h3 className="text-[13px] sm:text-sm font-medium line-clamp-2">
                  Evening Desert S...{" "}
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
          <div className="min-w-[48.5%] w-[48.5%] sm:w-[160px] md:min-w-[170px] md:w-[170px] rounded-xl overflow-hidden relative bg-white shadow-xl ">
            <div className="w-full">
              <img
                src={img2}
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
          <div className="min-w-[48.5%] w-[48.5%] sm:w-[160px] md:min-w-[170px] md:w-[170px] rounded-xl overflow-hidden relative bg-white shadow-xl ">
            <div className="w-full">
              <img
                src={img3}
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
          <div className="min-w-[48.5%] w-[48.5%] sm:w-[160px] md:min-w-[170px] md:w-[170px] rounded-xl overflow-hidden relative bg-white shadow-xl ">
            <div className="w-full">
              <img
                src={img2}
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
          <div className="min-w-[48.5%] w-[48.5%] sm:w-[160px] md:min-w-[170px] md:w-[170px] rounded-xl overflow-hidden relative bg-white shadow-xl ">
            <div className="w-full">
              <img
                src={img1}
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
<BottomNav></BottomNav>
    </>

  )
}

export default Category;