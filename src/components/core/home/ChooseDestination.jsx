import img1 from "../../../assets/images/IMG-20240205-WA0063.jpg";
import img2 from "../../../assets/images/IMG-20240205-WA0067.jpg";
import img3 from "../../../assets/images/IMG-20240205-WA0065.jpg";
const ChooseDestination = () => {
  return (
    <>
    
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
    </>
  )
}

export default ChooseDestination;