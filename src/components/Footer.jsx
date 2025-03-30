import React from 'react';
import Acum from '../images/acum.png';

function Footer() {
  return (
    <div dir='rtl' className='bg-[#DEDEDE] w-full  lg:h-[80px] h-auto flex flex-col items-center justify-center sm:py-0 py-7 sm:px-0 px-4'>
      
      <p className=' text-[16px] text-[#6b6b6b] text-center'>
        © כל הזכויות שמורות לאתר רדיו fm1 - אתר תחנות רדיו בשידור חי באינטרנט כולל תחנות רדיו בישראל בשידור חי
      </p>
      <a href='https://acum.org.il' target='_blank' rel='noopener noreferrer'>
        <img src={Acum} alt='Acum Logo' />
      </a>
    </div>
  );
}

export default Footer;
