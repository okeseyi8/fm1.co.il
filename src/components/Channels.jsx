// import React from 'react'

import React, { useState, useEffect, useRef } from "react";
import Sortable from "sortablejs";
import Dropzone from "./Dropzone";
import data from "../data/data";
import Channel from "./Channel";

const Channels = () => {
  const [channelData, setChannelData] = useState(data);
  const [likedChannels, setLikedChannels] = useState([]);
  const likedChannelsRef = useRef([]);
  const sortableContainer = useRef(null);
  useEffect(() => {
    // Update the ref whenever likedChannels changes
    likedChannelsRef.current = likedChannels;
  }, [likedChannels]);
  useEffect(() => {
    if (sortableContainer.current) {
      new Sortable(sortableContainer.current, {
        animation: 150,
        direction: "horizontal",
        onEnd: (evt) => {
         console.log(likedChannels)
         const currentLikedChannels = likedChannelsRef.current;
         console.log("Latest Liked Channels:", currentLikedChannels);
         // this only logs the first liked station why chatgpt why
           // Optionally update the order based on the new sortable positions
        const updatedOrder = Array.from(sortableContainer.current.children).map((child) =>
          currentLikedChannels.find((channel) => channel.channelName === child.dataset.id)
        );
        console.log("Updated Order:", updatedOrder);
        
        }
      });
    }
  }, [likedChannels]);
  
  // Handle like/unlike functionality
  const handleLike = (currentChannelName) => {
    const updatedData = channelData.map((category) => ({
      ...category,
      channels: category.channels.map((channel) =>
        channel.channelName === currentChannelName
          ? { ...channel, isLiked: !channel.isLiked }
          : channel
      ),
    }));
    setChannelData(updatedData);

    // Update liked channels list
    const updatedLikedChannels = updatedData
      .flatMap((category) => category.channels)
      .filter((channel) => channel.isLiked);
    setLikedChannels(updatedLikedChannels);
    const noRepeatedLiked = updatedLikedChannels.filter(
      (channel, index, self) =>
        index === self.findIndex((c) => c.channelName === channel.channelName)
    );
  
    setLikedChannels(noRepeatedLiked);
  
    console.log("Updated Liked Channels:", noRepeatedLiked);
    console.log("hi", updatedLikedChannels, noRepeatedLiked)
    
  };
   const handleRemove = (currentChannelName) => {
    const delChannel =  likedChannels.filter((channel) => {
      return channel.channelName !== currentChannelName
    } )
    const delChannelData = channelData.map((station) => ({
      ...station,
      channels: station.channels.map((channel) =>
        channel.channelName === currentChannelName
          ? { ...channel, isLiked: !channel.isLiked } // Correct transformation
          : channel // Keep the channel unchanged
      ),
    }));
    setChannelData(delChannelData)
    setLikedChannels(delChannel)

   }
  



  return (
    <div className="w-full flex justify-center">
      <div className="w-10/12 lg:w-8/12 bg-white">
        <div className="w-full flex flex-col items-center">
          {
            likedChannels.length > 0 ? (
              <ul  className="w-full flex flex-wrap justify-center gap-5" ref={sortableContainer}>
                {likedChannels.map((channel, index) => (
                  <li data-id={channel.channelName} className="relative flex  border-2 rounded-xl p-2 mt-3" key={channel.channelName}>

                    {channel.channelName} 
                    <button onClick={() => {
                      handleRemove(channel.channelName)
                    }} className="absolute -top-1 left-1 text-[#7aa7aa] text-[13px]"> x </button>
                  </li>
                ))}
              </ul>

            ) : (<h1>No channels yet</h1>)
          }
     
          <Dropzone />
          Ad Space

          {/* Channels Grid */}
          <div className="flex gap-8 justify-center flex-wrap">
            {channelData.map((category) => (
              <div dir="rtl" className="w-[15%]" key={category.id}>
                <h2 className="border-0 border-b border-b-[#7a7a7a]">
                  {category.channelCategoryName}
                </h2>
                {category.channels.map((channel) => (
                  <li
                    className="list-none text-[12px] rtl:mr-2 leading-[25px]"
                    key={channel.id}
                  >
                    <Channel channel={channel} handleLike={handleLike} />
                  </li>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

// export default Channels;


export default Channels