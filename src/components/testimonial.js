import React from 'react'
import Img from '../assets/img/profile.jpg'
import Test_logo from '../assets/img/testimonial-logo.png'

export default function Testimonial() {
  return (
    <section className='bg-white py-5 d-none d-md-block'>
      <div className='container'>
        <div className='text-center txt-color-black'>
          <h2 className='text-uppercase h5'>Testimonial</h2>
          <h2 className='fw-bolder'>Customer is Our Top Priority</h2>
          <p>We survey all of our clients, the results of which go directly
            to our CEO.</p>
        </div>
        <div id="carouselExampleControls" class="carousel slide mt-5" data-bs-ride="carousel">
          <div class="carousel-inner">
            <div class="carousel-item active">
              <div className='w-75 m-auto bg-light-white p-5 border border-1 rounded-5'>
                <div className='row'>
                  <div className='col-md-8 txt-color-black '>
                    <img src={Test_logo}></img>
                    <h5 className='fw-bold mt-3'>Kornix is the best digital agency i have
                      ever seen! Highly Recommended!
                    </h5>
                    <p>I recently hired Ideapeel for a custom web development
                      project and couldn't be happier with the results. The team
                      was able to bring my unique ideas to life and create a
                      website that truly stands out.</p>
                    <h6 className='fw-bold'>Diana Loreza</h6>
                    <p>Director of <b className='text-uppercase fw-normal'>Gymstory</b></p>
                  </div>
                  <div className='col-md-4 align-items-center d-flex'>
                    <img src={Img} className='rounded-circle w-100'></img>
                  </div>
                </div>
              </div>
            </div>
            <div class="carousel-item">
            <div className='w-75 m-auto bg-light-white p-5 border border-1 rounded-5'>
                <div className='row'>
                  <div className='col-md-8 txt-color-black '>
                    <img src={Test_logo}></img>
                    <h5 className='fw-bold mt-3'>Matrix is the best digital agency i have
                      ever seen! Highly Recommended!
                    </h5>
                    <p>I recently hired Ideapeel for a custom web development
                      project and couldn't be happier with the results. The team
                      was able to bring my unique ideas to life and create a
                      website that truly stands out.</p>
                    <h6 className='fw-bold'>Yasar Arafath</h6>
                    <p>Director of <b className='text-uppercase fw-normal'>Gymstory</b></p>
                  </div>
                  <div className='col-md-4 align-items-center d-flex'>
                    <img src={Img} className='rounded-circle w-100'></img>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </section>
  )
}
