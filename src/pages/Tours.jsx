import {
  Button,
  Carousel,
  IconButton,
  Navbar,
  Tooltip,
  useSelect,
} from "@material-tailwind/react";
import { FaPlane, FaStar } from "react-icons/fa";
import { GoChevronLeft, GoChevronRight } from "react-icons/go";
import { MdOutlineAddShoppingCart } from "react-icons/md";
import img1 from "../assets/images/IMG-20240205-WA0063.jpg";
import img2 from "../assets/images/IMG-20240205-WA0067.jpg";
import img3 from "../assets/images/IMG-20240205-WA0065.jpg";
import img4 from "../assets/images/IMG-20240205-WA0070.jpg";
import Navigation from "../components/common/Navigation";
import { useEffect, useState } from "react";
import Modal from "../components/Modal";
import BottomNav from "../components/common/BottomNav";
import { Link } from "react-router-dom";
import TourType from "../data/TourType";
import HeaderSkl from "../components/skelaton/HeaderSkl";
import PostSkl from "../components/skelaton/home/PostSkl";
import TagsSkl from "../components/skelaton/home/TagsSkl";
import SearchInput from "../components/common/SearchInput";
import activities from "../data/Activities";
import { useDispatch, useSelector } from "react-redux";
import { setType } from "../redux/slices/typeSlice";

const Tours = () => {
  const [mostPopularModal, setMostPopularModal] = useState(false);
  const [priceModal, setPriceModal] = useState(false);
  const [allToursModal, setAllToursModal] = useState(false);
  const [changedType, setChangedType] = useState(TourType.types[0]);
  const [loading, setLoading] = useState(true);
  const [tours, setTours] = useState([...activities]);
  const typeSlice = useSelector((store) => store.typeSlice);
  // tours is data of all tours

  const dispatch = useDispatch();
  // console.log(type);
  const loadingSkleton = (
    <div className="max-w-maxContent mx-auto">
      <div className="flex flex-wrap justify-between gap-y-4 pb-4 mt-3">
        {[...new Array(10)].map((e, i) => {
          return (
            <div
              key={i}
              className="min-w-[140px] w-[48%] transition-all sm:w-[160px] md:min-w-[170px] md:w-[173px] rounded-xl overflow-hidden relative bg-white "
            >
              <span className="absolute top-2 left-2 text-xs text-white bg-caribbeangreen-200 px-1 rounded-md">
                {/* Adventure */}
              </span>
              <div className="w-full">
                <div
                  // src={img2}
                  alt=""
                  className="w-full h-[100px] sm:h-[100px] object-cover bg-[var(--sklClr)]"
                />
              </div>
              <div className="px-3 sm:px-4 my-2 mb-3 sm:my-4 ">
                <h3 className="h-[14px] w-full bg-[var(--sklClr)]"> </h3>
                <h3 className="h-[14px] w-[60%] bg-[var(--sklClr)] mt-2"> </h3>

                <div className="h-[20px] w-[80%] bg-[var(--sklClr)] mt-2"></div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
  TourType.types.map(
    (e, index) => (e.id = e.title.split(" ").join("_") + "_" + (index + 1))
  );
  useEffect(() => {
    // window.scrollTo(0, 0);
    setTimeout(() => setLoading(false), 700);
    const filtred = activities.filter((tour) => {
      console.log(tour.tourType.toLowerCase().trim() , typeSlice?.title.toLowerCase().trim())

      return (
        tour.tourType.toLowerCase().trim() ==
        typeSlice?.title.toLowerCase().trim()
      );
      });
      console.log(typeSlice?.title.trim().toLowerCase())
    if (typeSlice?.title.trim().toLowerCase() !== "top tour") {
      setTours([...filtred]);
    }else{
      setTours([...activities]);
    }
    console.log(activities);
  }, [typeSlice]);

  // handle Tour type changes
  const handleType = (type) => {
    setLoading(true);
    console.log(type);
    setChangedType({ ...type });
    dispatch(setType({ ...type }));

    setTimeout(() => setLoading(false), 400);
  };

  return (
    <div className="pb-8">
      <Navigation></Navigation>

      {/* Banner IMage */}
      <img
        src={changedType?.image}
        alt=""
        className="w-full h-[160px] md:h-[270px] object-cover object-left"
      />

      {/* seacrh Box  */}
      <div className="-mt-5 relative z-[999]">
        <SearchInput></SearchInput>
      </div>

      {/* Hightlighted Section   */}
      <div className="bg-deep-orange-50 py-5 -mt-8 pt-10 ">
        <div className="max-w-maxWidthContent mx-auto">
          <h3 className="text-lg md:text-2xl text-center GTE_bold">
            {changedType?.title} & Activities
          </h3>
          <div className="mx-4 md:ml-0 flex justify-start md:justify-center gap-x-0 md:gap-x-4 items-start mt-3 overflow-auto hide-scrollbar">
            {TourType?.types.map((type, index) => (
              <div
                key={index}
                onClick={() => handleType(type)}
                className="cursor-pointer min-w-[70px] group"
              >
                <img
                  src={type?.image}
                  className={`w-[65px] h-[65px] md:w-[80px] md:h-[80px] rounded-full p-[1px] border-2 border-transparent object-cover group-hover:border-[#ff621c] ${type.title.toLowerCase().trim() == typeSlice.title.toLowerCase().trim() && " !border-[#ff621c] " } `}
                />
                <p className="text-xs md:text-sm text-center mt-1">
                  {type.title}
                </p>
              </div>
            ))}

            {/* <Link to={"/category/Adventure"} className="">
              <img src={img1} className="w-[65px] h-[65px] md:w-[80px] md:h-[80px] rounded-full p-1 border-2 border-transparent hover:border-[#ff621c] "/>
              <p className="text-xs md:text-sm text-center mt-1">Adventure</p>
            </Link>
            <Link to={"/category/Adventure"} className="">
              <img src={img2} className="w-[65px] h-[65px] md:w-[80px] md:h-[80px] rounded-full p-1 border-2 border-transparent hover:border-[#ff621c] "/>
              <p className="text-xs md:text-sm text-center mt-1">City Tour</p>
            </Link>
            <Link to={"/category/Adventure"} className="">
              <img src={img3} className="w-[65px] h-[65px] md:w-[80px] md:h-[80px] rounded-full p-1 border-2 border-transparent hover:border-[#ff621c] "/>
              <p className="text-xs md:text-sm text-center mt-1">Water Tour</p>
            </Link>
            <Link to={"/category/Adventure"}>
              <img src={img4} className="w-[65px] h-[65px] md:w-[80px] md:h-[80px] rounded-full p-1 border-2 border-transparent hover:border-[#ff621c] "/>
              <p className="text-xs md:text-sm text-center mt-1">Luxury Tour</p>
            </Link> */}
          </div>
        </div>
      </div>

      {/* Heading Area  */}
      <div className="p-4 max-w-maxWidthContent mx-auto md:pt-8 pb-0">
        {/* Tourse heading and view all btn */}
        <div>
          <h3 className="text-sm md:text-lg font-medium flex gap-x-2 items-center">
            <FaPlane className="group-hover:text-[#ff612c]"></FaPlane>
            {changedType?.title} Tours in Cities
          </h3>
          <Link
            to={"/all-tours"}
            className="text-xs block w-fit px-3 py-1 rounded-full border border-richblack-900 text-richblack-900 mt-4"
            onClick={() => setAllToursModal(true)}
          >
            View All Tours
          </Link>
        </div>

        {/* Result , sort by Option and All Tour Container */}
        <div>
          {/* Result , sort by Option Container */}
          <div className="flex justify-between items-center pt-4 pb-2">
            {/* Result Container */}
            <span className="flex gap-x-2">
              Result:{" "}
              {loading ? (
                <div className="w-[40px] bg-[var(--sklClr)] rounded-md inline-block"></div>
              ) : (
                10
              )}
            </span>

            {/*Sort by Option Container */}
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

                      {typeSlice.title.trim().toLowerCase() == "top tour" && <span className="text-xs text-white bg-caribbeangreen-200 px-1 rounded-md">
                        {tourType}
                      </span>}
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
          {loading && loadingSkleton}
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

      {/* Types  -------------------------------------------------------------------------------  */}
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

      {/* Top Tours */}
      <div className="md:mt-12 mb-4 max-w-[970px] mx-auto pl-3 md:px-6">
        <h1 className="text-lg md:text-2xl font-medium mt-6 md:top-0 flex justify-between items-baseline pr-2">
          <div>
            Top Tour in <span className="text-caribbeangreen-100">Dubai</span>
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

      {/* Top Tour In Europe */}
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

      {/* Modal section  */}
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
