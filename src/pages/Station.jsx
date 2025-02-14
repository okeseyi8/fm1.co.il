import React, { useState, useEffect, useContext, useRef } from "react";
import Header from "../components/Header";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import { GlobalData } from "../App";
import Dropzone from "../components/Dropzone";
import Channels from "../components/Channels";
import Player from "../components/Player"
import AdSpaceOne from "../components/AdSpaceOne";
import AdSpaceTwo from "../components/AdSpaceTwo";
import Acum from '../images/acum.png'
import dummy from "../images/glgltz.png"
import Footer from "../components/Footer";
import Bottomplayer from "../components/Bottomplayer";
const Station = () => {
  const Location = useLocation()

  const {id}  = useParams()
  const {channelData, setStation, currentStation, setIsPlaying, playerRef, handlePlay, isPlaying} = useContext(GlobalData)
  useEffect(() => {
    // console.log(playerRef)
    console.log(playerRef.current, playerRef.src, "HI logs on the Station page ")
    // playerRef.src = " ";
    // setIsPlaying(false)
    if (channelData.length > 0) {
      setStation(id, channelData);
    }
  
    // Cleanup logic only when the component unmounts
    return () => {
      if (isPlaying.current) {
        isPlaying.current = false;
        // setIsPlaying(false); // Reset the playing state
        playerRef.current?.pause(); // Pause the player
      }
    };
  }, [id, channelData, setStation, setIsPlaying, playerRef]);
  

 
  const handleMountChecks = () => {
    console.log(currentStation)
    console.log(id, "ENGLISH NAME")
  }
  return (
    <div  className=" hidden sm:block body ">
      <Header />
      <div className="w-full flex justify-center ">
      <div className=" flex h-auto overflow-auto lg:max-w-[1200px] w-full bg-white pb-10">
        <div className="w-full flex flex-col items-center">
          
          <Dropzone />
          <AdSpaceOne  />

          <div className="w-full flex  ">
            <div className="w-[30%] flex justify-center  pr-1 pl-1">
              <AdSpaceTwo />
            </div>
            <div className=" w-full ">
                    <div className="">    <h1 className=" w-full text-end mb-5 border-0 border-b pr-3 ">
                    
                     <div dir="rtl" className="flex justify-start text-[19px] items-center font-semibold text-[#47add8] gap-2"> <h1 className="text-[#47add8] text-[21px] font-bold"> מנגן עכשיו:</h1>  {
                      currentStation.channelName
                    } </div>
                   
                  </h1>
                  </div>
                  {/* <button onClick={handleMountChecks}> Mounted</button> */}
              <div className="flex lg:flex-row   lg:gap-[120px] flex-col justify-center items-center pb-[20px] border-0 border-b ">
                <div className="lg:w-full  flex flex-col lg:pl-[80px] items-start justify-center text-[#3e466b] font-bold text-[14px]">
                  <Player />
                
                </div>
                <div className="lg:w-full flex justify-end lg:mr-4"> 
                  <img  className="w-[250px] h-[150px]  border-1  border-[#f1f1f1] rounded-[10px]" src={currentStation.image} />
                </div>
              </div>
              <div>
              <div className=" w-full text-end mb-5 pt-3 pr-3  font-semibold text-[#47add8]">
              <div dir="rtl" className="flex justify-start text-[19px] items-center font-semibold text-[#47add8] gap-2"> 
                <h1 className="text-[#47add8] text-[21px] font-bold"> 
                 אודות :
                    {
                      currentStation.channelName
                    } 
                </h1> 
              </div>
              </div>
              <p dir="rtl" className="text-[14px] font-normal text-[#6b6b6b] mr-3">
                {
                  currentStation.stationNote
                }

              </p>
              </div>

            </div>
            
          </div>
        </div>
        <div className="lg:w-[28%] pr-3 flex flex-col items-center">
     
            
            
           <Channels />
        </div>
       
      </div>
    </div>
        <div className="pt-2 mb-[100px]">
           <Footer />
        </div>
        <Bottomplayer />
      
    </div>
  );
};

export default Station;
