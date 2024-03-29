import { useState } from "react";
import BottomNav from "../components/common/BottomNav";
import Navigation from "../components/common/Navigation";
import HeaderSection from "../components/core/home/HeaderSection";
import Modal from "../components/Modal";
import { AnimatePresence, motion } from "framer-motion";
import { Button } from "@material-tailwind/react";
import { GoChevronRight, GoX } from "react-icons/go";
import { Router, useNavigate } from "react-router-dom";
import TourType from "../data/TourType";
import SelectModal from "../components/common/SelectModal";
import locationIcon from "../assets/images/icons8-location.gif";
import mapIcon from "../assets/images/icons8-map-marker.gif";
import ChooseDestination from "../components/core/home/ChooseDestination";
import TypeTours from "../components/core/home/TypeTours";
import { slide } from "../data/animationConstants";

const HomePage = () => {
  const [selectionType, setSelectionType] = useState([]);
  const [selectType, setSelectType] = useState(false);
  const [destinationValue, setDestinationValue] = useState({});
  const [isModal, setIsModal] = useState(false);
  const [tourType, setTourType] = useState({});
  const [show, setShow] = useState(false);
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
    <motion.div  key={"homePage"} exit={{opacity:0}} className="relative">
      <div>

      {/* <motion.div
        initial={{
          position: "static",
          width: 0,
          height: 0,
          opacity: 0,
        }}
        exit={{
          position: "fixed",
          width: "100%",
          height: "100vh",
          opacity: 1,
          background: "rgba(0,0,0,0.7)",
        }}
        animate={{
          position: "static",
          width: 0,
          height: 0,
          opacity: 0,
        }}
        className="fixed w-full h-screen top-0 left-0 z-[51] "
      ></motion.div> */}

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
                        <img src={locationIcon} alt="" className="w-[50px]" />
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
                        // setShow((prev) => !prev);
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
                        <img src={mapIcon} alt="" className="w-[40px]" />
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
        <ChooseDestination></ChooseDestination>

        <div>
          {/* <button onClick={() => setShow((prev) => !prev)}>
            {!show ? "show" : "hide"}
          </button> */}

          <AnimatePresence>
            {show && (
              <motion.div
                initial={{
                  bottom: "-650px",
                }}
                animate={{
                  bottom: "-300px",
                }}
                exit={{
                  bottom: "-650px",
                }}
                className="fixed w-full mt-64 h-[600px] bg-white py-4 px-4 shadow-xl rounded-2xl"
              >
                <div className=" max-w-maxContentTab mx-auto ">
                  <div className="flex justify-between px-2 items-center border-b">
                    <div className="select-none text-sm">{"title"}</div>
                    <div
                      className="relative before:w-full before:h-full before:rounded-full before:absolute before:top-0 before:left-0  before:hover:bg-[rgba(0,0,0,0.04)] rounded-full p-2 -mr-2 cursor-pointer"
                      onClick={() => {
                        setShow(false);
                      }}
                    >
                      <GoX className="text-lg text-richblack-900"></GoX>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        <TypeTours></TypeTours>
      </div>

      {/* ----------------------------------Bottom Nav ---------------------------------------- */}
      <BottomNav></BottomNav>
      </div>

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
    </motion.div>
  );
};

export default HomePage;
