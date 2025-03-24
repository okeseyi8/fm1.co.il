import React, { useState, useEffect,  useContext } from "react";
import { useNavigate } from "react-router-dom";

import Sortable from "sortablejs";
import { GlobalData } from '../App'
import { FaXmark } from "react-icons/fa6";
import "./css/Dropzone.css"




const Dropzone = () => {


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

  // useEffect(() => {
  //   // On mount, check channelData and update likedChannels correctly
  //   const seenChannelNames = new Set();
  //   const liked = [];
  
  //   channelData.forEach((category) => {
  //     category.channels.forEach((channel) => {
  //       if (channel.isLiked && !seenChannelNames.has(channel.channelName)) {
  //         liked.push(channel);
  //         seenChannelNames.add(channel.channelName);
  //       }
  //     });
  //   });
  
  //   setLikedChannels(liked);
  // }, []);


useEffect(() => {
  localStorage.setItem("likedChannels", JSON.stringify(likedChannels));
}, [likedChannels]);


  // useEffect(() => {
  //   likedChannelsRef.current = likedChannels;
  //   localStorage.setItem("likedChannels", JSON.stringify(likedChannels));
  // }, [likedChannels]);

  useEffect(() => {
    localStorage.setItem("channelData", JSON.stringify(channelData));
  }, [channelData]);

  // useEffect(() => {
  //   let sortableInstance;

  //   if (sortableContainer.current) {
  //     if (sortableInstance) {
  //       sortableInstance.destroy();
  //     }

  //     sortableInstance = new Sortable(sortableContainer.current, {
  //       animation: 150,
  //       invertSwap: true, // 🔹 Fix for RTL mode
  //       swapThreshold: 0.65, // 🔹 Adjust swap sensitivity
  //       direction: "rtl", // 🔹 Make sure sorting works in RTL
  //       onEnd: () => {
  //         const currentLikedChannels = likedChannelsRef.current;
  //         const updatedOrder = Array.from(sortableContainer.current.children).map((child) =>
  //           currentLikedChannels.find((channel) => channel.channelName === child.dataset.id)
  //         );
  //         setLikedChannels(updatedOrder);
  //       },
  //     });
  //   }

  //   return () => {
  //     if (sortableInstance) {
  //       sortableInstance.destroy();
  //     }
  //   };
  // }, [likedChannels]);

  return (
    <div>
      {likedChannels.length > 0 ? (
        <ul dir="rtl" className=" w-full flex flex-wrap justify-center gap-5">
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
        <h1 className="">No Liked channels yet</h1>
      )}
    </div>
  );
};



export default Dropzone