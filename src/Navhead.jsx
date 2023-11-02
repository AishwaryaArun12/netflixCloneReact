import React from 'react';
import './nav.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell } from '@fortawesome/free-regular-svg-icons';
import { faSearch} from '@fortawesome/free-solid-svg-icons';


function Navhead() {
    
  return (
    <div >
      <Navbar id='nav' expand="lg" >
    <Container>
      <Navbar.Brand href="#home"><img src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" width={'120px'} height={'60px'} alt="" /></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link className='text-light' href="#home">Home</Nav.Link>
          <Nav.Link className='text-light' href="#link">TV Shows</Nav.Link>
          <Nav.Link className='text-light' href="#link">Movies</Nav.Link>
          <Nav.Link className='text-light' href="#link">New & Popular</Nav.Link>
          <Nav.Link className='text-light' href="#link">My List</Nav.Link>
          <Nav.Link  className='text-light' href="#link">Browse by Languages</Nav.Link>
          <Nav.Link className='text-light' id="navlink" href="#link"><FontAwesomeIcon icon={faSearch} /></Nav.Link>
          <Nav.Link className='text-light' href="#link">Children</Nav.Link>
          <Nav.Link className='text-light' href="#link"><FontAwesomeIcon icon={faBell} /></Nav.Link>
          <div className='ms-auto'>
          <NavDropdown    id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
              Another action
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">
              Separated link
            </NavDropdown.Item>
          </NavDropdown>
          </div>
          
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
    </div>
  )
}

export default Navhead
