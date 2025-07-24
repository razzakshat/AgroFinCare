import React from 'react';
import AboutUs from './pages/AboutUs';


// Utility: Merges class names
const classNames = (...classes) => classes.filter(Boolean).join(' ');

// Logo SVG component
const Logo = ({ className }) => (
  <svg
    className={classNames("transition-colors duration-300", className)}
    viewBox="0 0 100 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M50,95 C25.147,95 5,74.853 5,50 C5,25.147 25.147,5 50,5 C74.853,5 95,25.147 95,50 C95,74.853 74.853,95 50,95 Z"
      stroke="currentColor"
      strokeWidth="4"
    />
    <path
      d="M50 75C50 75 50 25 70 45C70 45 50 65 50 75Z"
      fill="#22c55e"
    />
    <path
      d="M50 75C50 75 50 25 30 45C30 45 50 65 50 75Z"
      fill="#86efac"
    />
  </svg>
);

// Social SVGs
const LinkedInIcon = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.325-.028-3.044-1.852-3.044-1.853 0-2.136 1.445-2.136 2.95v5.663H9.153V9.281h3.413v1.56a3.744 3.744 0 0 1 3.369-1.852c3.629 0 4.294 2.686 4.294 6.572v6.071zM5.019 7.917a2.915 2.915 0 0 1-2.916-2.916c0-1.604 1.313-2.916 2.916-2.916s2.916 1.312 2.916 2.916c0 1.604-1.313 2.916-2.916 2.916zm1.781 12.535H3.238V9.281h3.562v11.171z" />
  </svg>
);
const FacebookIcon = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
    <path d="M14 13.5h2.5l1-4H14v-2c0-1.5 0.5-2 2-2h1.5V2.14a26.11 26.11 0 0 0-3-.14c-3.5 0-5.5 2.22-5.5 6.16v3.49H6v4h2.5V22h5.5z" />
  </svg>
);
const TwitterIcon = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
    <path d="M22.46 6c-.85.38-1.76.64-2.72.76a4.54 4.54 0 0 0 2-2.64c-.95.56-2.01.97-3.13 1.18a4.52 4.52 0 0 0-7.73 4.12A12.87 12.87 0 0 1 3 4.29a4.52 4.52 0 0 0 1.4 6.04 4.47 4.47 0 0 1-2.05-.56v.06a4.53 4.53 0 0 0 3.63 4.44A4.5 4.5 0 0 1 8 15.5c-.24 0-.47 0-.69-.06a4.53 4.53 0 0 0 4.22 3.15A9.06 9.06 0 0 1 3 20c-1.3 0-2.55-.08-3.75-.24a12.87 12.87 0 0 0 19.64-10.87c.01-.2.01-.4.01-.6z" />
  </svg>
);
const InstagramIcon = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
    <path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4c0 3.2-2.6 5.8-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8C2 4.6 4.6 2 7.8 2zm-.2 2A2.8 2.8 0 0 0 5 7.8v8.4a2.8 2.8 0 0 0 2.8 2.8h8.4a2.8 2.8 0 0 0 2.8-2.8V7.8a2.8 2.8 0 0 0-2.8-2.8H7.6zM12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm0 2a3 3 0 1 1 0 6 3 3 0 0 1 0-6zm6.5-3a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3z" />
  </svg>
);

function AboutUs() {
  return (
    <div className="bg-white py-16 sm:py-24 font-sans">
      <div className="container mx-auto px-4 md:px-10">

        {/* Hero Section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="w-20 h-20 mx-auto mb-6 text-green-600">
            <Logo className="w-full h-full object-contain" />
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-4 leading-tight">
            About <span className="text-green-600">AgroFinCare</span>
          </h1>
          <p className="text-lg text-gray-700 leading-relaxed">
            At AgroFinCare, we are dedicated to revolutionizing the agricultural sector
            by providing innovative financial solutions and comprehensive support to farmers worldwide.
            Our mission is to foster sustainable growth, enhance productivity, and ensure prosperity for every farmer.
          </p>
        </div>

        {/* Vision/Mission Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
          <div className="order-2 md:order-1">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Vision</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We envision a future where every farmer, regardless of their scale or location,
              has access to the resources and knowledge needed to thrive. We believe in harnessing
              technology and financial innovation to build a resilient and prosperous agricultural ecosystem.
            </p>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Commitment</h2>
            <p className="text-gray-700 leading-relaxed">
              Our commitment extends beyond financial aid. We strive to build lasting relationships
              with our farmers, offering expert advisory services, market linkages, and continuous support
              to navigate challenges and seize opportunities in a dynamic agricultural landscape.
            </p>
          </div>
          <div className="order-1 md:order-2">
            <img
              src="https://placehold.co/600x400/86efac/22c55e?text=Our+Vision"
              alt="Our Vision"
              className="rounded-xl shadow-lg w-full h-auto object-cover"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = "https://placehold.co/600x400/86efac/22c55e?text=Image+Not+Found";
              }}
            />
          </div>
        </div>

        {/* Connect With Us Section */}
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Connect With Us</h2>
          <p className="text-gray-700 mb-8">
            We love connecting with our community! Follow us on social media to stay updated
            on our latest initiatives, farmer success stories, and agricultural insights.
          </p>
          <div className="flex justify-center space-x-6">
            <a
              href="https://www.linkedin.com/in/ishan-saxena-62781428b/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Ishan Saxena on LinkedIn"
              className="text-gray-600 hover:text-blue-700 transition-colors duration-200 transform hover:scale-110"
            >
              <LinkedInIcon className="w-10 h-10" />
            </a>
            <a
              href="https://facebook.com/agrofincare"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="AgroFinCare on Facebook"
              className="text-gray-600 hover:text-blue-600 transition-colors duration-200 transform hover:scale-110"
            >
              <FacebookIcon className="w-10 h-10" />
            </a>
            <a
              href="https://twitter.com/agrofincare"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="AgroFinCare on Twitter"
              className="text-gray-600 hover:text-blue-400 transition-colors duration-200 transform hover:scale-110"
            >
              <TwitterIcon className="w-10 h-10" />
            </a>
            <a
              href="https://instagram.com/agrofincare"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="AgroFinCare on Instagram"
              className="text-gray-600 hover:text-pink-600 transition-colors duration-200 transform hover:scale-110"
            >
              <InstagramIcon className="w-10 h-10" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
