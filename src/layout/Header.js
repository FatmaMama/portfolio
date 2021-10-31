import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
    return (
        <nav className="navbar navbar-expand-md navbar-light shadow fixed-top">
        <div className="container">
          <Link to='/' className="navbar-brand text-light" href="index.html">Portfo<span>lio.</span></Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link text-light" aria-current="page" href="#home">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-light" href="#about">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-light" href="#projects">Projects</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-light" href="#technologies">Technologies</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-light" href="#contact">Contact</a>
              </li>
              
            </ul>
          </div>
        </div>
    </nav>
    )
}
