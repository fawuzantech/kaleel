// components/WhyChooseUsSection.tsx
import React from 'react';

const WhyChooseUsSection: React.FC = () => {
  return (
    <section className="why-choose-us-section py-5 text-center bg-white">
      <div className="container">
        <h2 className="display-5 fw-bold mb-4">Why Choose Us for Gold Commerce?</h2>
        <div className="row">
          {[
            { title: "Verified Gold Sellers", text: "Trusted and certified sellers." },
            { title: "User-Friendly Interface", text: "Designed for easy navigation." },
            { title: "Market Insights", text: "Access to gold market data." },
            { title: "Community-Driven", text: "A community of passionate buyers and sellers." },
          ].map((item, index) => (
            <div className="col-md-3 mb-4" key={index}>
              <h5 className="fw-bold">{item.title}</h5>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
