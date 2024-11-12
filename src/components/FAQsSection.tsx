// components/FAQsSection.tsx
'use client'
import React from 'react';

const FAQsSection: React.FC = () => {
  return (
    <section className="faqs-section py-5 text-center bg-white">
      <div className="container">
        <h2 className="display-5 fw-bold mb-4">Frequently Asked Questions</h2>
        <div className="accordion" id="faqsAccordion">
          {[
            { question: "How do I know the gold is authentic?", answer: "We only work with certified sellers who meet our quality standards." },
            { question: "What payment methods are accepted?", answer: "We accept major credit cards, bank transfers, and secure online payments." },
            { question: "How is shipping handled?", answer: "Sellers handle shipping, and we provide tracking details." },
            { question: "Can I return a product?", answer: "Yes, we have a return policy for products that don’t meet the listed specifications." },
          ].map((faq, index) => (
            <div className="accordion-item" key={index}>
              <h2 className="accordion-header" id={`heading${index}`}>
                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target={`#collapse${index}`} aria-expanded="true" aria-controls={`collapse${index}`}>
                  {faq.question}
                </button>
              </h2>
              <div id={`collapse${index}`} className="accordion-collapse collapse" aria-labelledby={`heading${index}`} data-bs-parent="#faqsAccordion">
                <div className="accordion-body">{faq.answer}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQsSection;
