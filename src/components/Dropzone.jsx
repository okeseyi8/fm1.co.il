import React, { useState, useEffect,  useContext } from "react";
import { useNavigate } from "react-router-dom";

import Sortable from "sortablejs";
import { GlobalData } from '../App'
import { FaXmark } from "react-icons/fa6";
import "./css/Dropzone.css"
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import { useLocation } from "react-router-dom";
import Channel from "./Channel";
import { IoIosArrowBack } from "react-icons/io";



const Dropzone = ({isMobile}) => {


  const navigateFavStation = useNavigate();
  const {
    channelData,
    setChannelData,
    likedChannels,
    setLikedChannels,
    handleLike,
    handleRemove,
    likedChannelsRef,
    sortableContainer,
  } = useContext(GlobalData);

  useEffect(() => {
    const seenChannelNames = new Set();
    const liked = [];

    channelData.forEach((channel) => {
      channel.channels.forEach((station) => {
        if (station.isLiked && !seenChannelNames.has(station.channelName)) {
          liked.push(station);
          seenChannelNames.add(station.channelName);
        }
      });
    });

    setLikedChannels(liked);
  }, [channelData]);

  useEffect(() => {
    likedChannelsRef.current = likedChannels;
    localStorage.setItem("likedChannels", JSON.stringify(likedChannels));
  }, [likedChannels]);

  useEffect(() => {
    localStorage.setItem("channelData", JSON.stringify(channelData));
  }, [channelData]);

  useEffect(() => {
    let sortableInstance;

    if (sortableContainer.current) {
      if (sortableInstance) {
        sortableInstance.destroy();
      }

      sortableInstance = new Sortable(sortableContainer.current, {
        animation: 150,
        invertSwap: true, // 🔹 Fix for RTL mode
        swapThreshold: 0.65, // 🔹 Adjust swap sensitivity
        direction: "rtl", // 🔹 Make sure sorting works in RTL
        onEnd: () => {
          const currentLikedChannels = likedChannelsRef.current;
          const updatedOrder = Array.from(sortableContainer.current.children).map((child) =>
            currentLikedChannels.find((channel) => channel.channelName === child.dataset.id)
          );
          setLikedChannels(updatedOrder);
        },
      });
    }

    return () => {
      if (sortableInstance) {
        sortableInstance.destroy();
      }
    };
  }, [likedChannels]);
    // Local state to control the collapsible for mobile
    const [collapseLiked, setCollapseLiked] = useState(false);

    // For mobile, the header with the title and arrow icon toggles collapse
    const toggleCollapseLiked = () => {
      setCollapseLiked((prev) => !prev);
    };
  return (
    <div>
    {/** If mobile, show collapsible dropdown */}
    {isMobile ? (
      <div  className="w-full bg-[white]">
        <h2 
          onClick={toggleCollapseLiked}
          className="border-0 border-b sm:h-auto h-20 border-b-[#7a7a7a] text-[#587493] font-bold text-[16px] flex items-center cursor-pointer"
        >
         
          <span className=" text-[25px] mr-4">{collapseLiked ?  <IoIosArrowBack /> : <IoIosArrowDown /> }</span>
          
          <span className="font-normal text-[#587493] text-[25px]">תחנות מועדפות</span>
          
        </h2>
        <ul
          dir="rtl"
          className="overflow-hidden transition-all duration-300 ease-in-out"
          style={{
            maxHeight: collapseLiked
              ? "0"
              : `${likedChannels.length * 80}px`, // adjust based on item height
          }}
        >
          {likedChannels.length > 0 ? (
            likedChannels.map((channel) => (
              
              <li
                data-id={channel.channelName}
                className="channel-item relative flex items-center p-[6px] mt-3   rounded-[10px] text-[12px] rtl:mr-0 leading-[25px]"
                key={channel.channelName}
              > 
                <img
                  onClick={() => navigateFavStation(`/${channel.engName}`)}
                  className="w-[20px] h-[20px]"
                  src={channel.image}
                  alt={channel.channelName}
                />
                <button
                  onClick={() => handleRemove(channel.channelName)}
                  className="remove-button absolute top-[1px] left-[12px] text-[#ff0000] text-[18px]"
                >
                  <FaXmark />
                </button>
                <div className="mr-2">
                  <h3 className="text-[20px] font-normal text-[rgb(57,57,57)]">{channel.channelName}</h3>
                </div>
              </li>
            ))
          ) : (
            <li className="text-center p-2">No Liked channels yet</li>
          )}
        </ul>
      </div>
    ) : (
      /** For non-mobile, display the list normally */
      <>
        {likedChannels.length > 0 ? (
          <ul
            dir="rtl"
            className="w-full flex flex-wrap justify-center gap-5"
          >
            {likedChannels.map((channel) => (
              <li
                data-id={channel.channelName}
                className="channel-item relative flex p-[6px] mt-3 bg-[#ddd] hover:bg-[#4CA1C4] rounded-[10px]"
                key={channel.channelName}
              >
                <img
                  onClick={() => navigateFavStation(`/${channel.engName}`)}
                  className="w-[60px] h-[60px]"
                  src={channel.image}
                  alt={channel.channelName}
                />
                <button
                  onClick={() => handleRemove(channel.channelName)}
                  className="remove-button absolute top-[1px] left-[1px] text-[#ff0000] text-[18px]"
                >
                  <FaXmark />
                </button>
              </li>
            ))}
          </ul>
        ) : (
          <h1>No Liked channels yet</h1>
        )}
      </>
    )}
  </div>
  );
};



export default Dropzone