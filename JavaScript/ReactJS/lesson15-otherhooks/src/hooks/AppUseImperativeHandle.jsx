import React, { forwardRef, useImperativeHandle, useRef, useState } from 'react'

const MyInput=forwardRef((props,ref)=>{
    const [fontSize,setFontSize] = useState(14);
    const [styleName,setStyleName] = useState('danger')
    const [value,setValue] = useState("")
    const inputRef = useRef();

    useImperativeHandle(ref,()=>({
        // hi:sayHi,
        changeColor:newColor,
        incFont:()=>{setFontSize(fontSize+2)},
        decFont:()=>{setFontSize(fontSize-2)}
    }))
    
    // const sayHi=()=>{
    //         alert("Hello");
    // }
    const newColor =()=>{
        setValue(styleName);
    }
    return(
     <>
     <h1 className={`text-${value}`}>Hello</h1>
        <input onChange={e=>{setStyleName(e.target.value)}} type="text" style={{fontSize}}/>
        
     </>
    )
    
})

const AppUseImperativeHandle = () => {
    const inputRef = useRef();
    const handleClick = ()=>{
            // inputRef.current.hi();
            inputRef.current.changeColor();
    }
  return (
    <div>
        <MyInput ref={inputRef}/>
        <button onClick={handleClick}>click</button>
        <button onClick={()=>{inputRef.current.incFont()}}>+</button>
        <button onClick={()=>{inputRef.current.decFont()}}>-</button>
    </div>
  )
}

export default AppUseImperativeHandle