import HeaderSection from "../core/home/HeaderSection";
import Navigation from "./Navigation";
import img from "../../assets/images/travel 1920x450 banner.png";
import img1 from "../../assets/images/IMG-20240205-WA0063.jpg";
import img2 from "../../assets/images/IMG-20240205-WA0067.jpg";
import img3 from "../../assets/images/IMG-20240205-WA0065.jpg";
import img4 from "../../assets/images/IMG-20240205-WA0070.jpg";
import BottomNav from "./BottomNav";
import TourCard from "./TourCard";
import { MdOutlineAddShoppingCart } from "react-icons/md";
import { Button, Tooltip } from "@material-tailwind/react";
import { FaStar } from "react-icons/fa";
import Tours from "../../pages/Tours";
import TourTypes from "../../data/TourType";
import typeSlice from "../../redux/slices/typeSlice";
import activities from "../../data/Activities";

const CityTours = () => {
  return (
    <div>
        <Navigation></Navigation>
        <img src={img2} alt="" /> 
        <div className="py-4 px-3">
            <h1 className="text-lg">Abu Dhabi</h1>
            <p className="text-xs text-richblack-200">Total 34 tours</p>

            <hr className="my-3"/>
            <div>
                <p>Top Tours in Dubai</p>
            </div>
            <div className="mt-3 flex flex-wrap justify-start gap-3 md:gap-4  md:mt-4 pb-6 ">
                {activities?.map((tour, index) => {
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
                        {typeSlice.name.trim().toLowerCase() == "top tour" && (
                          <span className="text-xs text-white bg-caribbeangreen-200 px-1 rounded-md">
                            {tourType}
                          </span>
                        )}
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
                          <h3 className="text-[13px] sm:text-sm font-medium line-clamp-1">
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
        <BottomNav></BottomNav>       
    </div>
  )
}

export default CityTours;