// components/LandingPage.tsx
import React from 'react';
import TrustSection from './TrustSection';
import AboutSection from './AboutSection';
import HowItWorksSection from './HowItWorksSection';
import WhyChooseUsSection from './WhyChooseUsSection';
import FAQsSection from './FAQsSection';
import CallToActionSection from './CallToActionSection';

const LandingPage: React.FC = () => {
  return (
    <main className="landing-page">
      <TrustSection />
      <AboutSection />
      <HowItWorksSection />
      <WhyChooseUsSection />
      <FAQsSection />
      <CallToActionSection />
    </main>
  );
};

export default LandingPage;
