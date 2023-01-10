import React from 'react'
import ModeTop from './components/ModeTop'
import ModeBtn from './components/ModeBtn'
import { useState } from 'react'
import { useEffect } from 'react'

const App = () => {
    const [mode,setMode] = useState('light');
    useEffect(()=>{
        document.body.className = mode;
    },[mode])
  return (
    <div className='container mt-5'>
        <ModeTop color={mode}/>
        <ModeBtn  color={mode} setColor={setMode}/>
    </div>
  )
}

export default App