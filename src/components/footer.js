import React from 'react'
import Brand_logo from '../assets/img/brand-logo.png'

export default function Footer() {
    return (
        <footer>
            <div className='container my-5'>
                <div className='row'>
                    <div className='col-lg-4 col-md-6 px-3'>
                        <img src={Brand_logo} style={{ height: 50 }} alt='Logo' />
                        <p className='mt-3'>Click It - is a leading digital marketing agency
                            dedicated to driving success for businesses
                            online. With expertise in SEO, PPC, social
                            media, content creation, and more, we offer
                            tailored solutions to maximize ROI.
                            In the USA, UK, and Canada working with toptier clients, from start-ups to enterprises.</p>
                    </div>
                    <div className='col-lg-3 col-md-6'>
                        <h4 className='txt-color fw-bold h5'>Our Services</h4>
                        <ul className="navbar-nav mt-4">
                            <li className="nav-item">
                                <a className="nav-link" href="">SEO Marketing</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="">Research Topic Trends</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="">Email Marketing</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="">Google PPC</a>
                            </li>
                        </ul>
                    </div>
                    <div className='col-lg-3 col-md-6 mt-3 mt-md-0'>
                        <h4 className='txt-color fw-bold h5'>Our Location</h4>
                        <ul className="navbar-nav mt-4">
                            <li className="nav-item">
                                <a className="nav-link" href="">USA</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="">UK</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="">Canada</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="">Virtual</a>
                            </li>
                        </ul>
                    </div>
                    <div className='col-lg-2 col-md-6 mt-3 mt-md-0'>
                        <h4 className='txt-color fw-bold h5'>Contact us</h4>
                        <ul className="navbar-nav mt-4 mt-md-5 pt-sm-0 pt-md-3">
                            <li className="nav-item">
                            <a className="nav-link" href="mailto:info@kronix.com"><i class="bi bi-envelope-paper me-4"></i>info@kronix.com</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="tel:(001) 1231 3435"><i class="bi bi-telephone me-4"></i>(001) 1231 3435</a>
                            </li>
                            <li className="nav-item social-icon mt-2">
                            <a href="https://instagram.com" className="me-3 me-md-4">
                                    <i className="bi bi-linkedin"></i>
                                </a>
                                <a href="https://twitter.com" className="me-3 me-md-4">
                                    <i className="bi bi-twitter"></i>
                                </a>
                                <a href="https://facebook.com" className="me-3 me-md-4">
                                    <i className="bi bi-facebook"></i>
                                </a>
                                <a href="https://instagram.com" className="me-3 me-md-4">
                                    <i className="bi bi-instagram"></i>
                                </a>
                               
                            </li>
                        </ul>
                    </div>
                </div>
                <hr></hr>
                <div className="d-flex flex-wrap justify-content-center justify-content-md-between footer-link">
                    <div>
                        <ul className="navbar-nav d-flex flex-row gap-3 gap-md-4">
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
                        </ul>
                    </div>
                    <div >
                        <p >© 2024 RajaramanR3- All Right Reserved</p>
                    </div>
                </div>
            </div>

        </footer>
    )
}
