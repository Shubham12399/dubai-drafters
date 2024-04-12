import {
  Carousel,
  IconButton,
} from "@material-tailwind/react";
import { GoChevronLeft, GoChevronRight } from "react-icons/go";
import bannerImg1 from "../../../assets/images/banner-1.jpg"
const HeaderSection = () => {
  // const { isPending, error, data } = useQuery({
  //   queryKey: ["repoData"],
  //   queryFn: () =>
  //     fetch("https://api.github.com/repos/TanStack/query").then((res) =>
  //       res.json()
  //     ),
  // });
  //   if (isPending){
  //     return (<div className="pb-12 max-w-maxContent mx-auto">
  //   <HeaderSkl></HeaderSkl>
  //   <div className="max-w-[900px] mx-auto">
  //   <TitleSkl></TitleSkl>
  //   <TagsSkl></TagsSkl>
  //   <PostSkl></PostSkl>
  //   <TitleSkl></TitleSkl>
  //   <PostSkl></PostSkl>
  //   </div>

  //   </div>)}

  //   if (error) return 'An error has occurred: ' + error.message

  return (
    <div className="w-full h-full max-w-maxContent mx-auto px-2">
      <div className="px-1 pb-0 pt-1">
        <div className="rounded-xl overflow-hidden ">
          {
            <Carousel
              className="rounded-none relative"
              autoplay={true}
              transition={{ duration: 0.7 }}
              // navigation={({ setActiveIndex, activeIndex, length }) => (
              // //   <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
              // //     {new Array(length).fill("").map((_, i) => (
              // //       <span
              // //         key={i}
              // //         className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
              // //           activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
              // //         }`}
              // //         onClick={() => setActiveIndex(i)}
              // //       />
              // //     ))}
              // //   </div>
              // <></>
              // )}
              prevArrow={({ handlePrev, firstIndex }) => (
                // <IconButton
                //   variant="text"
                //   color="white"
                //   size="lg"
                //   onClick={handlePrev}
                //   className={`!absolute bottom-2 rounded-full text-black right-12 sm:right-14 !p-0 border before:!w-[100%] bg-white hover:text-white w-[25px] sm:w-[30px] sm:h-[30px] h-[25px] ${firstIndex && " text-richblack-50 border-richblack-25 bg-[rgba(299,299,299,0.3)] hover:bg-[rgba(299,299,299,0.3)]"}`}
                // >
                //   <GoChevronLeft className={`text-[1.15rem] sm:text-xl font-bold ${firstIndex && " text-[rgba(299,299,299,0.4)]"}`} />
                // </IconButton>
                <></>
              )}
              nextArrow={({ handleNext, lastIndex }) => (
                // <IconButton
                //   variant="text"
                //   color="white"
                //   size="lg"
                //   onClick={handleNext}
                //   className={`!absolute bottom-2 rounded-full text-black right-4 !p-0 border before:!w-[100%] bg-white hover:text-white w-[25px] sm:w-[30px] sm:h-[30px] h-[25px] ${lastIndex && " text-richblack-50 border-[rgba(299,299,299,0.2)]  hover:bg-[rgba(299,299,299,0.2)] bg-[rgba(299,299,299,0.2)]"}`}
                // >
                //   <GoChevronRight className={`text-[1.15rem] sm:text-xl font-bold ${lastIndex && " text-[rgba(299,299,299,0.4)]"}`} />
                // </IconButton>
                                <></>
              )}
            >
              <div className="w-full h-[170px] md:h-[500px] overflow-hidden">
                <img
                  // src={collaborationBanner1}
                  src="https://res.cloudinary.com/dky0bhd07/image/upload/ar_16:9,c_fill,g_auto/c_scale,w_742/v1711025841/roverDrifters/d7gzw6rkhorfwsqh2aff.jpg"
                  alt="image 1"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="w-full h-[170px] md:h-[500px]">
                <img
                  src="https://res.cloudinary.com/dky0bhd07/image/upload/ar_16:9,c_fill,g_auto/c_scale,w_603/v1711187913/roverDrifters/yi3tyxq81uvlgya2jccr.png"
                  alt="image 2"
                  className="h-full w-full object-cover"
                />{" "}
              </div>
              <div className="w-full h-[170px] md:h-[500px] relative">
                <img
                  // src="https://res.cloudinary.com/dky0bhd07/image/upload/ar_16:9,c_fill,g_auto/c_scale,w_742/v1711025841/roverDrifters/d7gzw6rkhorfwsqh2aff.jpg"
                  src={bannerImg1}
                  alt="image 3"
                  className="h-full w-full object-cover"
                />
                {/* /* <div className="absolute w-full top-0 left-0 h-full bg-gradient-to-r from-[rgba(0,0,0,0.7)] to-transparent z-[999] p-3 md:p-16 hidden md:block">
          <h1 className="text-white text-xs md:text-4xl font-black leading-tight first-letter:text-6xl flex gap-2 items-baseline "> <span className="text-[#ff621c]">?</span>
          <p className="text-[10px] md:text-lg text-white mb-2 md:mb-4 font-medium">a travel agent or freelancer</p>

          </h1>
            <h1 className="text-white text-[16px] md:text-4xl font-black leading-tigh8 ">Work With us and Get <br /> Guranted Commission </h1>
            <p className="max-w-maxContentTab mt-3 text-richblack-5 font-normal hidden md:block md:text-sm pr-4 pl-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro error sequi cupiditate impedit, sapiente velit in, et ad optio sit ut dolores alias voluptate ex explicabo? Atque magni aut obcaecati! Iure aperiam accusamus hic Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum aliquam alias, illo adipisci impedit illum ad enim omnis vero exercitationem.!</p>
            <ButtonGroup className="mt-6 hidden md:block">
                <Button className="bg-[#ff612c] text-white normal-case">Join Now </Button>
                <Button className=" normal-case">Contact us </Button>
            </ButtonGroup>
          </div>  #/ */}
              </div>
            </Carousel>}
        </div>
      </div>
    </div>
  );
};

export default HeaderSection;
