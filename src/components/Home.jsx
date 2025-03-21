import React from "react";
import Homechannel from "./Homechannel";
import Header from "./Header";
import MobileChannels from "./MobileChannels";
import MobileHeader from "./MobileHeader";
import MobileLayout from "../Layout/MobileLayout";
function Home() {
  return (
    <div>
     
      <MobileLayout>
        <MobileHeader />
        <MobileChannels />
      </MobileLayout>
      <div className=" hidden sm:block body ">
        <Header />
        <Homechannel />
      </div>
    </div>
  );
}

export default Home;
