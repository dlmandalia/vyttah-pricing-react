import React, { useState } from 'react';

interface Feature {
  name: string;
  basic: boolean;
  pro: boolean;
  enterprise: boolean;
  category: string;
}

const FeatureComparison: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  
  const features: Feature[] = [
    // Core Features
    { name: 'User accounts', basic: true, pro: true, enterprise: true, category: 'core' },
    { name: 'Basic reporting', basic: true, pro: true, enterprise: true, category: 'core' },
    { name: 'Customer management', basic: true, pro: true, enterprise: true, category: 'core' },
    { name: 'Inventory tracking', basic: true, pro: true, enterprise: true, category: 'core' },
    { name: 'Invoice generation', basic: true, pro: true, enterprise: true, category: 'core' },
    
    // Advanced Features
    { name: 'Advanced reporting', basic: false, pro: true, enterprise: true, category: 'advanced' },
    { name: 'Customizable dashboards', basic: false, pro: true, enterprise: true, category: 'advanced' },
    { name: 'API access', basic: false, pro: true, enterprise: true, category: 'advanced' },
    { name: 'Custom fields', basic: false, pro: true, enterprise: true, category: 'advanced' },
    { name: 'Workflow automation', basic: false, pro: false, enterprise: true, category: 'advanced' },
    
    // Support
    { name: 'Email support', basic: true, pro: true, enterprise: true, category: 'support' },
    { name: 'Priority support', basic: false, pro: true, enterprise: true, category: 'support' },
    { name: '24/7 phone support', basic: false, pro: false, enterprise: true, category: 'support' },
    { name: 'Dedicated account manager', basic: false, pro: false, enterprise: true, category: 'support' },
    { name: 'On-site training', basic: false, pro: false, enterprise: true, category: 'support' },
    
    // Integrations
    { name: 'Basic integrations', basic: true, pro: true, enterprise: true, category: 'integrations' },
    { name: 'Advanced integrations', basic: false, pro: true, enterprise: true, category: 'integrations' },
    { name: 'Custom integrations', basic: false, pro: false, enterprise: true, category: 'integrations' },
    { name: 'Third-party app connections', basic: false, pro: true, enterprise: true, category: 'integrations' },
  ];

  const filteredFeatures = activeCategory === 'all' 
    ? features 
    : features.filter(feature => feature.category === activeCategory);

  const categories = [
    { id: 'all', name: 'All Features' },
    { id: 'core', name: 'Core Features' },
    { id: 'advanced', name: 'Advanced Features' },
    { id: 'support', name: 'Support' },
    { id: 'integrations', name: 'Integrations' },
  ];

  return (
    <section className="mt-16 mb-16">
      <h2 className="text-2xl sm:text-3xl font-bold text-center mb-2 text-gray-900">
        Compare Features
      </h2>
      <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto">
        A detailed comparison of features available in each plan to help you choose the best option for your business needs.
      </p>

      {/* Category Tabs */}
      <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-8">
        {categories.map((category) => (
          <button
            key={category.id}
            className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
              activeCategory === category.id
                ? 'bg-blue-600 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
            onClick={() => setActiveCategory(category.id)}
          >
            {category.name}
          </button>
        ))}
      </div>

      {/* Feature Table */}
      <div className="overflow-x-auto">
        <table className="comparison-table w-full">
          <thead>
            <tr className="bg-gray-50">
              <th className="font-medium text-left pl-4 py-4 w-64">Feature</th>
              <th className="font-medium text-center py-4">Basic</th>
              <th className="font-medium text-center py-4">Professional</th>
              <th className="font-medium text-center py-4">Enterprise</th>
            </tr>
          </thead>
          <tbody>
            {filteredFeatures.map((feature, index) => (
              <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                <td className="pl-4 py-4 text-gray-800">{feature.name}</td>
                <td className="text-center py-4">
                  {feature.basic ? (
                    <svg className="w-6 h-6 mx-auto text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  ) : (
                    <svg className="w-6 h-6 mx-auto text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                    </svg>
                  )}
                </td>
                <td className="text-center py-4">
                  {feature.pro ? (
                    <svg className="w-6 h-6 mx-auto text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  ) : (
                    <svg className="w-6 h-6 mx-auto text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                    </svg>
                  )}
                </td>
                <td className="text-center py-4">
                  {feature.enterprise ? (
                    <svg className="w-6 h-6 mx-auto text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  ) : (
                    <svg className="w-6 h-6 mx-auto text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                    </svg>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default FeatureComparison;