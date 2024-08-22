import React, { useState, useEffect } from 'react';

const Homev5 = () => {
  const banners = [
    { text: 'Banner 1: Welcome!', imageUrl: '/homev5/1.jpeg' },
    { text: 'Banner 2: Explore', imageUrl: '/homev5/2.jpeg' },
    { text: 'Banner 3: Contact Us', imageUrl: '/homev5/3.jpeg' },
  ];
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
      <div className='home-v5'>
        <button onClick={() => setActiveBanner((activeBanner - 1 + banners.length) % banners.length)}>Previous</button>
        <div
          className='banner-center'
          style={{ backgroundImage: `url(${banners[activeBanner].imageUrl})` }}
        >
          {banners[activeBanner].text}
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

export default Homev5;
