import React from 'react'
import Hero_bg from '../assets/img/hero-bg.jpg'
import Client_logo from '../assets/img/layers.png'

export default function Hero() {
    return (
        <section className='container hero-bg m-cus-mt'>
            <div className='position-relative vh-100 w-100 '>
                <div className='position-absolute top-50 start-50 translate-middle img-div-pos'>
                    <img src={Hero_bg} alt='hero-bg' className='w-100' />
                </div>
                <div className='position-absolute top-50 start-50 translate-middle text-center w-100'>
                    <h1 className='fw-bolder lh-sm display-1'><span className='txt-color'>Boost</span> Your Brand With Innovative <span className='txt-color'>Digital Marketing</span></h1>
                    <p className='mt-4 p-3 bg-style'>Drive Engagement and Conversions with Advanced Digital Marketing Strategies.</p>
                    <div className='d-flex justify-content-center align-items-center gap-3 mt-3'>
                        <a className='btn btn-outline-primary d-sm-block d-md-none fw-medium'>Our Works</a>
                        <a className='btn btn-primary fw-medium'>Start Now</a>
                    </div>
                    <div className='mt-5 client_logo'>
                        <p className='text-uppercase trusted-label position-relative d-inline-block'>Trusted by thousand companies</p>
                        <div className='logo_section p-3 d-flex flex-wrap gap-0 gap-md-4 justify-content-center mt-0 mt-md-5'>
                            <img src={Client_logo}></img>
                            <img src={Client_logo}></img>
                            <img src={Client_logo}></img>
                            <img src={Client_logo}></img>
                            <img src={Client_logo}></img>
                            <img src={Client_logo}></img>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
