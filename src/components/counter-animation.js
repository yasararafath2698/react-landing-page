import React, { useState } from 'react'
import CountUp from 'react-countup'
import ScrollTrigger from 'react-scroll-trigger'

export default function Counter_animation() {
    const [counterOn, setCounterOn] = useState(false)
    return (
        <ScrollTrigger onEnter={()=>setCounterOn(true)} onExit={()=>setCounterOn(false)}>
            <section className='counter-animation py-5'>
                <div className='container'>
                    <h2 className='text-center'>Work with Click it new Tech</h2>

                    <div className='row mt-5'>
                        <div className='col-md-4 d-flex flex-column justify-content-center align-items-center gap-3'>
                            <div className='circle d-inline-block p-4 rounded-circle d-flex justify-content-center align-items-center' >
                                <i class="bi bi-people fs-2 txt-color-black"></i>
                            </div>
                            <div className='d-flex flex-column justify-content-center align-items-center'>
                                <h4> {counterOn && <CountUp start={0} end={10000} duration={1} delay={0} />}+</h4>
                                <p>Happy Customers</p>
                            </div>
                        </div>
                        <div className='col-md-4 mt-4 mt-md-0 d-flex flex-column justify-content-center align-items-center gap-3'>
                            <div className='circle d-inline-block p-4 rounded-circle d-flex justify-content-center align-items-center' >
                                <i class="bi bi-arrow-clockwise fs-2 txt-color-black"></i>
                            </div>
                            <div className='d-flex flex-column justify-content-center align-items-center'>
                                <h4>{counterOn && <CountUp start={0} end={20000} duration={1} delay={0} />}+</h4>
                                <p>Success Processes</p>
                            </div>
                        </div>
                        <div className='col-md-4 mt-4 mt-md-0 d-flex flex-column justify-content-center align-items-center gap-3'>
                            <div className='circle d-inline-block p-4 rounded-circle d-flex justify-content-center align-items-center' >
                                <i class="bi bi-star fs-2 txt-color-black"></i>
                            </div>
                            <div className='d-flex flex-column justify-content-center align-items-center'>
                                <h4>{counterOn && <CountUp start={0} end={10} duration={2} delay={0} />}+ Years</h4>
                                <p>of Experience</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </ScrollTrigger>
    )
}
