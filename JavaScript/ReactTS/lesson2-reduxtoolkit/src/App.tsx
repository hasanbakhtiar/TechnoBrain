import React, { useState } from "react";
import { useAppDispatch, useAppSelector } from "./store";
import { add,remove } from "./features/todoSlice";

const App = () => {
    const todos = useAppSelector(state=>state.todos);
    const [title,setTitle] = useState("");
    const dispatch = useAppDispatch();

    const onSave=()=>{
        dispatch(add(title));
        setTitle("");
    }
    const onDelete = (id:string)=>{
      dispatch(remove(id))
    }
  return (
    <div>
      <input value={title} type="text" onChange={e=>setTitle(e.target.value)}/>
      <button onClick={onSave}>add</button>
      <ul>
        
    {todos.map((todo:any,i:number)=><li key={i}>{todo.title}<button onClick={()=>onDelete(todo.id)}>del</button></li>)}
        
    
        
        
        
        </ul>
    </div>
  );
};

export default App;
