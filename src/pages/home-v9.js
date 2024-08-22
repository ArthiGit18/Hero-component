import React, { useState, useEffect } from 'react';

const Homev9 = () => {
  const slides = [
    { backgroundColor: 'yellow', text: 'Slide 1' },
    { backgroundColor: 'red', text: 'Slide 2' },
    { backgroundColor: 'blue', text: 'Slide 3' },
  ];
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className='container'>
      <div className='home-v9_main'>
        <div className='home-v9' style={{ backgroundColor: slides[activeSlide].backgroundColor }}>
          <button className='pre_btn' onClick={() => setActiveSlide((activeSlide - 1 + slides.length) % slides.length)}>
            Previous
          </button>
          <p>{slides[activeSlide].text}</p>
          <button className='nxt_btn' onClick={() => setActiveSlide((activeSlide + 1) % slides.length)}>Next</button>
        </div>
        <div className='home-v9_list'>
          hello----
        </div>
      </div>
    </div>
  );
};

export default Homev9;
