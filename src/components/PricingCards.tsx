import React from 'react';

interface PricingPlan {
  id: string;
  name: string;
  description: string;
  monthlyPrice: number;
  onetimePrice: number;
  features: string[];
  isPopular?: boolean;
}

interface PricingCardsProps {
  activeTab: 'monthly' | 'onetime';
}

const PricingCards: React.FC<PricingCardsProps> = ({ activeTab }) => {
  const pricingPlans: PricingPlan[] = [
    {
      id: 'basic',
      name: 'Basic',
      description: 'Essential features for small businesses',
      monthlyPrice: 49,
      onetimePrice: 499,
      features: [
        'Up to 5 users',
        'Basic reporting',
        'Inventory management',
        'Customer management',
        'Email support',
      ],
    },
    {
      id: 'pro',
      name: 'Professional',
      description: 'Advanced features for growing businesses',
      monthlyPrice: 99,
      onetimePrice: 999,
      features: [
        'Up to 15 users',
        'Advanced reporting',
        'Inventory management',
        'Customer management',
        'Priority email support',
        'API access',
        'Custom fields',
      ],
      isPopular: true,
    },
    {
      id: 'enterprise',
      name: 'Enterprise',
      description: 'Complete solution for established businesses',
      monthlyPrice: 199,
      onetimePrice: 1999,
      features: [
        'Unlimited users',
        'Advanced reporting',
        'Inventory management',
        'Customer management',
        '24/7 phone support',
        'API access',
        'Custom fields',
        'Custom integrations',
        'Dedicated account manager',
      ],
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
      {pricingPlans.map((plan) => (
        <div
          key={plan.id}
          className={`pricing-card rounded-xl overflow-hidden border ${
            plan.isPopular ? 'border-blue-400 shadow-lg' : 'border-gray-200'
          } bg-white transition-all duration-300`}
        >
          {plan.isPopular && (
            <div className="bg-blue-600 text-white text-center py-2 font-medium text-sm">
              Most Popular
            </div>
          )}
          <div className="p-6 sm:p-8">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
            <p className="text-gray-600 mb-6">{plan.description}</p>
            <div className="mb-6">
              <div className="flex items-baseline">
                <span className="text-3xl sm:text-4xl font-bold text-gray-900">
                  ${activeTab === 'monthly' ? plan.monthlyPrice : plan.onetimePrice}
                </span>
                {activeTab === 'monthly' && (
                  <span className="text-gray-600 ml-2">/month</span>
                )}
              </div>
              {activeTab === 'monthly' && (
                <p className="text-sm text-gray-500 mt-1">Billed monthly</p>
              )}
            </div>
            <a
              href="#contact"
              className={`block text-center py-3 px-6 rounded-lg font-medium transition-all duration-200 ${
                plan.isPopular
                  ? 'bg-blue-600 hover:bg-blue-700 text-white shadow-md'
                  : 'bg-gray-100 hover:bg-gray-200 text-gray-800'
              }`}
            >
              Get Started
            </a>
          </div>
          <div className="bg-gray-50 p-6 sm:p-8">
            <h4 className="font-medium text-gray-900 mb-4">Features included:</h4>
            <ul className="space-y-3">
              {plan.features.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <svg
                    className="h-5 w-5 text-green-500 mr-2 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                  <span className="text-gray-700">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PricingCards;