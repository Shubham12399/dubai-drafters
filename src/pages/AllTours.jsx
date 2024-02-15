import Navigation from "../components/common/Navigation";
import { MdOutlineAddShoppingCart } from "react-icons/md";
import { Button, Tooltip } from "@material-tailwind/react";
import {
  FaChevronDown,
  FaPlane,
  FaSearchLocation,
  FaStar,
} from "react-icons/fa";
import img1 from "../assets/images/travel 1920x450 banner.png";
import img2 from "../assets/images/IMG-20240205-WA0067.jpg";
import img3 from "../assets/images/IMG-20240205-WA0065.jpg";
import img4 from "../assets/images/IMG-20240205-WA0070.jpg";
import { GoChevronRight } from "react-icons/go";
import { useEffect, useState } from "react";
import BottomNav from "../components/common/BottomNav";
import Modal from "../components/Modal";
import { useNavigate } from "react-router";
import PostsSkl from "../components/skelaton/common/PostsSkl";
import typeSlice from "../redux/slices/typeSlice";
import Tours from "./Tours";
import FilterModal from "../components/common/FilterModal";
import activities from "../data/Activities";
import SelectModal from "../components/common/SelectModal";

const AllTours = () => {
  const [selectionType, setSelectionType] = useState([]);
  const [destinationValue, setDestinationValue] = useState({});
  const [tourType, setTourType] = useState({});

  const [isModal, setIsModal] = useState(false);
  const [isFilterModal, setIsFilterModal] = useState(false);

  const [filterValue, setFilterValue] = useState({
    checkbox_0: true,
    name: "No Filter",
  });
  const [loading, setLoading] = useState(true);
  const [tours, setTours] = useState([...activities]);
  const [priceModal, setPriceModal] = useState(false);
  const [destinationModal, setDestinationModal] = useState(false);
  const [selectTypeModal, setSelectTypeModal] = useState(false);

  const handleSelectionType = (typeString, setStateFun, stateValue) => {
    setSelectionType([typeString, setStateFun, stateValue]);
    setIsModal(true);
  };

  useEffect(() => {
    setTimeout(() => setLoading(false), 700);
  }, []);

  const navigate = useNavigate();
  return (
    <div>
      <Navigation></Navigation>

      <div className="relative">
        <img
          src={img1}
          alt=""
          className="w-full h-[160px] md:h-[300px] object-cover object-right"
        />
      </div>

      <div className="relative z-[99] -mt-5 w-full max-w-maxContentTab mx-auto grid grid-cols-[400px] place-items-center align-middle md:flex flex-col md:flex-row gap-y-2 md:gap-x-3 justify-center md:items-center ">
        <div
          className="px-4 py-3 rounded-xl text-xs text-richblack-700 w-[80%] bg-white shadow-md flex gap-x-2 pl-4 items-center justify-between cursor-pointer"
          onClick={() => {
            handleSelectionType(
              "tourDestination",
              setDestinationValue,
              destinationValue
            );
          }}
        >
          <div className="flex items-center gap-x-2">
            <FaSearchLocation className="text-richblack-400"></FaSearchLocation>
            <span className="text-richblack-200 GTE_light text-xs md:text-sm">
              {destinationValue?.name ? (
                <span className="text-richblack-900">
                  {" "}
                  {destinationValue?.name}{" "}
                </span>
              ) : (
                <>Select Destination</>
              )}
            </span>
          </div>
          <FaChevronDown className="text-richblack-400"></FaChevronDown>
        </div>

        <div
          className="px-4 py-3 rounded-xl text-xs text-richblack-700 w-[80%] bg-white shadow-md flex gap-x-2 pl-4 items-center justify-between cursor-pointer"
          onClick={() => {
            handleSelectionType("tourType", setTourType, tourType);
          }}
        >
          <div className="flex items-center gap-x-2">
            <FaSearchLocation className="text-richblack-400"></FaSearchLocation>
            <span className="text-richblack-200 GTE_light text-xs md:text-sm">
              {tourType?.name ? (
                <span className="text-richblack-900"> {tourType?.name} </span>
              ) : (
                <> Select Type</>
              )}
            </span>
          </div>
          <FaChevronDown className="text-richblack-400"></FaChevronDown>
        </div>
        <Button
          variant="outlined"
          className="px-4 py-2 mt-1 md:mt-0 rounded-xl text-sm w-[80%] border-[#ff612c] bg-[#ff612c] text-white shadow-none hover:shadow-lg flex gap-x-2 items-center justify-center font-normal normal-case"
          onClick={() => {
            if (!destinationValue?.name || !tourType?.name) return;
            navigate(
              `/searched?destination=${destinationValue?.name}&tourType=${tourType?.name}`
            );
          }}
        >
          Find Tour
        </Button>
      </div>

      <div className="mt-3 p-4 max-w-maxWidthContent mx-auto md:pt-8 pb-0">
        <div>
          <h3 className="text-sm md:text-lg font-medium flex gap-x-2 items-center">
            <FaPlane className="group-hover:text-[#ff612c]"></FaPlane>
            All Tours
          </h3>
        </div>
        <div>
          <div className="flex justify-between items-center pt-4 pb-2">
            <span>Result: {tours?.length}</span>

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
                    className="text-xs text-richblack-900 select-none cursor-pointer GTE_light flex justify-between pr-1 items-center min-w-max px-2 py-1 border border-richblack-900 rounded-md"
                    onClick={() => setIsFilterModal(true)}
                  >
                    {filterValue?.name}
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

          {/* All Tours  */}
          {!loading && (
            <div className="w-full">
              <div className="mt-3 flex flex-wrap justify-start gap-3 md:gap-4  md:mt-4 pb-6 ">
                {tours?.map((tour, index) => {
                  console.log(tour);
                  const {
                    title,
                    image,
                    price: { aed, rupees },
                    tourType,
                    city,
                    rating,
                  } = tour;
                  return (
                    <div
                      key={index}
                      className="min-w-[140px] w-[48%] transition-all sm:w-[160px] md:min-w-[170px] md:w-[173px] rounded-xl overflow-hidden relative bg-white shadow-xl "
                    >
                      <div className="absolute flex gap-x-2 items-center top-2 left-2 text-xs text-white">
                        <span className="text-xs text-white bg-caribbeangreen-200 px-1 rounded-md">
                          {tourType}
                        </span>

                        <span className="text-xs text-white bg-[#ff612c] px-1 rounded-md">
                          {city}
                        </span>
                      </div>

                      <div className="w-full">
                        <img
                          src={image}
                          alt=""
                          className="w-full h-[100px] sm:h-[100px] object-cover"
                        />
                      </div>
                      <div className="px-3 sm:px-4 my-2 mb-3 sm:my-4 ">
                        <Tooltip content={title}>
                          <h3 className="text-[13px] sm:text-sm font-medium line-clamp-2 truncate">
                            {title}
                          </h3>
                        </Tooltip>
                        <h3 className="text-xs font-medium text-richblack-900 mt-1">
                          AED {aed}.00
                        </h3>
                        <div className="flex items-center justify-between flex-wrap sm:flex-nowrap mt-0 sm:mt-1">
                          {/* <p className="text-[8px] text-richblack-200 flex items-center mt-1">277 Reviews</p> */}
                          <div className="flex mt-1 sm:mt-0 gap-x-1 items-center">
                            {[...new Array(rating)].map((e, i) => (
                              <FaStar
                                key={i}
                                className="text-yellow-100 text-[8px]"
                              ></FaStar>
                            ))}
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
                  );
                })}
              </div>
            </div>
          )}

          {/* Loading Skleton  */}
          {loading && <PostsSkl></PostsSkl>}
        </div>
      </div>

      {/* our destination  -------------------------------------------------------------------------------  */}

      <div className="md:mt-12 mb-4 max-w-[970px] mx-auto pl-3 md:px-6">
        <h1 className="text-lg md:text-2xl font-medium mt-6 md:top-0 flex justify-between items-baseline pr-2">
          <div>
            Top Tour in <span className="text-[#ff621c]">Europe</span>
          </div>
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
          <div className="min-w-[140px] w-[130px] sm:w-[160px] md:min-w-[170px] md:w-[170px] rounded-xl overflow-hidden relative bg-white shadow-xl ">
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
          <div className="min-w-[140px] w-[130px] sm:w-[160px] md:min-w-[170px] md:w-[170px] rounded-xl overflow-hidden relative bg-white shadow-xl ">
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
          <div className="min-w-[140px] w-[130px] sm:w-[160px] md:min-w-[170px] md:w-[170px] rounded-xl overflow-hidden relative bg-white shadow-xl ">
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
          <div className="min-w-[140px] w-[130px] sm:w-[160px] md:min-w-[170px] md:w-[170px] rounded-xl overflow-hidden relative bg-white shadow-xl ">
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
          <div className="min-w-[140px] w-[130px] sm:w-[160px] md:min-w-[170px] md:w-[170px] rounded-xl overflow-hidden relative bg-white shadow-xl ">
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
      <div className="md:mt-12 mb-4 max-w-[970px] mx-auto pl-3 md:px-6">
        <h1 className="text-lg md:text-2xl font-medium mt-6 md:top-0 flex justify-between items-baseline pr-2">
          <div>
            Top Tour in <span className="text-[#ff621c]">India</span>
          </div>
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
          <div className="min-w-[140px] w-[130px] sm:w-[160px] md:min-w-[170px] md:w-[170px] rounded-xl overflow-hidden relative bg-white shadow-xl ">
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
          <div className="min-w-[140px] w-[130px] sm:w-[160px] md:min-w-[170px] md:w-[170px] rounded-xl overflow-hidden relative bg-white shadow-xl ">
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
          <div className="min-w-[140px] w-[130px] sm:w-[160px] md:min-w-[170px] md:w-[170px] rounded-xl overflow-hidden relative bg-white shadow-xl ">
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
          <div className="min-w-[140px] w-[130px] sm:w-[160px] md:min-w-[170px] md:w-[170px] rounded-xl overflow-hidden relative bg-white shadow-xl ">
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
          <div className="min-w-[140px] w-[130px] sm:w-[160px] md:min-w-[170px] md:w-[170px] rounded-xl overflow-hidden relative bg-white shadow-xl ">
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

      {destinationModal && (
        <Modal
          title={
            <div className="flex items-center gap-x-2 GTE_light">
              Select Destination
            </div>
          }
          setModal={setDestinationModal}
        >
          <div className="w-fit mx-auto">
            <div className="flex justify-start flex-wrap px-1 gap-y-1 my-2"></div>
          </div>
        </Modal>
      )}
      {selectTypeModal && (
        <Modal
          title={
            <div className="flex items-center gap-x-2 GTE_light">
              Select Type
            </div>
          }
          setModal={setSelectTypeModal}
        >
          <div className="w-fit mx-auto">
            <div className="flex justify-start flex-wrap px-1 gap-y-1 my-2"></div>
          </div>
        </Modal>
      )}
      {/* {mostPopularModal && (
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
      )} */}
      <SelectModal
        isSelectModal={isModal}
        setIsSelectModal={setIsModal}
        setSelectValue={selectionType[1]}
        selectValue={selectionType[2]}
        type={selectionType[0]}
      ></SelectModal>
      {/* filter Modal */}
      <FilterModal
        isFilterModal={isFilterModal}
        setIsFilterModal={setIsFilterModal}
        setFilterValue={setFilterValue}
        setLoading={setLoading}
        filterValue={filterValue}
      ></FilterModal>
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
    </div>
  );
};

export default AllTours;
