import React from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
const MobileHeader = () => {
  return (
    <div className=' w-full flex bg-[#253447] justify-between items-center px-5'>
        <div></div>
        <div><img src='/images/fmlogo.jpg' /></div>
        <div className='text-white'>
            <GiHamburgerMenu /></div>
        
    </div>
  )
}

export default MobileHeader