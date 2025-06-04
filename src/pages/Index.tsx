
import React from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import ProblemSection from '../components/ProblemSection';
import SolutionSection from '../components/SolutionSection';
import FeaturesSection from '../components/FeaturesSection';
import StatsSection from '../components/StatsSection';
import DownloadAppsSection from '../components/DownloadAppsSection';
import CTASection from '../components/CTASection';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-white text-gray-900 overflow-x-hidden">
      <Navbar />
      <div className="pt-20">
        <HeroSection />
        <ProblemSection />
        <SolutionSection />
        <FeaturesSection />
        <StatsSection />
        <DownloadAppsSection />
        <CTASection />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
