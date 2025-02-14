import React, { useEffect, useContext, useState } from "react";
import { GlobalData } from "../App";
import { MdKeyboardArrowRight, MdKeyboardArrowDown } from "react-icons/md";
import { useLocation } from "react-router-dom";
import Channel from "./Channel";

function Channels() {
  const location = useLocation();
  const [collapseStates, setCollapseStates] = useState({});
  const pathtoShowCollapse = "/station/";
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
    <div className="w-full flex flex-col items-center border-0 border-l pl-2 pt-4">
      {channelData.map((category) => {
        const isCollapsed = collapseStates[category.id];
        return (
          <div dir="rtl" className="w-[100%]" key={category.id}>
            <h2   onClick={() => toggleCollapse(category.id)} className="border-0 border-b border-b-[#7a7a7a] text-[#587493] font-bold text-[16px] flex justify-between items-center cursor-pointer">
              {category.channelCategoryName}
              {location.pathname.startsWith(pathtoShowCollapse) && (
                <button
                  className=""
                  onClick={() => toggleCollapse(category.id)}
                >
                  {!isCollapsed ? (
                    <MdKeyboardArrowDown />
                  ) : (
                    <MdKeyboardArrowRight />
                  )}
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
                    link= {channel.link}
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
