import React from "react";
import Header from "../components/Header";
import { useParams, useNavigate } from "react-router-dom";
import Dropzone from "../components/Dropzone";
import Channels from "../components/Channels";
import Player from "../components/Player"
const Station = () => {
  return (
    <div className=" hidden sm:block body ">
      <Header />
      <div className="w-full flex justify-center">
      <div className="w-10/12 flex max-h-[700px] h-screen overflow-auto lg:w-8/12  bg-white">
        <div className="w-full flex flex-col items-center">
         
          <Dropzone />
          Ad Space

          <div className="w-full flex flex-col p-3 ">
            <h1 className="text-end mb-5">Now Playing: Dynamic naming</h1>
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
