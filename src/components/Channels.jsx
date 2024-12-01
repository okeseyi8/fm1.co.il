import React, { useState, useEffect, useRef } from "react";
import Sortable from "sortablejs";
import Dropzone from "./Dropzone";
import data from "../data/data";
import Channel from "./Channel";

const Channels = () => {
  const [channelData, setChannelData] = useState(() => {
    try {
      const savedData = localStorage.getItem("channelData");
      return savedData ? JSON.parse(savedData) : data;
    } catch {
      return data;
    }
  });

  const [likedChannels, setLikedChannels] = useState(() => {
    try {
      const savedLikedChannels = localStorage.getItem("likedChannels");
      return savedLikedChannels ? JSON.parse(savedLikedChannels) : [];
    } catch {
      return [];
    }
  });

  const likedChannelsRef = useRef(likedChannels);
  const sortableContainer = useRef(null);

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

    const noRepeatedLiked = updatedData
      .flatMap((category) => category.channels)
      .filter((channel, index, self) => channel.isLiked && self.findIndex(c => c.channelName === channel.channelName) === index);

    setLikedChannels(noRepeatedLiked);
  };

  const handleRemove = (currentChannelName) => {
    const updatedLikedChannels = likedChannels.filter(
      (channel) => channel.channelName !== currentChannelName
    );
    setLikedChannels(updatedLikedChannels);

    const updatedData = channelData.map((category) => ({
      ...category,
      channels: category.channels.map((channel) =>
        channel.channelName === currentChannelName
          ? { ...channel, isLiked: false }
          : channel
      ),
    }));
    setChannelData(updatedData);
  };

  return (
    <div className="w-full flex justify-center">
      <div className="w-10/12 lg:w-8/12 bg-white">
        <div className="w-full flex flex-col items-center">
          {likedChannels.length > 0 ? (
            <ul className="w-full flex flex-wrap justify-center gap-5" ref={sortableContainer}>
              {likedChannels.map((channel) => (
                <li
                  data-id={channel.channelName}
                  className="relative flex border-2 rounded-xl p-2 mt-3"
                  key={channel.channelName}
                >
                  {channel.channelName}
                  <button
                    onClick={() => handleRemove(channel.channelName)}
                    className="absolute -top-1 left-1 text-[#7aa7aa] text-[13px]"
                  >
                    x
                  </button>
                </li>
              ))}
            </ul>
          ) : (
            <h1>No channels yet</h1>
          )}

          <Dropzone />
          Ad Space

          <div className="flex gap-8 justify-center flex-wrap">
            {channelData.map((category) => (
              <div dir="rtl" className="w-[15%]" key={category.id}>
                <h2 className="border-0 border-b border-b-[#7a7a7a]">
                  {category.channelCategoryName}
                </h2>
                {category.channels.map((channel) => (
                  <li className="list-none text-[12px] rtl:mr-2 leading-[25px]" key={channel.id}>
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

export default Channels;
