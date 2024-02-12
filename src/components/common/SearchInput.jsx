import { GoSearch } from "react-icons/go";
import img1 from "../../assets/images/IMG-20240205-WA0063.jpg";
import { useState } from "react";

const SearchInput = () => {
  const [isSearching, setIsSearching] = useState(false);
  const [searchValue, setSearchValue] = useState({});
  const handleSearchData = (e) => {
    const { value } = e.target;
    if (!value || value == "" || value.trim() == "") {
      return setIsSearching(false);
    }
    setIsSearching(true);
  };
  return (
    <div className="relative w-[90%] mx-auto sm:max-w-[340px] md:max-w-[500px] pb-2">
      <div className="px-4 py-3 rounded-xl text-xs text-richblack-700  bg-white shadow-lg flex gap-x-2 pl-4 items-center justify-between mx-auto">
        <div className="flex items-center gap-x-2 overflow-hidden w-full">
          <GoSearch className="text-richblack-400 text-sm"></GoSearch>
          <input
            type="text"
            className="placeholder:text-richblack-400 text-xs
                    md:text-sm text-richblack-900 w-full outline-none border-none GTE_light"
            placeholder="Search Type, Tour, City"
            onChange={(e) => handleSearchData(e)}
          />
        </div>
      </div>
      {isSearching && (
        <div className="relative">
          <div className="w-full flex flex-col rounded-xl bg-white shadow-md absolute top-0 mt-2 p-1 py-2">
            <div className="flex gap-x-2 px-2 my-1 rounded-md w-full cursor-pointer">
              <div>
                <img
                  src={img1}
                  alt=""
                  className="w-[44px] h-[33px] md:w-[60px] md:h-[50px] rounded-md"
                />
              </div>
              <div className="ml-1">
                <h3 className="text-[13px] md:text-sm font-medium">
                  Water tour in Big Bang park
                </h3>
                <p className="text-xs GTE_light text-richblack-700">
                  Dubai , Big Bang city{" "}
                </p>
              </div>
            </div>
            <div className="flex gap-x-2 px-2 my-1 rounded-md w-full cursor-pointer">
              <div>
                <img
                  src={img1}
                  alt=""
                  className="w-[44px] h-[33px] md:w-[60px] md:h-[50px] rounded-md"
                />
              </div>
              <div className="ml-1">
                <h3 className="text-[13px] md:text-sm font-medium">
                  Water tour in Big Bang park
                </h3>
                <p className="text-xs GTE_light text-richblack-700">
                  Dubai , Big Bang city{" "}
                </p>
              </div>
            </div>
            <div className="flex gap-x-2 px-2 my-1 rounded-md w-full cursor-pointer">
              <div>
                <img
                  src={img1}
                  alt=""
                  className="w-[44px] h-[33px] md:w-[60px] md:h-[50px] rounded-md"
                />
              </div>
              <div className="ml-1">
                <h3 className="text-[13px] md:text-sm font-medium">
                  Water tour in Big Bang park
                </h3>
                <p className="text-xs GTE_light text-richblack-700">
                  Dubai , Big Bang city{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchInput;
