import React, { useState } from 'react'
import { FaPlayCircle } from "react-icons/fa";
import { FaCirclePause } from "react-icons/fa6";
function Player() {
    const [isPlaying, setIsPlaying] = useState(false);
    const handlePlay = () => {
        setIsPlaying(!isPlaying)
    }


  return (

    <div>

       <div className='w-[200px] h-[150px] border-[1px] border-[#000] flex justify-center items-center py-5 rounded-md bg-[#E1C4C4]'>
            <div onClick={handlePlay}>
                    {
                        isPlaying ? <FaPlayCircle className='text-[#0000ff] text-[70px]' />
                        : <FaCirclePause  className='text-[#0000ff] text-[70px]' />
                    }

                </div>
       </div>
    </div>
  )
}

export default Player