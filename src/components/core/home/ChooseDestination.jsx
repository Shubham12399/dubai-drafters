
import { useNavigate } from "react-router";
const ChooseDestination = () => {
    const navigate = useNavigate();
  return (
    <>
        {/* Choose Destination  ------------------------------------------------------------------------------- */}
        <div className="md:mt-12 max-w-maxWidthContent mx-auto -mt-2 pl-3 md:px-6">
          <h1 className="text-lg md:text-2xl font-bold">
            Choose Destination{" "}
          </h1>
          {/* Tags */}
          <div className="flex items-start overflow-auto gap-2 py-2 hide-scrollbar font-normal GTE_light ">
            <div className="min-w-fit normal-case bg-[#ff621c] text-white text-xs rounded-full font-medium md:px-4 drop-shadow-[0_0_4px_#ff641c6a] px-2 py-2 flex items-center gap-x-1 ">
             <img src="https://www.shutterstock.com/image-vector/national-flag-islamic-united-arab-260nw-1487573891.jpg"className="rounded-full w-[18px] h-[18px] border-[3px] border-white" alt="" />
              <span className="font-normal">UAE</span>
            </div>
            
            <div className="min-w-fit w-fit px-3 py-2 text-[12px] md:text-sm hover:text-white hover:bg-[#ff621c] text-black rounded-full cursor-pointer transition-all border flex items-center gap-x-1 ">
             <img src="https://www.shutterstock.com/image-vector/national-flag-islamic-united-arab-260nw-1487573891.jpg"className="rounded-full w-[18px] h-[18px] border" alt="" />
              <span className="font-normal">USA</span>
            </div>
            <div className="min-w-fit w-fit px-3 py-2 text-[12px] md:text-sm hover:text-white hover:bg-[#ff621c] text-black rounded-full cursor-pointer transition-all border flex items-center gap-x-1 ">
             <img src="https://www.shutterstock.com/image-vector/national-flag-islamic-united-arab-260nw-1487573891.jpg"className="rounded-full w-[18px] h-[18px] border" alt="" />
              <span className="font-normal">USA</span>
            </div>
            <div className="min-w-fit w-fit px-3 py-2 text-[12px] md:text-sm hover:text-white hover:bg-[#ff621c] text-black rounded-full cursor-pointer transition-all border flex items-center gap-x-1 ">
             <img src="https://www.shutterstock.com/image-vector/national-flag-islamic-united-arab-260nw-1487573891.jpg"className="rounded-full w-[18px] h-[18px] border" alt="" />
              <span className="font-normal">USA</span>
            </div>
            <div className="min-w-fit w-fit px-3 py-2 text-[12px] md:text-sm hover:text-white hover:bg-[#ff621c] text-black rounded-full cursor-pointer transition-all border flex items-center gap-x-1 ">
             <img src="https://www.shutterstock.com/image-vector/national-flag-islamic-united-arab-260nw-1487573891.jpg"className="rounded-full w-[18px] h-[18px] border" alt="" />
              <span className="font-normal">USA</span>
            </div>
            <div className="min-w-fit w-fit px-3 py-2 text-[12px] md:text-sm hover:text-white hover:bg-[#ff621c] text-black rounded-full cursor-pointer transition-all border flex items-center gap-x-1 ">
             <img src="https://www.shutterstock.com/image-vector/national-flag-islamic-united-arab-260nw-1487573891.jpg"className="rounded-full w-[18px] h-[18px] border" alt="" />
              <span className="font-normal">USA</span>
            </div>
           
          </div>

          <div>
            {/* <h1 className="text-lg md:text-2xl font-medium">America</h1> */}

            <div className="my-3 flex gap-x-2 md:gap-x-4 md:mt-6 overflow-auto hide-scrollbar">
              <div className="min-w-[100px] w-[100px] h-[120px] sm:w-[160px] sm:h-[200px] md:w-[230px] md:h-[280px] rounded-lg overflow-hidden relative " onClick={() => navigate("/city/city1")}>
                <img
                  loading="lazy" src="https://media.tacdn.com/media/attractions-splice-spp-674x446/11/f5/21/a0.jpg" alt="" className="w-full h-full object-cover" />
                <div className="absolute w-full h-full bottom-0 left-0 flex items-end bg-gradient-to-b from-transparent via-transparent to-black">
                  <h2 className="text-white text-[14px] pb-3 px-3 pl-4 w-full hover:text-[15px] transition-all md:text-xl md:hover:text-2xl GTE_light">
                    Abu Dhabi
                  </h2>
                </div>
              </div>
              <div className="min-w-[100px] w-[100px] h-[120px] sm:w-[160px] sm:h-[200px] md:w-[230px] md:h-[280px] rounded-lg overflow-hidden relative ">
                <img
                  loading="lazy" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQyRkbGfayHcpGUlZoSllbnSOfF6-AEMOfCsuMNTvOrA&s" alt="" className="w-full h-full object-cover" />
                <div className="absolute w-full h-full bottom-0 left-0 flex items-end bg-gradient-to-b from-transparent via-transparent to-black">
                  <h2 className="text-white text-[14px] pb-3 px-3 pl-4 w-full hover:text-[15px] transition-all md:text-xl md:hover:text-2xl GTE_light">
                    Dubai
                  </h2>
                </div>
              </div>
              <div className="min-w-[100px] w-[100px] h-[120px] sm:w-[160px] sm:h-[200px] md:w-[230px] md:h-[280px] rounded-lg overflow-hidden relative ">
                <img
                  loading="lazy" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsq5o8OqLkq2rna9oW78lnptEwSOFrFe5P3JAhwRL_DA&s" alt="" className="w-full h-full object-cover" />
                <div className="absolute w-full h-full bottom-0 left-0 flex items-end bg-gradient-to-b from-transparent via-transparent to-black">
                  <h2 className="text-white text-[14px] pb-3 px-3 pl-4 w-full hover:text-[15px] transition-all md:text-xl md:hover:text-2xl GTE_light">
                    Raj Sthan
                  </h2>
                </div>
              </div>
              <div className="min-w-[100px] w-[100px] h-[120px] sm:w-[160px] sm:h-[200px] md:w-[230px] md:h-[280px] rounded-lg overflow-hidden relative ">
                <img
                  loading="lazy" src="https://media.istockphoto.com/id/697863854/photo/the-skyline-of-doha-city-center-after-sunset-qatar.jpg?s=612x612&w=0&k=20&c=yIvIHVt1o0iSV_0Bpws9dH3zkiHT4IlmdljxGqZeTBw=" alt="" className="w-full h-full object-cover" />
                <div className="absolute w-full h-full bottom-0 left-0 flex items-end bg-gradient-to-b from-transparent via-transparent to-black">
                  <h2 className="text-white text-[14px] pb-3 px-3 pl-4 w-full hover:text-[15px] transition-all md:text-xl md:hover:text-2xl GTE_light">
                   Qatar
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