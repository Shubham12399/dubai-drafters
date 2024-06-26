import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import { IoCartOutline} from "react-icons/io5";
import { GoSearch } from "react-icons/go";
// import { motion, useScroll, useMotionValueEvent } from "framer-motion";
// import { useEffect, useState } from "react";

const Navigation = () => {
  // const { scrollY } = useScroll();
  // const [hidden, setHidden] = useState(false);

  // that can be done by this but there have simple hook to handle it  useMotionValueEvent();

  // useEffect(()=>{
  //   const unsub = scrollY.on("change" , (latest) => {
  //     if(latest >= 20 ){
  //       setHidden(true);
  //     }
  //   })

  //   return () => unsub();
  // },[scrollY]);

  // useMotionValueEvent(scrollY, "change", (latest) => {
  //   let previousValue = scrollY.getPrevious();
   
  //  ;(()=>{
  //   if(latest < 8) {
  //     document.getElementById("nav_container").style.boxShadow = "none"
  //   }else{
  //     document.getElementById("nav_container").style.boxShadow = "0 4px 20px rgba(0,0,0,0.1)";
   
  //   }
  //  })()
  //   if (latest > previousValue  && latest > 30) {
  //     setHidden(true);
  //   } else {
  //     setHidden(false);
  //   }
  //   // console.log(latest);
  // });
  return (
    <div
      // initial={{ y: -100, opacity: 50 }}
      // variants={{
      //   visible: {
      //     y: 0,
      //   },
      //   hidden: {
      //     y: -100,
      //   },
      // }}
      // transition={{
      //   duration: 0.3,
      //   delay: 0.3,
      //   // stiffness:300
      // }}
      // animate={hidden ? "hidden" : "visible"}
      className="w-full z-[50] sticky bg-white top-0 "
      id="nav_container"
    >
      <nav className="relative z-50 max-w-maxContent mx-auto py-0 md:py-2 pr-4 pl-2 flex items-center justify-between">
        <div>
          <Link to={"/"} className="w-fit select-none">
            <img
              src={logo}
              alt="company_logo"
              className="block w-[150px] sm:w[125px] md:w-[160px]"
            />
          </Link>
        </div>
        <div className="flex gap-x-3 items-center">
          <div>
            <Link
              to={"/search"}
              className="block text-richblack-900 cursor-pointer "
            >
              <GoSearch className="text-lg"></GoSearch>
            </Link>
          </div>
          <div>
            <Link
              to={"/cart"}
              className="block text-richblack-900 cursor-pointer "
            >
              <IoCartOutline className="text-xl"></IoCartOutline>
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navigation;
