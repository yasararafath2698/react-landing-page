import React from 'react'
import Why_choose_1 from '../assets/img/why-choose-1.jpg'
import Why_choose_2 from '../assets/img/why-choose-2.jpg'
import Why_choose_3 from '../assets/img/why-choose-3.jpg'

export default function Choose() {
    return (
        <section className='bg-gray py-5 why-choose'>
            <div className='container pt-5'>
                <div className='d-flex justify-content-center d-flex justify-content-md-start'>
                    <h2 className="line-white d-inline-block">Why Choose Us?</h2>
                </div>
                <div className='row mt-5'>
                    <div className='col-md-5'>
                        <img src={Why_choose_1} className='rounded-cus1 w-100 object-fit-cover'></img>
                    </div>
                    <div className='col-md-7'>
                        <div className='px-0 px-md-5'>
                            <h3 className='h1 fw-bolder lh-sm mt-3 mt-md-0 w-75 w-cus-100'>Solutions Tailored
                                Specifically to Your
                                Business Needs</h3>
                            <p className='mt-3 w-75 w-cus-100'>We provide customized solutions for your
                                business needs, ensuring relevance and
                                success.</p>
                            <div className="d-flex justify-content-center justify-content-md-start sm-btn">
                                <a className='btn btn-primary fw-medium mt-3'>Read More</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='row mt-5 py-5'>
                    <div className='col-md-7 order-2 order-md-1'>
                        <h3 className='h1 fw-bolder lh-sm mt-3 mt-md-0 w-75 w-cus-100'>Creative Excellence
                            Elevates Every Project</h3>
                        <p className='mt-3 w-75 w-cus-100'>Creative excellence drives our work. From
                            concept to execution, we aim for exceptional
                            results.</p>
                        <div className="d-flex justify-content-center justify-content-md-start sm-btn">
                            <a className='btn btn-primary fw-medium mt-3'>Read More</a>
                        </div>
                    </div>
                    <div className='col-md-5 order-1 order-md-2'>
                        <div className='px-0 px-md-5'>
                            <img src={Why_choose_2} className='rounded-cus2 w-100 object-fit-cover'></img>
                        </div>
                    </div>
                </div>
                <div className='row mt-5 pb-5'>
                    <div className='col-md-5'>
                        <img src={Why_choose_3} className='rounded-cus2 w-100 object-fit-cover'></img>
                    </div>
                    <div className='col-md-7'>
                        <div className='px-0 px-md-5'>
                            <h3 className='h1 fw-bolder lh-sm mt-3 mt-md-0 w-75 w-cus-100'>Client Satisfaction is Our
                                Main Focus</h3>
                            <p className='mt-3 w-75 w-cus-100'>Our main goal is your satisfaction, and we
                                work tirelessly to ensure that you are pleased
                                with the results we achieve together</p>
                            <div className="d-flex justify-content-center justify-content-md-start sm-btn">
                                <a className='btn btn-primary fw-medium mt-3'>Read More</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
