import React, { useState, useEffect, useRef, createContext, useContext } from "react";

import Sortable from "sortablejs";
import { GlobalData } from '../App'

import "./css/Dropzone.css"


const Dropzone = () => {
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
  
    // Cleanup to prevent memory leaks
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
         <li data-id={channel.channelName} className="channel-item relative flex p-[6px] mt-3 bg-[#ddd] rounded-[10px]" key={channel.channelName}>
           <img className="w-[60px] h-[60px]" src={channel.image} />
           <button onClick={() => handleRemove(channel.channelName)} className="remove-button absolute -top-1 left-1 text-[#415a5c] text-[16px]">
             x
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