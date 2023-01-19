import React from 'react'
import { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link, NavLink } from 'react-router-dom';
import { MovieContext } from '../context/MovieContext';
const Header = () => {
  const [movies,setMovies] = useContext(MovieContext);
  return (
    <Navbar bg="light" expand="lg">
    <Container fluid>
      <Navbar.Brand ><Link to="/">Movies Shop</Link></Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll">
        <Nav
          className="mx-auto my-2 my-lg-0"
          style={{ maxHeight: '100px' }}
          navbarScroll
        >
          <Nav.Link ><NavLink to="/">Home</NavLink></Nav.Link>
          <Nav.Link ><NavLink to="/movies">Movie List</NavLink></Nav.Link>
      
        
        </Nav>
        <Nav className="d-flex">
          <h3 className='me-5'>Movie count:{movies.length}</h3>
          <Link to="/add"><Button variant="outline-success">Add</Button></Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

export default Header