import React from 'react';

// Reusing the classNames utility from your other components
const classNames = (...classes) => {
    return classes.filter(Boolean).join(' ');
};

// Reusing the Logo component (assuming it's available or imported from a shared location)
const Logo = ({ className }) => (
    <svg className={classNames("transition-colors duration-300", className)} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M50,95 C25.147,95 5,74.853 5,50 C5,25.147 25.147,5 50,5 C74.853,5 95,25.147 95,50 C95,74.853 74.853,95 50,95 Z" stroke="currentColor" strokeWidth="4"/>
        <path d="M50 75C50 75 50 25 70 45C70 45 50 65 50 75Z" fill="#22c55e" /> {/* AgroFin green */}
        <path d="M50 75C50 75 50 25 30 45C30 45 50 65 50 75Z" fill="#86efac" /> {/* Lighter green */}
    </svg>
);

// Reusing ArrowRight icon for CTA button
const ArrowRight = ({ size = 18, className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
);

function Home({ onNavigate }) { // Accepts onNavigate prop for routing
    return (
        <div className="bg-white font-sans">
            {/* Hero Section */}
            <section className="relative bg-gradient-to-br from-green-50 to-white py-24 sm:py-32 overflow-hidden">
                {/* Background elements for visual interest */}
                <div className="absolute inset-0 z-0 opacity-20">
                    <img src="bg.webp" alt="Farm Background" className="w-full h-full object-cover" />
                </div>
                <div className="absolute inset-0 z-10 bg-gradient-to-t from-white via-transparent to-transparent"></div>

                <div className="container mx-auto px-4 md:px-10 relative z-20 text-center">
                    <div className="w-24 h-24 mx-auto mb-8 text-green-600 animate-bounce-slow">
                        <Logo className="w-full h-full object-contain" />
                    </div>
                    <h1 className="text-5xl sm:text-6xl font-extrabold text-gray-900 mb-6 leading-tight animate-fade-in-down">
                        Empowering Farmers, <span className="text-green-600">Cultivating Prosperity</span>
                    </h1>
                    <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-10 leading-relaxed animate-fade-in-up">
                        AgroFinCare provides intelligent AI solutions for smart agriculture, financial risk assessment,
                        and predictive crop health advisory, ensuring a brighter future for every farmer.
                    </p>
                    <div className="flex justify-center space-x-4 animate-fade-in-up delay-200">
                        <button
                            className={classNames(
                                "px-8 py-4 bg-green-600 text-white rounded-full text-lg font-bold",
                                "transition-all duration-300 shadow-lg hover:shadow-xl",
                                "transform hover:scale-105 hover:bg-green-700 flex items-center gap-2"
                            )}
                            type="button"
                            onClick={() => onNavigate('services')} // Navigate to services page
                        >
                            Explore Our Services <ArrowRight size={20} />
                        </button>
                        <button
                            className={classNames(
                                "px-8 py-4 bg-transparent border border-gray-400 text-gray-800 rounded-full text-lg font-bold",
                                "transition-all duration-300 hover:bg-gray-100",
                                "transform hover:scale-105"
                            )}
                            type="button"
                            onClick={() => onNavigate('about-us')} // Navigate to about us page
                        >
                            Learn More
                        </button>
                    </div>
                </div>
            </section>

            {/* Value Proposition/Highlights Section */}
            <section className="py-16 sm:py-24 bg-gray-50">
                <div className="container mx-auto px-4 md:px-10 text-center">
                    <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-12">
                        How We <span className="text-green-600">Make a Difference</span>
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                        <div className="p-6 bg-white rounded-xl shadow-md transform transition-transform duration-300 hover:scale-105 hover:shadow-lg animate-fade-in-up delay-300">
                            <div className="w-16 h-16 bg-green-100 text-green-700 rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path><path d="M12 18a4 4 0 100-8 4 4 0 000 8z"></path><path d="M12 14v-2"></path></svg>
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">Smart Crop Management</h3>
                            <p className="text-gray-600 text-sm">AI-driven insights for disease prediction and optimal fertilizer use.</p>
                        </div>
                        <div className="p-6 bg-white rounded-xl shadow-md transform transition-transform duration-300 hover:scale-105 hover:shadow-lg animate-fade-in-up delay-400">
                            <div className="w-16 h-16 bg-green-100 text-green-700 rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 00-5 5v11a2 2 0 002 2h4a2 2 0 002-2V7a5 5 0 00-5-5z"></path><path d="M10 9H2"></path><path d="M22 9H14"></path></svg>
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">Financial Empowerment</h3>
                            <p className="text-gray-600 text-sm">Access to loans, credit assessment, and micro-insurance for stability.</p>
                        </div>
                        <div className="p-6 bg-white rounded-xl shadow-md transform transition-transform duration-300 hover:scale-105 hover:shadow-lg animate-fade-in-up delay-500">
                            <div className="w-16 h-16 bg-green-100 text-green-700 rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"></path></svg>
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">24/7 Farmer Support</h3>
                            <p className="text-gray-600 text-sm">Multilingual AI chatbot for instant answers and policy summaries.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Impact/Testimonial Teaser (Optional) */}
            <section className="py-16 sm:py-24 bg-gradient-to-br from-green-700 to-green-900 text-white">
                <div className="container mx-auto px-4 md:px-10 text-center max-w-3xl">
                    <h2 className="text-3xl sm:text-4xl font-bold mb-6">Join a Community of Thriving Farmers</h2>
                    <p className="text-lg mb-8 opacity-90">
                        See how AgroFinCare has positively impacted lives and livelihoods across the agricultural landscape.
                    </p>
                    <button
                        className={classNames(
                            "px-8 py-3 bg-white text-green-800 rounded-full text-lg font-bold",
                            "transition-all duration-300 shadow-lg hover:shadow-xl",
                            "transform hover:scale-105 hover:bg-gray-100"
                        )}
                        type="button"
                        onClick={() => onNavigate('farmer-stories')} // Navigate to farmer stories
                    >
                        Read Our Farmer Stories
                    </button>
                </div>
            </section>
        </div>
    );
}

export default Home;
