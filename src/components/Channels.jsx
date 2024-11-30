// import React from 'react'

import React, { useState, useEffect, useRef } from "react";
import Sortable from "sortablejs";
import Dropzone from "./Dropzone";
import data from "../data/data";
import Channel from "./Channel";

const Channels = () => {
  const [channelData, setChannelData] = useState(data);
  const [likedChannels, setLikedChannels] = useState([]);
  const sortableContainer = useRef(null);
  useEffect(() => {
    if (sortableContainer.current) {
      new Sortable(sortableContainer.current, {
        animation: 150,
        direction: "horizontal",
        onEnd: (evt) => {
          const updatedOrder = Array.from(sortableContainer.current.children).map(
            (child) => likedChannels[child.dataset.index]
          );}
      });
    }
  }, []);
  // Initialize Sortable.js for horizontal sorting
  // useEffect(() => {
  //   if (sortableContainer.current) {
  //     Sortable.create(sortableContainer.current, {
  //       animation: 150,
  //       direction: "horizontal", // Enable horizontal sorting
  //       onEnd: (event) => {
  //         const reordered = [...likedChannels];
  //         const [movedItem] = reordered.splice(event.oldIndex, 1);
  //         reordered.splice(event.newIndex, 0, movedItem);
  //         setLikedChannels(reordered);
  //         localStorage.setItem("likedChannelsOrder", JSON.stringify(reordered));
  //       },
  //     });
  //   }
  // }, [likedChannels]);

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
  

  // Load saved liked channels order from localStorage on mount
  // useEffect(() => {
  //   const savedOrder = localStorage.getItem("likedChannelsOrder");
  //   if (savedOrder) {
  //     setLikedChannels(JSON.parse(savedOrder));
  //   } else {
  //     const initialLikedChannels = channelData
  //       .flatMap((category) => category.channels)
  //       .filter((channel) => channel.isLiked);
  //     setLikedChannels(initialLikedChannels);
  //   }
  // }, [channelData]);

  return (
    <div className="w-full flex justify-center">
      <div className="w-10/12 lg:w-8/12 bg-white">
        <div className="w-full flex flex-col items-center">
          {
            likedChannels.length > 0 ? (
              <ul className="w-full flex flex-wrap justify-center gap-5" ref={sortableContainer}>
                {likedChannels.map((channel) => (
                  <li className="flex  border-2 rounded-xl p-2 mt-3" key={Math.random}>

                    {channel.channelName}
                  </li>
                ))}
              </ul>

            ) : (<h1>No channels yet</h1>)
          }
          {/* Liked Channels Zone with Horizontal Drag-and-Drop */}
          {/* <div className="w-full my-4 p-4 bg-gray-100 border rounded">
            <h2 className="text-lg font-bold text-gray-800">Liked Channels</h2>
            {likedChannels.length > 0 ? (
              <ul
                ref={sortableContainer}
                className="flex gap-4 overflow-x-auto" // Horizontal layout with scroll support
              >
                {likedChannels.map((channel) => (
                  <li
                    key={channel?.id}
                    className="list-none text-[14px] leading-[25px] bg-white p-2 rounded shadow cursor-move whitespace-nowrap"
                  >
                    {channel?.channelName}
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-sm text-gray-500">No channels liked yet.</p>
            )}
          </div> */}
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