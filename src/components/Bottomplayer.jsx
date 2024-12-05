import React from 'react'
// import Playbutton from './Playbutton'
import { useContext, useRef, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Playbutton from './Playbutton';
import { GlobalData } from '../App';
import logo from '../images/fmlogo.jpg'
import { FaHeart, FaRegHeart } from 'react-icons/fa';

import { FaVolumeHigh } from "react-icons/fa6";
import { FaVolumeXmark } from "react-icons/fa6";
import { FaVolumeLow } from "react-icons/fa6";
function Bottomplayer() {
    
  const {channelData,  playerRef, isPlaying, handlePlay, currentStation, handleVolume, handleLike} = useContext(GlobalData)
  const max = 1
  const min = 0
  const {id} = useParams()
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
                
                <Playbutton size={"40px"} handlePlay={handlePlay} isPlaying={isPlaying} playerRef={playerRef} channelData={channelData} id={id} />
                  
              </div>
              <div className='flex justify-center gap-[6px] items-center'> 
                <button className='text-[#1C5BD0] text-[19px]'> 
                     
                 

                </button>       
                             
                 <input className='outline-0 cursor-pointer rounded-[20%] h-[3px]' type="range" id="seekBar"  step="1" onChange={(e) => handleVolume(e)} min={0} max={20}/>
              </div>
          </div>
          <div className='w-[55%] flex items-center justify-between'>
            <div className=' w-[40%] flex justify-center items-center mt-2'>
                  <div id="fb-root"></div>
                
                <div className="fb-like"
                  data-href="http://fm1.co.il"
                  data-send="false"
                  data-layout="box_count"
                  data-show-faces="false"
                  data-action="like"
                  data-font="">
                </div>
            </div>
            <div className='w-[20%]'>
              <button className='' onClick={() => handleLike(currentStation.channelName)}>
                {
                  currentStation.isLiked ? <FaHeart className='text-[1.5rem] text-[#EF4444]' /> : <FaRegHeart className='text-[1.5rem] text-[#EF4444]' />
                }

              </button>
            
              
            </div>
            <div className=' w-[60%] flex justify-end  items-center gap-4'>
              <div  dir="rtl" className='flex flex-col items-end font-normal text-[12px] text-[#009fce]'>
                {currentStation.channelName}
                <p> מנגן עכשיו</p>
              </div>
              <img className='w-10 h-10' src={logo}/>
            </div>
          </div>
       </div>

    </div>
  )
}

export default Bottomplayer