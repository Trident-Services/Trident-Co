import React, { useState, useEffect } from 'react';
import { FaChevronLeft, FaChevronRight, FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';
import './TestimonialsSections.css'

const testimonials = [
  {
    quote: "TridentCo transformed our digital infrastructure, delivering a solution that exceeded our expectations. Their team's expertise and professionalism were evident throughout the project.",
    author: "Sarah Johnson",
    role: "CTO, TechForward Inc.",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg"
  },
  {
    quote: "The analytics platform developed by TridentCo has given us unprecedented insights into our operations. We've seen a 35% improvement in decision-making speed since implementation.",
    author: "Michael Chen",
    role: "Director of Operations, Global Retail",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg"
  },
  {
    quote: "Working with TridentCo was a game-changer for our e-commerce platform. Their innovative approach solved complex challenges we'd struggled with for years.",
    author: "David Rodriguez",
    role: "CEO, UrbanStyle",
    avatar: "https://randomuser.me/api/portraits/men/75.jpg"
  }
];

const TestimonialsSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="testimonials-section">
      <div className="container">
        <div className="section-header" data-aos="fade-up">
          <p className="section-subtitle">Client Success Stories</p>
          <h2>What Our Clients Say</h2>
          <p className="section-description">Don't just take our word for it - hear from businesses we've transformed.</p>
        </div>
        
        <div className="testimonial-slider">
          <div 
            className="testimonial-track" 
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {testimonials.map((testimonial, index) => (
              <div className="testimonial-card" key={index}>
                <div className="quote">
                  <FaQuoteLeft className="quote-icon quote-start" />
                  {testimonial.quote}
                  <FaQuoteRight className="quote-icon quote-end" />
                </div>
                <div className="testimonial-author">
                  <img src={testimonial.avatar} alt={testimonial.author} className="author-avatar" />
                  <div className="author-info">
                    <h4>{testimonial.author}</h4>
                    <p>{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="slider-controls">
          <button className="slider-prev" onClick={prevSlide}><FaChevronLeft /></button>
          <div className="slider-dots">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`slider-dot ${index === currentSlide ? 'active' : ''}`}
                onClick={() => goToSlide(index)}
              />
            ))}
          </div>
          <button className="slider-next" onClick={nextSlide}><FaChevronRight /></button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;