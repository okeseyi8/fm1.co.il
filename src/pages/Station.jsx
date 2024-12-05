import React, { useEffect, useContext, useRef } from "react";
import Header from "../components/Header";
import { useParams, useNavigate } from "react-router-dom";
import { GlobalData } from "../App";
import Dropzone from "../components/Dropzone";
import Channels from "../components/Channels";
import Player from "../components/Player"
import AdSpaceOne from "../components/AdSpaceOne";
import AdSpaceTwo from "../components/AdSpaceTwo";
import Acum from '../images/acum.png'
import dummy from "../images/glgltz.png"
import Footer from "../components/Footer";
import Bottomplayer from "../components/Bottomplayer";
const Station = () => {
  

  const {id}  = useParams()
  const {channelData, setStation, currentStation, setIsPlaying, playerRef, handlePlay, isPlaying} = useContext(GlobalData)
  useEffect(() => {
    if (channelData.length > 0) {
      setStation(id, channelData);
    }
  
    // Cleanup logic only when the component unmounts
    return () => {
      if (isPlaying) {
        setIsPlaying(false); // Reset the playing state
        playerRef.current?.pause(); // Pause the player
      }
    };
  }, [id, channelData, setStation, setIsPlaying, playerRef]);
  const handleMountChecks = () => {
    console.log(currentStation)
  }
  return (
    <div className=" hidden sm:block body ">
      <Header />
      <div className="w-full flex justify-center ">
      <div className="w-10/12 flex h-auto overflow-auto lg:w-8/12  bg-white pb-10">
        <div className="w-full flex flex-col items-center">
          
          <Dropzone />
          <AdSpaceOne  />

          <div className="w-full flex  ">
            <div className="w-[30%] pr-1 pl-3">
              <AdSpaceTwo />
            </div>
            <div className=" w-[82%] ">
                    <div className="">    <h1 className=" w-full text-end mb-5 border-0 border-b pr-3 ">
                    
                     <div dir="rtl" className="flex justify-start text-[19px] items-center font-semibold text-[#47add8] gap-2"> <h1 className="text-[#47add8] text-[21px] font-bold"> מנגן עכשיו:</h1>  {
                      currentStation.channelName
                    } </div>
                   
                  </h1>
                  </div>
                  {/* <button onClick={handleMountChecks}> Mounted</button> */}
              <div className="flex lg:flex-row lg:items-start lg:justify-between flex-col justify-center items-center pb-[60px] border-0 border-b ">
                <div className="flex flex-col items-center justify-center text-[#3e466b] font-bold text-[14px]">
                  <Player />
                  האתר פועל ברשיון 
                  <img src={Acum}/>
                </div>
                <div> <img  className="lg:mt-4 lg:mr-[4px] border-4 h-auto border-[#f1f1f1] rounded-md" src={dummy} /></div>
              </div>
              <div>
              <h1 className=" w-full text-end mb-5 pt-3 pr-3  font-semibold text-[#47add8]">
              <div dir="rtl" className="flex justify-start text-[19px] items-center font-semibold text-[#47add8] gap-2"> <h1 className="text-[#47add8] text-[21px] font-bold">  אודות :
</h1>  {
                      currentStation.channelName
                    } </div>
              </h1>
              <p dir="rtl" className="text-[12px] font-light text-[#6b6b6b] mr-3">
              גלגלצ היא תחנת הרדיו הפופולרית ביותר בישראל ומובילת דעה בכל מה שקשור למוזיקה עכשווית, לועזית וישראלית. רדיו גלגלצ הוא המקום לכל מי שרוצה להיות בעניינים, להתעדכן בלהיטים הכי חמים ולשמוע מוזיקה טובה ומגוונת 24 שעות ביממה. מפופ ומיינסטרים, דרך אלטרנטיבי ורוק ועד מוזיקה ים-תיכונית, בגלגלצ תמצאו הכל.

בתחנת רדיו גלגלצ תוכניות מקור כמו "הבחירות" עם עמרי רונן, "אוטונומי" עם נעמי רביע, "סינגלס" עם הדר מרקס ו"קולות החיילים" – שירים שנבחרים על ידי חיילי צה"ל. בכל שנה מקיימת גלגלצ את המצעד השנתי העברי והלועזי.

כמו כן, בשידורי גלגלצ דיווחי תנועה בכל רבע שעה עגולה, חדשות, וכמובן איך אפשר בלי סופשבוע רגוע בגלגלצ שיעביר לכם ב
<br />
<br />
<h1>:This description will be changed</h1>
התדרים של גלגלצ: 91.8FM בתל אביב והמרכז; 93.9FM בירושלים והסביבה; 99.8FM בבאר שבע והנגב; 107FM בחיפה ומחוז הצפון; 104.1FM בקרית שמונה והסביבה; 106.4FM במצפה רמון ואילת.


              </p>
              </div>

            </div>
            
          </div>
        </div>
        <div className="w-[26%] pr-3 flex flex-col items-center">
     
            
            
           <Channels />
        </div>
      </div>
    </div>
        <div className="pt-2">
           <Footer />
        </div>
        <Bottomplayer />
      
    </div>
  );
};

export default Station;
