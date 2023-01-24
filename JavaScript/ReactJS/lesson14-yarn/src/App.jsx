import axios from 'axios';
import React, { useEffect, useState } from 'react'

const App = () => {
    const [data,setData] = useState([]);
    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(res=>setData(res.data));
    },[])
  return (
    <ul>
        {data.map(item=>(<li key={item.id}>{item.title}</li>))}
    </ul>
    
  )
}

export default App