import React from "react";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from "react-bootstrap/Container";
import Link from "next/link";
import metadata from "../data/metadata";

const Header = () => {
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
                  <Nav.Link className="mx-1 btn btn-outline-secondary border-0" href="/myProjects">My Projects</Nav.Link>
                  <Nav.Link className="mx-1 btn btn-outline-secondary border-0" href="/connect">Connect</Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </header>
    )
};

const Footer = () => {
    return (
        <footer className="d-flex flex-wrap align-items-center footer p-3 m-auto mt-auto bg-dark">
                    <div className="col d-flex justify-content-center align-items-center">
                        <Nav.Link href="/" className="font-weight-bold fs-1 mx-3" id="initials">NL</Nav.Link>
                        <span className="mx-3">&nbsp;&copy;&nbsp;{metadata.year} N. Langley</span>
                    </div>
                    <ul className="nav col justify-content-center list-unstyled d-flex mx-3">
                        <li className="ms-4">
                            <Link href={metadata.instagram}><i className="bi bi-instagram text-light fs-4"></i></Link>
                        </li>
                        <li className="ms-4">
                            <Link href={metadata.linkedin}><i className="bi bi-linkedin text-light fs-4"></i></Link>
                        </li>
                        <li className="ms-4">
                            <Link href={metadata.github}><i className="bi bi-github text-light fs-4"></i></Link>
                        </li>
                    </ul>
            </footer>
    )
};

const Layout = ({ children } : any) => {
    return (
        <>
            <Header />
            {children}
            <Footer />
        </>
    );
};

export default Layout;