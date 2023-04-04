import React from "react";
import Link from "next/link";
import Nav from "react-bootstrap/Nav";
import metadata from "../data/metadata";

class Footer extends React.Component {
    render() {
        return (
            <footer className="d-flex flex-wrap justify-content-between align-items-center p-3 w-75 m-auto mb-4 rounded-4 navbar-dark bg-dark">
                    <div className="col d-flex justify-content-center align-items-center">
                        <Nav.Link href="/" className="font-weight-bold fs-1">NL</Nav.Link>
                        <span className="text-muted mx-3">&nbsp;&copy;&nbsp;{metadata.year} Nicholas Langley</span>
                    </div>
                    <ul className="nav col justify-content-center list-unstyled d-flex">
                        <li className="ms-3">
                            <Link href={metadata.instagram}><i className="bi bi-instagram text-light fs-4"></i></Link>
                        </li>
                        <li className="ms-3">
                            <Link href={metadata.linkedin}><i className="bi bi-linkedin text-light fs-4"></i></Link>
                        </li>
                        <li className="ms-3">
                            <Link href={metadata.github}><i className="bi bi-github text-light fs-4"></i></Link>
                        </li>
                    </ul>
            </footer>
        )
    }
}

export default Footer