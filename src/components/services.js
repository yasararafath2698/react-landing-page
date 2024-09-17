import React from 'react'
import img from '../assets/img/SEO.png'

export default function Services() {
    return (
        <>
            <section className='services container m-cus-mt py-5 d-none d-md-block'>
                <div className='text-center'>
                    <h2>Services</h2>
                    <p>Strategic services drive digital success with tailored, comprehensive approaches.</p>
                </div>
                <div className='d-flex flex-wrap justify-content-center gap-5 align-items-center mt-5'>
                    <a href='' className='d-flex flex-column justify-content-center gap-3 align-items-center service-md-card p-4'>
                        <img src={img} alt='img' className='w-50'></img>
                        <p className='fw-bold txt-color-black'>SEO Marketing</p>
                    </a>
                    <a href='' className='d-flex flex-column justify-content-center gap-3 align-items-center service-md-card p-4'>
                        <img src={img} alt='img' className='w-50'></img>
                        <p className='fw-bold txt-color-black'>Content Marketing</p>
                    </a>
                    <a href='' className='d-flex flex-column justify-content-center gap-3 align-items-center service-md-card p-4'>
                        <img src={img} alt='img' className='w-50'></img>
                        <p className='fw-bold txt-color-black text-center'>Social Media Management</p>
                    </a>

                </div>
                <div className='d-flex flex-wrap justify-content-center gap-5 align-items-center mt-5'>
                    <a href='' className='d-flex flex-column justify-content-center gap-3 align-items-center service-md-card p-4'>
                        <img src={img} alt='img' className='w-50'></img>
                        <p className='fw-bold txt-color-black'>PPC</p>
                    </a>
                    <a href='' className='d-flex flex-column justify-content-center gap-3 align-items-center service-md-card p-4'>
                        <img src={img} alt='img' className='w-50'></img>
                        <p className='fw-bold txt-color-black'>Email Marketing</p>
                    </a>
                </div>
            </section>
            <section className='d-block d-md-none'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-sm-12'>
                            <h6>SEO Marketing</h6>
                            <p>Enhance your website’s visibility and rank higher
                                on search engines with our expert SEO services.
                                We optimize your site’s content, structure, and
                                performance to attract more organic traffic,
                                ensuring your business stands out in search
                                results</p>
                                <a className='btn btn-primary w-100'>ReadMore</a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
