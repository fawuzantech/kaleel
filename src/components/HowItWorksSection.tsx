// components/HowItWorksSection.tsx
import React from 'react';

const HowItWorksSection: React.FC = () => {
  return (
    <section className="how-it-works-section py-5 text-center bg-light">
      <div className="container">
        <h2 className="display-5 fw-bold mb-4">Seamless Buying and Selling Experience</h2>
        <ol className="list-group list-group-numbered">
          {[
            { title: "Create an Account", text: "Sign up quickly and easily." },
            { title: "List or Browse Products", text: "Sellers can list products, and buyers can browse and filter." },
            { title: "Secure Transactions", text: "Safe, secure transactions through our platform." },
            { title: "Delivery Assurance", text: "Track your product from shipment to delivery." },
          ].map((step, index) => (
            <li className="list-group-item border-0" key={index}>
              <h5 className="fw-bold">{step.title}</h5>
              <p>{step.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default HowItWorksSection;
