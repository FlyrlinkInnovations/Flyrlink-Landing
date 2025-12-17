
import React from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import ProblemSection from '@/components/ProblemSection';
import HowFlyrLinkHelps from '@/components/HowFlyrLinkHelps';
import SolutionSection from '@/components/SolutionSection';
import CategoriesSection from '@/components/CategoriesSection';
import FeedFeatures from '@/components/FeedFeatures';
import EventsSection from '@/components/EventsSection';
import FeaturesSection from '@/components/FeaturesSection';
import DownloadAppsSection from '@/components/DownloadAppsSection';
import Footer from '@/components/Footer';
import { SEO } from '@/components/SEO';

const HomePage = () => {
  return (
    <>
      <SEO />
      <div className="min-h-screen bg-white text-gray-900 overflow-x-hidden">
        <Navbar />
        <div className="pt-20">
          <HeroSection />
          <ProblemSection />
          <HowFlyrLinkHelps />
          <SolutionSection />
          <CategoriesSection />
          <FeedFeatures />
          <EventsSection />
          <FeaturesSection />
          <DownloadAppsSection />
          <Footer />
        </div>
      </div>
    </>
  );
};

export default HomePage;
