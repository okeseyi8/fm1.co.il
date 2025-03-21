import React, { useState, useEffect,  useContext } from "react";
import { useNavigate } from "react-router-dom";

import Sortable from "sortablejs";
import { GlobalData } from '../App'
import { FaXmark } from "react-icons/fa6";
import "./css/Dropzone.css"


const Dropzone = () => {
  const navigateFavStation = useNavigate()
  const {channelData, setChannelData, likedChannels, setLikedChannels, handleLike, handleRemove, likedChannelsRef, sortableContainer} = useContext(GlobalData)
  useEffect(() => {
    const seenChannelNames = new Set();
    const liked = [];

    channelData.forEach((channel) => {
      channel.channels.forEach((station) => {
        if (station.isLiked && !seenChannelNames.has(station.channelName)) {
          // Add to liked list if it's liked and not already added
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
      // Destroy any existing Sortable instance
      if (sortableInstance) {
        sortableInstance.destroy();
      }
  
      // Initialize a new Sortable instance
      sortableInstance = new Sortable(sortableContainer.current, {
        animation: 150,
        direction: "horizontal",
        onEnd: () => {
          const currentLikedChannels = likedChannelsRef.current;
          const updatedOrder = Array.from(sortableContainer.current.children).map((child) =>
            currentLikedChannels.find((channel) => channel.channelName === child.dataset.id)
          );
          console.log("Updated Order:", updatedOrder);
          setLikedChannels(updatedOrder); // Update the order in state
        },
      });
    }
  
    return () => {
      if (sortableInstance) {
        sortableInstance.destroy();
      }
    };
  }, [likedChannels]);
  
  return (
    <div>
        {likedChannels.length > 0 ? (
       <ul className="w-full flex flex-wrap justify-center gap-5" ref={sortableContainer}>
       {likedChannels.map((channel) => (
         <li data-id={channel.channelName} className="channel-item relative flex p-[6px] mt-3 bg-[#ddd] hover:bg-[#4CA1C4] rounded-[10px]" key={channel.channelName}>
           <img onClick={() => navigateFavStation(`/${channel.engName}`)} className="w-[60px] h-[60px]" src={channel.image} />

           <button onClick={() => handleRemove(channel.channelName)} className="remove-button absolute top-[1px] left-[1px] text-[#ff0000] text-[18px]">
             <FaXmark />
           </button>
         </li>
       ))}
     </ul>
     
      
         
          
          ) : (
            <h1 className="">No Liked channels yet</h1>
          )}
      
      
   </div>
  )
}

export default Dropzone