import React, { useEffect } from 'react'
import { useContext } from 'react'
import { GlobalData } from '../App'



const Dropzone = () => {
  const {channelData, handleLike} = useContext(GlobalData)
  useEffect(() => {
    console.log("inDropZone: ", channelData);
    
  }, [])
  return (
    <div>hi   </div>
  )
}

export default Dropzone