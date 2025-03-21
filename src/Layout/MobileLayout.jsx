import MobileHeader from "../components/MobileHeader";

import React from 'react'

const MobileLayout = ({children}) => {
  return (
    <div>
       
       
        <div className="flex justify-center">
              <div className=" w-full h-screen sm:hidden flex flex-col  items-center text-[24px] ">
            
                {children}
              
              </div>
            </div>
    </div>
  )
}

export default MobileLayout
