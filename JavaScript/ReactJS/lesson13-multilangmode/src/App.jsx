import React from 'react'
import ModeTop from './components/ModeTop'
import ModeBtn from './components/ModeBtn'
import { useState } from 'react'
import { useEffect } from 'react'
import './i18n/i18next';
import { useTranslation } from 'react-i18next'
const App = () => {
    const [mode,setMode] = useState(localStorage.getItem('mode'));
    useEffect(()=>{
        localStorage.setItem('mode',mode)
        document.body.className = mode;
    },[mode])

    const {t, i18n} = useTranslation();
    const handleClick=(lang)=>{
        i18n.changeLanguage(lang);
    }
  return (
    <>
    
    <div className='container mt-5'>
        <ModeTop color={mode}/>
        <ModeBtn  color={mode} setColor={setMode}/>
    </div>


    <div className="container mt-5">
        <button className='btn btn-primary me-3' onClick={()=>{handleClick('az')}}>az</button>
        <button className='btn btn-primary me-3' onClick={()=>{handleClick('en')}}>en</button>
        <button className='btn btn-primary me-3' onClick={()=>{handleClick('sp')}}>sp</button>
        <h1 className='mt-3'>{t('first.0')}</h1>
    </div>

    
    
    </>
   
  )
}

export default App