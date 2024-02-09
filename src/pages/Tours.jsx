import {
  Button,
  Carousel,
  IconButton,
  Navbar,
  Tooltip,
} from "@material-tailwind/react";
import { FaPlane, FaStar } from "react-icons/fa";
import { GoChevronLeft, GoChevronRight } from "react-icons/go";
import { MdOutlineAddShoppingCart } from "react-icons/md";
import img1 from "../assets/images/IMG-20240205-WA0063.jpg";
import img2 from "../assets/images/IMG-20240205-WA0067.jpg";
import img3 from "../assets/images/IMG-20240205-WA0065.jpg";
import img4 from "../assets/images/IMG-20240205-WA0070.jpg";
import Navigation from "../components/common/Navigation";
import { useState } from "react";
import Modal from "../components/Modal";
import BottomNav from "../components/common/BottomNav";
const Tours = () => {
  const [mostPopularModal, setMostPopularModal] = useState(false);
  const [priceModal, setPriceModal] = useState(false);
  const [allToursModal, setAllToursModal] = useState(false);
  return (
    <div className="pb-8">
      <Navigation></Navigation>
      {/* {
        <Carousel
          className="rounded-none relative"
          autoplay={true}
          transition={{ duration: 0.7 }}
          navigation={({ setActiveIndex, activeIndex, length }) => (
            //   <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
            //     {new Array(length).fill("").map((_, i) => (
            //       <span
            //         key={i}
            //         className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
            //           activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
            //         }`}
            //         onClick={() => setActiveIndex(i)}
            //       />
            //     ))}
            //   </div>
            <></>
          )}
          prevArrow={({ handlePrev, firstIndex }) => (
            <IconButton
              variant="text"
              color="white"
              size="lg"
              onClick={handlePrev}
              className={`!absolute bottom-2 rounded-full text-black right-12 sm:right-14 !p-0 border before:!w-[100%] bg-white hover:text-white w-[25px] sm:w-[30px] sm:h-[30px] h-[25px] ${
                firstIndex &&
                " text-richblack-50 border-richblack-25 bg-[rgba(299,299,299,0.3)] hover:bg-[rgba(299,299,299,0.3)]"
              }`}
            >
              <GoChevronLeft
                className={`text-[1.15rem] sm:text-xl font-bold ${
                  firstIndex && " text-[rgba(299,299,299,0.4)]"
                }`}
              />
            </IconButton>
          )}
          nextArrow={({ handleNext, lastIndex }) => (
            <IconButton
              variant="text"
              color="white"
              size="lg"
              onClick={handleNext}
              className={`!absolute bottom-2 rounded-full text-black right-4 !p-0 border before:!w-[100%] bg-white hover:text-white w-[25px] sm:w-[30px] sm:h-[30px] h-[25px] ${
                lastIndex &&
                " text-richblack-50 border-[rgba(299,299,299,0.2)]  hover:bg-[rgba(299,299,299,0.2)] bg-[rgba(299,299,299,0.2)]"
              }`}
            >
              <GoChevronRight
                className={`text-[1.15rem] sm:text-xl font-bold ${
                  lastIndex && " text-[rgba(299,299,299,0.4)]"
                }`}
              />
            </IconButton>
          )}
        >
          <div className="w-full h-[155px] md:h-[500px]">
            <img
              src="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80"
              alt="image 2"
              className="h-full w-full object-cover"
            />{" "}
          </div>
          <div className="w-full h-[155px] md:h-[500px] relative">
            <img
              src="https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80"
              alt="image 3"
              className="h-full w-full object-cover"
            />
          </div>
        </Carousel>
      } */}

      <div className="w-full h-[155px] md:h-[500px] hidden relative ">
        <img
          src="https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80"
          alt="image 3"
          className="h-full w-full object-cover"
        />
      </div>
      <div className="bg-deep-orange-50 py-5">
        <div className="max-w-maxWidthContent mx-auto">
          <h3 className="text-[16px] md:text-xl text-center GTE_Bold">
            Top Tours & Activities
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

      <div className="p-4 max-w-maxWidthContent mx-auto md:pt-8 pb-0">
        <div>
          <h3 className="text-sm md:text-lg font-medium flex gap-x-2 items-center">
            <FaPlane className="group-hover:text-[#ff612c]"></FaPlane>
            Top Tours in Cities
          </h3>
          <button
            className="text-xs px-3 py-1 rounded-full border border-richblack-900 text-richblack-900 mt-4"
            onClick={() => setAllToursModal(true)}
          >
            View All Tours
          </button>
        </div>
        <div>

          <div className="flex justify-between items-center pt-4 pb-2">
            <span>Result: 10</span>
  
            <div className="flex gap-y-4 min-w-fit justify-between gap-x-0 items-center">
              <div className="flex items-center">
                <span className="min-w-max mr-3 text-xs md:text-sm hidden md:block">
                  Sort By :
                </span>
                <div className="w-max flex gap-x-3 items-center md:bg-transparent md:shadow-none">
                  {/* <h3 className="text-[13px] md:text-sm GTE_light text-[#2e3844] flex gap-x-2 items-center ">
                  Most Popular
                </h3> */}
                  <span
                    className="text-xs text-richblack-900 select-none cursor-pointer GTE_light flex justify-between pr-1 items-center min-w-max px-2 py-1 border border-richblack-900 rounded-md "
                    onClick={() => setMostPopularModal(true)}
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
                    onClick={() => setPriceModal(true)}
                  >
                    Price
                    <GoChevronRight className="rotate-90 ml-3"></GoChevronRight>
                  </span>
                  {/* </div>
              </div> */}
                </div>
              </div>
            </div>
          </div>
  
          <div className="w-full">
            <div className="mt-3 flex flex-wrap justify-between gap-3 md:gap-4  md:mt-4 pb-6 ">
              <div className="min-w-[140px] w-[48%] transition-all sm:w-[160px] md:min-w-[170px] md:w-[173px] rounded-xl overflow-hidden relative bg-white shadow-xl ">
                <span className="absolute top-2 left-2 text-xs text-white bg-caribbeangreen-200 px-1 rounded-md">Adventure</span>
                <div className="w-full">
                  <img
                    src={img2}
                    alt=""
                    className="w-full h-[100px] sm:h-[100px] object-cover"
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
              <div className="min-w-[140px] w-[48%] transition-all sm:w-[160px] md:min-w-[170px] md:w-[173px] rounded-xl overflow-hidden relative bg-white shadow-xl ">
              <span className="absolute top-2 left-2 text-xs text-white bg-[#ff621c] px-1 rounded-md">City </span>
                <div className="w-full">
                  <img
                    src={img1}
                    alt=""
                    className="w-full h-[100px] sm:h-[100px] object-cover"
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
              <div className="min-w-[140px] w-[48%] transition-all sm:w-[160px] md:min-w-[170px] md:w-[173px] rounded-xl overflow-hidden relative bg-white shadow-xl ">
            
                <div className="w-full">
                  <img
                    src={img3}
                    alt=""
                    className="w-full h-[100px] sm:h-[100px] object-cover"
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
              <div className="min-w-[140px] w-[48%] transition-all sm:w-[160px] md:min-w-[170px] md:w-[173px] rounded-xl overflow-hidden relative bg-white shadow-xl ">
              <span className="absolute top-2 left-2 text-xs text-white bg-caribbeangreen-200 px-1 rounded-md">Water tour</span>
                <div className="w-full">
                  <img
                    src={img4}
                    alt=""
                    className="w-full h-[100px] sm:h-[100px] object-cover"
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
              <div className="min-w-[140px] w-[48%] transition-all sm:w-[160px] md:min-w-[170px] md:w-[173px] rounded-xl overflow-hidden relative bg-white shadow-xl ">
                <div className="w-full">
                  <img
                    src={img2}
                    alt=""
                    className="w-full h-[100px] sm:h-[100px] object-cover"
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
              <div className="min-w-[140px] w-[48%] transition-all sm:w-[160px] md:min-w-[170px] md:w-[173px] rounded-xl overflow-hidden relative bg-white shadow-xl ">
              <span className="absolute top-2 left-2 text-xs text-white bg-[#ff621c] px-1 rounded-md">City </span>
                <div className="w-full">
                  <img
                    src={img3}
                    alt=""
                    className="w-full h-[100px] sm:h-[100px] object-cover"
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
              <div className="min-w-[140px] w-[48%] transition-all sm:w-[160px] md:min-w-[170px] md:w-[173px] rounded-xl overflow-hidden relative bg-white shadow-xl ">
                <div className="w-full">
                  <img
                    src={img2}
                    alt=""
                    className="w-full h-[100px] sm:h-[100px] object-cover"
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
              <div className="min-w-[140px] w-[48%] transition-all sm:w-[160px] md:min-w-[170px] md:w-[173px] rounded-xl overflow-hidden relative bg-white shadow-xl ">
                <div className="w-full">
                  <img
                    src={img3}
                    alt=""
                    className="w-full h-[100px] sm:h-[100px] object-cover"
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
              <div className="min-w-[140px] w-[48%] transition-all sm:w-[160px] md:min-w-[170px] md:w-[173px] rounded-xl overflow-hidden relative bg-white shadow-xl ">
                <div className="w-full">
                  <img
                    src={img4}
                    alt=""
                    className="w-full h-[100px] sm:h-[100px] object-cover"
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
              <div className="min-w-[140px] w-[48%] transition-all sm:w-[160px] md:min-w-[170px] md:w-[173px] rounded-xl overflow-hidden relative bg-white shadow-xl ">
              <span className="absolute top-2 left-2 text-xs text-white bg-[#ff621c] px-1 rounded-md">City </span>
                <div className="w-full">
                  <img
                    src={img2}
                    alt=""
                    className="w-full h-[100px] sm:h-[100px] object-cover"
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
  
        </div>
        <div className="pb-4 max-w-maxWidthContent mx-auto ">
          <h3 className="text-lg md:text-lg font-medium flex gap-x-2 items-center">
            Tours Types
          </h3>
          <div className="md:mt-10 max-w-maxWidthContent mx-auto pl-0 md:px-6 flex gap-x-3 mt-2 overflow-auto hide-scrollbar">
            <div className="min-w-[110px] w-[110px] sm:w-[160px] md:w-[230px] rounded-lg ">
              <img
                src={img2}
                alt=""
                className="w-full h-[117px] object-cover rounded-lg"
              />
              <h2 className="text-sm py-2 px-3 pl-1 w-full text-richblack-900 transition-all md:text-xl md:hover:text-2xl GTE_light">
                Adventure
              </h2>
            </div>
            <div className="min-w-[110px] w-[110px] sm:w-[160px] md:w-[230px] rounded-lg ">
              <img
                src={img3}
                alt=""
                className="w-full h-[117px] object-cover rounded-lg"
              />
              <div className="">
                <h2 className="text-sm py-2 px-3 pl-1 w-full text-richblack-900 transition-all md:text-xl md:hover:text-2xl GTE_light">
                  City Tours
                </h2>
              </div>
            </div>
            <div className="min-w-[110px] w-[110px] sm:w-[160px] md:w-[230px] rounded-lg ">
              <img
                src={img1}
                alt=""
                className="w-full h-[117px] object-cover rounded-lg"
              />
              <div className="">
                <h2 className="text-sm py-2 px-3 pl-1 w-full text-richblack-900 transition-all md:text-xl md:hover:text-2xl GTE_light">
                  Water Activities
                </h2>
              </div>
            </div>
            <div className="min-w-[110px] w-[110px] sm:w-[160px] md:w-[230px] rounded-lg ">
              <img
                src={img1}
                alt=""
                className="w-full h-[117px] object-cover rounded-lg"
              />
              <div className="">
                <h2 className="text-sm py-2 px-3 pl-1 w-full text-richblack-900 transition-all md:text-xl md:hover:text-2xl GTE_light">
                  Attraction
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>


         {/* our destination  -------------------------------------------------------------------------------  */}
     <div className="md:mt-12 mb-4 max-w-[970px] mx-auto pl-3 md:px-6">
               <h1 className="text-lg md:text-2xl font-medium mt-6 md:top-0 flex justify-between items-baseline pr-2">
                <div>
                Top Tour in <span className="text-[#ff621c]">India</span>
                </div>
              <Button className="text-[10px] bg-transparent shadow-none md:text-xs font-normal rounded-lg cursor-pointer py-0 md:py-1 px-2 text-[#ff621c] border border-[#ff612c] hover:bg-[#ff7a4d] hover:text-white normal-case">See All</Button>
               
               </h1>
               <p className="text-xs md:text-sm mt-1 text-richblack-500 hidden md:block ">Experience the thrill of discovering off-the-beaten-path gems and famous landmarks in top destinations worldwide - your wanderlust awaits!</p>
               <div className="mt-3 flex gap-x-2 md:gap-x-4 md:mt-4 overflow-auto hide-scrollbar pb-6">

                    <div className="min-w-[140px] w-[130px] sm:w-[160px] md:min-w-[170px] md:w-[170px] rounded-xl overflow-hidden relative bg-white shadow-xl ">
                            <div className="w-full">
                                <img src={img4} alt="" className="w-full h-[110px] sm:h-[110px] object-cover" />
                            </div>
                            <div className="px-3 sm:px-4 my-2 mb-3 sm:my-4 ">
                                <Tooltip content={"Evenning Desert Saudi Arabia, late Night"}><h3 className="text-[13px] sm:text-sm font-medium line-clamp-2">Evening Desert S... </h3></Tooltip>
                                <h3 className="text-xs font-medium text-richblack-900 mt-1">AED 135.00</h3>
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

                                  <Button size="sm" variant="outlined" className="normal-case py-[.4rem] rounded-md w-[70px] px-2 text-[10px] sm:text-[10px] hover:bg-[#ff621c] hover:text-white text-[#ff612c] border-[#ff612c] font-normal">Book Now</Button>
                                  <button className="bg-none relative z-20 px-1 pl-2 ml-3 border-none before:w-full before:h-full before:bg-none before:hover:bg-richblack-25 before:absolute before:top-0 before:left-[1px] before:py-2 before:rounded-full before:z-0"><MdOutlineAddShoppingCart className="text-lg relative z-30 text-richblack-500"></MdOutlineAddShoppingCart></button>
                                </div>

                            </div>
                    </div>
                    <div className="min-w-[140px] w-[130px] sm:w-[160px] md:min-w-[170px] md:w-[170px] rounded-xl overflow-hidden relative bg-white shadow-xl ">
                            <div className="w-full">
                                <img src={img2} alt="" className="w-full h-[110px] sm:h-[110px] object-cover" />
                            </div>
                            <div className="px-3 sm:px-4 my-2 mb-3 sm:my-4 ">
                                <h3 className="text-[13px] sm:text-sm font-medium line-clamp-2">Evening Desert S... </h3>
                                <h3 className="text-xs font-medium text-richblack-900 mt-1">AED 135.00</h3>
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

                                  <Button size="sm" variant="outlined" className="normal-case py-[.4rem] rounded-md w-[70px] px-2 text-[10px] sm:text-[10px] hover:bg-[#ff621c] hover:text-white text-[#ff612c] border-[#ff612c] font-normal">Book Now</Button>
                                  <button className="bg-none relative z-20 px-1 pl-2 ml-3 border-none before:w-full before:h-full before:bg-none before:hover:bg-richblack-25 before:absolute before:top-0 before:left-[1px] before:py-2 before:rounded-full before:z-0"><MdOutlineAddShoppingCart className="text-lg relative z-30 text-richblack-500"></MdOutlineAddShoppingCart></button>
                                </div>
                            </div>
                    </div>
                    <div className="min-w-[140px] w-[130px] sm:w-[160px] md:min-w-[170px] md:w-[170px] rounded-xl overflow-hidden relative bg-white shadow-xl ">
                            <div className="w-full">
                                <img src={img3} alt="" className="w-full h-[110px] sm:h-[110px] object-cover" />
                            </div>
                            <div className="px-3 sm:px-4 my-2 mb-3 sm:my-4 ">
                                <h3 className="text-[13px] sm:text-sm font-medium line-clamp-2">Evening Desert S... </h3>
                                <h3 className="text-xs font-medium text-richblack-900 mt-1">AED 135.00</h3>
                                <div className="flex items-center justify-between flex-wrap sm:flex-nowrap mt-0 sm:mt-1">
                                   {/* <p className="text-[8px] text-richblack-200 flex items-center mt-1">277 Reviews</p> */}                                   <div className="flex mt-1 sm:mt-0 gap-x-1 items-center">
                                       <FaStar className="text-yellow-100 text-[8px]"></FaStar>
                                       <FaStar className="text-yellow-100 text-[8px]"></FaStar>
                                       <FaStar className="text-yellow-100 text-[8px]"></FaStar>
                                       <FaStar className="text-yellow-100 text-[8px]"></FaStar>
                                       <FaStar className="text-yellow-100 text-[8px]"></FaStar>
                                   </div>
                                </div>
                                 <div className="flex !items-strech gap-1 mt-3">

                                  <Button size="sm" variant="outlined" className="normal-case py-[.4rem] rounded-md w-[70px] px-2 text-[10px] sm:text-[10px] hover:bg-[#ff621c] hover:text-white text-[#ff612c] border-[#ff612c] font-normal">Book Now</Button>
                                  <button className="bg-none relative z-20 px-1 pl-2 ml-3 border-none before:w-full before:h-full before:bg-none before:hover:bg-richblack-25 before:absolute before:top-0 before:left-[1px] before:py-2 before:rounded-full before:z-0"><MdOutlineAddShoppingCart className="text-lg relative z-30 text-richblack-500"></MdOutlineAddShoppingCart></button>
                                </div>
                            </div>
                    </div>
                    <div className="min-w-[140px] w-[130px] sm:w-[160px] md:min-w-[170px] md:w-[170px] rounded-xl overflow-hidden relative bg-white shadow-xl ">
                            <div className="w-full">
                                <img src={img2} alt="" className="w-full h-[110px] sm:h-[110px] object-cover" />
                            </div>
                            <div className="px-3 sm:px-4 my-2 mb-3 sm:my-4 ">
                                <h3 className="text-[13px] sm:text-sm font-medium line-clamp-2">Evening Desert S... </h3>
                                <h3 className="text-xs font-medium text-richblack-900 mt-1">AED 135.00</h3>
                                <div className="flex items-center justify-between flex-wrap sm:flex-nowrap mt-0 sm:mt-1">
                                   {/* <p className="text-[8px] text-richblack-200 flex items-center mt-1">277 Reviews</p> */}                                   <div className="flex mt-1 sm:mt-0 gap-x-1 items-center">
                                       <FaStar className="text-yellow-100 text-[8px]"></FaStar>
                                       <FaStar className="text-yellow-100 text-[8px]"></FaStar>
                                       <FaStar className="text-yellow-100 text-[8px]"></FaStar>
                                       <FaStar className="text-yellow-100 text-[8px]"></FaStar>
                                       <FaStar className="text-yellow-100 text-[8px]"></FaStar>
                                   </div>
                                </div>
                                 <div className="flex !items-strech gap-1 mt-3">

                                  <Button size="sm" variant="outlined" className="normal-case py-[.4rem] rounded-md w-[70px] px-2 text-[10px] sm:text-[10px] hover:bg-[#ff621c] hover:text-white text-[#ff612c] border-[#ff612c] font-normal">Book Now</Button>
                                  <button className="bg-none relative z-20 px-1 pl-2 ml-3 border-none before:w-full before:h-full before:bg-none before:hover:bg-richblack-25 before:absolute before:top-0 before:left-[1px] before:py-2 before:rounded-full before:z-0"><MdOutlineAddShoppingCart className="text-lg relative z-30 text-richblack-500"></MdOutlineAddShoppingCart></button>
                                </div>
                            </div>
                    </div>
                    <div className="min-w-[140px] w-[130px] sm:w-[160px] md:min-w-[170px] md:w-[170px] rounded-xl overflow-hidden relative bg-white shadow-xl ">
                            <div className="w-full">
                                <img src={img1} alt="" className="w-full h-[110px] sm:h-[110px] object-cover" />
                            </div>
                            <div className="px-3 sm:px-4 my-2 mb-3 sm:my-4 ">
                                <h3 className="text-[13px] sm:text-sm font-medium line-clamp-2">Evening Desert S... </h3>
                                <h3 className="text-xs font-medium text-richblack-900 mt-1">AED 135.00</h3>
                                <div className="flex items-center justify-between flex-wrap sm:flex-nowrap mt-0 sm:mt-1">
                                   {/* <p className="text-[8px] text-richblack-200 flex items-center mt-1">277 Reviews</p> */}                                   <div className="flex mt-1 sm:mt-0 gap-x-1 items-center">
                                       <FaStar className="text-yellow-100 text-[8px]"></FaStar>
                                       <FaStar className="text-yellow-100 text-[8px]"></FaStar>
                                       <FaStar className="text-yellow-100 text-[8px]"></FaStar>
                                       <FaStar className="text-yellow-100 text-[8px]"></FaStar>
                                       <FaStar className="text-yellow-100 text-[8px]"></FaStar>
                                   </div>
                                </div>
                                 <div className="flex !items-strech gap-1 mt-3">

                                  <Button size="sm" variant="outlined" className="normal-case py-[.4rem] rounded-md w-[70px] px-2 text-[10px] sm:text-[10px] hover:bg-[#ff621c] hover:text-white text-[#ff612c] border-[#ff612c] font-normal">Book Now</Button>
                                  <button className="bg-none relative z-20 px-1 pl-2 ml-3 border-none before:w-full before:h-full before:bg-none before:hover:bg-richblack-25 before:absolute before:top-0 before:left-[1px] before:py-2 before:rounded-full before:z-0"><MdOutlineAddShoppingCart className="text-lg relative z-30 text-richblack-500"></MdOutlineAddShoppingCart></button>
                                </div>
                            </div>
                    </div>
                  
                   
                </div>
     </div>
     <div className="md:mt-12 mb-4 max-w-[970px] mx-auto pl-3 md:px-6">
               <h1 className="text-lg md:text-2xl font-medium mt-6 md:top-0 flex justify-between items-baseline pr-2">
                <div>
                Top Tour in <span className="text-caribbeangreen-100">Dubai</span>
                </div>
              <Button className="text-[10px] bg-transparent shadow-none md:text-xs font-normal rounded-lg cursor-pointer py-0 md:py-1 px-2 text-[#ff621c] border border-[#ff612c] hover:bg-[#ff7a4d] hover:text-white normal-case">See All</Button>
               
               </h1>
               <p className="text-xs md:text-sm mt-1 text-richblack-500 hidden md:block ">Experience the thrill of discovering off-the-beaten-path gems and famous landmarks in top destinations worldwide - your wanderlust awaits!</p>
               <div className="mt-3 flex gap-x-2 md:gap-x-4 md:mt-4 overflow-auto hide-scrollbar pb-6">

                    <div className="min-w-[140px] w-[130px] sm:w-[160px] md:min-w-[170px] md:w-[170px] rounded-xl overflow-hidden relative bg-white shadow-xl ">
                            <div className="w-full">
                                <img src={img4} alt="" className="w-full h-[110px] sm:h-[110px] object-cover" />
                            </div>
                            <div className="px-3 sm:px-4 my-2 mb-3 sm:my-4 ">
                                <Tooltip content={"Evenning Desert Saudi Arabia, late Night"}><h3 className="text-[13px] sm:text-sm font-medium line-clamp-2">Evening Desert S... </h3></Tooltip>
                                <h3 className="text-xs font-medium text-richblack-900 mt-1">AED 135.00</h3>
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

                                  <Button size="sm" variant="outlined" className="normal-case py-[.4rem] rounded-md w-[70px] px-2 text-[10px] sm:text-[10px] hover:bg-[#ff621c] hover:text-white text-[#ff612c] border-[#ff612c] font-normal">Book Now</Button>
                                  <button className="bg-none relative z-20 px-1 pl-2 ml-3 border-none before:w-full before:h-full before:bg-none before:hover:bg-richblack-25 before:absolute before:top-0 before:left-[1px] before:py-2 before:rounded-full before:z-0"><MdOutlineAddShoppingCart className="text-lg relative z-30 text-richblack-500"></MdOutlineAddShoppingCart></button>
                                </div>

                            </div>
                    </div>
                    <div className="min-w-[140px] w-[130px] sm:w-[160px] md:min-w-[170px] md:w-[170px] rounded-xl overflow-hidden relative bg-white shadow-xl ">
                            <div className="w-full">
                                <img src={img2} alt="" className="w-full h-[110px] sm:h-[110px] object-cover" />
                            </div>
                            <div className="px-3 sm:px-4 my-2 mb-3 sm:my-4 ">
                                <h3 className="text-[13px] sm:text-sm font-medium line-clamp-2">Evening Desert S... </h3>
                                <h3 className="text-xs font-medium text-richblack-900 mt-1">AED 135.00</h3>
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

                                  <Button size="sm" variant="outlined" className="normal-case py-[.4rem] rounded-md w-[70px] px-2 text-[10px] sm:text-[10px] hover:bg-[#ff621c] hover:text-white text-[#ff612c] border-[#ff612c] font-normal">Book Now</Button>
                                  <button className="bg-none relative z-20 px-1 pl-2 ml-3 border-none before:w-full before:h-full before:bg-none before:hover:bg-richblack-25 before:absolute before:top-0 before:left-[1px] before:py-2 before:rounded-full before:z-0"><MdOutlineAddShoppingCart className="text-lg relative z-30 text-richblack-500"></MdOutlineAddShoppingCart></button>
                                </div>
                            </div>
                    </div>
                    <div className="min-w-[140px] w-[130px] sm:w-[160px] md:min-w-[170px] md:w-[170px] rounded-xl overflow-hidden relative bg-white shadow-xl ">
                            <div className="w-full">
                                <img src={img3} alt="" className="w-full h-[110px] sm:h-[110px] object-cover" />
                            </div>
                            <div className="px-3 sm:px-4 my-2 mb-3 sm:my-4 ">
                                <h3 className="text-[13px] sm:text-sm font-medium line-clamp-2">Evening Desert S... </h3>
                                <h3 className="text-xs font-medium text-richblack-900 mt-1">AED 135.00</h3>
                                <div className="flex items-center justify-between flex-wrap sm:flex-nowrap mt-0 sm:mt-1">
                                   {/* <p className="text-[8px] text-richblack-200 flex items-center mt-1">277 Reviews</p> */}                                   <div className="flex mt-1 sm:mt-0 gap-x-1 items-center">
                                       <FaStar className="text-yellow-100 text-[8px]"></FaStar>
                                       <FaStar className="text-yellow-100 text-[8px]"></FaStar>
                                       <FaStar className="text-yellow-100 text-[8px]"></FaStar>
                                       <FaStar className="text-yellow-100 text-[8px]"></FaStar>
                                       <FaStar className="text-yellow-100 text-[8px]"></FaStar>
                                   </div>
                                </div>
                                 <div className="flex !items-strech gap-1 mt-3">

                                  <Button size="sm" variant="outlined" className="normal-case py-[.4rem] rounded-md w-[70px] px-2 text-[10px] sm:text-[10px] hover:bg-[#ff621c] hover:text-white text-[#ff612c] border-[#ff612c] font-normal">Book Now</Button>
                                  <button className="bg-none relative z-20 px-1 pl-2 ml-3 border-none before:w-full before:h-full before:bg-none before:hover:bg-richblack-25 before:absolute before:top-0 before:left-[1px] before:py-2 before:rounded-full before:z-0"><MdOutlineAddShoppingCart className="text-lg relative z-30 text-richblack-500"></MdOutlineAddShoppingCart></button>
                                </div>
                            </div>
                    </div>
                    <div className="min-w-[140px] w-[130px] sm:w-[160px] md:min-w-[170px] md:w-[170px] rounded-xl overflow-hidden relative bg-white shadow-xl ">
                            <div className="w-full">
                                <img src={img2} alt="" className="w-full h-[110px] sm:h-[110px] object-cover" />
                            </div>
                            <div className="px-3 sm:px-4 my-2 mb-3 sm:my-4 ">
                                <h3 className="text-[13px] sm:text-sm font-medium line-clamp-2">Evening Desert S... </h3>
                                <h3 className="text-xs font-medium text-richblack-900 mt-1">AED 135.00</h3>
                                <div className="flex items-center justify-between flex-wrap sm:flex-nowrap mt-0 sm:mt-1">
                                   {/* <p className="text-[8px] text-richblack-200 flex items-center mt-1">277 Reviews</p> */}                                   <div className="flex mt-1 sm:mt-0 gap-x-1 items-center">
                                       <FaStar className="text-yellow-100 text-[8px]"></FaStar>
                                       <FaStar className="text-yellow-100 text-[8px]"></FaStar>
                                       <FaStar className="text-yellow-100 text-[8px]"></FaStar>
                                       <FaStar className="text-yellow-100 text-[8px]"></FaStar>
                                       <FaStar className="text-yellow-100 text-[8px]"></FaStar>
                                   </div>
                                </div>
                                 <div className="flex !items-strech gap-1 mt-3">

                                  <Button size="sm" variant="outlined" className="normal-case py-[.4rem] rounded-md w-[70px] px-2 text-[10px] sm:text-[10px] hover:bg-[#ff621c] hover:text-white text-[#ff612c] border-[#ff612c] font-normal">Book Now</Button>
                                  <button className="bg-none relative z-20 px-1 pl-2 ml-3 border-none before:w-full before:h-full before:bg-none before:hover:bg-richblack-25 before:absolute before:top-0 before:left-[1px] before:py-2 before:rounded-full before:z-0"><MdOutlineAddShoppingCart className="text-lg relative z-30 text-richblack-500"></MdOutlineAddShoppingCart></button>
                                </div>
                            </div>
                    </div>
                    <div className="min-w-[140px] w-[130px] sm:w-[160px] md:min-w-[170px] md:w-[170px] rounded-xl overflow-hidden relative bg-white shadow-xl ">
                            <div className="w-full">
                                <img src={img1} alt="" className="w-full h-[110px] sm:h-[110px] object-cover" />
                            </div>
                            <div className="px-3 sm:px-4 my-2 mb-3 sm:my-4 ">
                                <h3 className="text-[13px] sm:text-sm font-medium line-clamp-2">Evening Desert S... </h3>
                                <h3 className="text-xs font-medium text-richblack-900 mt-1">AED 135.00</h3>
                                <div className="flex items-center justify-between flex-wrap sm:flex-nowrap mt-0 sm:mt-1">
                                   {/* <p className="text-[8px] text-richblack-200 flex items-center mt-1">277 Reviews</p> */}                                   <div className="flex mt-1 sm:mt-0 gap-x-1 items-center">
                                       <FaStar className="text-yellow-100 text-[8px]"></FaStar>
                                       <FaStar className="text-yellow-100 text-[8px]"></FaStar>
                                       <FaStar className="text-yellow-100 text-[8px]"></FaStar>
                                       <FaStar className="text-yellow-100 text-[8px]"></FaStar>
                                       <FaStar className="text-yellow-100 text-[8px]"></FaStar>
                                   </div>
                                </div>
                                 <div className="flex !items-strech gap-1 mt-3">

                                  <Button size="sm" variant="outlined" className="normal-case py-[.4rem] rounded-md w-[70px] px-2 text-[10px] sm:text-[10px] hover:bg-[#ff621c] hover:text-white text-[#ff612c] border-[#ff612c] font-normal">Book Now</Button>
                                  <button className="bg-none relative z-20 px-1 pl-2 ml-3 border-none before:w-full before:h-full before:bg-none before:hover:bg-richblack-25 before:absolute before:top-0 before:left-[1px] before:py-2 before:rounded-full before:z-0"><MdOutlineAddShoppingCart className="text-lg relative z-30 text-richblack-500"></MdOutlineAddShoppingCart></button>
                                </div>
                            </div>
                    </div>
                </div>
     </div>
     <div className="md:mt-12 mb-4 max-w-[970px] mx-auto pl-3 md:px-6">
               <h1 className="text-lg md:text-2xl font-medium mt-6 md:top-0 flex justify-between items-baseline pr-2">
                <div>
                Top Tour in <span className="text-[#ff621c]">Europe</span>
                </div>
              <Button className="text-[10px] bg-transparent shadow-none md:text-xs font-normal rounded-lg cursor-pointer py-0 md:py-1 px-2 text-[#ff621c] border border-[#ff612c] hover:bg-[#ff7a4d] hover:text-white normal-case">See All</Button>
               
               </h1>
               <p className="text-xs md:text-sm mt-1 text-richblack-500 hidden md:block ">Experience the thrill of discovering off-the-beaten-path gems and famous landmarks in top destinations worldwide - your wanderlust awaits!</p>
               <div className="mt-3 flex gap-x-2 md:gap-x-4 md:mt-4 overflow-auto hide-scrollbar pb-6">

                    <div className="min-w-[140px] w-[130px] sm:w-[160px] md:min-w-[170px] md:w-[170px] rounded-xl overflow-hidden relative bg-white shadow-xl ">
                            <div className="w-full">
                                <img src={img4} alt="" className="w-full h-[110px] sm:h-[110px] object-cover" />
                            </div>
                            <div className="px-3 sm:px-4 my-2 mb-3 sm:my-4 ">
                                <Tooltip content={"Evenning Desert Saudi Arabia, late Night"}><h3 className="text-[13px] sm:text-sm font-medium line-clamp-2">Evening Desert S... </h3></Tooltip>
                                <h3 className="text-xs font-medium text-richblack-900 mt-1">AED 135.00</h3>
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

                                  <Button size="sm" variant="outlined" className="normal-case py-[.4rem] rounded-md w-[70px] px-2 text-[10px] sm:text-[10px] hover:bg-[#ff621c] hover:text-white text-[#ff612c] border-[#ff612c] font-normal">Book Now</Button>
                                  <button className="bg-none relative z-20 px-1 pl-2 ml-3 border-none before:w-full before:h-full before:bg-none before:hover:bg-richblack-25 before:absolute before:top-0 before:left-[1px] before:py-2 before:rounded-full before:z-0"><MdOutlineAddShoppingCart className="text-lg relative z-30 text-richblack-500"></MdOutlineAddShoppingCart></button>
                                </div>

                            </div>
                    </div>
                    <div className="min-w-[140px] w-[130px] sm:w-[160px] md:min-w-[170px] md:w-[170px] rounded-xl overflow-hidden relative bg-white shadow-xl ">
                            <div className="w-full">
                                <img src={img2} alt="" className="w-full h-[110px] sm:h-[110px] object-cover" />
                            </div>
                            <div className="px-3 sm:px-4 my-2 mb-3 sm:my-4 ">
                                <h3 className="text-[13px] sm:text-sm font-medium line-clamp-2">Evening Desert S... </h3>
                                <h3 className="text-xs font-medium text-richblack-900 mt-1">AED 135.00</h3>
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

                                  <Button size="sm" variant="outlined" className="normal-case py-[.4rem] rounded-md w-[70px] px-2 text-[10px] sm:text-[10px] hover:bg-[#ff621c] hover:text-white text-[#ff612c] border-[#ff612c] font-normal">Book Now</Button>
                                  <button className="bg-none relative z-20 px-1 pl-2 ml-3 border-none before:w-full before:h-full before:bg-none before:hover:bg-richblack-25 before:absolute before:top-0 before:left-[1px] before:py-2 before:rounded-full before:z-0"><MdOutlineAddShoppingCart className="text-lg relative z-30 text-richblack-500"></MdOutlineAddShoppingCart></button>
                                </div>
                            </div>
                    </div>
                    <div className="min-w-[140px] w-[130px] sm:w-[160px] md:min-w-[170px] md:w-[170px] rounded-xl overflow-hidden relative bg-white shadow-xl ">
                            <div className="w-full">
                                <img src={img3} alt="" className="w-full h-[110px] sm:h-[110px] object-cover" />
                            </div>
                            <div className="px-3 sm:px-4 my-2 mb-3 sm:my-4 ">
                                <h3 className="text-[13px] sm:text-sm font-medium line-clamp-2">Evening Desert S... </h3>
                                <h3 className="text-xs font-medium text-richblack-900 mt-1">AED 135.00</h3>
                                <div className="flex items-center justify-between flex-wrap sm:flex-nowrap mt-0 sm:mt-1">
                                   {/* <p className="text-[8px] text-richblack-200 flex items-center mt-1">277 Reviews</p> */}                                   <div className="flex mt-1 sm:mt-0 gap-x-1 items-center">
                                       <FaStar className="text-yellow-100 text-[8px]"></FaStar>
                                       <FaStar className="text-yellow-100 text-[8px]"></FaStar>
                                       <FaStar className="text-yellow-100 text-[8px]"></FaStar>
                                       <FaStar className="text-yellow-100 text-[8px]"></FaStar>
                                       <FaStar className="text-yellow-100 text-[8px]"></FaStar>
                                   </div>
                                </div>
                                 <div className="flex !items-strech gap-1 mt-3">

                                  <Button size="sm" variant="outlined" className="normal-case py-[.4rem] rounded-md w-[70px] px-2 text-[10px] sm:text-[10px] hover:bg-[#ff621c] hover:text-white text-[#ff612c] border-[#ff612c] font-normal">Book Now</Button>
                                  <button className="bg-none relative z-20 px-1 pl-2 ml-3 border-none before:w-full before:h-full before:bg-none before:hover:bg-richblack-25 before:absolute before:top-0 before:left-[1px] before:py-2 before:rounded-full before:z-0"><MdOutlineAddShoppingCart className="text-lg relative z-30 text-richblack-500"></MdOutlineAddShoppingCart></button>
                                </div>
                            </div>
                    </div>
                    <div className="min-w-[140px] w-[130px] sm:w-[160px] md:min-w-[170px] md:w-[170px] rounded-xl overflow-hidden relative bg-white shadow-xl ">
                            <div className="w-full">
                                <img src={img2} alt="" className="w-full h-[110px] sm:h-[110px] object-cover" />
                            </div>
                            <div className="px-3 sm:px-4 my-2 mb-3 sm:my-4 ">
                                <h3 className="text-[13px] sm:text-sm font-medium line-clamp-2">Evening Desert S... </h3>
                                <h3 className="text-xs font-medium text-richblack-900 mt-1">AED 135.00</h3>
                                <div className="flex items-center justify-between flex-wrap sm:flex-nowrap mt-0 sm:mt-1">
                                   {/* <p className="text-[8px] text-richblack-200 flex items-center mt-1">277 Reviews</p> */}                                   <div className="flex mt-1 sm:mt-0 gap-x-1 items-center">
                                       <FaStar className="text-yellow-100 text-[8px]"></FaStar>
                                       <FaStar className="text-yellow-100 text-[8px]"></FaStar>
                                       <FaStar className="text-yellow-100 text-[8px]"></FaStar>
                                       <FaStar className="text-yellow-100 text-[8px]"></FaStar>
                                       <FaStar className="text-yellow-100 text-[8px]"></FaStar>
                                   </div>
                                </div>
                                 <div className="flex !items-strech gap-1 mt-3">

                                  <Button size="sm" variant="outlined" className="normal-case py-[.4rem] rounded-md w-[70px] px-2 text-[10px] sm:text-[10px] hover:bg-[#ff621c] hover:text-white text-[#ff612c] border-[#ff612c] font-normal">Book Now</Button>
                                  <button className="bg-none relative z-20 px-1 pl-2 ml-3 border-none before:w-full before:h-full before:bg-none before:hover:bg-richblack-25 before:absolute before:top-0 before:left-[1px] before:py-2 before:rounded-full before:z-0"><MdOutlineAddShoppingCart className="text-lg relative z-30 text-richblack-500"></MdOutlineAddShoppingCart></button>
                                </div>
                            </div>
                    </div>
                    <div className="min-w-[140px] w-[130px] sm:w-[160px] md:min-w-[170px] md:w-[170px] rounded-xl overflow-hidden relative bg-white shadow-xl ">
                            <div className="w-full">
                                <img src={img1} alt="" className="w-full h-[110px] sm:h-[110px] object-cover" />
                            </div>
                            <div className="px-3 sm:px-4 my-2 mb-3 sm:my-4 ">
                                <h3 className="text-[13px] sm:text-sm font-medium line-clamp-2">Evening Desert S... </h3>
                                <h3 className="text-xs font-medium text-richblack-900 mt-1">AED 135.00</h3>
                                <div className="flex items-center justify-between flex-wrap sm:flex-nowrap mt-0 sm:mt-1">
                                   {/* <p className="text-[8px] text-richblack-200 flex items-center mt-1">277 Reviews</p> */}                                   <div className="flex mt-1 sm:mt-0 gap-x-1 items-center">
                                       <FaStar className="text-yellow-100 text-[8px]"></FaStar>
                                       <FaStar className="text-yellow-100 text-[8px]"></FaStar>
                                       <FaStar className="text-yellow-100 text-[8px]"></FaStar>
                                       <FaStar className="text-yellow-100 text-[8px]"></FaStar>
                                       <FaStar className="text-yellow-100 text-[8px]"></FaStar>
                                   </div>
                                </div>
                                 <div className="flex !items-strech gap-1 mt-3">

                                  <Button size="sm" variant="outlined" className="normal-case py-[.4rem] rounded-md w-[70px] px-2 text-[10px] sm:text-[10px] hover:bg-[#ff621c] hover:text-white text-[#ff612c] border-[#ff612c] font-normal">Book Now</Button>
                                  <button className="bg-none relative z-20 px-1 pl-2 ml-3 border-none before:w-full before:h-full before:bg-none before:hover:bg-richblack-25 before:absolute before:top-0 before:left-[1px] before:py-2 before:rounded-full before:z-0"><MdOutlineAddShoppingCart className="text-lg relative z-30 text-richblack-500"></MdOutlineAddShoppingCart></button>
                                </div>
                            </div>
                    </div>
                  
                   
                </div>
     </div>

      {mostPopularModal && (
        <Modal
          title={
            <div className="flex items-center gap-x-2 GTE_light">
              Most Popular
            </div>
          }
          setModal={setMostPopularModal}
        >
          <div className="w-fit mx-auto">
            <div className="flex justify-start flex-wrap px-1 gap-y-1 my-2"></div>
          </div>
        </Modal>
      )}
      {/*---------------------------------- Open Service Modal ---------------------------- */}
      {priceModal && (
        <Modal
          title={
            <div className="flex items-center gap-x-2 GTE_light"> Price</div>
          }
          setModal={setPriceModal}
        >
          <div className="w-fit mx-auto">
            <div className="flex justify-start flex-wrap px-1 gap-y-1 my-2"></div>
          </div>
        </Modal>
      )}
      {allToursModal && (
        <Modal
          title={
            <div className="flex items-center gap-x-2 GTE_light">All Tours</div>
          }
          setModal={setAllToursModal}
        >
          <div className="px-2">
            <input
              type="search"
              placeholder="Search Tour ..."
              className="text-xs placeholder:text-richblack-500 outline-none my-2 px-4 w-full py-2 border rounded-lg GTE_light"
            />
          </div>
          <div className="w-full max-h-[79vh] overflow-auto hide-scrollbar px-2">
            <div className="mt-3 flex flex-wrap justify-between gap-3 md:gap-4 md:mt-4 pb-3 ">
              <div className="min-w-[140px] w-[48%] transition-all sm:w-[160px] md:min-w-[170px] md:w-[173px] rounded-xl overflow-hidden relative bg-white shadow-xl ">
                <div className="w-full">
                  <img
                    src={img2}
                    alt=""
                    className="w-full h-[100px] sm:h-[100px] object-cover"
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
              <div className="min-w-[140px] w-[48%] transition-all sm:w-[160px] md:min-w-[170px] md:w-[173px] rounded-xl overflow-hidden relative bg-white shadow-xl ">
                <div className="w-full">
                  <img
                    src={img1}
                    alt=""
                    className="w-full h-[100px] sm:h-[100px] object-cover"
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
              <div className="min-w-[140px] w-[48%] transition-all sm:w-[160px] md:min-w-[170px] md:w-[173px] rounded-xl overflow-hidden relative bg-white shadow-xl ">
                <div className="w-full">
                  <img
                    src={img3}
                    alt=""
                    className="w-full h-[100px] sm:h-[100px] object-cover"
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
              <div className="min-w-[140px] w-[48%] transition-all sm:w-[160px] md:min-w-[170px] md:w-[173px] rounded-xl overflow-hidden relative bg-white shadow-xl ">
                <div className="w-full">
                  <img
                    src={img4}
                    alt=""
                    className="w-full h-[100px] sm:h-[100px] object-cover"
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
              <div className="min-w-[140px] w-[48%] transition-all sm:w-[160px] md:min-w-[170px] md:w-[173px] rounded-xl overflow-hidden relative bg-white shadow-xl ">
                <div className="w-full">
                  <img
                    src={img2}
                    alt=""
                    className="w-full h-[100px] sm:h-[100px] object-cover"
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
              <div className="min-w-[140px] w-[48%] transition-all sm:w-[160px] md:min-w-[170px] md:w-[173px] rounded-xl overflow-hidden relative bg-white shadow-xl ">
                <div className="w-full">
                  <img
                    src={img3}
                    alt=""
                    className="w-full h-[100px] sm:h-[100px] object-cover"
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
              <div className="min-w-[140px] w-[48%] transition-all sm:w-[160px] md:min-w-[170px] md:w-[173px] rounded-xl overflow-hidden relative bg-white shadow-xl ">
                <div className="w-full">
                  <img
                    src={img2}
                    alt=""
                    className="w-full h-[100px] sm:h-[100px] object-cover"
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
              <div className="min-w-[140px] w-[48%] transition-all sm:w-[160px] md:min-w-[170px] md:w-[173px] rounded-xl overflow-hidden relative bg-white shadow-xl ">
                <div className="w-full">
                  <img
                    src={img3}
                    alt=""
                    className="w-full h-[100px] sm:h-[100px] object-cover"
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
              <div className="min-w-[140px] w-[48%] transition-all sm:w-[160px] md:min-w-[170px] md:w-[173px] rounded-xl overflow-hidden relative bg-white shadow-xl ">
                <div className="w-full">
                  <img
                    src={img4}
                    alt=""
                    className="w-full h-[100px] sm:h-[100px] object-cover"
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
              <div className="min-w-[140px] w-[48%] transition-all sm:w-[160px] md:min-w-[170px] md:w-[173px] rounded-xl overflow-hidden relative bg-white shadow-xl ">
                <div className="w-full">
                  <img
                    src={img2}
                    alt=""
                    className="w-full h-[100px] sm:h-[100px] object-cover"
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
        </Modal>
      )}

      <BottomNav></BottomNav>
    </div>
  );
};

export default Tours;
