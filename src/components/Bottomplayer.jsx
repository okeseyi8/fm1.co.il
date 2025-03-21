import React from 'react'
// import Playbutton from './Playbutton'
import { useState , useContext, useRef, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Playbutton from './Playbutton';
import { GlobalData } from '../App';
import { useNavigate } from 'react-router-dom';
import logo from '/images/fmlogo.jpg'
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import BottomLike from './BottomLike';
import { FaVolumeHigh } from "react-icons/fa6";
import { FaVolumeXmark } from "react-icons/fa6";
import { FaVolumeLow } from "react-icons/fa6";
function Bottomplayer() {
  const bottomPlayerSize = true;
  
  const {channelData,  playerRef, isPlaying, handlePlay, currentStation, handleVolume,isPlayingIcon,volume, handlesMute,mute,  handleLike} = useContext(GlobalData)
  const max = 1
  const min = 0
  const {id} = useParams();
  const navigate = useNavigate();
  const stationUrl = ""
  useEffect(() => {
    // Dynamically load the Facebook SDK script

    const script = document.createElement('script');
    script.src = "http://connect.facebook.net/en_US/all.js#appId=113814722048122&amp;xfbml=1";
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);

    // Initialize Facebook SDK
    script.onload = () => {
      if (window.FB) {
        window.FB.XFBML.parse();
      }
    };
  }, []); 
  
  return (
    <div className='w-full flex justify-center items-center fixed bottom-0 h-[80px] bg-black z-50'>
        {/* <h1><Playbutton /> </h1> */}
       <div className='w-10/12 flex justify-between items-center  gap-0 '> 
          <div className=' lg:w-[25%] w-[40%]  flex items-center justify-between '>
                <div className=" flex items-center " >
                
                <Playbutton size={"40px"} handlePlay={handlePlay} isPlaying={isPlaying} playerRef={playerRef} isPlayingIcon={isPlayingIcon} channelData={channelData} id={id} bottomPlayerSize={bottomPlayerSize} />
                  
              </div>
              <div className='hidden sm:flex justify-center gap-[6px] items-center'> 
                <button className='text-[#1C5BD0] text-[19px]'> 
                     
                 

                </button>   
                <button onClick={handlesMute} className='text-[#1C5BD0]'>
                  {
                    playerRef.volume  === 0 && mute ? <FaVolumeXmark /> : <FaVolumeHigh  />
                  }
                </button>    
                             
                 <input className='outline-0 cursor-pointer rounded-[20%] h-[3px]' type="range" id="seekBar"  step="1" value={volume} onChange={(e) => handleVolume(e)} min={0} max={20}/>
              </div>
          </div>
          <div className='w-[55%] flex items-center justify-between'>
            <div className='hidden  w-[40%] sm:flex justify-center items-center mt-2'>
              
            </div>
            <div className='w-[20%]'>
                <BottomLike />
            </div>
            <div className=' w-[60%] flex justify-end  items-center gap-4'>
              <div  dir="rtl" className='flex flex-col  font-normal text-[12px] text-[#009fce]'>
               <p>
                 {currentStation.channelName} <br />
                 מנגן עכשיו
               </p>
                
                
              </div>
              <button  className='cursor-pointer' onClick={() => navigate(`${stationUrl}${currentStation.channelName}`)}>
                
                <img className='w-10 h-10' src={currentStation.image}/>
              </button>
            </div>
          </div>
       </div>

    </div>
  )
}

export default Bottomplayer