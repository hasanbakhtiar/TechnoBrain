import React, { Component } from 'react'

class Nav extends Component {
  render() {
    return (
<nav className="nav bg-primary">
  <a className="nav-link text-light" aria-current="page" href={this.props.url}><i class={this.props.icon}></i> GitHub</a>
</nav>


    )
  }
}

export default Nav