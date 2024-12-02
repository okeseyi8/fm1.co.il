import React, { useEffect, useContext, useRef } from "react";
import Header from "../components/Header";
import { useParams, useNavigate } from "react-router-dom";
import { GlobalData } from "../App";
import Dropzone from "../components/Dropzone";
import Channels from "../components/Channels";
import Player from "../components/Player"
const Station = () => {
  

  const {id}  = useParams()
  const {channelData} = useContext(GlobalData)
  useEffect(() => {
    console.log("useParams here: ", id)
  })
  return (
    <div className=" hidden sm:block body ">
      <Header />
      <div className="w-full flex justify-center">
      <div className="w-10/12 flex max-h-[700px] h-screen overflow-auto lg:w-8/12  bg-white">
        <div className="w-full flex flex-col items-center">
          
          <Dropzone />
          Ad Space

          <div className="w-full flex flex-col p-3 ">
            <h1 className=" w-full text-end mb-5">
              {
                channelData.map((channel, index) => (
                  channel.channels.map((station, index) => (
                    (station.channelName === id) && 
                    <div className="flex justify-end text-[19px] items-center font-semibold text-[#47add8] gap-2"> <h1 className="text-[#47add8] text-[21px] font-bold">Now Playing: </h1>  {station.channelName} <audio /></div>
                  ))
                ))
              }
            </h1>
            <div className="w-full flex justify-between ">
              <div className="w-[30%]"> Ad Space 2</div>
              <div className="w-[70%] ">
                
                <div className="w-[50%]">
                   <Player />
                </div>
                <div className="w-[50%]"></div>
              </div>
            </div>
            
          </div>
        </div>
        <div className="w-[40%] pr-3 flex flex-col items-center">
         
           <Channels />
        </div>
      </div>
    </div>
      
    </div>
  );
};

export default Station;
