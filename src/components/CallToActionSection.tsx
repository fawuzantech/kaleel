// components/CallToActionSection.tsx
'use client'
import React from 'react';

const CallToActionSection: React.FC = () => {
  return (
    <section className="cta-section py-5 text-center bg-primary text-white">
      <div className="container">
        <h2 className="display-5 fw-bold mb-4">Join Us Today and Start Trading Gold with Confidence</h2>
        <p className="lead mb-5">Experience the best gold commerce platform with top security and transparent transactions. Sign up now and be part of our growing community.</p>
        <div className="d-flex justify-content-center">
          <a href="/register" className="btn btn-light btn-lg me-3">Get Started</a>
          <a href="/learn-more" className="btn btn-outline-light btn-lg">Learn More</a>
        </div>
      </div>
    </section>
  );
};

export default CallToActionSection;
