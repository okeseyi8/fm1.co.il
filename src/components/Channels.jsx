import React from 'react'
import { useContext } from 'react'
import { GlobalData } from '../App'
import Channel from './Channel'
function Channels() {
  const {channelData, handleLike} = useContext(GlobalData)
  return (
    <div className='w-full flex flex-col items-center'>
          {channelData.map((category) => (
              <div dir="rtl" className="w-[30%]" key={category.id}>
                <h2 className="border-0 border-b border-b-[#7a7a7a]">
                  {category.channelCategoryName}
                </h2>
                {category.channels.map((channel) => (
                  <li className="list-none text-[12px] rtl:mr-2 leading-[25px]" key={channel.id}>
                    <Channel channel={channel} id={channel.channelName} handleLike={handleLike} />
                  </li>
                ))}
              </div>
            ))}
    </div>
  )
}

export default Channels