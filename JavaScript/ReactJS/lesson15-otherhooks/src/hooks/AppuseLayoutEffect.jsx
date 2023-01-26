import React, { useEffect, useLayoutEffect, useState } from 'react'

const AppuseLayoutEffect = () => {
    const [message,setMessage] = useState('hi');
    useLayoutEffect(()=>{
        alert('changed');
        setMessage('new value');
    },[])
  return (
    <div>
        {message}
    </div>
  )
}

export default AppuseLayoutEffect