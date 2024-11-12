// components/AboutSection.tsx
'use client'
import React from 'react';

const AboutSection: React.FC = () => {
  return (
    <section className="about-section py-5 bg-white text-center">
      <div className="container">
        <h2 className="display-5 fw-bold mb-4">Empowering Gold Commerce for Everyone</h2>
        <p className="lead mb-5">We are committed to making gold commerce secure, reliable, and transparent for everyone.</p>
        <div className="row">
          <div className="col-md-4">
            <h3 className="fw-bold">Our Mission</h3>
            <p>To create a trustworthy online marketplace for buying and selling gold with confidence.</p>
          </div>
          <div className="col-md-4">
            <h3 className="fw-bold">Our Vision</h3>
            <p>Enabling seamless gold commerce through an online platform designed for transparency and reliability.</p>
          </div>
          <div className="col-md-4">
            <h3 className="fw-bold">Our Values</h3>
            <p>Trust, transparency, and customer satisfaction guide everything we do.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
