import { useMemo, useState } from "react"
import users from "./data/users"

const App = () => {
const [count,setCount] = useState(0);
const [userId,setUserId] = useState(null);
const getUserRows =()=>{
    console.log('getUserRows worked');
    return users.map((user,index)=><div key={index} onClick={()=>{
        setUserId(user.id)
    }}>{user.name}</div>)
    
}
const userRows = useMemo(()=>getUserRows(),[userId])
  return (
    <div>
      {userRows}
       <p>{userId}</p>
            <p>{count}</p>
        <button className="btn btn-primary" onClick={()=>{setCount(count+1)
        console.log('count');
        
        }}>click</button>
    </div>
  )
}

export default App