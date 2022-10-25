import React from 'react';
import ReactDOM from 'react-dom';
import './sass/style.scss';
import photo from './img/images.jpeg'
class App extends React.Component{
    render(){
        return(
            <>
            <h1>Hello ReactJS</h1>
            <img width="300" src={photo} alt="" />
            </>
        )
    }
}

ReactDOM.render(<App/>,document.querySelector('#root'));
