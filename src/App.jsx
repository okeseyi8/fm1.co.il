import { useState, createContext, useRef,useCallback, useEffect, useMemo } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useParams,
} from "react-router-dom";
import Home from "./components/Home";

import "./App.css";

import data from "./data/data";
import Sortable from "sortablejs";
import Station from "./pages/Station";
import { TbRuler2 } from "react-icons/tb";
import { Toaster } from "react-hot-toast";
import MobileLayout from "./Layout/MobileLayout";
import MobileHeader from "./components/MobileHeader";
import MobileChannels from "./components/MobileChannels";
// import { Routes } from 'react-router-dom'

export const GlobalData = createContext();

function App() {

const [channelData, setChannelData] = useState([]);

useEffect(() => {
  const savedData = localStorage.getItem("channelData");
  const parsedData = savedData ? JSON.parse(savedData) : null;

  if (parsedData && parsedData.length > 0) {
    // Condition 1: Use localStorage if it contains data
    setChannelData(parsedData);
    console.log("hi i am fetching unsuccessful");
  } else {
    // Condition 2: Fetch new data if localStorage is empty
    console.log("hi i am fetching");
    fetch("/data.json")
      .then((res) => res.json())
      .then((jsonData) => {
        setChannelData(jsonData.stations); // Set new data
        localStorage.setItem("channelData", JSON.stringify(jsonData.stations)); // Save to localStorage
      })
      .catch((error) => console.error("Error loading data:", error));
  }
}, []);


  const [mute, setMute] = useState(false);
  const [currentStation, setCurrentStation] = useState({});
  const [volume, setVolume] = useState(20);
  const [previousVolume, setPreviousVolume] = useState();

  const playerRef = useMemo(() => new Audio(), []); // Memoized Audio instance
  const [isPlayingIcon, setIsPlayingIcon] = useState(false); // State for the icon
  const isPlaying = useRef(false); // Ref for tracking play/pause status without re-renders
  const { id } = useParams();
 
  const handlePlay = async () => {
    if (isPlayingIcon) {
      playerRef.pause();
      isPlaying.current = false;
      setIsPlayingIcon(false);
    } else {
      if (playerRef.src !== currentStation.link) {
        playerRef.src = currentStation.link;
      }

      try {
        await playerRef.play();
        isPlaying.current = true;
        setIsPlayingIcon(true);
      } catch (error) {
        console.error("Audio playback failed:", error);
        isPlaying.current = false;
        setIsPlayingIcon(false);
      }
    }
  };

  const handleVolume = (e) => {
    const value = parseInt(e.target.value, 10);
    const newVolume = value / 20;
    playerRef.volume = newVolume;
    setVolume(value);
    setMute(value === 0);
  };
  const handlesMute = () => {
    if (mute) {
      // Unmute and restore the previous volume
      setMute(false);
      setVolume(previousVolume);
      playerRef.volume = previousVolume / 20;
    } else {
      // Store the current volume before muting
      setPreviousVolume(volume);
      setMute(true);
      setVolume(0);
      playerRef.volume = 0;
    }
  };

  const setStation = (id, channelInfo) => {
    const station = channelInfo
      ?.flatMap((channel) => channel.channels)
      ?.find((station) => station.engName === id);

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
 

 

  const handleLike = useCallback((currentChannelName) => { 
    const updatedData = channelData.map((category) => ({
      ...category,
      channels: category.channels.map((channel) =>
        channel.channelName === currentChannelName
          ? { ...channel, isLiked: !channel.isLiked }
          : channel
      ),
    }));
  
    setChannelData(updatedData);
    localStorage.setItem("channelData", JSON.stringify(updatedData)); // Save updated channelData to localStorage
  
    const noRepeatedLiked = updatedData
      .flatMap((category) => category.channels)
      .filter(
        (channel, index, self) =>
          channel.isLiked &&
          self.findIndex((c) => c.channelName === channel.channelName) === index
      );
  
    setLikedChannels(noRepeatedLiked);
    localStorage.setItem("likedChannels", JSON.stringify(noRepeatedLiked)); // Save likedChannels to localStorage
  }, [channelData]);
  
  const handleRemove = (currentChannelName) => {
    // Filter out the removed channel from likedChannels
    const updatedLikedChannels = likedChannels.filter(
      (channel) => channel.channelName !== currentChannelName
    );
    setLikedChannels(updatedLikedChannels);
    localStorage.setItem("likedChannels", JSON.stringify(updatedLikedChannels)); // Save to localStorage
  
    const updatedData = channelData.map((category) => ({
      ...category,
      channels: category.channels.map((channel) =>
        channel.channelName === currentChannelName
          ? { ...channel, isLiked: false }
          : channel
      ),
    }));
  
    setChannelData(updatedData);
    localStorage.setItem("channelData", JSON.stringify(updatedData)); // Save to localStorage
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
      
        currentStation,

        handlePlay,
        handleVolume,
        setStation,

        isPlaying,
        isPlayingIcon,
        setIsPlayingIcon,

        playerRef,

        handlesMute,
        mute,
        volume,
      }}
    >
      <Router>
        <div className="App">
          <Toaster />
        

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/:id" element={<Station />} />
          </Routes>
        </div>
      </Router>
    </GlobalData.Provider>
  );
}

export default App;