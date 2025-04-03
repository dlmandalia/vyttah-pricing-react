import React, { useState } from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqItems: FAQItem[] = [
    {
      question: 'How do I choose the right plan for my business?',
      answer: 'Consider the size of your business, the number of users who need access, and the features that are most important for your operations. Our Basic plan is suitable for small businesses just starting out, while the Professional plan offers more advanced features for growing businesses. The Enterprise plan is designed for larger organizations with complex needs. If you need help deciding, contact our sales team for a personalized recommendation.',
    },
    {
      question: 'Can I upgrade or downgrade my plan later?',
      answer: 'Yes, you can upgrade or downgrade your plan at any time. When upgrading, the new features will be available immediately, and you will be charged the prorated difference for the remainder of your billing cycle. When downgrading, the changes will take effect at the start of your next billing cycle.',
    },
    {
      question: 'Do you offer a free trial?',
      answer: 'Yes, we offer a 14-day free trial of our Professional plan with no credit card required. This allows you to explore all the features and determine if our solution meets your business needs before making a commitment.',
    },
    {
      question: 'What happens when my trial ends?',
      answer: 'At the end of your trial period, you can choose to subscribe to any of our plans to continue using the service. If you don\'t subscribe, your account will be automatically downgraded to a limited version with basic functionality. Your data will be preserved for 30 days, giving you time to decide.',
    },
    {
      question: 'How secure is my business data?',
      answer: 'We take security very seriously. All data is encrypted both in transit and at rest using industry-standard encryption protocols. We implement multiple layers of security measures, including regular security audits, vulnerability assessments, and follow best practices for data protection. Our servers are hosted in SOC 2 compliant data centers with 24/7 physical security.',
    },
    {
      question: 'Can I import data from other systems?',
      answer: 'Yes, we provide tools to import data from CSV files and direct integrations with popular business software. For complex migrations from other ERP systems, our Professional and Enterprise plans include assistance from our technical team to ensure a smooth transition.',
    },
    {
      question: 'Is there a limit on the number of customers or transactions?',
      answer: 'Our Basic plan includes limits on the number of customers and monthly transactions. The Professional and Enterprise plans offer higher or unlimited capacity. If you anticipate exceeding these limits, we recommend starting with a higher-tier plan or contacting our sales team to discuss custom options.',
    },
    {
      question: 'What kind of support is included?',
      answer: 'All plans include email support with varying response times. The Professional plan includes priority email support with faster response times. The Enterprise plan adds 24/7 phone support and a dedicated account manager who will be your point of contact for any issues or questions.',
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="mb-16">
      <h2 className="text-2xl sm:text-3xl font-bold text-center mb-2 text-gray-900">
        Frequently Asked Questions
      </h2>
      <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto">
        Find answers to common questions about our pricing, features, and services.
      </p>

      <div className="max-w-3xl mx-auto">
        {faqItems.map((item, index) => (
          <div key={index} className="faq-item border-t border-gray-200">
            <div
              className="faq-question flex justify-between items-center py-4 cursor-pointer"
              onClick={() => toggleFAQ(index)}
            >
              <h3 className="text-lg font-medium text-gray-900">{item.question}</h3>
              <svg
                className={`w-5 h-5 text-gray-500 transform transition-transform ${
                  openIndex === index ? 'rotate-180' : ''
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                ></path>
              </svg>
            </div>
            <div
              className={`faq-answer overflow-hidden transition-all duration-300 ${
                openIndex === index ? 'max-h-96' : 'max-h-0'
              }`}
            >
              <p className="pb-4 text-gray-600">{item.answer}</p>
            </div>
          </div>
        ))}
        <div className="border-t border-gray-200 pt-6 mt-6 text-center">
          <p className="text-gray-600">
            Still have questions?{' '}
            <a href="#contact" className="text-blue-600 font-medium hover:text-blue-800">
              Contact our support team
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default FAQ;