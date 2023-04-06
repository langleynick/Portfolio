import React from "react";
import Link from "next/link";
import Nav from "react-bootstrap/Nav";
import metadata from "../data/metadata";

class Footer extends React.Component {
    render() {
        return (
            <footer className="d-flex flex-wrap justify-content-between align-items-center footer p-3 w-75 m-auto mt-auto mb-4 rounded-4 bg-dark fixed-bottom">
                    <div className="col d-flex justify-content-left align-items-center">
                        <Nav.Link href="/" className="font-weight-bold fs-1 mx-3" id="initials">NL</Nav.Link>
                        <span className="mx-3">&nbsp;&copy;&nbsp;{metadata.year} N. Langley</span>
                    </div>
                    <ul className="nav col justify-content-end list-unstyled d-flex mx-3">
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
    }
}

export default Footer