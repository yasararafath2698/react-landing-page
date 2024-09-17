import React, { useState } from 'react';

const testimonials = [
  {
    id: 1,
    name: 'Diana Loreza',
    position: 'Director of GYMSTORY',
    quote: 'Kornix Is The Best Digital Agency I Have Ever Seen! Highly Recommended!',
    content: 'I recently hired Ideapeel for a custom web development project and couldn\'t be happier with the results. The team was able to bring my unique ideas to life and create a website that truly stands out.'
  },
  {
    id: 2,
    name: 'John Doe',
    position: 'CEO of TechCorp',
    quote: 'Excellent service and outstanding results!',
    content: 'Working with this team was a pleasure. They delivered beyond our expectations and were always responsive to our needs.'
  }
];

const TestimonialCard = ({ testimonial }) => (
  <div style={{ border: '1px solid #ddd', padding: '20px', margin: '20px 0', borderRadius: '8px' }}>
    <h3>{testimonial.quote}</h3>
    <p>{testimonial.content}</p>
    <p><strong>{testimonial.name}</strong> - {testimonial.position}</p>
  </div>
);

export default function Testimonial() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div style={{ maxWidth: '600px', margin: '0 auto', textAlign: 'center' }}>
      <h2>Customer is Our Top Priority</h2>
      <TestimonialCard testimonial={testimonials[currentIndex]} />
      <button onClick={prevTestimonial} style={{ marginRight: '10px' }}><i class="bi bi-arrow-left-short"></i></button>
      <button onClick={nextTestimonial}><i class="bi bi-arrow-right-short"></i></button>
    </div>
  );
}