import React from 'react';
import ReactDOM from 'react-dom/client';
import { createStore } from 'redux';

const initalState = {
  count:0
}

const store = createStore((state = initalState, action)=>{
  switch(action.type){
    case "INCREMENT":
      return{
        count: state.count + 1
      };
    case "DECREMENT":
      return{
        count: state.count - 1
      };
      case "RESET":
        return{
          count: 0
        }
        default:
          return {
            count: state.count
          }
  }
})


store.subscribe(()=>{
  console.log(store.getState());
})


store.dispatch({
  type:"INCREMENT"
})
store.dispatch({
  type:"INCREMENT"
})
store.dispatch({
  type:"DECREMENT"
})

store.dispatch({
  type:"RESET"
})

store.dispatch({
  type:"INCREMENT"
})
store.dispatch({
  type:"INCREMENT"
})

const App =()=>{
  return(
    <h1>Hello Redux</h1>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
