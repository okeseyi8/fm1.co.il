import { useState, createContext, useRef, useEffect } from 'react'

import './App.css'
import Header from './components/Header'
import Channels from './components/Channels'
import Dropzone from './components/Dropzone'
import data from "./data/data";
import Sortable from "sortablejs";

export const GlobalData =  createContext()

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
  useEffect(() => {
    likedChannelsRef.current = likedChannels;
    localStorage.setItem("likedChannels", JSON.stringify(likedChannels));
  }, [likedChannels]);

  useEffect(() => {
    localStorage.setItem("channelData", JSON.stringify(channelData));
  }, [channelData]);

  useEffect(() => {
    let sortableInstance;
  
    if (sortableContainer.current) {
      // Destroy any existing Sortable instance
      if (sortableInstance) {
        sortableInstance.destroy();
      }
  
      // Initialize a new Sortable instance
      sortableInstance = new Sortable(sortableContainer.current, {
        animation: 150,
        direction: "horizontal",
        onEnd: () => {
          const currentLikedChannels = likedChannelsRef.current;
          const updatedOrder = Array.from(sortableContainer.current.children).map((child) =>
            currentLikedChannels.find((channel) => channel.channelName === child.dataset.id)
          );
          console.log("Updated Order:", updatedOrder);
          setLikedChannels(updatedOrder); // Update the order in state
        },
      });
    }
  
    // Cleanup to prevent memory leaks
    return () => {
      if (sortableInstance) {
        sortableInstance.destroy();
      }
    };
  }, [likedChannels]);

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
      .filter((channel, index, self) => channel.isLiked && self.findIndex(c => c.channelName === channel.channelName) === index);

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
    <GlobalData.Provider value={{channelData, setChannelData, likedChannels, setLikedChannels, handleLike, handleRemove, likedChannelsRef, sortableContainer}}>
      <div className="App">

            <div className='flex justify-center'>
            <div className=' w-9/12 h-screen sm:hidden flex flex-col justify-center items-center text-[24px] '> Mobile Version coming...
              <p className='text-center text-[14px]'>I am currently trying to make to rebuild everything with reactjs my way this time.
              <br />   
              </p>
            </div>

        < div className=' hidden sm:block body ' >
              <Header />
              <Channels />
              <Dropzone />
            </div>
          </div>
      </div>

    </GlobalData.Provider>
)}

export default App
