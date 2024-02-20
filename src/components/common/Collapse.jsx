import { useState } from "react";
import { GoChevronDown } from "react-icons/go";
import { Collapse } from "react-collapse";

const CollapseComp = ({ className,title, children }) => {
  const [isCollapsed, setIsCollapsed] = useState();
  return (
    <div className={ "border cursor-pointer "}>
        <div className="flex gap-x-2 py-3 justify-between items-center cursor-pointer hover:bg-[rgba(0,0,0,0.05)] px-4 "  onClick={() => setIsCollapsed(!isCollapsed)}>
            <div className="w-fit">
            <h3 className="text-richblue-500 ">
                {title}
            </h3>
            <span className="block h-[3px] w-[30%] rounded-lg bg-[#ff612c]"> </span>
            </div>
           
            <div>
                <GoChevronDown className={`transition-all duration-500 ${isCollapsed && " rotate-180 "}`}></GoChevronDown>
            </div>
        </div>
      <Collapse isOpened={isCollapsed} classID="1" className="transition-all">
        <div className="py-2 px-4">
          {children}
        </div>
      </Collapse>
    </div>
  );
};

export default CollapseComp;
