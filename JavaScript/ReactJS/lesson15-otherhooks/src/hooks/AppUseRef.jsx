import React,{useRef, useState} from 'react'

const AppUseRef = () => {
    const [data,setData] = useState('test')
    const inputRef = useRef();
    const handleClick = ()=>{
        console.log(inputRef.current);
        setData(inputRef.current.value)
    }
  return (
    <div>
        <h1>{data}</h1>
        <input type="text" ref={inputRef}/>
        <button onClick={handleClick}>click</button>
    </div>
  )
}

export default AppUseRef