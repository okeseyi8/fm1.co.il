import React from 'react'
import { useContext } from 'react'
import { GlobalData } from '../App'
import { FaHeart, FaRegHeart } from 'react-icons/fa';

const BottomLike = () => {
    const {currentStation, handleLike} = useContext(GlobalData)
  return (
    <button className='' onClick={() => handleLike(currentStation.channelName)}>
    {currentStation.isLiked ? <FaHeart className='text-[1.5rem] text-[#EF4444]' /> : <FaRegHeart className='text-[1.5rem] text-[#EF4444]' />}

  </button>

  )
}

export default BottomLike