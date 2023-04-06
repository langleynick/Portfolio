import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import React from "react";

export class Header extends React.Component {
    render() {
    return (
      <header>
          <Navbar collapseOnSelect className="w-75 m-auto mt-4 rounded-4" expand="lg" bg="dark" variant="dark" role='navigation'>
            <Container fluid className='m-1 p-1'>
              <Navbar.Brand className="font-weight-bold fs-1 mx-4" id="initials" href="/">NL</Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className='me-auto fs-5'>
                  <Nav.Link className="mx-1 btn btn-outline-secondary border-0" href="/">Home</Nav.Link>
                  <Nav.Link className="mx-1 btn btn-outline-secondary border-0" href="/about">About Me</Nav.Link>
                  <Nav.Link className="mx-1 btn btn-outline-secondary border-0" href="/projects">My Projects</Nav.Link>
                  <Nav.Link className="mx-1 btn btn-outline-secondary border-0" href="/connect">Connect</Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </header>
        )
    }
}