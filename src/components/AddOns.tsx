import React from 'react';

interface AddOnItem {
  id: string;
  name: string;
  description: string;
  price: string;
  icon: JSX.Element;
}

const AddOns: React.FC = () => {
  const addOns: AddOnItem[] = [
    {
      id: 'training',
      name: 'User Training',
      description: 'Comprehensive training sessions for your team to get the most out of the platform.',
      price: 'From $199',
      icon: (
        <svg className="w-8 h-8 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
        </svg>
      ),
    },
    {
      id: 'customization',
      name: 'Custom Development',
      description: 'Tailor the platform to your specific business needs with custom features and integrations.',
      price: 'Custom Quote',
      icon: (
        <svg className="w-8 h-8 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
        </svg>
      ),
    },
    {
      id: 'migration',
      name: 'Data Migration',
      description: 'Expert assistance to migrate your existing data from other systems seamlessly.',
      price: 'From $499',
      icon: (
        <svg className="w-8 h-8 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"></path>
        </svg>
      ),
    },
    {
      id: 'consulting',
      name: 'Business Consulting',
      description: 'Strategic guidance on optimizing your business processes with our ERP solution.',
      price: 'From $999',
      icon: (
        <svg className="w-8 h-8 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
        </svg>
      ),
    },
  ];

  return (
    <section className="mb-16">
      <h2 className="text-2xl sm:text-3xl font-bold text-center mb-2 text-gray-900">
        Additional Services
      </h2>
      <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto">
        Enhance your experience with our optional add-ons and services tailored to your business needs.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {addOns.map((addon) => (
          <div
            key={addon.id}
            className="border border-gray-200 rounded-lg overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow duration-300"
          >
            <div className="p-6">
              <div className="mb-4">{addon.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">{addon.name}</h3>
              <p className="text-gray-600 mb-4">{addon.description}</p>
              <div className="flex justify-between items-center">
                <span className="text-blue-600 font-medium">{addon.price}</span>
                <a
                  href="#contact"
                  className="text-blue-600 hover:text-blue-800 font-medium flex items-center"
                >
                  Learn more
                  <svg
                    className="w-4 h-4 ml-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 5l7 7-7 7"
                    ></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-8">
        <a
          href="#custom-quote"
          className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
        >
          Need a custom solution? Get a personalized quote
          <svg
            className="w-4 h-4 ml-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            ></path>
          </svg>
        </a>
      </div>
    </section>
  );
};

export default AddOns;