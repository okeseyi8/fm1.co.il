import { useState } from 'react'

import './App.css'
import Header from './components/Header'
import Channels from './components/Channels'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='body ' >
      <Header />
      <Channels />
    </div>
)}

export default App
