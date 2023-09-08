import React from 'react';
import Lottie from 'react-lottie';
import animationData from '../website-building-of-shopping-sale.json'; // Replace with your animation JSON file
import React, { useState } from 'react';
const ComingSoon = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
  };

  return (
    <div className="coming-soon">
      <Lottie options={defaultOptions} height={400} width={400} />
      <h1>Coming Soon!</h1>
      <p>Stay tuned for our exciting new website.</p>
    </div>
  );
};

export default ComingSoon;