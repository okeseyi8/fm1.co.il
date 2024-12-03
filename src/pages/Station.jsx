import React, { useEffect, useContext, useRef } from "react";
import Header from "../components/Header";
import { useParams, useNavigate } from "react-router-dom";
import { GlobalData } from "../App";
import Dropzone from "../components/Dropzone";
import Channels from "../components/Channels";
import Player from "../components/Player"
import AdSpaceOne from "../components/AdSpaceOne";
import AdSpaceTwo from "../components/AdSpaceTwo";
import Acum from '../images/acum.png'
import dummy from "../images/glgltz.png"
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
          <AdSpaceOne  />

          <div className="w-full flex  ">
            <div className="w-[30%] pr-1 pl-3">
              <AdSpaceTwo />
            </div>
            <div className=" w-[82%] ">
                    <div className="">    <h1 className=" w-full text-end mb-5 border-0 border-b pr-3 ">
                    {
                      channelData.map((channel, index) => (
                        channel.channels.map((station, index) => (
                          (station.channelName === id) && 
                          <div className="flex justify-end text-[19px] items-center font-semibold text-[#47add8] gap-2"> <h1 className="text-[#47add8] text-[21px] font-bold">Now Playing: </h1>  {station.channelName} <audio /></div>
                        ))
                      ))
                    }
                  </h1></div>
              <div className="flex lg:flex-row lg:items-start lg:justify-between flex-col justify-center items-center ">
                <div className="flex flex-col items-center justify-center text-[#3e466b] font-bold text-[14px]">
                  <Player />
                  האתר פועל ברשיון 
                  <img src={Acum}/>
                </div>
                <div> <img  className="lg:mt-4 lg:mr-[4px] border-4 h-auto border-[#f1f1f1] rounded-md" src={dummy} /></div>
              </div>

            </div>
            
          </div>
        </div>
        <div className="w-[26%] pr-3 flex flex-col items-center">
     
            
            
           <Channels />
        </div>
      </div>
    </div>
      
    </div>
  );
};

export default Station;
