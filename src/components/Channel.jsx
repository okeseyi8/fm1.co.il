import React from 'react';
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import logo from '../images/fmlogo.jpg'; // Adjust the path based on your file structure

const Channel = ({ channel, handleLike, id }) => {
  const navigate = useNavigate()
  const stationUrl = "/station/"
  return (
    <div dir='rtl' className="flex justify-between items-center my-2">
      <div className="w-full flex gap-1  items-center">
        <img className=" w-4 h-4 " src={channel.image} alt="logo" />
      
      
        <button className='text-[14px] font-normal text-[#393939] text-right' onClick={() => navigate(`${stationUrl}${id}`)}>{channel.channelName}</button>
      </div>
      <button onClick={() => handleLike(channel.channelName)} className="p-2">
        {channel.isLiked ? (
          <FaHeart className="text-red-500 text-[1.3rem]" />
        ) : (
          <FaRegHeart className=' text-[1.3rem] text-red-500' />
        )}
      </button>
      
    </div>
  );
};

export default Channel;
