import { createStore } from 'redux'
import { blogReducer } from '../reducers/blogReducer';


// eslint-disable-next-line import/no-anonymous-default-export
export default ()=>{
    const store = createStore(blogReducer);
    return store;
}