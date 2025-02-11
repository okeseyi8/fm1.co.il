import React from 'react'
import { FaPlayCircle } from "react-icons/fa";
import { FaCirclePause } from "react-icons/fa6";
import { useEffect } from 'react';

function Playbutton({handlePlay, isPlayingIcon, playerRef, channelData, id, size, bottomPlayerSize}) {
  // useEffect 
  // useEffect(() => {
  //   bottomPlayerSize ? 
  // })
  return (
    <div className="relative z-20" onClick={handlePlay}>
    <div className='absolute top-2 left-3  -z-10 w-[38px] h-[40px] cursor-pointer'></div>
         
            <div className='cursor-pointer' > {
                !isPlayingIcon ? <FaPlayCircle className={`text-[#1C5BD0] ${bottomPlayerSize ? "text-[55px]" : "text-[95px]"} z-40`} />
                : <FaCirclePause  className={`text-[#1C5BD0] ${bottomPlayerSize ? "text-[55px]" : "text-[95px]"} z-40`} />
            }
            
        
        
        </div>
        <p>
        {isPlayingIcon}
        </p>
        

  </div>
    
  )
}

export default Playbutton