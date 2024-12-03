import React from 'react'
// import Playbutton from './Playbutton'
import { useContext, useRef } from 'react';
import { useParams } from 'react-router-dom';
import Playbutton from './Playbutton';
import { GlobalData } from '../App';


function Bottomplayer() {
    
  const {channelData,  playerRef, isPlaying, handlePlay, currentStation} = useContext(GlobalData)
  const {id} = useParams()
  return (
    <div className='w-full flex justify-center items-center fixed bottom-0 h-[85px] bg-black'>
        {/* <h1><Playbutton /> </h1> */}
       <div className='w-10/12 flex justify-center'> 
          <div className='w-full '>
          <h1 className='text-white'></h1>
             
               <Playbutton handlePlay={handlePlay} isPlaying={isPlaying} playerRef={playerRef} channelData={channelData} id={id} />
              
          </div>
       </div>

    </div>
  )
}

export default Bottomplayer