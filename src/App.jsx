import { useState, createContext, useRef, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useParams } from "react-router-dom";
import Home from "./components/Home";

import "./App.css";

import data from "./data/data";
import Sortable from "sortablejs";
import Station from "./pages/Station";
// import { Routes } from 'react-router-dom'

export const GlobalData = createContext();

function App() {
  const [channelData, setChannelData] = useState(() => {
    try {
      const savedData = localStorage.getItem("channelData");
      return savedData ? JSON.parse(savedData) : data;
    } catch {
      return data;
    }
  });
  const [currentStation, setCurrentStation] = useState({})
  const [volume, setVolume] = useState(1)
  //PLyer logiC 
  
  const playerRef = useRef(new Audio())
  
    const [isPlaying, setIsPlaying] = useState(false);
    const handlePlay = () => {
      if (!currentStation) return;
        if(isPlaying){
          playerRef.current?.pause();
          setIsPlaying(false)
        }else{
          playerRef.current.src = currentStation.link;
          playerRef.current?.play();
          setIsPlaying(true)
        }
    }
    const handleVolume = (e) => {
      const  {value}  = e.target;
      const volume = value / 20;
      // setVolume(volume)
      playerRef.current.volume = volume;

    }
    const setStation = (id, channelInfo) => {
      console.log("Station ID:", id);
      console.log("Channel Info:", channelInfo);
    
      const station = channelInfo
        ?.flatMap(channel => channel.channels)
        ?.find(station => station.channelName === id);
    
      if (station) {
        console.log("Found Station:", station);
        setCurrentStation(station);
      } else {
        console.log("No station found with the given ID.");
        setCurrentStation(null);
      }
    };

  const [likedChannels, setLikedChannels] = useState(() => {
    try {
      const savedLikedChannels = localStorage.getItem("likedChannels");
      return savedLikedChannels ? JSON.parse(savedLikedChannels) : [];
    } catch {
      return [];
    }
  });
  const likedChannelsRef = useRef(likedChannels);
  const sortableContainer = useRef(null);

  const handleLike = (currentChannelName) => {
    const updatedData = channelData.map((category) => ({
      ...category,
      channels: category.channels.map((channel) =>
        channel.channelName === currentChannelName
          ? { ...channel, isLiked: !channel.isLiked }
          : channel
      ),
    }));
    setChannelData(updatedData);

    const noRepeatedLiked = updatedData
      .flatMap((category) => category.channels)
      .filter(
        (channel, index, self) =>
          channel.isLiked &&
          self.findIndex((c) => c.channelName === channel.channelName) === index
      );

    setLikedChannels(noRepeatedLiked);
  };

  const handleRemove = (currentChannelName) => {
    const updatedLikedChannels = likedChannels.filter(
      (channel) => channel.channelName !== currentChannelName
    );
    setLikedChannels(updatedLikedChannels);

    const updatedData = channelData.map((category) => ({
      ...category,
      channels: category.channels.map((channel) =>
        channel.channelName === currentChannelName
          ? { ...channel, isLiked: false }
          : channel
      ),
    }));
    setChannelData(updatedData);
  };

  return (
    <GlobalData.Provider
      value={{
        channelData,
        setChannelData,
        likedChannels,
        setLikedChannels,
        handleLike,
        handleRemove,
        likedChannelsRef,
        sortableContainer,
        currentStation,
        
        handlePlay,
        handleVolume,
        setStation,
        volume,  
        isPlaying,
        setIsPlaying,
        playerRef

        
      }}
    >
      <Router>
        <div className="App">
          <div className="flex justify-center">
            <div className=" w-9/12 h-screen sm:hidden flex flex-col justify-center items-center text-[24px] ">
              {/* {" "} */}
              Mobile Version coming...
              <p className="text-center text-[14px]">
                I am currently trying to make to rebuild everything with reactjs
                my way this time.
                <br />
              </p>
            </div>
          </div>
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/station/:id" element={<Station />} />
        </Routes>
      </Router>
    </GlobalData.Provider>
  );
}

export default App;
