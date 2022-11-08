import React, { Component } from 'react'
import UserCard from './UserCard'

class UserList extends Component {
  render() {
    return (
      <div className='row mt-5'>
        {this.props.uservalue.map((fd,i)=>(

            <UserCard puser={fd} key={i}/>
        ))}
      </div>
    )
  }
}

export default UserList