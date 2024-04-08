import { useEffect, useState } from "react";
import TourType from "../../data/TourType";
import Destinations from "../../data/Destinations";
import Modal from "../Modal";
import { IoEarth } from "react-icons/io5";
import { AnimatePresence } from "framer-motion";

const SelectModal = ({isSelectModal , setIsSelectModal , selectValue , setSelectValue,type}) => {
    const [mappedData , setMappedData] = useState([]); 
    
    useEffect(() => { 
      setMappedData([]);
        if(type == "tourType"){
          console.log(TourType)
            setMappedData([...TourType]);
        }
        if(type == "tourDestination"){
          console.log(Destinations) 
            setMappedData([...Destinations]);
        }  
    },[type]);

    const handleSelectValue = (value) => {
      setSelectValue(value);
      setTimeout(()=>{
        setIsSelectModal(false);
      },300);
    };
    return (
      <>
      <AnimatePresence>
      {isSelectModal && (
          <Modal
            title={
              <div className="flex items-center gap-x-2 GTE_light">
               {
                type=="tourDestination" ?<> Choose Destination</>:type=="tourType"?<> Choose Type</>:null
               }
                <IoEarth className="text-richblack-500"></IoEarth>
              </div>
            }
            setModal={setIsSelectModal}
            isSelectModal={isSelectModal}
          >
            <div className="w-fit mx-auto">
              <div className="flex justify-start flex-wrap gap-y-1 my-2">
              { mappedData?.map((mappedItem,index) => {
                return (
                  <div key={index} className={`min-w-[30%] w-[33%] sm:w-[160px] overflow-hidden  cursor-pointer rounded-xl p-1 `} onClick={() =>
                   {handleSelectValue(mappedItem);}}>
                  <img
                    // src={mappedItem.image}
                    src="https://res.cloudinary.com/dky0bhd07/image/upload/ar_16:9,c_fill,g_auto/c_scale,w_603/v1711187913/roverDrifters/yi3tyxq81uvlgya2jccr.png"
                    alt=""
                    className="w-full object-cover h-[54px] md:h-[80px] rounded-lg select-none"
                  />
                  <h3 className={`font-light text-xs mt-1 GTE_light ml-1  ${JSON.stringify(selectValue) == JSON.stringify(mappedItem) && " text-[#ff612c] " }`}>
                    {mappedItem?.name}
                  </h3>
                </div>
                )
              })  
               }
              </div>
            </div>
          </Modal>
        )}
        </AnimatePresence>
      </>
    )
}

export default SelectModal;