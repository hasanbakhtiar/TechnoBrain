import React,{Component} from 'react' 
class List extends Component{
    render(){
      return(
        <ul>
          <li>{this.props.title1}</li>
          <li>{this.props.title2}</li>
        </ul>
      )
    }
  }
  export default List;