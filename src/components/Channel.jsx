import React from 'react';
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import logo from '../images/fmlogo.jpg'; // Adjust the path based on your file structure

const Channel = ({ channel, handleLike, id }) => {
  const navigate = useNavigate()
  const stationUrl = "/station/"
  return (
    <div dir='rtl' className="flex justify-between items-center my-2">
      <div className="w-full flex gap-1 items-center">
        <img className=" w-4 h-4 " src={logo} alt="logo" />
        <button className='text-[12px] font-bold text-[#393939]' onClick={() => navigate(`${stationUrl}${id}`)}>{channel.channelName}</button>
      </div>
      <button onClick={() => handleLike(channel.channelName)} className="w-[10%]">
        {channel.isLiked ? (
          <FaHeart className="text-red-500" />
        ) : (
          <FaRegHeart />
        )}
      </button>
    </div>
  );
};

export default Channel;
