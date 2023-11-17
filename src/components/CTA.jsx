import React from 'react';
import CV from '../assets/cv.pdf';

const CTA = () => {
  return (
    <div className="cta">
      <a href={CV} download className="btn">
        Download CV
      </a>
      <br />
      <br />
    </div>
  );
};

export default CTA;