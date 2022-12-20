import React from 'react';
import ReactDOM from 'react-dom/client';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import AppRouter from './routers/AppRouter';
import { addBlog } from './actions/blogAction'
import configureStore from './store/configureStore'
import { Provider } from 'react-redux';

const store = configureStore();


store.subscribe(()=>{console.log(store.getState())})

store.dispatch(addBlog({title:"hello",desc:'desc'}));
store.dispatch(addBlog({title:"hello1",desc:'desc1'}));
store.dispatch(addBlog({title:"hello1",desc:'desc1'}));
store.dispatch(addBlog({title:"hello1",desc:'desc1'}));
store.dispatch(addBlog({title:"hello1",desc:'desc1'}));
store.dispatch(addBlog({title:"hello1",desc:'desc1'}));
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
 <Provider store={store}>
 <AppRouter />
 </Provider>
  </React.StrictMode>
);
