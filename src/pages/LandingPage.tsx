import React from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import FeatureSection from '../components/FeatureSection';
import HowItWorksSection from '../components/HowItWorksSection';
import CtaSection from '../components/CtaSection';
import Footer from '../components/Footer';

const LandingPage: React.FC = () => {
  return (
    <div className="bg-background-light dark:bg-background-dark font-display text-white antialiased">
      <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden group/design-root">
        <div className="layout-container flex h-full grow flex-col">
          <div className="flex flex-1 justify-center py-5">
            <div className="layout-content-container flex w-full max-w-5xl flex-col px-4">
              <Header />
              <HeroSection />
              <FeatureSection />
              <HowItWorksSection />
              <CtaSection />
              <Footer />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
