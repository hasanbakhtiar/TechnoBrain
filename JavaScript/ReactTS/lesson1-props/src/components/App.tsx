import { useState } from "react";
import data from "../data/data";
import List from "./List";
import User from "./User";



function App() {
  const [login,setLogin] = useState(false);
  return (
    <>
      <main>
        <User isLoggedIn={login} messageCount={30} info="Hasan"/>
        <button onClick={()=>{setLogin(login ? false:true)}}>{login ? 'logout':'login'}</button>
        <h1>My List</h1>
       {data.map(fd=>(
        <List title={fd.title} price={fd.price}/>
       ))}
      </main>
    </>
  );
}

export default App;
