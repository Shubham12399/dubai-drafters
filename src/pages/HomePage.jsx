import { useState } from "react";
import BottomNav from "../components/common/BottomNav";
import Navigation from "../components/common/Navigation";
import HeaderSection from "../components/core/home/HeaderSection";
import img1 from "../assets/images/IMG-20240205-WA0063.jpg";
import img2 from "../assets/images/IMG-20240205-WA0067.jpg";
import img3 from "../assets/images/IMG-20240205-WA0065.jpg";
import img4 from "../assets/images/IMG-20240205-WA0070.jpg";
import Modal from "../components/Modal";
import { IoEarth } from "react-icons/io5";
import {
  FaCity,
  FaFileAlt,
  FaFileSignature,
  FaHotel,
  FaPlane,
} from "react-icons/fa";
import {AnimatePresence, motion} from "framer-motion";
import { MdOutlineAddShoppingCart } from "react-icons/md";
import {
  Button,
  ButtonGroup,
  Carousel,
  IconButton,
  Tooltip,
} from "@material-tailwind/react";
import { FaAngleLeft, FaAngleRight, FaArrowLeft, FaStar } from "react-icons/fa";
import { GoChevronRight } from "react-icons/go";
import { Link, useNavigate } from "react-router-dom";
import Destinations from "../data/Destinations";
import TourType from "../data/TourType";
import DestinationModal from "../components/common/DestinationModal";
import SelectModal from "../components/common/SelectModal";
import TourCard from "../components/common/TourCard";
import locationIcon from "../assets/images/icons8-location.gif";
import mapIcon from "../assets/images/icons8-map-marker.gif";

const HomePage = () => {
  const [selectionType, setSelectionType] = useState([]);
  const [selectType, setSelectType] = useState(false);
  const [destinationValue, setDestinationValue] = useState({});
  const [isModal, setIsModal] = useState(false);
  const [tourType, setTourType] = useState({});
  const navigate = useNavigate();

  // console.log(setSelectionType);
  const handleSelectionType = (typeString, setStateFun, stateValue) => {
    setSelectionType([typeString, setStateFun, stateValue]);
    setIsModal(true);
  };

  // const handleChanges = (type , selectedData) => {
  //   if(type == "Destination"){
  //     setDestination({...selectedData});
  //   setIsDestinationModal(false);
  //   }
  //   if(type == "tourType"){
  //     setTourType({...selectedData});
  //     setSelectType(false)
  //   }
  // }
  return (
    <div className="">
      <Navigation></Navigation>
      <div className="w-full">
        {/* ------------------------------Header section ----------------------------------------------------- */}
        <HeaderSection></HeaderSection>

        {/*--------------------------------------------------- action center ------------------------------------- */}
        <div className="mb-3">
          <h1 className="text-center text-lg md:text-2xl font-medium pt-4 md:pt-10 hidden md:block ">
            Enjoy the, Dream Place Now!
          </h1>
          <p className="max-w-maxContentTab text-[10px] px-4 md:px-0 md:text-sm text-richblack-300 text-center mx-auto hidden md:block ">
            Let&apos;s checkout the latest Tourism Places. To book a ticket fill
            some boxes{" "}
          </p>
          <div className=" mt-2">
            <div className="relative py-4 md:py-6 mb-4 px-2 pl-4 md:pl-2 max-w-maxContent mx-1 md:m-0 md:pb-9 sm:!mx-auto md:rounded-none md:shadow-none border border-[#ff621c] md:border-none rounded-xl bg-white md:bg-transparent ">
              <div className="max-w-[850px] mx-auto lg:mt-6 grid grid-cols-[40%_30%_30%] md:grid-cols-[repeat(3,_minmax(0,_1fr))_130px_130px] md:border border-[#08aca0] md:px-6 md:rounded-full md:py-7 md:!pr-0 gap-y-2 md:gap-x-0 md:!gap-0 ">
                <div className="flex sm:pl-2 md:border-r border-[#08aca0] mr-1">
                  <div className="w-full md:w-full md:bg-transparent md:shadow-none">
                    <h3 className="text-[13px] md:text-sm font-medium text-[#2e3844] flex gap-x-2 items-center  after:w-[34%] ">
                      Destination
                      <span>
                        <img src={locationIcon} alt="" className="w-[50px]"/>
                      </span>
                      {/* after:h-[3px] after:bg-[#ff621c] after:rounded-lg md:after:hidden
after:h-[3px] after:bg-[#ff621c] after:rounded-lg md:after:hidden
after:h-[3px] after:bg-[#ff621c] after:rounded-lg md:after:hidden
after:h-[3px] after:bg-[#ff621c] after:rounded-lg md:after:hidden */}
                    </h3>
                    <span
                      className="text-xs text-richblack-200 select-none cursor-pointer GTE_light flex justify-between pr-1 mt-1 items-center w-full max-w-[120px] md:max-w-full md:pr-6"
                      onClick={() => {
                        handleSelectionType(
                          "tourDestination",
                          setDestinationValue,
                          destinationValue
                        );
                      }}
                    >
                      {destinationValue?.name ? (
                        <span className="text-richblack-900">
                          {" "}
                          {destinationValue?.name}{" "}
                        </span>
                      ) : (
                        <>Search Location</>
                      )}{" "}
                      <GoChevronRight className="rotate-90  ml-0 md:ml-8"></GoChevronRight>
                    </span>
                  </div>
                </div>
                <div className="flex md:pl-7 md:border-r md:border-[#08aca0]  pl-1">
                  <div className="w-full rounded-lg bg-white md:pl-0 md:bg-transparent md:shadow-none ">
                    <h3 className="text-[13px] md:text-sm font-medium text-[#2e3844] flex gap-x-2 items-center after:w-[50%]  ">
                      Type
                      <span>
                        <img src={mapIcon} alt="" className="w-[40px]"/>
                      </span>
                    </h3>
                    <span
                      className="text-xs text-richblack-200 select-none cursor-pointer GTE_light flex justify-between pr-1 mt-1 w-full items-center max-w-[120px] "
                      onClick={() => {
                        handleSelectionType("tourType", setTourType, tourType);
                      }}
                    >
                      {tourType?.name ? (
                        <span className="text-richblack-900">
                          {" "}
                          {tourType?.name}{" "}
                        </span>
                      ) : (
                        <>Tour Type</>
                      )}{" "}
                      <GoChevronRight className="rotate-90"></GoChevronRight>
                    </span>
                  </div>
                </div>
                <div className="hidden md:flex md:pl-7 md:border-r border-[#08aca0]  ">
                  <div className="w-full md:w-fit p-2 rounded-lg bg-white md:p-0 md:bg-transparent md:shadow-none pl-3">
                    <h3 className="text-[10px] sm:text-[13px] md:text-sm font-bold text-[#2e3844] flex gap-x-2 items-center after:w-full  ">
                      Date
                    </h3>
                    <span className="text-[10px] md:text-xs text-richblack-200 select-none cursor-pointer GTE_light block mt-1">
                      Type Date
                    </span>
                  </div>
                </div>
                <div className=" hidden md:flex md:pl-7  ">
                  <div className="w-full md:w-fit p-2 rounded-lg bg-white md:p-0 md:bg-transparent md:shadow-none pl-3">
                    <h3 className="text-[10px] sm:text-[13px] md:text-sm font-bold text-[#2e3844] flex gap-x-2 items-center after:w-full  ">
                      Guest
                    </h3>
                    <span className="text-[10px] md:text-xs text-richblack-200 select-none cursor-pointer GTE_light flex justify-between pr-1 mt-1 w-fit items-center ">
                      1 Guest{" "}
                      <GoChevronRight className="rotate-90 text-[10px] ml-12"></GoChevronRight>
                    </span>
                  </div>
                </div>

                <div className="flex md:ml-4 w-full md:col-span-1 md:px-0 items-center ml-3">
                  <Button
                    size="sm"
                    className="normal-case w-[80px] bg-[#ff621c] text-white text-xs rounded-full md:rounded-full font-medium !px-0 md:px-4 "
                    onClick={() => {
                      if (!destinationValue?.name || !tourType?.name) return;
                      navigate(
                        `/searched?destination=${destinationValue?.name}&tourType=${tourType?.name}`
                      );
                    }}
                  >
                    Find Trip
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* All Sections  */}

        {/* Choose Destination  ------------------------------------------------------------------------------- */}
        <div className="mt-6 md:mt-12 max-w-maxWidthContent mx-auto my-0 pl-3 md:px-6">
          <h1 className="text-lg md:text-2xl font-medium">
            Choose Destination{" "}
          </h1>

          {/* Tags */}
          <div className="flex overflow-auto gap-2 my-2 hide-scrollbar ">
            <div className="min-w-fit w-fit px-3 py-2 text-[13px] md:text-sm text-richblack-800 hover:text-white hover:bg-[#ff621c] bg-[#ff621c] text-white rounded-md cursor-pointer transition-all border">
              All
            </div>
            <div className="min-w-fit w-fit px-3 py-2 bg-white text-[13px] md:text-sm text-richblack-800 hover:text-white hover:bg-[#ff621c] rounded-md cursor-pointer transition-all border GTE_light">
              USA
            </div>
            <div className="min-w-fit w-fit px-3 py-2 bg-white text-[13px] md:text-sm text-richblack-800 hover:text-white hover:bg-[#ff621c] rounded-md cursor-pointer transition-all border GTE_light">
              England
            </div>
            <div className="min-w-fit w-fit px-3 py-2 bg-white text-[13px] md:text-sm text-richblack-800 hover:text-white hover:bg-[#ff621c] rounded-md cursor-pointer transition-all border GTE_light">
              Egypt
            </div>
            <div className="min-w-fit w-fit px-3 py-2 bg-white text-[13px] md:text-sm text-richblack-800 hover:text-white hover:bg-[#ff621c] rounded-md cursor-pointer transition-all border GTE_light">
              India
            </div>
            <div className="min-w-fit w-fit px-3 py-2 bg-white text-[13px] md:text-sm text-richblack-800 hover:text-white hover:bg-[#ff621c] rounded-md cursor-pointer transition-all border GTE_light">
              Europe
            </div>
            <div className="min-w-fit w-fit px-3 py-2 bg-white text-[13px] md:text-sm text-richblack-800 hover:text-white hover:bg-[#ff621c] rounded-md cursor-pointer transition-all border GTE_light">
              America
            </div>
          </div>

          <div className="">
            {/* <h1 className="text-lg md:text-2xl font-medium">America</h1> */}

            <div className="my-3 mt-6 flex gap-x-2 md:gap-x-4 md:mt-6 overflow-auto hide-scrollbar">
              <div className="min-w-[140px] w-[140px] h-[170px] sm:w-[160px] sm:h-[200px] md:w-[230px] md:h-[280px] rounded-lg overflow-hidden relative " onClick={() => navigate("/city/city1")}>
                <img
                  loading="lazy" src={img2} alt="" className="w-full h-full object-cover" />
                <div className="absolute w-full h-full bottom-0 left-0 flex items-end bg-gradient-to-b from-transparent via-transparent to-black">
                  <h2 className="text-white text-[16px] pb-3 px-3 pl-4 w-full hover:text-[18px] transition-all md:text-xl md:hover:text-2xl GTE_light">
                    Abu Dhabi
                  </h2>
                </div>
              </div>
              <div className="min-w-[140px] w-[140px] h-[170px] sm:w-[160px] sm:h-[200px] md:w-[230px] md:h-[280px] rounded-lg overflow-hidden relative ">
                <img
                  loading="lazy" src={img3} alt="" className="w-full h-full object-cover" />
                <div className="absolute w-full h-full bottom-0 left-0 flex items-end bg-gradient-to-b from-transparent via-transparent to-black">
                  <h2 className="text-white text-[16px] pb-3 px-3 pl-4 w-full hover:text-[18px] transition-all md:text-xl md:hover:text-2xl GTE_light">
                    Dubai
                  </h2>
                </div>
              </div>
              <div className="min-w-[140px] w-[140px] h-[170px] sm:w-[160px] sm:h-[200px] md:w-[230px] md:h-[280px] rounded-lg overflow-hidden relative ">
                <img
                  loading="lazy" src={img1} alt="" className="w-full h-full object-cover" />
                <div className="absolute w-full h-full bottom-0 left-0 flex items-end bg-gradient-to-b from-transparent via-transparent to-black">
                  <h2 className="text-white text-[16px] pb-3 px-3 pl-4 w-full hover:text-[18px] transition-all md:text-xl md:hover:text-2xl GTE_light">
                    Raj Sthan
                  </h2>
                </div>
              </div>
              <div className="min-w-[140px] w-[140px] h-[170px] sm:w-[160px] sm:h-[200px] md:w-[230px] md:h-[280px] rounded-lg overflow-hidden relative ">
                <img
                  loading="lazy" src={img1} alt="" className="w-full h-full object-cover" />
                <div className="absolute w-full h-full bottom-0 left-0 flex items-end bg-gradient-to-b from-transparent via-transparent to-black">
                  <h2 className="text-white text-[16px] pb-3 px-3 pl-4 w-full hover:text-[18px] transition-all md:text-xl md:hover:text-2xl GTE_light">
                    Raj Sthan
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>

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
              tourImg={img2}
              tourPrice={355.0}
              starsCount={4}
            ></TourCard>
            <div className="min-w-[140px] w-[130px] sm:w-[160px] md:min-w-[170px] md:w-[170px] rounded-xl overflow-hidden relative bg-white shadow-md">
              <div className="w-full">
                <img
                  loading="lazy"
                  src={img4}
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
            <div className="min-w-[140px] w-[130px] sm:w-[160px] md:min-w-[170px] md:w-[170px] rounded-xl overflow-hidden relative bg-white shadow-md">
              <div className="w-full">
                <img
                  loading="lazy"
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
            <div className="min-w-[140px] w-[130px] sm:w-[160px] md:min-w-[170px] md:w-[170px] rounded-xl overflow-hidden relative bg-white shadow-md">
              <div className="w-full">
                <img
                  loading="lazy"
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
            <div className="min-w-[140px] w-[130px] sm:w-[160px] md:min-w-[170px] md:w-[170px] rounded-xl overflow-hidden relative bg-white shadow-md">
              <div className="w-full">
                <img
                  loading="lazy"
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

        {/* our Experiances -------------------------------------------------------------------------------  */}
        <div className="md:mt-12 mb-4 md:my-0 max-w-[970px] mx-auto mt-2 pl-3 md:px-6">
          <h1 className="text-lg md:text-2xl font-medium flex justify-between items-baseline pr-2">
            Most Popular Experiences
            <Button className="text-[10px] bg-transparent shadow-none md:text-xs font-normal rounded-lg cursor-pointer py-0 md:py-1 px-2 text-[#ff621c] border border-[#ff612c] hover:bg-[#ff7a4d] hover:text-white normal-case">
              See All
            </Button>
          </h1>
          <p className="text-xs md:text-sm mt-1 text-richblack-500 hidden md:block ">
            Culture, nature, thrills, and record-breaking experiences—Dubai is
            the place to seek out everything you imagine and beyond. Find it all
            her!
          </p>
          <div className="mt-3 flex gap-x-2 md:gap-x-4 md:mt-4 overflow-auto hide-scrollbar pb-6">
            <div className="min-w-[140px] w-[130px] sm:w-[160px] md:min-w-[170px] md:w-[170px] rounded-xl overflow-hidden relative bg-white shadow-md">
              <div className="w-full">
                <img
                  loading="lazy"
                  src={img2}
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
            <div className="min-w-[140px] w-[130px] sm:w-[160px] md:min-w-[170px] md:w-[170px] rounded-xl overflow-hidden relative bg-white shadow-md">
              <div className="w-full">
                <img
                  loading="lazy"
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
            <div className="min-w-[140px] w-[130px] sm:w-[160px] md:min-w-[170px] md:w-[170px] rounded-xl overflow-hidden relative bg-white shadow-md">
              <div className="w-full">
                <img
                  loading="lazy"
                  src={img4}
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
          </div>
        </div>

        {/* Attraction Visit -------------------------------------------------------------------------------  */}
        <div className="md:mt-12 mb-4 md:my-0 max-w-[970px] mx-auto pl-3 md:px-6">
          <h1 className="text-lg md:text-2xl font-medium flex justify-between items-baseline pr-2">
            Attraction Visit
            <Button className="text-[10px] bg-transparent shadow-none md:text-xs font-normal rounded-lg cursor-pointer py-0 md:py-1 px-2 text-[#ff621c] border border-[#ff612c] hover:bg-[#ff7a4d] hover:text-white normal-case">
              See All
            </Button>
          </h1>
          <p className="text-xs md:text-sm mt-1 text-richblack-500 hidden md:block ">
            Culture, nature, thrills, and record-breaking experiences—Dubai is
            the place to seek out everything you imagine and beyond. Find it all
            her!
          </p>
          <div className="mt-3 flex gap-x-2 md:gap-x-4 md:mt-4 overflow-auto hide-scrollbar pb-6">
            <div className="min-w-[140px] w-[130px] sm:w-[160px] md:min-w-[170px] md:w-[170px] rounded-xl overflow-hidden relative bg-white shadow-md">
              <div className="w-full">
                <img
                  loading="lazy"
                  src={img2}
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
            <div className="min-w-[140px] w-[130px] sm:w-[160px] md:min-w-[170px] md:w-[170px] rounded-xl overflow-hidden relative bg-white shadow-md">
              <div className="w-full">
                <img
                  loading="lazy"
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
            <div className="min-w-[140px] w-[130px] sm:w-[160px] md:min-w-[170px] md:w-[170px] rounded-xl overflow-hidden relative bg-white shadow-md">
              <div className="w-full">
                <img
                  loading="lazy"
                  src={img4}
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
          </div>
        </div>

        {/* Water Activities -------------------------------------------------------------------------------  */}
        <div className="md:mt-12 mb-4 md:my-0 max-w-[970px] mx-auto pl-3 md:px-6">
          <h1 className="text-lg md:text-2xl font-medium flex justify-between items-baseline pr-2">
            Water Activities
            <Button className="text-[10px] bg-transparent shadow-none md:text-xs font-normal rounded-lg cursor-pointer py-0 md:py-1 px-2 text-[#ff621c] border border-[#ff612c] hover:bg-[#ff7a4d] hover:text-white normal-case">
              See All
            </Button>
          </h1>
          <p className="text-xs md:text-sm mt-1 text-richblack-500 hidden md:block ">
            Culture, nature, thrills, and record-breaking experiences—Dubai is
            the place to seek out everything you imagine and beyond. Find it all
            her!
          </p>
          <div className="mt-3 flex gap-x-2 md:gap-x-4 md:mt-4 overflow-auto hide-scrollbar pb-6">
            <div className="min-w-[140px] w-[130px] sm:w-[160px] md:min-w-[170px] md:w-[170px] rounded-xl overflow-hidden relative bg-white shadow-md">
              <div className="w-full">
                <img
                  loading="lazy"
                  src={img2}
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
            <div className="min-w-[140px] w-[130px] sm:w-[160px] md:min-w-[170px] md:w-[170px] rounded-xl overflow-hidden relative bg-white shadow-md">
              <div className="w-full">
                <img
                  loading="lazy"
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
            <div className="min-w-[140px] w-[130px] sm:w-[160px] md:min-w-[170px] md:w-[170px] rounded-xl overflow-hidden relative bg-white shadow-md">
              <div className="w-full">
                <img
                  loading="lazy"
                  src={img4}
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
          </div>
        </div>

        {/* Luxury Toors -------------------------------------------------------------------------------  */}
        <div className="md:mt-12 mb-4 md:my-0 max-w-[970px] mx-auto pl-3 md:px-6">
          <h1 className="text-lg md:text-2xl font-medium flex justify-between items-baseline pr-2">
            Luxury Tours
            <Button className="text-[10px] bg-transparent shadow-none md:text-xs font-normal rounded-lg cursor-pointer py-0 md:py-1 px-2 text-[#ff621c] border border-[#ff612c] hover:bg-[#ff7a4d] hover:text-white normal-case">
              See All
            </Button>
          </h1>
          <p className="text-xs md:text-sm mt-1 text-richblack-500 hidden md:block ">
            Culture, nature, thrills, and record-breaking experiences—Dubai is
            the place to seek out everything you imagine and beyond. Find it all
            her!
          </p>
          <div className="mt-3 flex gap-x-2 md:gap-x-4 md:mt-4 overflow-auto hide-scrollbar pb-6">
            <div className="min-w-[140px] w-[130px] sm:w-[160px] md:min-w-[170px] md:w-[170px] rounded-xl overflow-hidden relative bg-white shadow-md">
              <div className="w-full">
                <img
                  loading="lazy"
                  src={img2}
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
            <div className="min-w-[140px] w-[130px] sm:w-[160px] md:min-w-[170px] md:w-[170px] rounded-xl overflow-hidden relative bg-white shadow-md">
              <div className="w-full">
                <img
                  loading="lazy"
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
            <div className="min-w-[140px] w-[130px] sm:w-[160px] md:min-w-[170px] md:w-[170px] rounded-xl overflow-hidden relative bg-white shadow-md">
              <div className="w-full">
                <img
                  loading="lazy"
                  src={img4}
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
          </div>
        </div>
      </div>

      {/* ----------------------------------Bottom Nav ---------------------------------------- */}
      <BottomNav></BottomNav>

      {/*---------------------------------------------------- Models ----------------------------- */}

      {/*---------------------------------- Select Destination ---------------------------- */}
      {/* {selectDestination && (
        <Modal
          title={
            <div className="flex items-center gap-x-2 GTE_light">
              {" "}
              Select Destination{" "}
              <IoEarth className="text-richblack-500"></IoEarth>{" "}
            </div>
          }
          setModal={setIsDestinationModal}
        >
          <div className="w-fit mx-auto">
            <div className="flex justify-start flex-wrap gap-y-1 my-2">
            { Destinations.map((destination,index) => {
              return (
                <div key={index} className="min-w-[30%] w-[33%] sm:w-[160px] overflow-hidden hover:outline outline-[#ff621c] cursor-pointer rounded-xl p-1" onClick={() => handleChanges("Destination" , destination)}>
                <img
                  loading="lazy"
                  src={destination.image}
                  alt=""
                  className="w-full object-cover h-[54px] md:h-[80px] rounded-lg select-none"
                />
                <h3 className="font-light text-xs mt-1 GTE_light ml-1 ">
                  {destinationValue?.name}
                </h3>
              </div>
              )
            })  
             }
           
            </div>
          </div>
        </Modal>
      )} */}

      {/* <DestinationModal 
      isDestinationModal={isDestinationModal}
      setIsDestinationModal={setIsDestinationModal}
      destinationValue={destinationValue}
      setDestinationValue={setDestinationValue}></DestinationModal>
                    ---------------------------------- Select ADvanture ---------------------------- */}


      <SelectModal
        isSelectModal={isModal}
        setIsSelectModal={setIsModal}
        setSelectValue={selectionType[1]}
        selectValue={selectionType[2]}
        type={selectionType[0]}
      ></SelectModal>
      <AnimatePresence>
      {selectType && (
        <Modal
          title={
            <div className="flex items-center gap-x-2 GTE_light">
              {" "}
              Choose Type
            </div>
          }
          setModal={setSelectType}
        >
          <div className="w-fit mx-auto">
            <div className="flex justify-start flex-wrap px-1 gap-y-1 my-2">
              {TourType.map((type, index) => {
                return (
                  <div
                    key={index}
                    className="min-w-[30%] w-[33%] sm:w-[160px] overflow-hidden hover:outline outline-[#ff621c] cursor-pointer rounded-xl p-1"
                    // onClick={() => handleChanges("tourType", type)}
                  >
                    <img
                      loading="lazy"
                      src={type.image}
                      alt=""
                      className="w-full object-cover h-[54px] md:h-[80px] rounded-lg select-none"
                    />
                    <h3 className="font-light text-xs mt-1 GTE_light ml-1 ">
                      {type.title} Tour
                    </h3>
                  </div>
                );
              })}

              {/* <div className="min-w-[30%] w-[33%] sm:w-[160px] overflow-hidden hover:outline outline-[#ff621c] cursor-pointer rounded-xl p-1">
                <img
                  loading="lazy"
                  src={img2}
                  alt=""
                  className="w-full object-cover h-[54px] md:h-[80px] rounded-lg select-none"
                />
                <h3 className="font-light text-xs mt-1 GTE_light ml-1 ">
                  City Tours
                </h3>
              </div>
              <div className="min-w-[30%] w-[33%] sm:w-[160px] overflow-hidden hover:outline outline-[#ff621c] cursor-pointer rounded-xl p-1">
                <img
                  loading="lazy"
                  src={img3}
                  alt=""
                  className="w-full object-cover h-[54px] md:h-[80px] rounded-lg select-none"
                />
                <h3 className="font-light text-xs mt-1 GTE_light ml-1 ">
                  Water activities
                </h3>
              </div>
              <div className="min-w-[30%] w-[33%] sm:w-[160px] overflow-hidden hover:outline outline-[#ff621c] cursor-pointer rounded-xl p-1">
                <img
                  loading="lazy"
                  src={img4}
                  alt=""
                  className="w-full object-cover h-[54px] md:h-[80px] rounded-lg select-none"
                />
                <h3 className="font-light text-xs mt-1 GTE_light ml-1 ">
                  Attractions visit{" "}
                </h3>
              </div>
              <div className="min-w-[30%] w-[33%] sm:w-[160px] overflow-hidden hover:outline outline-[#ff621c] cursor-pointer rounded-xl p-1">
                <img
                  loading="lazy"
                  src={img4}
                  alt=""
                  className="w-full object-cover h-[54px] md:h-[80px] rounded-lg select-none"
                />
                <h3 className="font-light text-xs mt-1 GTE_light ml-1 ">
                  Attractions visit{" "}
                </h3>
              </div>
              <div className="min-w-[30%] w-[33%] sm:w-[160px] overflow-hidden hover:outline outline-[#ff621c] cursor-pointer rounded-xl p-1">
                <img
                  loading="lazy"
                  src={img4}
                  alt=""
                  className="w-full object-cover h-[54px] md:h-[80px] rounded-lg select-none"
                />
                <h3 className="font-light text-xs mt-1 GTE_light ml-1 ">
                  Attractions visit{" "}
                </h3>
              </div> */}
            </div>
          </div>
        </Modal>
      )}
      </AnimatePresence>
    </div>
  );
};

export default HomePage;
