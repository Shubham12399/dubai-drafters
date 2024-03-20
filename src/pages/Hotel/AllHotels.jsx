import { FaBed, FaChevronLeft, FaChevronRight, FaSmokingBan, FaUser } from "react-icons/fa";
import img from "../../assets/images/IMG-20240205-WA0075.jpg"
const AllHotels = () => {
  return (
    <div className="bg-gray-50">
        <div className='grid grid-cols-3 py-6 px-4 items-center '>
          <FaChevronLeft className="text-sm"></FaChevronLeft>
          <div>
         <h3 className='text-base font-medium'>Select Room</h3> 
          </div>
        </div>
        <div>

<div className="px-4">
  <div className="w-full rounded-2xl overflow-hidden bg-white shadow-[0_0_32px_rgba(0,0,0,0.1)]">
    <img src={img} alt="" className="w-full max-h-[150px]" />
    <div className="px-4 py-4">

    <h2 className="text-lg font-medium">Delux Double Bed with Balcony</h2>
    <div className="grid grid-cols-2 mt-2">
      <div className="flex flex-col gap-y-2">
        <div className="flex items-center gap-x-2">
          <FaBed className="text-[#ff612c]"></FaBed>
          <span className="text-sm font-medium text-gray-700">01 Room</span>
        </div>
        <div className="flex items-center gap-x-2">
          <FaUser className="text-[#ff612c]"></FaUser>
          <span className="text-sm font-medium text-gray-700">02 Guests</span>
        </div>
        <div className="flex items-center gap-x-2">
          <FaSmokingBan className="text-[#ff612c]"></FaSmokingBan>
          <span className="text-sm font-medium text-gray-700">Non-Smoking Room</span>
        </div>
      </div>
      <div className="text-right">
        <h1 className="font-medium text-xl">$85</h1>
        <p className="text-sm text-gray-700">(For 1 Night/Room)</p>
      </div>
    </div>
    <div className="flex justify-between items-center mt-2">
    <button className="text-[13px] flex justify-between items-center">View more Details <FaChevronRight className="text-[11px] ml-2"></FaChevronRight></button>
    <button className="py-2 px-4 rounded-xl bg-[#ff612c] text-white text-xs">Select Room</button>
    </div>
    </div>
  </div>
  <div className="mt-4 w-full rounded-2xl overflow-hidden bg-white shadow-[0_0_32px_rgba(0,0,0,0.1)]">
    <img src={img} alt="" className="w-full max-h-[150px]" />
    <div className="px-4 py-4">

    <h2 className="text-lg font-medium">Delux Double Bed with Balcony</h2>
    <div className="grid grid-cols-2 mt-2">
      <div className="flex flex-col gap-y-2">
        <div className="flex items-center gap-x-2">
          <FaBed className="text-[#ff612c]"></FaBed>
          <span className="text-sm font-medium text-gray-700">01 Room</span>
        </div>
        <div className="flex items-center gap-x-2">
          <FaUser className="text-[#ff612c]"></FaUser>
          <span className="text-sm font-medium text-gray-700">02 Guests</span>
        </div>
        <div className="flex items-center gap-x-2">
          <FaSmokingBan className="text-[#ff612c]"></FaSmokingBan>
          <span className="text-sm font-medium text-gray-700">Non-Smoking Room</span>
        </div>
      </div>
      <div className="text-right">
        <h1 className="font-medium text-xl">$85</h1>
        <p className="text-sm text-gray-700">(For 1 Night/Room)</p>
      </div>
    </div>
    <div className="flex justify-between items-center mt-2">
    <button className="text-[13px] flex justify-between items-center">View more Details <FaChevronRight className="text-[11px] ml-2"></FaChevronRight></button>
    <button className="py-2 px-4 rounded-xl bg-[#ff612c] text-white text-xs">Select Room</button>
    </div>
    </div>
  </div>
  <div className="mt-4 w-full rounded-2xl overflow-hidden bg-white shadow-[0_0_32px_rgba(0,0,0,0.1)]">
    <img src={img} alt="" className="w-full max-h-[150px]" />
    <div className="px-4 py-4">

    <h2 className="text-lg font-medium">Delux Double Bed with Balcony</h2>
    <div className="grid grid-cols-2 mt-2">
      <div className="flex flex-col gap-y-2">
        <div className="flex items-center gap-x-2">
          <FaBed className="text-[#ff612c]"></FaBed>
          <span className="text-sm font-medium text-gray-700">01 Room</span>
        </div>
        <div className="flex items-center gap-x-2">
          <FaUser className="text-[#ff612c]"></FaUser>
          <span className="text-sm font-medium text-gray-700">02 Guests</span>
        </div>
        <div className="flex items-center gap-x-2">
          <FaSmokingBan className="text-[#ff612c]"></FaSmokingBan>
          <span className="text-sm font-medium text-gray-700">Non-Smoking Room</span>
        </div>
      </div>
      <div className="text-right">
        <h1 className="font-medium text-xl">$85</h1>
        <p className="text-sm text-gray-700">(For 1 Night/Room)</p>
      </div>
    </div>
    <div className="flex justify-between items-center mt-2">
    <button className="text-[13px] flex justify-between items-center">View more Details <FaChevronRight className="text-[11px] ml-2"></FaChevronRight></button>
    <button className="py-2 px-4 rounded-xl bg-[#ff612c] text-white text-xs">Select Room</button>
    </div>
    </div>
  </div>
</div>

        </div>
    </div>
  )
}

export default AllHotels;