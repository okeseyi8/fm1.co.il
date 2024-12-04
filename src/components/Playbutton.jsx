import React from 'react'
import { FaPlayCircle } from "react-icons/fa";
import { FaCirclePause } from "react-icons/fa6";

function Playbutton({handlePlay, isPlaying, playerRef, channelData, id, size}) {
  return (
    <div className="relative z-20" onClick={handlePlay}>
    <div className='absolute top-2 left-3 bg-white -z-10 w-[25px] h-[29px]'></div>
         
            <div> {
                !isPlaying ? <FaPlayCircle className='text-[#1C5BD0] text-[45px] z-40' />
                : <FaCirclePause  className='text-[#1C5BD0] text-[45px] z-30' />
            }
        
        
        </div>

  </div>
    
  )
}

export default Playbutton