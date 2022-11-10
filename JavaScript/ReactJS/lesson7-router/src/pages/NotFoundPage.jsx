import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class NotFoundPage extends Component {
  render() {
    return (
      <div className='container'>
        <Link to="/">
            <img src="https://freefrontend.com/assets/img/html-funny-404-pages/CodePen-404-Page.gif" alt="" />
        </Link>
      </div>
    )
  }
}

export default NotFoundPage