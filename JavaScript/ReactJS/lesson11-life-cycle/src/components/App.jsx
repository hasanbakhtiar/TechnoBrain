import React, { Component } from 'react'

class App extends Component {

 
    constructor(){
        super();
        console.log('constructor is running...');
        this.state ={
            count:0
        }
    }

  


    componentDidMount(){
        setTimeout(()=>{
         document.querySelector('.preloader').style.display = 'none'; 
         document.querySelector('.page').style.display = 'block'; 
        },500)
     }
    
     
     componentDidUpdate(){
        document.querySelector('button').style.backgroundColor = 'red';
        console.log('update');
     }

     componentWillUnmount(){
        alert('The component is going to be unmounted');
     }
  
  render() {

  
    return (
      <div>
        <div className="preloader" style={{'display':'block'}}><img width={400} src='https://cdn.dribbble.com/users/1186261/screenshots/3718681/_______.gif'/></div>

        <div style={{'display':'none'}} className="page" >
            <p>hello</p>
            <p>{this.state.count}</p>
        <button onClick={()=>{this.setState({
            count:this.state.count +1
        })}}>action</button>
      
        </div>
      </div>
    )
  }
}

export default App