import React from "react";
import Link from "next/link";
import metadata from "../data/metadata";

class Header extends React.Component {
    render() {
    return (
            <header>
                <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                    <a className="navbar-brand" href="/">
                        Initials Here
                    </a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar" aria-controls="navbar" aria-expanded="false" aria-label="Toggle Navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbar">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item active">
                                <div className="nav-link">
                                    <Link href="/">Home</Link>
                                </div>
                            </li>
                            <li className="nav-item">
                                <div className="nav-link">
                                    <Link href="/about">About Me</Link>
                                </div>
                            </li>
                            <li className="nav-item">
                                <div className="nav-link">
                                    <Link href="/projects">Projects</Link>
                                </div>
                            </li>
                            <li className="nav-item">
                                <div className="nav-link">
                                    <Link href="/connect">Connect</Link>
                                </div>
                            </li>
                        </ul>
                        <ul className="navbar-nav d-flex flex-row">
                            <li className="nav-item me-3 me-lg-0">
                                <a className="nav-link" href={metadata.instagram}>
                                    <i className="bi bi-instagram text-light"></i>
                                </a>
                            </li>
                            <li className="nav-item me-3 me-lg-0">
                                <a className="nav-link" href={metadata.linkedin}>
                                    <i className="bi bi-linkedin text-light"></i>
                                </a>
                            </li>
                            <li className="nav-item me-3 me-lg-0">
                                <a className="nav-link" href={metadata.github}>
                                    <i className="bi bi-github text-light"></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </header>
        )
    }
}
export default Header