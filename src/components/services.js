import React from 'react'
import img from '../assets/img/SEO.png'
import img1 from '../assets/img/SEO-mob.png'

export default function Services() {
    return (
        <>
            <section className='services container m-cus-mt py-5 d-none d-md-block'>
                <div className='pb-5 mb-2'>
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
                </div>
            </section>
            <section className='py-5 d-block d-md-none'>
                <div className='container'>
                    <div className='bg-img-service d-flex flex-column justify-content-center py-5 px-3'>
                        <h2 className='content'>Services</h2>
                        <p className='content'>Strategic services drive digital success with tailored,
                            comprehensive approaches</p>
                    </div>
                    <div className='sm-services row mt-4'>
                        <div className='col-sm-12'>
                            <div className='p-3 pb-4 line-gray-border'>
                                <img src={img1} className='w-25'></img>
                                <h5 className='d-inline ms-3'>SEO Marketing</h5>
                                <p className='mt-3'>Enhance your website’s visibility and rank higher
                                    on search engines with our expert SEO services.
                                    We optimize your site’s content, structure, and
                                    performance to attract more organic traffic,
                                    ensuring your business stands out in search
                                    results</p>
                                <a className='btn btn-primary w-100'>ReadMore</a>
                            </div>
                        </div>
                        <div className='col-sm-12 mt-3'>
                            <div className='p-3 pb-4 line-gray-border'>
                                <img src={img1} className='w-25'></img>
                                <h5 className='d-inline ms-3'>Content Marketing</h5>
                                <p className='mt-3'>Engage your audience with high-quality, valuable
                                    content that drives traffic and builds trust. Our
                                    content marketing strategies include blog posts,
                                    articles, infographics, and more, all designed to
                                    resonate with your target market and convert
                                    visitors into loyal customers.</p>
                                <a className='btn btn-primary w-100'>ReadMore</a>
                            </div>
                        </div>
                        <div className='col-sm-12 mt-3'>
                            <div className='p-3 pb-4 line-gray-border'>
                                <img src={img1} className='w-25'></img>
                                <h5 className='d-inline ms-3'>Social Media Management</h5>
                                <p className='mt-3'>Build a strong online presence with our social
                                    media management services. We create and
                                    manage content across platforms like Facebook,
                                    Instagram, Twitter, and LinkedIn, ensuring your
                                    brand connects with your audience and drives
                                    meaningful engagement.</p>
                                <a className='btn btn-primary w-100'>ReadMore</a>
                            </div>
                        </div>
                        <div className='col-sm-12 mt-3'>
                            <div className='p-3 pb-4 line-gray-border'>
                                <img src={img1} className='w-25'></img>
                                <h5 className='d-inline ms-3'>PPC (Pay-Per Click)
                                </h5>
                                <p className='mt-3'>Maximize your ROI with targeted PPC campaigns.
                                    We design and manage ads on platforms like
                                    Google Ads and social media, ensuring your
                                    business reaches the right audience at the right
                                    time for optimal conversions.</p>
                                <a className='btn btn-primary w-100'>ReadMore</a>
                            </div>
                        </div>
                        <div className='col-sm-12 mt-3'>
                            <div className='p-3 pb-4 line-gray-border'>
                                <img src={img1} className='w-25'></img>
                                <h5 className='d-inline ms-3'>Email Marketing
                                </h5>
                                <p className='mt-3'>Reach your customers directly with personalized
                                    email campaigns. Our email marketing services
                                    include crafting compelling messages,
                                    segmenting audiences, and analyzing
                                    performance to boost engagement and drive
                                    repeat business.</p>
                                <a className='btn btn-primary w-100'>ReadMore</a>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}
