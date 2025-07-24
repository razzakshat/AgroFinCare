import React from 'react';
// --- Utility Function ---
const classNames = (...classes) => {
    return classes.filter(Boolean).join(' ');
};


const Logo = ({ className }) => (
    <svg className={classNames("transition-colors duration-300", className)} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M50,95 C25.147,95 5,74.853 5,50 C5,25.147 25.147,5 50,5 C74.853,5 95,25.147 95,50 C95,74.853 74.853,95 50,95 Z" stroke="currentColor" strokeWidth="4"/>
        <path d="M50 75C50 75 50 25 70 45C70 45 50 65 50 75Z" fill="#22c55e" /> {/* AgroFin green */}
        <path d="M50 75C50 75 50 25 30 45C30 45 50 65 50 75Z" fill="#86efac" /> {/* Lighter green */}
    </svg>
);

// --- Simple Social Media Icons (SVGs) ---
const FacebookIcon = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M14 13.5h2.5l1-4H14v-2c0-1.5 0.5-2 2-2h1.5V2.14a26.11 26.11 0 0 0-3-.14c-3.5 0-5.5 2.22-5.5 6.16v3.49H6v4h2.5V22h5.5z"/></svg>
);

const TwitterIcon = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M22.46 6c-.85.38-1.76.64-2.72.76a4.54 4.54 0 0 0 2-2.64c-.95.56-2.01.97-3.13 1.18a4.52 4.52 0 0 0-7.73 4.12A12.87 12.87 0 0 1 3 4.29a4.52 4.52 0 0 0 1.4 6.04 4.47 4.47 0 0 1-2.05-.56v.06a4.53 4.53 0 0 0 3.63 4.44A4.5 4.5 0 0 1 8 15.5c-.24 0-.47 0-.69-.06a4.53 4.53 0 0 0 4.22 3.15A9.06 9.06 0 0 1 3 20c-1.3 0-2.55-.08-3.75-.24a12.87 12.87 0 0 0 19.64-10.87c.01-.2.01-.4.01-.6z"/></svg>
);

const LinkedInIcon = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.325-.028-3.044-1.852-3.044-1.853 0-2.136 1.445-2.136 2.95v5.663H9.153V9.281h3.413v1.56a3.744 3.744 0 0 1 3.369-1.852c3.629 0 4.294 2.686 4.294 6.572v6.071zM5.019 7.917a2.915 2.915 0 0 1-2.916-2.916c0-1.604 1.313-2.916 2.916-2.916s2.916 1.312 2.916 2.916c0 1.604-1.313 2.916-2.916 2.916zm1.781 12.535H3.238V9.281h3.562v11.171z"/></svg>
);

const InstagramIcon = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4c0 3.2-2.6 5.8-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8C2 4.6 4.6 2 7.8 2zm-.2 2A2.8 2.8 0 0 0 5 7.8v8.4a2.8 2.8 0 0 0 2.8 2.8h8.4a2.8 2.8 0 0 0 2.8-2.8V7.8a2.8 2.8 0 0 0-2.8-2.8H7.6zM12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm0 2a3 3 0 1 1 0 6 3 3 0 0 1 0-6zm6.5-3a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3z"/></svg>
);


// --- Footer Component ---
// Added onNavigate prop to change the page in App.jsx
function Footer({ onNavigate }) {
    return (
        <footer className="bg-gray-900 text-gray-300 py-12 px-4 md:px-10 font-sans">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">

                {/* Brand Info Section */}
                <div className="flex flex-col items-start space-y-4">
                    <div className="flex items-center gap-3 text-white">
                        <div className="w-12 h-12 text-green-500"> {/* Logo color for footer */}
                            <Logo className="w-full h-full object-contain" />
                        </div>
                        <span className="text-3xl font-bold">AgroFin<span className="text-green-500">Care</span></span>
                    </div>
                    <p className="text-sm leading-relaxed text-gray-400">
                        Empowering farmers with innovative financial solutions and sustainable agricultural practices.
                        Your growth is our mission.
                    </p>
                    <div className="flex space-x-4 mt-4">
                        <a href="#" aria-label="Facebook" className="text-gray-400 hover:text-green-500 transition-colors duration-200">
                            <FacebookIcon className="w-6 h-6" />
                        </a>
                        <a href="#" aria-label="Twitter" className="text-gray-400 hover:text-green-500 transition-colors duration-200">
                            <TwitterIcon className="w-6 h-6" />
                        </a>
                        <a href="https://www.linkedin.com/in/ishan-saxena-62781428b/" aria-label="LinkedIn" className="text-gray-400 hover:text-green-500 transition-colors duration-200">
                            <LinkedInIcon className="w-6 h-6" />
                        </a>
                        <a href="#" aria-label="Instagram" className="text-gray-400 hover:text-green-500 transition-colors duration-200">
                            <InstagramIcon className="w-6 h-6" />
                        </a>
                    </div>
                </div>

                {/* Navigation Links Section 1 */}
                <div>
                    <h3 className="text-lg font-semibold text-white mb-4">Company</h3>
                    <ul className="space-y-2">
                        <li>
                            {/* Changed Link to a and added onClick with onNavigate */}
                            <a
                                href="AboutUs" // Keep href for accessibility/fallback
                                onClick={() => onNavigate('about-us')} // Call onNavigate to change page
                                className="text-gray-400 hover:text-green-500 transition-colors duration-200 text-sm"
                            >
                                About Us
                            </a>
                        </li>
                        <li>
                            <a href="#careers" className="text-gray-400 hover:text-green-500 transition-colors duration-200 text-sm">
                                Careers
                            </a>
                        </li>
                        <li>
                            <a href="#press" className="text-gray-400 hover:text-green-500 transition-colors duration-200 text-sm">
                                Press & Media
                            </a>
                        </li>
                        <li>
                            <a href="#blog" className="text-gray-400 hover:text-green-500 transition-colors duration-200 text-sm">
                                Blog
                            </a>
                        </li>
                    </ul>
                </div>

                {/* Navigation Links Section 2 */}
                <div>
                    <h3 className="text-lg font-semibold text-white mb-4">Services</h3>
                    <ul className="space-y-2">
                        <li><a href="#loans" className="text-gray-400 hover:text-green-500 transition-colors duration-200 text-sm">Crop Loans</a></li>
                        <li><a href="#insurance" className="text-gray-400 hover:text-green-500 transition-colors duration-200 text-sm">Farm Insurance</a></li>
                        <li><a href="#advisory" className="text-gray-400 hover:text-green-500 transition-colors duration-200 text-sm">Advisory Services</a></li>
                        <li><a href="#market" className="text-gray-400 hover:text-green-500 transition-colors duration-200 text-sm">Market Access</a></li>
                    </ul>
                </div>

                {/* Contact Information Section */}
                <div>
                    <h3 className="text-lg font-semibold text-white mb-4">Contact</h3>
                    <ul className="space-y-2 text-sm">
                        <li className="flex items-center gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-green-500" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5S13.38 11.5 12 11.5z"/></svg>
                            <span className="text-gray-400">Block 6 Boys, VIT BHOPAL</span>
                        </li>
                        <li className="flex items-center gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-green-500" viewBox="0 0 24 24" fill="currentColor"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>
                            <a href="mailto:info@agrofincare.com" className="text-gray-400 hover:text-green-500 transition-colors duration-200">info@agrofincare.com</a>
                        </li>
                        <li className="flex items-center gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-green-500" viewBox="0 0 24 24" fill="currentColor"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.32.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02L6.62 10.79z"/></svg>
                            <a href="tel:+1234567890" className="text-gray-400 hover:text-green-500 transition-colors duration-200">+91 1234567890</a>
                        </li>
                    </ul>
                </div>
            </div>

            {/* Copyright Section */}
            <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm text-gray-500">
                &copy; {new Date().getFullYear()} AgroFinCare. All rights reserved.
            </div>
        </footer>
    );
}

export default Footer;
