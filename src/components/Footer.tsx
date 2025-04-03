import React from 'react';

interface FooterProps {
  year: number;
}

const Footer: React.FC<FooterProps> = ({ year }) => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Information */}
          <div className="md:col-span-1">
            <div className="flex items-center mb-4">
              <span className="text-blue-400 font-bold text-xl">Vyttah</span>
              <span className="text-gray-300 font-light text-lg ml-1">ERP</span>
            </div>
            <p className="text-gray-400 mb-4">
              Streamlining business operations with integrated management solutions.
            </p>
            <div className="flex space-x-4">
              <a href="#twitter" className="text-gray-400 hover:text-white transition-colors">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              <a href="#linkedin" className="text-gray-400 hover:text-white transition-colors">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
              <a href="#facebook" className="text-gray-400 hover:text-white transition-colors">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22 12c0-5.523-4.477-10-10-10s-10 4.477-10 10c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54v-2.891h2.54v-2.203c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562v1.875h2.773l-.443 2.891h-2.33v6.988c4.781-.75 8.437-4.887 8.437-9.878z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h3 className="text-gray-200 font-semibold text-lg mb-4">Product</h3>
            <ul className="space-y-2">
              <li><a href="#features" className="text-gray-400 hover:text-white footer-link">Features</a></li>
              <li><a href="#pricing" className="text-gray-400 hover:text-white footer-link">Pricing</a></li>
              <li><a href="#demo" className="text-gray-400 hover:text-white footer-link">Request Demo</a></li>
              <li><a href="#customers" className="text-gray-400 hover:text-white footer-link">Customers</a></li>
              <li><a href="#roadmap" className="text-gray-400 hover:text-white footer-link">Roadmap</a></li>
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-gray-200 font-semibold text-lg mb-4">Company</h3>
            <ul className="space-y-2">
              <li><a href="#about" className="text-gray-400 hover:text-white footer-link">About Us</a></li>
              <li><a href="#careers" className="text-gray-400 hover:text-white footer-link">Careers</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-white footer-link">Contact</a></li>
              <li><a href="#blog" className="text-gray-400 hover:text-white footer-link">Blog</a></li>
              <li><a href="#press" className="text-gray-400 hover:text-white footer-link">Press</a></li>
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h3 className="text-gray-200 font-semibold text-lg mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><a href="#docs" className="text-gray-400 hover:text-white footer-link">Documentation</a></li>
              <li><a href="#help" className="text-gray-400 hover:text-white footer-link">Help Center</a></li>
              <li><a href="#api" className="text-gray-400 hover:text-white footer-link">API</a></li>
              <li><a href="#community" className="text-gray-400 hover:text-white footer-link">Community</a></li>
              <li><a href="#partners" className="text-gray-400 hover:text-white footer-link">Partners</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom section */}
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-500 text-sm mb-4 md:mb-0">
            &copy; {year} Vyttah ERP. All rights reserved.
          </div>
          <div className="flex space-x-6">
            <a href="#terms" className="text-gray-500 hover:text-gray-300 text-sm">Terms</a>
            <a href="#privacy" className="text-gray-500 hover:text-gray-300 text-sm">Privacy</a>
            <a href="#cookies" className="text-gray-500 hover:text-gray-300 text-sm">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;