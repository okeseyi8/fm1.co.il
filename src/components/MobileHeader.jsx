import React, { useState } from 'react';
import { GiHamburgerMenu } from "react-icons/gi";
import { motion } from "framer-motion";
import { HiMiniXMark } from "react-icons/hi2";
const MobileHeader = () => {
  const [menuActive, setMenuActive] = useState(false);

  return (
    <div className="relative w-full flex bg-[#253447] justify-between items-center px-5">
      <div className='w-[10%]'></div>
      <div className=''>
        <a href='/'>
          <img className="w-[100px] my-2 " src="/images/fmlogo.jpg" alt="Logo" />
        </a>

      </div>
      <div
        className=" text-white flex items-center mt-3"
       
       
      >
        

        {menuActive ? <div className='text-[28px]' onClick={() => setMenuActive(false)}
       ><HiMiniXMark /></div> : <div  onClick={() => setMenuActive(true)}><GiHamburgerMenu className="cursor-pointer text-2xl" /></div>}
        
        {menuActive && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="absolute font-normal  top-[79px] right-0 text-black z-50"
          >
            <div className="w-[200px] bg-white  text-[18px] p-4 shadow-md">
              
              <ul className='font-normal' dir="rtl">
                
                <li className="py-1 hover:bg-gray-100"
                ><a className='!font-normal text-[16px]' href="https://www.google.co.il/">
                  
                   רדיו
                </a>
             
                
                
                </li>
                <li className="py-1 hover:bg-gray-100"
                >
                <a className='!font-normal text-[16px]' href="https://www.yahoo.com">צור קשר
                </a>
               
                </li>
              
                <li className="py-1 hover:bg-gray-100"
                >
                 <a className='!font-normal text-[16px]' href="/" onClick={() => localStorage.clear()} >איפוס תחנות מועדפות
                 </a>
                
               
                </li>
              
                {/* <li className="py-1 hover:bg-gray-100">Menu Item 3</li>
                <li className="py-1 hover:bg-gray-100">Menu Item 4</li>
                <li className="py-1 hover:bg-gray-100">Menu Item 5</li> */}
              </ul>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default MobileHeader;
