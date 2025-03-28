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
               <div dir='rtl' className='bg-[#DEDEDE] lg:h-[80px] h-auto flex flex-col items-center justify-center px-4 py-7'>
                      
                       <p className=' text-[16px] text-[#6b6b6b]'>
                         © כל הזכויות שמורות לאתר רדיו fm1 - אתר תחנות רדיו בשידור חי באינטרנט כולל תחנות רדיו בישראל בשידור חי
                       </p>
                       <a href='https://acum.org.il' target='_blank' rel='noopener noreferrer'>
                         <img src={Acum} alt='Acum Logo' />
                       </a>
                     </div>
                
                
               

        
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
