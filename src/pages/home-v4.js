import React, { useState, useEffect } from 'react';

const Homev4 = () => {
  const banners = ['Banner 1: Welcome!', 'Banner 2: Explore', 'Banner 3: Contact Us'];
  const [activeBanner, setActiveBanner] = useState(0);

  // Automatically change banner every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveBanner((prevBanner) => (prevBanner + 1) % banners.length);
    }, 3000); // Change every 3 seconds

    return () => clearInterval(interval); // Clear the interval on component unmount
  }, [banners.length]);

  return (
    <section className='container matemasie-regular'>
      <div className='home-v4'>
        <button onClick={() => setActiveBanner((activeBanner - 1 + banners.length) % banners.length)}>Previous</button>
        <div className='banner-center'>
          {banners[activeBanner]}
        </div>
        <button onClick={() => setActiveBanner((activeBanner + 1) % banners.length)}>Next</button>
      </div>
      <div className='dots'>
        {banners.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === activeBanner ? 'active' : ''}`}
            onClick={() => setActiveBanner(index)}
          ></span>
        ))}
      </div>
    </section>
  );
};

export default Homev4;
