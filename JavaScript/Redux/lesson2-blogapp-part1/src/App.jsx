import React from 'react'
import { addBlog } from './actions/blogAction'
import configureStore from './store/configureStore'
const store = configureStore();


store.subscribe(()=>{console.log(store.getState())})

store.dispatch(addBlog({title:"hello",desc:'desc'}));
store.dispatch(addBlog({title:"hello1",desc:'desc1'}));


const App = () => {
  return (
    <div>App</div>
  )
}

export default App