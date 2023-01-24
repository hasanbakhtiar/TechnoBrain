import React, { useState } from "react";
import { useAppDispatch, useAppSelector } from "./store";
import { add } from "./features/todoSlice";

const App = () => {
    const todos = useAppSelector(state=>state.todos);
    const [title,setTitle] = useState("");
    const dispatch = useAppDispatch();

    const onSave=()=>{
        dispatch(add(title));
        setTitle("");
    }
  return (
    <div>
      <input value={title} type="text" onChange={e=>setTitle(e.target.value)}/>
      <button onClick={onSave}>add</button>
      <ul>
        
    {todos.map((todo:any,i:number)=><li key={i}>{todo.title}<button>del</button></li>)}
        
    
        
        
        
        </ul>
    </div>
  );
};

export default App;
