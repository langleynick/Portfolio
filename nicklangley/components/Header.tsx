import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import React from "react";

class Header extends React.Component {
    render() {
    return (
            <Navbar collapseOnSelect className="w-75 p-0 m-auto mt-4 rounded-4" expand="lg" bg="dark" variant="dark" role='navigation'>
            <Container fluid className='m-1 p-1'>
              <Navbar.Brand className="font-weight-bold fs-1 mx-3" href="/">NL</Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className='me-auto'>
                  <Nav.Link className="mx-3" href="/">Home</Nav.Link>
                  <Nav.Link className="mx-3" href="/about">About Me</Nav.Link>
                  <Nav.Link className="mx-3" href="/projects">My Projects</Nav.Link>
                  <Nav.Link className="mx-3" href="/connect">Connect</Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        )
    }
}
export default Header