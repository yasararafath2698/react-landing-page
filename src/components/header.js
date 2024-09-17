import React from 'react'
import Brand_logo from '../assets/img/brand-logo.png'

export default function Header() {
  return (
    <header className='fixed-top bg-black'>
      <nav className="navbar navbar-expand-lg ">
        <div className="container">
          <img src={Brand_logo} style={{ height: 50 }} alt='Logo' />
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <i class="bi bi-list txt-color p-1 px-2 menu-icon"></i>
          </button>
          <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" href="/about">Process</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/services">Benifits</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/services">Services</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/contact">Portfolio</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/contact">FAQ</a>
              </li>
              <li className="nav-item ms-md-5">
                <a className="btn btn-primary fw-medium" href="/contact">Get Started</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  )
}
