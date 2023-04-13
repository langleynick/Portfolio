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
                  <Nav.Link className="mx-1 btn btn-outline-secondary border-0" href="/projects">My Projects</Nav.Link>
                  <Nav.Link className="mx-1 btn btn-outline-secondary border-0" href="/connect">Connect</Nav.Link>
                </Nav>
                <div>
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
                </div>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </header>
    )
};

const Footer = () => {
    return (
        <footer className="footer mt-auto py-4 bg-dark">
            <div className="container w-75 m-auto">
                <div className="row">
                    <div className="col m-auto">
                        <ul className="d-flex gap-5 list-inline justify-content-center">
                            <li className="btn btn-outline-secondary border-0 list-inline-item">
                                <Link href='/' className="link-light">Home</Link>
                            </li>
                            <li className="btn btn-outline-secondary border-0 list-inline-item">
                                <Link href='/about' className="link-light">About Me</Link>
                            </li>
                            <li className="btn btn-outline-secondary border-0 list-inline-item">
                                <Link href='/projects' className="link-light">My Projects</Link>
                            </li>
                            <li className="btn btn-outline-secondary border-0 list-inline-item">
                                <Link href='/connect' className="link-light">Connect</Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="d-flex flex-column flex-sm-row justify-content-between pt-4 border-top border-secondary">
                    <div className="col d-flex">
                        <p>&copy; {metadata.year} N. Langley</p>
                    </div>
                    <ul className="justify-content-end list-unstyled d-flex">
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
                </div>
            </div>
        </footer>
    )
};

const Layout = ({ children } : any) => {
    return (
        <>
            <Header />
                <main className="w-75 m-auto my-5 min-vh-100">
                    {children}
                </main>
            <Footer />
        </>
    );
};

export default Layout;