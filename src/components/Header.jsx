import React from 'react'
import "../index.css"
// import { header } from "../images/headerbg.jpg"
import { useEffect } from 'react';
import logo from '../images/fmlogo.jpg'

const Header = () => {
  useEffect(() => {
    // Dynamically load the Facebook SDK script
    const script = document.createElement('script');
    script.src = "http://connect.facebook.net/en_US/all.js#appId=113814722048122&amp;xfbml=1";
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);

    // Initialize Facebook SDK
    script.onload = () => {
      if (window.FB) {
        window.FB.XFBML.parse();
      }
    };
  }, []); 

  return (
    <section className='header w-full flex justify-center '>
      <div  className='lg:w-8/12 w-10/12 justify-around flex items-center  h-[155px] bg-headbg object-contain bg-no-repeat bg-[#253547] '>
        <div className='w-4/12 pl-7'>
          <div id="fb-root"></div>
          {/* Facebook Like Button */}
          <div className="fb-like"
            data-href="http://fm1.co.il"
            data-send="false"
            data-layout="box_count"
            data-show-faces="false"
            data-action="like"
            data-font="">
          </div>
        </div >
        <div  className='flex w-8/12 pr-7  justify-between items-center gap-4'>
            <div dir='rtl' class="w-[80%]">
                <h1 dir='rtl' class="header-title text-[#7fbcd1]">
                    רדיו fm1 - תחנות רדיו בשידור חי באינטרנט
                </h1>
                
            </div>
            <div className='w-[60%] h-auto flex flex-col items-end'>
                  <img src={logo}/>
                <ul className='flex w-full pt-2 justify-evenly text-[#7fbcd1]  '>
                      <li dir='rtl'><a href="/" class="nav-link">רדיו</a></li>
                      <li dir='rtl'><a href="/" className="nav-link" >צור קשר</a></li>
                      <li dir='rtl'><a href= "/" className="nav-link" >רדיו</a></li>
                      <li dir='rtl'><a href="/" className="nav-link" >צור קשר</a></li>
                </ul>
            </div>
         

        </div>
      </div>
    </section>
  );
};

// export default Header;


export default Header