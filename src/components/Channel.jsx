import React from 'react';
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import logo from '../images/fmlogo.jpg'; // Adjust the path based on your file structure

const Channel = ({ channel, handleLike }) => {
  return (
    <div dir='rtl' className="flex justify-between items-center my-2">
      <div className="w-full flex gap-1 items-center">
        <img className=" w-4 h-4 " src={logo} alt="logo" />
        {channel.channelName}
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
