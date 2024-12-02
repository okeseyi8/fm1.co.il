import { useState, createContext, useRef, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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
