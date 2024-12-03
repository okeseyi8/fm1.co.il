import React, { useState } from 'react'
import { useContext, useRef } from 'react';
import { useParams } from 'react-router-dom';

import { GlobalData } from '../App';
import { FaPlayCircle } from "react-icons/fa";
import { FaCirclePause } from "react-icons/fa6";
function Player() {
  const {channelData} = useContext(GlobalData)
  const {id} = useParams()
  const playerRef = useRef(null)
  
    const [isPlaying, setIsPlaying] = useState(false);
    const handlePlay = () => {
        if(isPlaying){
          playerRef.current?.pause();
          setIsPlaying(!isPlaying)
        }else{
          playerRef.current?.play();
          setIsPlaying(!isPlaying)
        }
    }



  return (
  <div className='w-full'>

       <div className='w-[250px] h-[150px] border-[1px] border-[#000] flex justify-center items-center py-5 rounded-md bg-[#E1C4C4]'>
            
            <div className="relative z-20" onClick={handlePlay}>
              <div className='absolute top-3 left-3 bg-white -z-10 w-[40px] h-[35px]'></div>
                    {
                        !isPlaying ? <FaPlayCircle className='text-[#1C5BD0] text-[60px] z-40' />
                        : <FaCirclePause  className='text-[#1C5BD0] text-[60px] z-30' />
                    }
                  
                  {
                    channelData.map((channel) => (
                      channel.channels.map((station) => (
                        station.channelName === id && <div> <audio ref={playerRef} src={station.link}/></div>
                      ))
                    ))
                  }
                   

                </div>
       </div>
    </div>
  )
}

export default Player