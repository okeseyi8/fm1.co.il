import React from 'react';
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import { useNavigate, useLocation } from 'react-router-dom';
import {useContext} from 'react';
import logo from '../images/fmlogo.jpg'; // Adjust the path based on your file structure
import { GlobalData } from '../App';

const Channel = ({ channel,link, handleLike, id }) => {
  const {handlePlay, currentStation} = useContext(GlobalData)
  const Location = useLocation()
  const navigate = useNavigate()
  const stationUrl = "/"
  const handleStationPlay = ()  => {
    console.log("ON STation clicked:", currentStation)
    navigate(`${stationUrl}${id}`)
  }
  return (
    
    <div dir='rtl' className="flex justify-between items-center my-2">
      <div className="w-full flex gap-1  items-center">
        <img className=" w-[20px] h-[20px] " src={channel.image} alt="logo" />
      
      
        <button className='text-[15px] font-normal text-[#393939] text-right' onClick={handleStationPlay}>{channel.channelName}</button>
        {/* <button className='text-[15px] font-normal text-[#393939] text-right' onClick={() => navigate(`${stationUrl}${id}`)}>{channel.channelName}</button> */}
      </div>
      <button onClick={() => handleLike(channel.channelName)} className="p-2 cursor-pointer">
        {channel.isLiked ? (
          <FaHeart className="text-red-500 text-[1.5rem] w-auto  " />
        ) : (
          <FaRegHeart className=' text-[1.5rem] text-red-500' />
        )}
      </button>
      
    </div>
  );
};

export default Channel;
