import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import { IoCartOutline, IoSearch } from "react-icons/io5";
import { GoSearch } from "react-icons/go";
const Navigation = () => {
  return (
    <div className="w-full bg-white shadow-sm relative z-[9999] md:sticky md:top-0">
        <nav className="max-w-maxContent mx-auto py-2 md:py-2 bg-white px-4 flex items-center justify-between ">
           <Link to={"/"} className="w-fit select-none">
            <img src={logo} alt="company_logo" className="block w-[110px] sm:w[125px] md:w-[160px]" />
           </Link>
           <div className="flex gap-x-3 items-center">

           <div className="block text-richblack-900 cursor-pointer ">
                <GoSearch className="text-lg"></GoSearch>
           </div>
           <div className="block text-richblack-900 cursor-pointer ">
                <IoCartOutline className="text-xl"></IoCartOutline>
           </div>
           </div>

        </nav>
    </div>
  )
}

export default Navigation;