// components/TrustSection.tsx
import React from 'react';

const TrustSection: React.FC = () => {
  return (
    <section className="trust-section py-5 text-center bg-light">
      <div className="container">
        <h2 className="display-5 fw-bold mb-4">Buy and Sell Gold with Confidence</h2>
        <p className="lead mb-5">We ensure quality, security, and transparency for every transaction.</p>
        <div className="row">
          {[
            { title: "Authenticity Guaranteed", text: "Every product is verified to ensure authenticity." },
            { title: "Certified Sellers", text: "Work only with trusted, vetted sellers." },
            { title: "Secure Transactions", text: "Industry-standard security protocols." },
            { title: "Transparent Pricing", text: "Up-to-date pricing, no hidden fees." },
            { title: "Customer Support", text: "Assistance available at every step." },
          ].map((item, index) => (
            <div className="col-md-4 mb-4" key={index}>
              <h5 className="fw-bold">{item.title}</h5>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
