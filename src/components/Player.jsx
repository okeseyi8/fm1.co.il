import React, { useState } from 'react'
import { useContext, useRef } from 'react';
import { useParams } from 'react-router-dom';
import Playbutton from './Playbutton';
import { GlobalData } from '../App';

// export const playerContext = createContext()
function Player() {
  const {channelData,  playerRef, isPlaying, handlePlay, isPlayingIcon} = useContext(GlobalData)
 
  const {id} = useParams()



  return (
  <div className='w-full flex justify-center items-center'>
        
       <div className='w-[250px] h-[150px] border-[1px] border-[#000] flex justify-center items-center rounded-[10px] bg-[#E1C4C4]'>
            <Playbutton handlePlay={handlePlay} isPlaying={isPlaying} playerRef={playerRef} channelData={channelData} id={id} isPlayingIcon={isPlayingIcon} />

       </div>
      
       
       
       
    </div>
  )
}

export default Player