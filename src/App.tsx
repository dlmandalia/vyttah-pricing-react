import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import PricingTabs from './components/PricingTabs';
import PricingCards from './components/PricingCards';
import FeatureComparison from './components/FeatureComparison';
import AddOns from './components/AddOns';
import GuidanceSection from './components/GuidanceSection';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

function App() {
  const [activeTab, setActiveTab] = useState<'monthly' | 'onetime'>('monthly');

  const handleTabChange = (tab: 'monthly' | 'onetime') => {
    setActiveTab(tab);
  };

  // Set footer year
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  useEffect(() => {
    // Any initialization code can go here
  }, []);

  return (
    <div className="antialiased">
      <Header />
      
      <main className="container mx-auto px-4 py-8 sm:py-12">
        <PricingTabs activeTab={activeTab} onTabChange={handleTabChange} />
        
        <div id="pricing-sections">
          <PricingCards activeTab={activeTab} />
        </div>

        <FeatureComparison />
        
        <AddOns />
        
        <GuidanceSection />
        
        <FAQ />

        <section className="text-center py-12 md:py-16 mt-12">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-900">Ready to Get Started?</h2>
          <p className="text-base sm:text-lg text-gray-600 mb-8 max-w-lg mx-auto">
            Contact us for a personalized demo or quote based on your specific requirements.
          </p>
          <a 
            href="#contact" 
            className="bg-blue-600 text-white font-medium py-3 px-6 sm:px-8 rounded-lg shadow-sm hover:bg-blue-700 transition duration-300 text-base sm:text-lg"
          >
            Contact Sales
          </a>
        </section>
      </main>

      <Footer year={currentYear} />
    </div>
  );
}

export default App;