import React, { Component } from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App'

class Page extends Component{
  constructor(){
    super();
    this.state={
      display:true
    }
  }
  componentWillUnmount(){
    alert('The component is going to be unmounted');
 }
 delete=()=>{
  this.setState({display: false})
}
  render(){
    let pagedata;
    if (this.state.display) {
      pagedata = <App/>
  }
    return(
      <div>
        {pagedata}
          <button onClick={this.delete}> del</button>
      </div>
    )
  }
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Page />
  </React.StrictMode>
);

