import React from 'react'
import { HashLink as Link } from 'react-router-hash-link'

export default function Header() {
    return (
        <nav className="navbar navbar-expand-md navbar-light shadow fixed-top">
        <div className="container">
          <Link to='/' className="navbar-brand text-light" href="index.html">Portfo<span>lio.</span></Link>
          <button className="navbar-toggler bg-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link to='/#home' ><a className="nav-link text-light" aria-current="page" href="#home">Home</a></Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link text-light" to="/#about">About</Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link text-light" to="/#projects">Projects</Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link text-light" to="/#technologies">Technologies</Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link text-light" to="/#contact">Contact</Link>
              </li>
              
            </ul>
          </div>
        </div>
    </nav>
    )
}
