import React, { useState, useEffect, useContext, useRef } from "react";
import Header from "../components/Header";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import { GlobalData } from "../App";
import Dropzone from "../components/Dropzone";
import Channels from "../components/Channels";
import Player from "../components/Player";
import AdSpaceOne from "../components/AdSpaceOne";
import AdSpaceTwo from "../components/AdSpaceTwo";
import Acum from "../images/acum.png";
import dummy from "../images/glgltz.png";
import Footer from "../components/Footer";
import Bottomplayer from "../components/Bottomplayer";
import { toast } from "react-hot-toast";
import MobileHeader from "../components/MobileHeader";
import MobileChannels from "../components/MobileChannels";
const Station = () => {
  const Location = useLocation();

  const { id } = useParams();
  const {
    channelData,
    setStation,
    currentStation,
    setIsPlaying,
    playerRef,
    handlePlay,
    isPlaying,
    setIsPlayingIcon,
  } = useContext(GlobalData);

  useEffect(() => {
    if (channelData.length > 0) {
      setStation(id, channelData);
    }
  }, [id, channelData]);
  
  // Separate effect for cleanup on unmount only
  useEffect(() => {
    return () => {
      if (isPlaying.current) {
        isPlaying.current = false;
        // Use playerRef directly since it is a memoized Audio instance
        playerRef.pause();
      }
    };
  }, [id]); 


  // useEffect(() => {
  //   if (channelData.length > 0) {
  //     setStation(id, channelData);
  //   }

  //   // Cleanup logic only when the component unmounts
  //   return () => {
  //     if (isPlaying.current) {
  //       isPlaying.current = false;

  //       playerRef.current?.pause(); // Pause the player
  //     }
  //   };
  // }, [id, channelData]);

  useEffect(() => {
    if (currentStation && currentStation.link) {
      // Set the source when a new station is selected
      playerRef.src = currentStation.link;
      // Try autoplaying after updating the source
      playerRef
        .play()
        .then(() => {
          // Playback started successfully
          isPlaying.current = true;
          setIsPlayingIcon(true);
        })
        .catch((error) => {
          // Autoplay might be blocked, so handle the error or show a play button
          // toast.error("Autoplay failed:", error);
          console.error("Autoplay failed:", error);
        });
    }
  }, [currentStation]);

  const handleMountChecks = () => {
    console.log(currentStation);
    console.log(id, "ENGLISH NAME");
  };
  return (
    <div>
      <div className="sm:hidden h-full">
        <MobileHeader />
        <div className="  flex pt-[10px] pb-[10px] ">
          <div className="w-full h-full flex flex-col  items-center gap-4 ">
            <div className="w-full flex flex-row-reverse items-center justify-center  gap-2 ">
            <img
                        className="w-[40px] h-[40px] object-cover border-1  border-[#f1f1f1] rounded-[10px]"
                        src={currentStation.image}
                      />
              <p dir="rtl" className="text-[#47add8] text-[27px] font-bold">{currentStation.channelName}</p>
             
            </div>
            <Player />
            <div>
              <img src="\images\stations\ad-336x280.jpg" />
            </div>
            
          </div>
        </div>
        <MobileChannels />
        <div  className="h-auto pr-2">
            <h1 dir="rtl" className=" text-[21px] font-normal">
              אודות :{currentStation.channelName}
            </h1>
             <p dir="rtl">
               {currentStation.stationNote}
             </p>
        </div>
  
        <Footer />
       
         <div className='h-[70px]'></div>

        <Bottomplayer />
      </div>

      <div className=" hidden sm:block body ">
        <Header />
        <div className="w-full flex justify-center ">
          <div className=" flex h-auto overflow-auto lg:max-w-[1200px] w-full bg-white pb-10">
            <div className="w-full flex flex-col items-center">
              <Dropzone />
              <AdSpaceOne />

              <div className="w-full flex  ">
                <div className="w-[30%] flex justify-center  pr-1 pl-1">
                  <AdSpaceTwo />
                </div>
                <div className=" w-full ">
                  <div className="">
                    {" "}
                    <h1 className=" w-full text-end mb-5 border-0 border-b pr-3 ">
                      <div
                        dir="rtl"
                        className="flex justify-start text-[19px] items-center font-semibold text-[#47add8] gap-2"
                      >
                        {" "}
                        <h1 className="text-[#47add8] text-[21px] font-bold">
                          {" "}
                          מנגן עכשיו:
                        </h1>{" "}
                        {currentStation.channelName}{" "}
                      </div>
                    </h1>
                  </div>
                  {/* <button onClick={handleMountChecks}> Mounted</button> */}
                  <div className="flex lg:flex-row   lg:gap-[120px] flex-col justify-center items-center pb-[20px] border-0 border-b ">
                    <div className="lg:w-full  flex flex-col lg:pl-[80px] items-start justify-center text-[#3e466b] font-bold text-[14px]">
                      <Player />
                    </div>
                    <div className="lg:w-full flex justify-end lg:mr-4">
                      <img
                        className="w-[250px] h-[150px]  border-1  border-[#f1f1f1] rounded-[10px]"
                        src={currentStation.image}
                      />
                    </div>
                  </div>
                  <div>
                    <div className=" w-full text-end mb-5 pt-3 pr-3  font-semibold text-[#47add8]">
                      <div
                        dir="rtl"
                        className="flex justify-start text-[19px] items-center font-semibold text-[#47add8] gap-2"
                      >
                        <h1 className="text-[#47add8] text-[21px] font-bold">
                          אודות :{currentStation.channelName}
                        </h1>
                      </div>
                    </div>
                    <p
                      dir="rtl"
                      className="text-[14px] font-normal text-[#6b6b6b] mr-3"
                    >
                      {currentStation.stationNote}
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
    </div>
  );
};

export default Station;
