import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import { IoCartOutline, IoSearch } from "react-icons/io5";
import { GoSearch } from "react-icons/go";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useEffect, useState } from "react";

const Navigation = () => {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);

  // that can be done by this but there have simple hook to handle it  useMotionValueEvent();

  // useEffect(()=>{
  //   const unsub = scrollY.on("change" , (latest) => {
  //     if(latest >= 20 ){
  //       setHidden(true);
  //     }
  //   })

  //   return () => unsub();
  // },[scrollY]);

  useMotionValueEvent(scrollY, "change", (latest) => {
    let previousValue = scrollY.getPrevious();
    if (latest > previousValue  && latest > 30) {
      setHidden(true);
    } else {
      setHidden(false);
    }
    // console.log(latest);
  });
  return (
    <motion.div
      initial={{ y: -50, opacity: 50 }}
      variants={{
        visible: {
          y: 0,
        },
        hidden: {
          y: -50,
        },
      }}
      transition={{
        duration: 0.3,
        delay: 0.3,
        // stiffness:300
      }}
      animate={hidden ? "hidden" : "visible"}
      className="w-full z-[9999] sticky bg-white top-0"
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
    </motion.div>
  );
};

export default Navigation;
