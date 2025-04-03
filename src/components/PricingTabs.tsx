import React from 'react';

interface PricingTabsProps {
  activeTab: 'monthly' | 'onetime';
  onTabChange: (tab: 'monthly' | 'onetime') => void;
}

const PricingTabs: React.FC<PricingTabsProps> = ({ activeTab, onTabChange }) => {
  return (
    <div className="flex justify-center mb-8 sm:mb-12">
      <div className="bg-gray-100 p-1 rounded-lg inline-flex">
        <button
          className={`${
            activeTab === 'monthly'
              ? 'bg-white text-blue-600 shadow-sm'
              : 'bg-transparent text-gray-600 hover:text-gray-900'
          } px-4 sm:px-6 py-2 sm:py-3 rounded-md font-medium text-sm sm:text-base transition-all duration-200`}
          onClick={() => onTabChange('monthly')}
        >
          Monthly Billing
        </button>
        <button
          className={`${
            activeTab === 'onetime'
              ? 'bg-white text-blue-600 shadow-sm'
              : 'bg-transparent text-gray-600 hover:text-gray-900'
          } px-4 sm:px-6 py-2 sm:py-3 rounded-md font-medium text-sm sm:text-base transition-all duration-200`}
          onClick={() => onTabChange('onetime')}
        >
          One-time Purchase
        </button>
      </div>
    </div>
  );
};

export default PricingTabs;