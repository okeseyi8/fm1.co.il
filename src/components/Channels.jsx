import React, { useEffect, useContext, useState } from "react";
import { GlobalData } from "../App";
import { MdKeyboardArrowRight, MdKeyboardArrowDown } from "react-icons/md";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import { useLocation } from "react-router-dom";
import Channel from "./Channel";
import { IoIosArrowBack } from "react-icons/io";
// import { IoIosArrowDown } from "react-icons/io";
function Channels() {
  const location = useLocation();
  const [collapseStates, setCollapseStates] = useState({});
  const pathtoShowCollapse = "";
  const { channelData, handleLike } = useContext(GlobalData);

  const toggleCollapse = (categoryId) => {
    setCollapseStates((prev) => ({
      ...prev,
      [categoryId]: !prev[categoryId],
    }));
  };

  useEffect(() => {
    console.log(location.pathname);
  }, [location.pathname]);

  return (
    <div className="w-full flex flex-col items-center border-0 border-l sm:pl-2 pl-0  pt-0 sm:pt-4">
      {channelData.map((category) => {
        const isCollapsed = collapseStates[category.id];
        return (
          <div dir="rtl" className="w-[100%] bg-[white]" key={category.id}>
            <h2
              onClick={() => toggleCollapse(category.id)}
              className="border-0 border-b sm:h-auto h-20 border-b-[#7a7a7a] text-[#587493] font-bold text-[16px] flex justify-between items-center cursor-pointer"
            >
              <div className="flex flex-row-reverse items-center gap-2">
                <h1  className="text-[25px] sm:text-[18px] font-normal sm:font-medium">{category.channelCategoryName}</h1>
                <button onClick={() => toggleCollapse(category.id)} className="sm:hidden flex items-center text-[25px] mr-4"> 
                {location.pathname.startsWith(pathtoShowCollapse) && (
             
                  !isCollapsed ? <button onClick={() => toggleCollapse(category.id)} className=""> <IoIosArrowDown/> </button> : <button onClick={() => toggleCollapse(category.id)} className="">  <IoIosArrowBack /> </button>
            
              )}
                </button>
                
              </div>
              {location.pathname.startsWith(pathtoShowCollapse) && (
                <button
                  className="text-[#587493] hidden sm:block"
                  onClick={() => toggleCollapse(category.id)}
                >
                  {!isCollapsed ? <IoIosArrowDown /> : <IoIosArrowForward />}
                </button>
              )}
            </h2>

            {/* Collapsible UL */}
            <ul
              className={`overflow-hidden transition-all duration-300 ease-in-out`}
              style={{
                maxHeight: !isCollapsed
                  ? `${category.channels.length * 50}px`
                  : "0",
              }}
            >
              {category.channels.map((channel) => (
                <li
                  className="list-none text-[12px] rtl:mr-2 leading-[25px]"
                  key={channel.id}
                >
                  <Channel
                    channel={channel}
                    id={channel.engName}
                    handleLike={handleLike}
                    link={channel.link}
                  />
                </li>
              ))}
            </ul>
          </div>
        );
      })}
    </div>
  );
}

export default Channels;
