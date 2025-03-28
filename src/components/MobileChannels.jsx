import React, { useContext, useState, useEffect } from "react";
import { GlobalData } from "../App";
import { IoIosArrowBack } from "react-icons/io";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import Acum from "../images/acum.png";
import Channels from "./Channels";
import { useParams } from "react-router-dom";
import Dropzone from "../components/Dropzone"
const MobileChannels = () => {
  const {id} = useParams()
  const [onMobile, setOnMobile] = useState(true);
  useEffect(() => {
    console.log("Mobile:", onMobile, id);
  });
  const [isMobile, setIsMobile] = useState(window.innerWidth < 641);
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
 
  
  const { channelData, handleLike, playerRef } = useContext(GlobalData);
  console.log("Mobile :", channelData);
  return (
    <div dir="rtl" className=" w-full">
        <Dropzone isMobile={isMobile} />
        {<Channels/>}
              
                
                
               

        
      {/* { isMobile &&  <Channels />} */}
      {/* {channelData.map((channel) => (
        <div className="f w-full flex flex-col justify-center items-end border border-1 text-[#597493] h-20  bg-[#FFFFFF]">
          <div
            dir="rtl"
            className="w-full flex flex-row-reverse justify-end gap-4 "
          >
           
            {channel.channelCategoryName}
            <span className="mt-2 mr-4">
              <IoIosArrowBack />
            </span>
          </div>
        </div>
      ))} */}
    </div>
  );
};

export default MobileChannels;
