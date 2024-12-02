import React, { useState } from 'react'
import { FaPlayCircle } from "react-icons/fa";
import { FaCirclePause } from "react-icons/fa6";
function Player() {
    const [isPlaying, setIsPlaying] = useState(false);
    const handlePlay = () => {
        setIsPlaying(!isPlaying)
    }


  return (

    <div>Player

        <div onClick={handlePlay}>
            {
                isPlaying ? <FaPlayCircle />
                : <FaCirclePause />
            }

        </div>
    </div>
  )
}

export default Player