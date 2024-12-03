import React from 'react'
import { FaPlayCircle } from "react-icons/fa";
import { FaCirclePause } from "react-icons/fa6";

function Playbutton({handlePlay, isPlaying, playerRef, channelData, id}) {
  return (
    <div className="relative z-20" onClick={handlePlay}>
    <div className='absolute top-3 left-3 bg-white -z-10 w-[40px] h-[35px]'></div>
         
            <div> {
                !isPlaying ? <FaPlayCircle className='text-[#1C5BD0] text-[60px] z-40' />
                : <FaCirclePause  className='text-[#1C5BD0] text-[60px] z-30' />
            }
        
        {
            channelData.map((channel) => (
            channel.channels.map((station) => (
                station.channelName === id && <div> <audio ref={playerRef} src={station.link}/></div>
            ))
            ))
        }</div>

  </div>
    
  )
}

export default Playbutton