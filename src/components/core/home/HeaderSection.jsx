import { Button, ButtonGroup, Carousel, IconButton, Tooltip } from "@material-tailwind/react";
import { FaAngleLeft, FaAngleRight, FaArrowLeft, FaStar } from "react-icons/fa";
import { GoChevronLeft, GoChevronRight } from "react-icons/go";
import { IoCartOutline, IoCartSharp, IoLocationOutline } from "react-icons/io5";
import collaborationBanner1 from "../../../assets/images/WhatsApp Image 2024-02-05 at 14.34.43_ed310961.jpg";
import img from "../../../assets/images/WhatsApp Image 2024-02-05 at 13.14.15_d7c212e5.jpg";
import img1 from "../../../assets/images/IMG-20240205-WA0063.jpg";
import img2 from "../../../assets/images/IMG-20240205-WA0067.jpg";
import img3 from "../../../assets/images/IMG-20240205-WA0065.jpg";
import img4 from "../../../assets/images/IMG-20240205-WA0070.jpg";
import OwlCarousel from 'react-owl-carousel';
import { MdOutlineAddShoppingCart } from "react-icons/md";
const HeaderSection = () => {

  return (
    <div className="w-full bg-[rgba(0,0,0,0.03)]">
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
            className={`!absolute bottom-2 rounded-full text-black right-12 sm:right-14 !p-0 border before:!w-[100%] bg-white hover:text-white w-[25px] sm:w-[30px] sm:h-[30px] h-[25px] ${firstIndex && " text-richblack-50 border-richblack-25 bg-[rgba(299,299,299,0.3)] hover:bg-[rgba(299,299,299,0.3)]"}`}
          >
            <GoChevronLeft className={`text-[1.15rem] sm:text-xl font-bold ${firstIndex && " text-[rgba(299,299,299,0.4)]"}`}/>
          </IconButton>
        )}
        nextArrow={({ handleNext,lastIndex }) => (
            <IconButton
              variant="text"
              color="white"
              size="lg"
              onClick={handleNext}
              className={`!absolute bottom-2 rounded-full text-black right-4 !p-0 border before:!w-[100%] bg-white hover:text-white w-[25px] sm:w-[30px] sm:h-[30px] h-[25px] ${lastIndex && " text-richblack-50 border-[rgba(299,299,299,0.2)]  hover:bg-[rgba(299,299,299,0.2)] bg-[rgba(299,299,299,0.2)]"}`}
            >
              <GoChevronRight className={`text-[1.15rem] sm:text-xl font-bold ${lastIndex && " text-[rgba(299,299,299,0.4)]"}`}/>
            </IconButton>
          )}
      >
        <div className="w-full h-[120px] md:h-[500px] overflow-hidden">
          <img
            src={collaborationBanner1}
            alt="image 1"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="w-full h-[120px] md:h-[500px]">
          <img
            src="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80"
            alt="image 2"
            className="h-full w-full object-cover"
          />{" "}
        </div>
        <div className="w-full h-[120px] md:h-[500px] relative">
          <img
            src="https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80"
            alt="image 3"
            className="h-full w-full object-cover"
          />
          <div className="absolute w-full top-0 left-0 h-full bg-gradient-to-r from-[rgba(0,0,0,0.7)] to-transparent z-[999] p-3 md:p-16 hidden md:block">
          <h1 className="text-white text-xs md:text-4xl font-black leading-tight first-letter:text-6xl flex gap-2 items-baseline "> <span className="text-[#ff621c]">?</span>
          <p className="text-[10px] md:text-lg text-white mb-2 md:mb-4 font-medium">a travel agent or freelancer</p>

          </h1>
            <h1 className="text-white text-[16px] md:text-4xl font-black leading-tigh8 ">Work With us and Get <br /> Guranted Commission </h1>
            <p className="max-w-maxContentTab mt-3 text-richblack-5 font-normal hidden md:block md:text-sm pr-4 pl-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro error sequi cupiditate impedit, sapiente velit in, et ad optio sit ut dolores alias voluptate ex explicabo? Atque magni aut obcaecati! Iure aperiam accusamus hic Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum aliquam alias, illo adipisci impedit illum ad enim omnis vero exercitationem.!</p>
            <ButtonGroup className="mt-6 hidden md:block">
                <Button className="bg-[#ff612c] text-white normal-case">Join Now </Button>
                <Button className=" normal-case">Contact us </Button>
            </ButtonGroup>
          </div>
        </div>
      </Carousel>
      <div className="bg-white">
            <h1 className="text-center text-lg md:text-2xl font-bold pt-4 md:pt-10 hidden md:block ">Enjoy the, Dream Place Now!</h1>
            <p className="max-w-maxContentTab text-[10px] px-4 md:px-0 md:text-sm text-richblack-300 text-center mx-auto hidden md:block ">Let&apos;s checkout the latest Tourism Places. To book a ticket fill some boxes </p>
            <div className="relative py-6 mb-4 px-1 md:px-2 max-w-maxContent mx-2 md:m-0 md:pb-9 sm:!mx-auto md:rounded-none md:shadow-none ">
                  <div className="max-w-[850px] mx-auto lg:mt-6 grid grid-cols-[40%_30%_30%] md:grid-cols-[repeat(3,_minmax(0,_1fr))140px_130px] md:border border-[#08aca0] md:px-6 md:rounded-full md:py-7 md:!pr-0 gap-y-2 md:gap-x-0 md:!gap-0 " >
                      <div className="flex sm:pl-2 md:border-r border-[#08aca0] mr-1 ">
                          <div className="w-full md:w-fit md:bg-transparent md:shadow-none">
                              <h3 className="text-[13px] md:text-sm font-bold text-[#2e3844] flex gap-x-2 items-center after:h-[3px] after:bg-[#ff621c] after:rounded-lg md:after:hidden after:w-[34%]  ">Destination</h3>
                              <span className="text-xs text-richblack-200 select-none cursor-pointer font-medium flex justify-between pr-1 mt-1 items-center w-full max-w-[120px]">Search Location  <GoChevronRight className="rotate-90  ml-0 md:ml-12"></GoChevronRight></span>
                          </div>  
                      </div>  
                      <div className="flex md:pl-7 md:border-r md:border-[#08aca0]  pl-1">
                          <div className="w-full rounded-lg bg-white md:pl-0 md:bg-transparent md:shadow-none ">
                          <h3 className="text-[13px] md:text-sm font-bold text-[#2e3844] flex gap-x-2 items-center after:w-[50%] after:h-[3px] after:bg-[#ff621c] after:rounded-lg md:after:hidden ">Type</h3>
                          <span className="text-xs text-richblack-200 select-none cursor-pointer font-medium flex justify-between pr-1 mt-1 w-full items-center max-w-[120px] ">Advanture  <GoChevronRight className="rotate-90"></GoChevronRight></span>
                          </div>
                      </div>
                      <div className="hidden md:flex md:pl-7 md:border-r border-[#08aca0]  ">
                          <div className="w-full md:w-fit p-2 rounded-lg bg-white md:p-0 md:bg-transparent md:shadow-none pl-3">
                          <h3 className="text-[10px] sm:text-[13px] md:text-sm font-bold text-[#2e3844] flex gap-x-2 items-center after:w-full after:h-[3px] after:bg-[#ff621c] after:rounded-lg md:after:hidden ">Date</h3>
                          <span className="text-[10px] md:text-xs text-richblack-200 select-none cursor-pointer font-medium block mt-1">Type Date</span>
                          </div>
                      </div>  
                      <div className=" hidden md:flex md:pl-7  ">
                          <div className="w-full md:w-fit p-2 rounded-lg bg-white md:p-0 md:bg-transparent md:shadow-none pl-3">
                          <h3 className="text-[10px] sm:text-[13px] md:text-sm font-bold text-[#2e3844] flex gap-x-2 items-center after:w-full after:h-[3px] after:bg-[#ff621c] after:rounded-lg md:after:hidden ">Guest</h3>
                          <span className="text-[10px] md:text-xs text-richblack-200 select-none cursor-pointer font-medium flex justify-between pr-1 mt-1 w-fit items-center ">1 Guest <GoChevronRight className="rotate-90 text-[10px] ml-12"></GoChevronRight></span>
                          </div>
                      </div>  
                      
                      <div className="flex md:ml-4 w-full md:w-fit md:col-span-1 md:px-0 items-center ml-3">
                          <Button size="sm" className="normal-case w-[80%] bg-[#ff621c] text-white text-xs rounded-full md:rounded-full font-bold !px-0 md:px-4 ">Find Trip</Button>
                          </div>  
                  </div>  
      
                 
                  {/* <img src={img} alt="" /> */}
                  {/* <div className="max-w-maxContentTab mx-auto py-4 px-3 my-2 border border-[#08aca0] rounded-full flex flex-wrap justify-around items-center  gap-3" >
                      <div className="flex justify-center flex-grow min-w-[80px] sm:border-r border-caribbeangreen-50 max-w-[150px]">
                          <div className="w-fit">
                              <h3 className="text-xs font-semibold text-richblack-800  ">Destination</h3>
                              <span className="text-[10px] md:text-xs text-richblack-200 select-none cursor-pointer font-medium block mt-1">Search Location</span>
                          </div>  
                      </div>  
                      <div className="flex justify-center flex-grow min-w-[80px] sm:border-r border-caribbeangreen-50 max-w-[150px]">
                          <div className="w-fit">
                          <h3 className="text-xs font-semibold text-richblack-800  ">Date</h3>
                          <span className="text-[10px] md:text-xs text-richblack-200 select-none cursor-pointer font-medium block mt-1">Type Date</span>
                          </div>
                      </div>  
                      <div className="flex justify-center flex-grow min-w-[80px] sm:border-r border-caribbeangreen-50 max-w-[150px]">
                          <div className="w-fit">
                          <h3 className="text-xs font-semibold text-richblack-800  ">Guest</h3>
                          <span className="text-[10px] md:text-xs text-richblack-200 select-none cursor-pointer font-medium block mt-1">1 Guest</span>
                          </div>
                      </div>  
                      <div className="flex justify-center flex-grow min-w-[80px] max-w-[150px]">
                          <div className="w-fit">
                          <h3 className="text-xs font-semibold text-richblack-800  ">Type</h3>
                          <span className="text-[10px] md:text-xs text-richblack-200 select-none cursor-pointer font-medium block mt-1">Advanture</span>
                          </div>
                      </div>  
                  </div>   */}
            </div> 
      </div>

     {/* our destination  */}
     <div className="md:mt-12 max-w-[970px] mx-auto my-0 pl-3 md:px-6">
               <h1 className="text-sm md:text-xl font-semibold md:font-bold">Choose Destination </h1>
               <div className="flex overflow-auto gap-2 my-2 hide-scrollbar">
                    <div className="min-w-fit w-fit px-3 py-2 text-[13px] md:text-sm text-richblack-800 hover:text-white hover:bg-[#ff621c] bg-[#ff621c] text-white rounded-md cursor-pointer transition-all">
                        All
                    </div>
                    <div className="min-w-fit w-fit px-3 py-2 bg-white text-[13px] md:text-sm text-richblack-800 hover:text-white hover:bg-[#ff621c] rounded-md cursor-pointer transition-all">
                        USA
                    </div>
                    <div className="min-w-fit w-fit px-3 py-2 bg-white text-[13px] md:text-sm text-richblack-800 hover:text-white hover:bg-[#ff621c] rounded-md cursor-pointer transition-all">
                        England
                    </div>
                    <div className="min-w-fit w-fit px-3 py-2 bg-white text-[13px] md:text-sm text-richblack-800 hover:text-white hover:bg-[#ff621c] rounded-md cursor-pointer transition-all">
                        Egypt
                    </div>
                    <div className="min-w-fit w-fit px-3 py-2 bg-white text-[13px] md:text-sm text-richblack-800 hover:text-white hover:bg-[#ff621c] rounded-md cursor-pointer transition-all">
                        India
                    </div>
                    <div className="min-w-fit w-fit px-3 py-2 bg-white text-[13px] md:text-sm text-richblack-800 hover:text-white hover:bg-[#ff621c] rounded-md cursor-pointer transition-all">
                        Europe
                    </div>
                    <div className="min-w-fit w-fit px-3 py-2 bg-white text-[13px] md:text-sm text-richblack-800 hover:text-white hover:bg-[#ff621c] rounded-md cursor-pointer transition-all">
                        America
                    </div>
               </div>
              
              <div className="">
              {/* <h1 className="text-sm md:text-xl font-semibold md:font-bold">America</h1> */}

               <div className="my-3 flex gap-x-2 md:gap-x-4 md:mt-4 overflow-auto hide-scrollbar"> 
                   <div className="min-w-[130px] w-[130px] h-[160px] sm:w-[160px] sm:h-[200px] md:w-[230px] md:h-[280px] rounded-lg overflow-hidden relative ">
                       <img src={img2} alt="" className="w-full h-full object-cover" />
                       <div className="absolute w-full h-full bottom-0 left-0 flex items-end bg-gradient-to-b from-transparent via-transparent to-black"><h2 className="text-white text-[16px] pb-3 px-3 pl-4 w-full hover:text-[18px] transition-all md:text-xl md:hover:text-2xl">Abu Dhabi</h2></div>
                   </div>
                   <div className="min-w-[130px] w-[130px] h-[160px] sm:w-[160px] sm:h-[200px] md:w-[230px] md:h-[280px] rounded-lg overflow-hidden relative ">
                       <img src={img3} alt="" className="w-full h-full object-cover" />
                       <div className="absolute w-full h-full bottom-0 left-0 flex items-end bg-gradient-to-b from-transparent via-transparent to-black"><h2 className="text-white text-[16px] pb-3 px-3 pl-4 w-full hover:text-[18px] transition-all md:text-xl md:hover:text-2xl">Dubai</h2></div>
                   </div>
                   <div className="min-w-[130px] w-[130px] h-[160px] sm:w-[160px] sm:h-[200px] md:w-[230px] md:h-[280px] rounded-lg overflow-hidden relative ">
                       <img src={img1} alt="" className="w-full h-full object-cover" />
                       <div className="absolute w-full h-full bottom-0 left-0 flex items-end bg-gradient-to-b from-transparent via-transparent to-black"><h2 className="text-white text-[16px] pb-3 px-3 pl-4 w-full hover:text-[18px] transition-all md:text-xl md:hover:text-2xl">Raj Sthan</h2></div>
                   </div>
                   <div className="min-w-[130px] w-[130px] h-[160px] sm:w-[160px] sm:h-[200px] md:w-[230px] md:h-[280px] rounded-lg overflow-hidden relative ">
                       <img src={img1} alt="" className="w-full h-full object-cover" />
                       <div className="absolute w-full h-full bottom-0 left-0 flex items-end bg-gradient-to-b from-transparent via-transparent to-black"><h2 className="text-white text-[16px] pb-3 px-3 pl-4 w-full hover:text-[18px] transition-all md:text-xl md:hover:text-2xl">Raj Sthan</h2></div>
                   </div>
               </div>
              </div>

     </div>

     {/* our destination  */}
     <div className="md:mt-12 max-w-[970px] mx-auto pl-3 md:px-6">
               <h1 className="text-sm md:text-xl font-semibold md:font-bold mt-6 md:top-0 flex justify-between items-baseline pr-2">Adventure
               <span className="text-[10px] md:text-xs font-normal rounded-lg hover:underline cursor-pointer">See All</span>
               </h1>
               <p className="text-xs mt-1 text-richblack-500 hidden md:block ">Experience the thrill of discovering off-the-beaten-path gems and famous landmarks in top destinations worldwide - your wanderlust awaits!</p>
               <div className="mt-3 flex gap-x-2 md:gap-x-4 md:mt-4 overflow-auto hide-scrollbar pb-6">

                    <div className="min-w-[140px] w-[130px] sm:w-[160px] md:min-w-[170px] md:w-[170px] rounded-xl overflow-hidden relative bg-white shadow-xl ">
                            <div className="w-full">
                                <img src={img4} alt="" className="w-full h-[110px] sm:h-[110px] object-cover" />
                            </div>
                            <div className="px-3 sm:px-4 my-2 mb-3 sm:my-4 ">
                                <Tooltip content={"Evenning Desert Saudi Arabia, late Night"}><h3 className="text-[13px] sm:text-sm font-semibold line-clamp-2">Evening Desert S... </h3></Tooltip>
                                <h3 className="text-xs font-bold text-richblack-900 mt-1">AED 135.00</h3>
                                <div className="flex items-center justify-between flex-wrap sm:flex-nowrap mt-0 sm:mt-1">
                                   <p className="text-[8px] text-richblack-200 flex items-center mt-1">277 Reviews</p>
                                   <div className="flex sm:mt-0 gap-x-1 items-center">
                                       <FaStar className="text-yellow-100 text-[8px]"></FaStar>
                                       <FaStar className="text-yellow-100 text-[8px]"></FaStar>
                                       <FaStar className="text-yellow-100 text-[8px]"></FaStar>
                                       <FaStar className="text-yellow-100 text-[8px]"></FaStar>
                                       <FaStar className="text-yellow-100 text-[8px]"></FaStar>
                                   </div>
                                </div>
                                <div className="flex !items-strech gap-1 mt-3">

                                  <Button size="sm" variant="outlined" className="normal-case py-[.4rem] rounded-md px-4 w-full text-[10px] sm:text-[10px] hover:bg-[#ff621c] hover:text-white text-[#ff612c] border-[#ff612c] font-normal">Book Now</Button>
                                  <button className="bg-none relative z-20 px-1 pl-2 border-none before:w-full before:h-full before:bg-none before:hover:bg-richblack-25 before:absolute before:top-0 before:left-[1px] before:py-2 before:rounded-full before:z-0"><MdOutlineAddShoppingCart className="text-lg relative z-30 text-richblack-500"></MdOutlineAddShoppingCart></button>
                                </div>

                            </div>
                    </div>
                    <div className="min-w-[140px] w-[130px] sm:w-[160px] md:min-w-[170px] md:w-[170px] rounded-xl overflow-hidden relative bg-white shadow-xl ">
                            <div className="w-full">
                                <img src={img2} alt="" className="w-full h-[110px] sm:h-[110px] object-cover" />
                            </div>
                            <div className="px-3 sm:px-4 my-2 mb-3 sm:my-4 ">
                                <h3 className="text-[13px] sm:text-sm font-semibold line-clamp-2">Evening Desert S... </h3>
                                <h3 className="text-xs font-bold text-richblack-900 mt-1">AED 135.00</h3>
                                <div className="flex items-center justify-between flex-wrap sm:flex-nowrap mt-0 sm:mt-1">
                                   <p className="text-[8px] text-richblack-200 flex items-center mt-1">277 Reviews</p>
                                   <div className="flex sm:mt-0 gap-x-1 items-center">
                                       <FaStar className="text-yellow-100 text-[8px]"></FaStar>
                                       <FaStar className="text-yellow-100 text-[8px]"></FaStar>
                                       <FaStar className="text-yellow-100 text-[8px]"></FaStar>
                                       <FaStar className="text-yellow-100 text-[8px]"></FaStar>
                                       <FaStar className="text-yellow-100 text-[8px]"></FaStar>
                                   </div>
                                </div>
                                 <div className="flex !items-strech gap-1 mt-3">

                                  <Button size="sm" variant="outlined" className="normal-case py-[.4rem] rounded-md px-4 w-full text-[10px] sm:text-[10px] hover:bg-[#ff621c] hover:text-white text-[#ff612c] border-[#ff612c] font-normal">Book Now</Button>
                                  <button className="bg-none relative z-20 px-1 pl-2 border-none before:w-full before:h-full before:bg-none before:hover:bg-richblack-25 before:absolute before:top-0 before:left-[1px] before:py-2 before:rounded-full before:z-0"><MdOutlineAddShoppingCart className="text-lg relative z-30 text-richblack-500"></MdOutlineAddShoppingCart></button>
                                </div>
                            </div>
                    </div>
                    <div className="min-w-[140px] w-[130px] sm:w-[160px] md:min-w-[170px] md:w-[170px] rounded-xl overflow-hidden relative bg-white shadow-xl ">
                            <div className="w-full">
                                <img src={img3} alt="" className="w-full h-[110px] sm:h-[110px] object-cover" />
                            </div>
                            <div className="px-3 sm:px-4 my-2 mb-3 sm:my-4 ">
                                <h3 className="text-[13px] sm:text-sm font-semibold line-clamp-2">Evening Desert S... </h3>
                                <h3 className="text-xs font-bold text-richblack-900 mt-1">AED 135.00</h3>
                                <div className="flex items-center justify-between flex-wrap sm:flex-nowrap mt-0 sm:mt-1">
                                   <p className="text-[8px] text-richblack-200 flex items-center mt-1">277 Reviews</p>
                                   <div className="flex sm:mt-0 gap-x-1 items-center">
                                       <FaStar className="text-yellow-100 text-[8px]"></FaStar>
                                       <FaStar className="text-yellow-100 text-[8px]"></FaStar>
                                       <FaStar className="text-yellow-100 text-[8px]"></FaStar>
                                       <FaStar className="text-yellow-100 text-[8px]"></FaStar>
                                       <FaStar className="text-yellow-100 text-[8px]"></FaStar>
                                   </div>
                                </div>
                                 <div className="flex !items-strech gap-1 mt-3">

                                  <Button size="sm" variant="outlined" className="normal-case py-[.4rem] rounded-md px-4 w-full text-[10px] sm:text-[10px] hover:bg-[#ff621c] hover:text-white text-[#ff612c] border-[#ff612c] font-normal">Book Now</Button>
                                  <button className="bg-none relative z-20 px-1 pl-2 border-none before:w-full before:h-full before:bg-none before:hover:bg-richblack-25 before:absolute before:top-0 before:left-[1px] before:py-2 before:rounded-full before:z-0"><MdOutlineAddShoppingCart className="text-lg relative z-30 text-richblack-500"></MdOutlineAddShoppingCart></button>
                                </div>
                            </div>
                    </div>
                    <div className="min-w-[140px] w-[130px] sm:w-[160px] md:min-w-[170px] md:w-[170px] rounded-xl overflow-hidden relative bg-white shadow-xl ">
                            <div className="w-full">
                                <img src={img2} alt="" className="w-full h-[110px] sm:h-[110px] object-cover" />
                            </div>
                            <div className="px-3 sm:px-4 my-2 mb-3 sm:my-4 ">
                                <h3 className="text-[13px] sm:text-sm font-semibold line-clamp-2">Evening Desert S... </h3>
                                <h3 className="text-xs font-bold text-richblack-900 mt-1">AED 135.00</h3>
                                <div className="flex items-center justify-between flex-wrap sm:flex-nowrap mt-0 sm:mt-1">
                                   <p className="text-[8px] text-richblack-200 flex items-center mt-1">277 Reviews</p>
                                   <div className="flex sm:mt-0 gap-x-1 items-center">
                                       <FaStar className="text-yellow-100 text-[8px]"></FaStar>
                                       <FaStar className="text-yellow-100 text-[8px]"></FaStar>
                                       <FaStar className="text-yellow-100 text-[8px]"></FaStar>
                                       <FaStar className="text-yellow-100 text-[8px]"></FaStar>
                                       <FaStar className="text-yellow-100 text-[8px]"></FaStar>
                                   </div>
                                </div>
                                 <div className="flex !items-strech gap-1 mt-3">

                                  <Button size="sm" variant="outlined" className="normal-case py-[.4rem] rounded-md px-4 w-full text-[10px] sm:text-[10px] hover:bg-[#ff621c] hover:text-white text-[#ff612c] border-[#ff612c] font-normal">Book Now</Button>
                                  <button className="bg-none relative z-20 px-1 pl-2 border-none before:w-full before:h-full before:bg-none before:hover:bg-richblack-25 before:absolute before:top-0 before:left-[1px] before:py-2 before:rounded-full before:z-0"><MdOutlineAddShoppingCart className="text-lg relative z-30 text-richblack-500"></MdOutlineAddShoppingCart></button>
                                </div>
                            </div>
                    </div>
                    <div className="min-w-[140px] w-[130px] sm:w-[160px] md:min-w-[170px] md:w-[170px] rounded-xl overflow-hidden relative bg-white shadow-xl ">
                            <div className="w-full">
                                <img src={img1} alt="" className="w-full h-[110px] sm:h-[110px] object-cover" />
                            </div>
                            <div className="px-3 sm:px-4 my-2 mb-3 sm:my-4 ">
                                <h3 className="text-[13px] sm:text-sm font-semibold line-clamp-2">Evening Desert S... </h3>
                                <h3 className="text-xs font-bold text-richblack-900 mt-1">AED 135.00</h3>
                                <div className="flex items-center justify-between flex-wrap sm:flex-nowrap mt-0 sm:mt-1">
                                   <p className="text-[8px] text-richblack-200 flex items-center mt-1">277 Reviews</p>
                                   <div className="flex sm:mt-0 gap-x-1 items-center">
                                       <FaStar className="text-yellow-100 text-[8px]"></FaStar>
                                       <FaStar className="text-yellow-100 text-[8px]"></FaStar>
                                       <FaStar className="text-yellow-100 text-[8px]"></FaStar>
                                       <FaStar className="text-yellow-100 text-[8px]"></FaStar>
                                       <FaStar className="text-yellow-100 text-[8px]"></FaStar>
                                   </div>
                                </div>
                                 <div className="flex !items-strech gap-1 mt-3">

                                  <Button size="sm" variant="outlined" className="normal-case py-[.4rem] rounded-md px-4 w-full text-[10px] sm:text-[10px] hover:bg-[#ff621c] hover:text-white text-[#ff612c] border-[#ff612c] font-normal">Book Now</Button>
                                  <button className="bg-none relative z-20 px-1 pl-2 border-none before:w-full before:h-full before:bg-none before:hover:bg-richblack-25 before:absolute before:top-0 before:left-[1px] before:py-2 before:rounded-full before:z-0"><MdOutlineAddShoppingCart className="text-lg relative z-30 text-richblack-500"></MdOutlineAddShoppingCart></button>
                                </div>
                            </div>
                    </div>
                  
                   
                </div>
     </div>
      {/* our Experiances */}
      <div className="md:mt-12 mb-10 md:my-0 max-w-[970px] mx-auto mt-2 pl-3 md:px-6">
                <h1 className="text-sm md:text-xl font-semibold md:font-bold flex justify-between items-baseline pr-2">Most Popular Experiences {window.innerWidth < 600 && <br /> } in Dubai
                <span className="text-[10px] md:text-xs font-normal rounded-lg hover:underline cursor-pointer">See All</span>
                </h1>
                <p className="text-xs mt-1 text-richblack-500 hidden md:block ">Culture, nature, thrills, and record-breaking experiences—Dubai is the place to seek out everything you imagine and beyond. Find it all here!</p>
                <div className="mt-3 flex gap-x-2 md:gap-x-4 md:mt-4 overflow-auto hide-scrollbar pb-6">

                    <div className="min-w-[140px] w-[130px] sm:w-[160px] md:min-w-[170px] md:w-[170px] rounded-xl overflow-hidden relative bg-white shadow-xl ">
                            <div className="w-full">
                                <img src={img2} alt="" className="w-full h-[110px] sm:h-[110px] object-cover" />
                            </div>
                            <div className="px-3 sm:px-4 my-2 mb-3 sm:my-4 ">
                                <Tooltip content={"Evenning Desert Saudi Arabia, late Night"}><h3 className="text-[13px] sm:text-sm font-semibold line-clamp-2">Evening Desert S... </h3></Tooltip>
                                <h3 className="text-xs font-bold text-richblack-900 mt-1">AED 135.00</h3>
                                <div className="flex items-center justify-between flex-wrap sm:flex-nowrap mt-0 sm:mt-1">
                                   <p className="text-[8px] text-richblack-200 flex items-center mt-1">277 Reviews</p>
                                   <div className="flex sm:mt-0 gap-x-1 items-center">
                                       <FaStar className="text-yellow-100 text-[8px]"></FaStar>
                                       <FaStar className="text-yellow-100 text-[8px]"></FaStar>
                                       <FaStar className="text-yellow-100 text-[8px]"></FaStar>
                                       <FaStar className="text-yellow-100 text-[8px]"></FaStar>
                                       <FaStar className="text-yellow-100 text-[8px]"></FaStar>
                                   </div>
                                </div>
                                <div className="flex !items-strech gap-1 mt-3">

                                  <Button size="sm" variant="outlined" className="normal-case py-[.4rem] rounded-md px-4 w-full text-[10px] sm:text-[10px] hover:bg-[#ff621c] hover:text-white text-[#ff612c] border-[#ff612c] font-normal">Book Now</Button>
                                  <button className="bg-none relative z-20 px-1 pl-2 border-none before:w-full before:h-full before:bg-none before:hover:bg-richblack-25 before:absolute before:top-0 before:left-[1px] before:py-2 before:rounded-full before:z-0"><MdOutlineAddShoppingCart className="text-lg relative z-30 text-richblack-500"></MdOutlineAddShoppingCart></button>
                                </div>

                            </div>
                    </div>
                    <div className="min-w-[140px] w-[130px] sm:w-[160px] md:min-w-[170px] md:w-[170px] rounded-xl overflow-hidden relative bg-white shadow-xl ">
                            <div className="w-full">
                                <img src={img1} alt="" className="w-full h-[110px] sm:h-[110px] object-cover" />
                            </div>
                            <div className="px-3 sm:px-4 my-2 mb-3 sm:my-4 ">
                                <h3 className="text-[13px] sm:text-sm font-semibold line-clamp-2">Evening Desert S... </h3>
                                <h3 className="text-xs font-bold text-richblack-900 mt-1">AED 135.00</h3>
                                <div className="flex items-center justify-between flex-wrap sm:flex-nowrap mt-0 sm:mt-1">
                                   <p className="text-[8px] text-richblack-200 flex items-center mt-1">277 Reviews</p>
                                   <div className="flex sm:mt-0 gap-x-1 items-center">
                                       <FaStar className="text-yellow-100 text-[8px]"></FaStar>
                                       <FaStar className="text-yellow-100 text-[8px]"></FaStar>
                                       <FaStar className="text-yellow-100 text-[8px]"></FaStar>
                                       <FaStar className="text-yellow-100 text-[8px]"></FaStar>
                                       <FaStar className="text-yellow-100 text-[8px]"></FaStar>
                                   </div>
                                </div>
                                 <div className="flex !items-strech gap-1 mt-3">

                                  <Button size="sm" variant="outlined" className="normal-case py-[.4rem] rounded-md px-4 w-full text-[10px] sm:text-[10px] hover:bg-[#ff621c] hover:text-white text-[#ff612c] border-[#ff612c] font-normal">Book Now</Button>
                                  <button className="bg-none relative z-20 px-1 pl-2 border-none before:w-full before:h-full before:bg-none before:hover:bg-richblack-25 before:absolute before:top-0 before:left-[1px] before:py-2 before:rounded-full before:z-0"><MdOutlineAddShoppingCart className="text-lg relative z-30 text-richblack-500"></MdOutlineAddShoppingCart></button>
                                </div>
                            </div>
                    </div>
                    <div className="min-w-[140px] w-[130px] sm:w-[160px] md:min-w-[170px] md:w-[170px] rounded-xl overflow-hidden relative bg-white shadow-xl ">
                            <div className="w-full">
                                <img src={img3} alt="" className="w-full h-[110px] sm:h-[110px] object-cover" />
                            </div>
                            <div className="px-3 sm:px-4 my-2 mb-3 sm:my-4 ">
                                <h3 className="text-[13px] sm:text-sm font-semibold line-clamp-2">Evening Desert S... </h3>
                                <h3 className="text-xs font-bold text-richblack-900 mt-1">AED 135.00</h3>
                                <div className="flex items-center justify-between flex-wrap sm:flex-nowrap mt-0 sm:mt-1">
                                   <p className="text-[8px] text-richblack-200 flex items-center mt-1">277 Reviews</p>
                                   <div className="flex sm:mt-0 gap-x-1 items-center">
                                       <FaStar className="text-yellow-100 text-[8px]"></FaStar>
                                       <FaStar className="text-yellow-100 text-[8px]"></FaStar>
                                       <FaStar className="text-yellow-100 text-[8px]"></FaStar>
                                       <FaStar className="text-yellow-100 text-[8px]"></FaStar>
                                       <FaStar className="text-yellow-100 text-[8px]"></FaStar>
                                   </div>
                                </div>
                                 <div className="flex !items-strech gap-1 mt-3">

                                  <Button size="sm" variant="outlined" className="normal-case py-[.4rem] rounded-md px-4 w-full text-[10px] sm:text-[10px] hover:bg-[#ff621c] hover:text-white text-[#ff612c] border-[#ff612c] font-normal">Book Now</Button>
                                  <button className="bg-none relative z-20 px-1 pl-2 border-none before:w-full before:h-full before:bg-none before:hover:bg-richblack-25 before:absolute before:top-0 before:left-[1px] before:py-2 before:rounded-full before:z-0"><MdOutlineAddShoppingCart className="text-lg relative z-30 text-richblack-500"></MdOutlineAddShoppingCart></button>
                                </div>
                            </div>
                    </div>
                    <div className="min-w-[140px] w-[130px] sm:w-[160px] md:min-w-[170px] md:w-[170px] rounded-xl overflow-hidden relative bg-white shadow-xl ">
                            <div className="w-full">
                                <img src={img4} alt="" className="w-full h-[110px] sm:h-[110px] object-cover" />
                            </div>
                            <div className="px-3 sm:px-4 my-2 mb-3 sm:my-4 ">
                                <h3 className="text-[13px] sm:text-sm font-semibold line-clamp-2">Evening Desert S... </h3>
                                <h3 className="text-xs font-bold text-richblack-900 mt-1">AED 135.00</h3>
                                <div className="flex items-center justify-between flex-wrap sm:flex-nowrap mt-0 sm:mt-1">
                                   <p className="text-[8px] text-richblack-200 flex items-center mt-1">277 Reviews</p>
                                   <div className="flex sm:mt-0 gap-x-1 items-center">
                                       <FaStar className="text-yellow-100 text-[8px]"></FaStar>
                                       <FaStar className="text-yellow-100 text-[8px]"></FaStar>
                                       <FaStar className="text-yellow-100 text-[8px]"></FaStar>
                                       <FaStar className="text-yellow-100 text-[8px]"></FaStar>
                                       <FaStar className="text-yellow-100 text-[8px]"></FaStar>
                                   </div>
                                </div>
                                 <div className="flex !items-strech gap-1 mt-3">

                                  <Button size="sm" variant="outlined" className="normal-case py-[.4rem] rounded-md px-4 w-full text-[10px] sm:text-[10px] hover:bg-[#ff621c] hover:text-white text-[#ff612c] border-[#ff612c] font-normal">Book Now</Button>
                                  <button className="bg-none relative z-20 px-1 pl-2 border-none before:w-full before:h-full before:bg-none before:hover:bg-richblack-25 before:absolute before:top-0 before:left-[1px] before:py-2 before:rounded-full before:z-0"><MdOutlineAddShoppingCart className="text-lg relative z-30 text-richblack-500"></MdOutlineAddShoppingCart></button>
                                </div>
                            </div>
                    </div>
                    <div className="min-w-[140px] w-[130px] sm:w-[160px] md:min-w-[170px] md:w-[170px] rounded-xl overflow-hidden relative bg-white shadow-xl ">
                            <div className="w-full">
                                <img src={img2} alt="" className="w-full h-[110px] sm:h-[110px] object-cover" />
                            </div>
                            <div className="px-3 sm:px-4 my-2 mb-3 sm:my-4 ">
                                <h3 className="text-[13px] sm:text-sm font-semibold line-clamp-2">Evening Desert S... </h3>
                                <h3 className="text-xs font-bold text-richblack-900 mt-1">AED 135.00</h3>
                                <div className="flex items-center justify-between flex-wrap sm:flex-nowrap mt-0 sm:mt-1">
                                   <p className="text-[8px] text-richblack-200 flex items-center mt-1">277 Reviews</p>
                                   <div className="flex sm:mt-0 gap-x-1 items-center">
                                       <FaStar className="text-yellow-100 text-[8px]"></FaStar>
                                       <FaStar className="text-yellow-100 text-[8px]"></FaStar>
                                       <FaStar className="text-yellow-100 text-[8px]"></FaStar>
                                       <FaStar className="text-yellow-100 text-[8px]"></FaStar>
                                       <FaStar className="text-yellow-100 text-[8px]"></FaStar>
                                   </div>
                                </div>
                                 <div className="flex !items-strech gap-1 mt-3">

                                  <Button size="sm" variant="outlined" className="normal-case py-[.4rem] rounded-md px-4 w-full text-[10px] sm:text-[10px] hover:bg-[#ff621c] hover:text-white text-[#ff612c] border-[#ff612c] font-normal">Book Now</Button>
                                  <button className="bg-none relative z-20 px-1 pl-2 border-none before:w-full before:h-full before:bg-none before:hover:bg-richblack-25 before:absolute before:top-0 before:left-[1px] before:py-2 before:rounded-full before:z-0"><MdOutlineAddShoppingCart className="text-lg relative z-30 text-richblack-500"></MdOutlineAddShoppingCart></button>
                                </div>
                            </div>
                    </div>
                  
                   
                </div>
      </div>



<div>



      <OwlCarousel className="w-full" items={1} loop>
               <div className=" mx-auto">
                <img src={img1} alt="" />
               </div>
               <div className=" mx-auto">
                <img src={img2} alt="" />
               </div>
               <div className=" mx-auto">
                <img src={img3} alt="" />
               </div>
               <div className=" mx-auto">
                <img src={img4} alt="" />
               </div>
            </OwlCarousel></div>
    </div>
  );
};

export default HeaderSection;
