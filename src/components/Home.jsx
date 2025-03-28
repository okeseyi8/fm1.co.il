import React from "react";
import Homechannel from "./Homechannel";
import Header from "./Header";
import MobileChannels from "./MobileChannels";
import MobileHeader from "./MobileHeader";
import MobileLayout from "../Layout/MobileLayout";
import Footer from "./Footer"
import Acum from "../images/acum.png";
function Home() {
  const isMobileDevice = () => {
    return /Mobi|Android|iPhone/i.test(navigator.userAgent);
  };
  
  return (
    <div>
     
      <MobileLayout>
        <MobileHeader />
        <MobileChannels />
        <Footer />
      </MobileLayout>
      <div className=" hidden sm:block body ">
        <Header />
        <Homechannel />
      </div>
    </div>
  );
}

export default Home;
