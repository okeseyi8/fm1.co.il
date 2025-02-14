import React, { useState, useEffect, useRef, createContext, useContext } from "react";

import Sortable from "sortablejs";
import Dropzone from "./Dropzone";
import data from "../data/data";
import Channel from "./Channel";
import { GlobalData } from "../App";
import Channels from "./Channels";
import AdSpaceOne from "./AdSpaceOne";
import Bottomcontent from "./Bottomcontent";
import Footer from "./Footer";

const Homechannel = () => {
  const stationUrl = "/station/"

 
  
  const {channelData, setChannelData, likedChannels, setStation,  setLikedChannels, handleLike, handleRemove, likedChannelsRef, sortableContainer, playerRef} = useContext(GlobalData)
  useEffect(() => {
    console.log(channelData)
    console.log(playerRef.current, playerRef.src, "HI logs ")
    playerRef.src = ""
  })

  
  return (
    <div className="w-full flex justify-center">
      <div className="lg:max-w-[1200px] w-full bg-white">
        <div className="w-full flex flex-col items-center">
         
          <Dropzone />
          
          <AdSpaceOne/>

          <div dir="rtl" className="flex gap-8 justify-center flex-wrap">
            {channelData.map((category) => (
              <div dir="rtl" className="lg:w-[17%] " key={category.id}>
                <h2 className="border-0 border-b border-b-[#7a7a7a] text-[#587493] font-bold text-[16px]">
                  {category.channelCategoryName}
                </h2>
                {category.channels.map((channel) => (
                  <li className="list-none text-[12px] rtl:mr-2 leading-[25px]" key={channel.id}>
                    <Channel channel={channel} id={channel.engName} handleLike={handleLike} />
                  </li>
                ))}
              </div>
            ))}
            {/* <Channels /> */}
          </div>
          <AdSpaceOne />
        </div>
        <Bottomcontent />
        {/* <Footer />  */}
        <Footer />
      </div>
      
    </div>
  );
};

export default Homechannel;
