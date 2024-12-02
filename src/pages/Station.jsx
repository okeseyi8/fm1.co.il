import React from "react";
import Header from "../components/Header";
import { useParams, useNavigate } from "react-router-dom";
import Dropzone from "../components/Dropzone";

const Station = () => {
  return (
    <div className=" hidden sm:block body ">
      <Header />
      <div className="w-full flex justify-center">
      <div className="w-10/12 lg:w-8/12 bg-white">
        <div className="w-full flex flex-col items-center">
         
          <Dropzone />
          
          <br />Ad Space

         
        </div>
      </div>
    </div>
      
    </div>
  );
};

export default Station;
