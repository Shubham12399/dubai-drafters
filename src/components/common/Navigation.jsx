import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import { IoCartOutline, IoSearch } from "react-icons/io5";
import { GoSearch } from "react-icons/go";
const Navigation = () => {
  return (
    <div className="w-full bg-white shadow-sm z-[9999] sticky top-0">
        <nav className="max-w-maxContent mx-auto py-0 md:py-2 bg-white pr-4 pl-2 flex items-center justify-between ">
           <Link to={"/"} className="w-fit select-none">
            <img src={logo} alt="company_logo" className="block w-[150px] sm:w[125px] md:w-[160px]" />
           </Link>
           <div className="flex gap-x-3 items-center">

           <Link to={"/search"} className="block text-richblack-900 cursor-pointer ">
                <GoSearch className="text-lg"></GoSearch>
           </Link>
           <Link to={"/cart"} className="block text-richblack-900 cursor-pointer ">
                <IoCartOutline className="text-xl"></IoCartOutline>
           </Link>
           </div>

        </nav>
    </div>
  )
}

export default Navigation;