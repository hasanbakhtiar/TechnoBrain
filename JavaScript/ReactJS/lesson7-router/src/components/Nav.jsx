import React, { Component } from 'react'
import { Link } from 'react-router-dom'
 class Nav extends Component {
  render() {
    return (
        <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
        <div className="container-fluid">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
            <li class="nav-item">
                <Link class="nav-link " to="/home">Home</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link " to="/about">About</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link " to="/contact">Contact</Link>
              </li>
            </ul>
        
          </div>
        </div>
      </nav>
    )
  }
}

export default Nav