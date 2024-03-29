import { FaSort, FaStar } from "react-icons/fa";
import BottomNav from "../components/common/BottomNav";
import Navigation from "../components/common/Navigation";
import { useEffect, useRef, useState } from "react";
import { GoCheck, GoChevronRight, GoX } from "react-icons/go";
import { MdOutlineAddShoppingCart } from "react-icons/md";
import { Button, Tooltip } from "@material-tailwind/react";
import img1 from "../assets/images/IMG-20240205-WA0063.jpg";
import img2 from "../assets/images/IMG-20240205-WA0067.jpg";
import img3 from "../assets/images/IMG-20240205-WA0065.jpg";
import img4 from "../assets/images/IMG-20240205-WA0070.jpg";
import { useLocation, useNavigate } from "react-router";
import { Link } from "react-router-dom";
import FilterModal from "../components/common/FilterModal";
import PriceRangeModal from "../components/common/PriceRangeModal";
import ActionButton from "../components/common/ActionButton";

const SearchedItem = () => {
  const [filterAsideModal, setFilterAsideModal] = useState(false);
  const [searchedObj, setSearchedObj] = useState({});

  const [isFilterModal, setIsFilterModal] = useState(false);
  const [filterValue, setFilterValue] = useState({
    checkbox_0: true,
    name: "No Filter",
  });
  const [loading, setLoading] = useState(true);
  const [priceRangeModal, setIsPriceRangeModal] = useState(false);
  const [priceRangeValue, setPriceRangeValue] = useState([300, 1000]);
  const navigate = useNavigate();
  const location = useLocation();
  let paramsObj = useRef({});

  useEffect(() => {
    paramsObj.current = {};
    console.log(location?.search);
    location?.search
      .split("?")[1]
      ?.split("&")
      .forEach((e) => {
        const key = e.split("=")[0];
        const value = decodeURIComponent(e.split("=")[1]);
        paramsObj.current[key] = value;
      });
    setSearchedObj(paramsObj.current);
  }, [location]);

  const handlePriceRange = () => {
    setLoading(true);
    setTimeout(() => setLoading(false), 700);
    console.log(priceRangeValue);
    setIsPriceRangeModal(false);
  };
  return (
    <>
      <Navigation></Navigation>
      <div className=" py-4 md:max-w-maxWidthContent mx-auto md:mt-4">
        {/* searched heading */}
        <h3 className=" px-4 text-lg md:text-xl text-richblack-900 ">
          Search For: Destination{" "}
          <span className="text-[#ff621c]">{searchedObj?.destination} </span>{" "}
          and Type{" "}
          <span className="text-[#ff621c]">{searchedObj?.tourType}</span>
          <Link
            to={"/all-tours"}
            className="text-xs block w-fit px-3 py-1 rounded-full border border-richblack-900 text-richblack-900 mt-4"
          >
            View All
          </Link>
        </h3>

        {/* Total result and sort option  */}
        <div className=" px-4 flex justify-between items-center pr-4 sticky top-10 z-[99] bg-white mt-2">
          <h4 className="text-sm md:text-sm text-richblack-900">
            Results: <span> 22 </span>
          </h4>

          {/* <h4
            className="text-sm text-richblack-900 flex items-center gap-x-2 hover:bg-[rgba(0,0,0,0.04)] px-2 py-1 rounded-lg cursor-pointer"
            onClick={() => setFilterAsideModal(true)}
          >
            <FaSort></FaSort>Sort
          </h4> */}
          <div className="flex gap-y-4 min-w-fit justify-between items-center">
            <div className="flex items-center py-2">
              <div className="w-max flex gap-x-3 items-center md:bg-transparent md:shadow-none">
                {/* <h3 className="text-[13px] md:text-sm GTE_light text-[#2e3844] flex gap-x-2 items-center ">
                  Most Popular
                </h3> */}
                <span
                  className="text-xs text-richblack-900 select-none cursor-pointer GTE_light flex justify-between pr-1 items-center min-w-max px-2 py-1 border border-richblack-900 rounded-md "
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
                  onClick={() => setIsPriceRangeModal(true)}
                >
                  Price{" "}
                  {priceRangeValue && (
                    <>
                      ({priceRangeValue[0]} - {priceRangeValue[1]})
                    </>
                  )}
                  <GoChevronRight className="rotate-90 ml-3"></GoChevronRight>
                </span>
                {/* </div>
              </div> */}
              </div>
            </div>
          </div>
        </div>

        {/* All Items */}
        <div className="px-4 w-full md:pb-0">
          <div className="mt-3 flex flex-wrap justify-between gap-3 md:gap-4  md:mt-4 pb-6 ">
            <div className="min-w-[140px] w-[48%] transition-all sm:w-[160px] md:min-w-[170px] md:w-[173px] rounded-xl overflow-hidden relative bg-white shadow-xl ">
              <span className="absolute top-2 left-2 text-xs text-white bg-caribbeangreen-200 px-1 rounded-md">
                Adventure
              </span>
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
              <span className="absolute top-2 left-2 text-xs text-white bg-[#ff621c] px-1 rounded-md">
                City{" "}
              </span>
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
              <span className="absolute top-2 left-2 text-xs text-white bg-caribbeangreen-200 px-1 rounded-md">
                Water tour
              </span>
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
              <span className="absolute top-2 left-2 text-xs text-white bg-[#ff621c] px-1 rounded-md">
                City{" "}
              </span>
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
              <span className="absolute top-2 left-2 text-xs text-white bg-[#ff621c] px-1 rounded-md">
                City{" "}
              </span>
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

        {/* Other like Top Tours */}
        <div className="md:mt-12 mb-4 max-w-[970px] mx-auto pl-4 md:px-6">
          <h1 className="text-lg md:text-2xl font-medium mt-6 md:top-0 flex justify-between items-baseline pr-2">
            <div>Top Tours</div>
            <Button
              className="text-[10px] bg-transparent shadow-none md:text-xs font-normal rounded-lg cursor-pointer py-0 md:py-1 px-2 text-[#ff621c] border border-[#ff612c] hover:bg-[#ff7a4d] hover:text-white normal-case"
              onClick={() => navigate("/tours")}
            >
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

        {/* filter Modal */}
        <FilterModal
          isFilterModal={isFilterModal}
          setIsFilterModal={setIsFilterModal}
          setFilterValue={setFilterValue}
          setLoading={setLoading}
          filterValue={filterValue}
        ></FilterModal>

        {/* Price Range */}

        {priceRangeModal && (
          <PriceRangeModal
            priceRangeModal={priceRangeModal}
            setIsPriceRangeModal={setIsPriceRangeModal}
            setValue={setPriceRangeValue}
            value={priceRangeValue}
          >
            <div className="flex justify-end mt-2">
              <ActionButton
                className={"w-fit py-1 px-2 rounded-md GTE_light"}
                onClick={handlePriceRange}
              >
                <GoCheck></GoCheck>
                Select
              </ActionButton>
            </div>
          </PriceRangeModal>
        )}
        {/* 
        
        ------------------------------------------------------------------------------------- */}
      </div>

      <BottomNav></BottomNav>
    </>
  );
};

export default SearchedItem;

/* 
  // {/* Aside Content here  */
//}
//   <div
//   className={`w-full h-screen backdrop-blur-md fixed left-0 top-0 z-[999999] bg-[rgba(0,0,0,0.06)] ${
//     filterAsideModal
//       ? " opacity-100 visible "
//       : "   opacity-0 invisible "
//   }`}
//   onClick={(e) => {
//     e.stopPropagation();
//     setFilterAsideModal(false);
//   }}
// >
//   <div
//     className={`w-2/3 md:w-[300px] rounded-br-2xl rounded-tr-2xl -left-[600px] bg-white p-4 absolute min-h-[100vh] transition-all drop-shadow-lg ${
//       filterAsideModal ? " !left-0 " : "  -left-[600px] "
//     } `}
//     onClick={(e) => e.stopPropagation()}
//   >
//     <div className=" max-w-maxContentTab mx-auto">
//       <div className="flex justify-between items-center pr-2">
//         <h3 className="GTE_light text-sm select-none ml-3">
//           Filter Options
//         </h3>
//         <div
//           className="relative before:w-full before:h-full before:rounded-full before:absolute before:top-0 before:left-0  before:hover:bg-[rgba(0,0,0,0.04)] rounded-full p-2 -mr-2 cursor-pointer"
//           onClick={() => {
//             setTimeout(() => {
//               setFilterAsideModal(false);
//             }, 100);
//           }}
//         >
//           <GoX className="text-lg text-richblack-900"></GoX>
//         </div>
//       </div>
//     </div>
//   </div>
// </div>
// {/* End Aside Content here  */}
// {/* ------------------------------------------------------------------------------------- */}
//  */
