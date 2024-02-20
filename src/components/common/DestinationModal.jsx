import React from 'react'
import Modal from '../Modal';
import { IoEarth } from 'react-icons/io5';
import Destinations from '../../data/Destinations';

const DestinationModal = ({isDestinationModal, setIsDestinationModal , destinationValue,setDestinationValue}) => {
   const handleDestinationValue = (destinationValue) => {
    setDestinationValue(destinationValue);
    setIsDestinationModal(false);
   };
  return (
    <>
    {isDestinationModal && (
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
                <div key={index} className={`min-w-[30%] w-[33%] sm:w-[160px] overflow-hidden hover:outline outline-[#ff621c] cursor-pointer rounded-xl p-1 ${destinationValue == destination && " outline " }`} onClick={() => handleDestinationValue(destination)}>
                <img
                  loading='lazy'
                  src={destination.image}
                  alt=""
                  className="w-full object-cover h-[54px] md:h-[80px] rounded-lg select-none"
                />
                <h3 className="font-light text-xs mt-1 GTE_light ml-1 ">
                  {destination?.name}
                </h3>
              </div>
              )
            })  
             }
        
            </div>
          </div>
        </Modal>
      )}
    </>
  )
}

export default DestinationModal;