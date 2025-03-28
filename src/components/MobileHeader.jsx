import React, { useState } from 'react';
import { GiHamburgerMenu } from "react-icons/gi";
import { motion } from "framer-motion";
import { HiMiniXMark } from "react-icons/hi2";
const MobileHeader = () => {
  const [menuActive, setMenuActive] = useState(false);

  return (
    <div className="relative w-full flex bg-[#253447] justify-between items-center px-5">
      <div></div>
      <div>
        <a href='/'>
          <img className="w-[100px] my-2 ml-8" src="/images/fmlogo.jpg" alt="Logo" />
        </a>

      </div>
      <div
        className=" text-white flex items-center mt-3"
        onMouseEnter={() => setMenuActive(true)}
       
      >
        

        {menuActive ? <div className='text-[28px]' onMouseEnter={() => setMenuActive(false)}
       ><HiMiniXMark /></div> : <GiHamburgerMenu className="cursor-pointer text-2xl" />}
        
        {menuActive && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="absolute  top-[79px] right-0 text-black z-10"
          >
            <div className="w-[200px] bg-white p-4 shadow-md">
              <ul dir="rtl">
                <li className="py-1 hover:bg-gray-100">רדיו
                </li>
                <li className="py-1 hover:bg-gray-100">צור קשר
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
