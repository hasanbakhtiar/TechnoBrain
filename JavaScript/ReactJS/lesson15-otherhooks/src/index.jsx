import React from 'react';
import ReactDOM from 'react-dom/client';
import AppUseImperativeHandle from './hooks/AppUseImperativeHandle';
// import AppuseLayoutEffect from './hooks/AppuseLayoutEffect';
// import AppUseRef from './hooks/AppUseRef';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AppUseImperativeHandle />
  </React.StrictMode>
);

