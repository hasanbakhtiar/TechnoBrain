import React, { Component } from "react";

class Dropdown extends Component {
  render() {
    return (
      <li className="nav-item dropdown ">
        <a
          className="nav-link dropdown-toggle active"
          target="_blank"
          rel="noreferrer"
          href="#"
          role="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          {this.props.brand}
        </a>
        <ul className="dropdown-menu">
          <li>
            <a className="dropdown-item" href="#">
              Action
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Another action
            </a>
          </li>
          <li>
            <hr className="dropdown-divider" />
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Something else here
            </a>
          </li>
        </ul>
      </li>
    );
  }
}

class Header extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Navbar
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <Dropdown brand="Asus" />
              <Dropdown brand="Acer" />
              <Dropdown brand="MSI" />
              <Dropdown brand="Lenovo" />
            </ul>
            <div className="d-flex">
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

export default Header;
