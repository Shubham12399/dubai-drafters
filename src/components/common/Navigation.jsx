import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import { IoCartOutline } from "react-icons/io5";
const Navigation = () => {
  return (
    <div className="w-full bg-white shadow-sm relative z-[9999] md:sticky md:top-0">
        <nav className="max-w-maxContent mx-auto py-1 md:py-2 bg-white px-4 flex items-center justify-between ">
           <Link to={"/"} className="w-fit select-none">
            <img src={logo} alt="company_logo" className="block w-[110px] sm:w[125px] md:w-[160px]" />
           </Link>
           <div className="block sm:hidden text-richblack-700 cursor-pointer ">
                <IoCartOutline className="text-xl"></IoCartOutline>
           </div>
        </nav>
    </div>
  )
}

export default Navigation;