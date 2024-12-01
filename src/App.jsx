import { useState } from 'react'

import './App.css'
import Header from './components/Header'
import Channels from './components/Channels'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='flex justify-center'>
      <div className=' w-9/12 h-screen sm:hidden flex flex-col justify-center items-center text-[24px] '> Mobile Version coming...
        <p className='text-center text-[14px]'>I am currently trying to make to rebuild everything with reactjs my way this time.
         <br />   
        </p>
      </div>

  < div className=' hidden sm:block body ' >
        <Header />
        <Channels />
      </div>
    </div>
)}

export default App
