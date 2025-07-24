import React from 'react';

// Reusing the classNames utility from your other components
const classNames = (...classes) => {
    return classes.filter(Boolean).join(' ');
};

// --- Service Icons (Simple SVGs) ---
// You can replace these with more detailed icons or an icon library if preferred.
const CropHealthIcon = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
        <path d="M12 18a4 4 0 100-8 4 4 0 000 8z"></path>
        <path d="M12 14v-2"></path>
    </svg>
);

const ChatbotIcon = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"></path>
    </svg>
);

const FinanceIcon = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 2h-3a5 5 0 00-5 5v11a2 2 0 002 2h4a2 2 0 002-2V7a5 5 0 00-5-5z"></path>
        <path d="M10 9H2"></path>
        <path d="M22 9H14"></path>
    </svg>
);

const MarketIcon = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 3v18h18"></path>
        <path d="M18.7 8.3L12 15l-3.3-3.3L3 18"></path>
    </svg>
);

const InsuranceIcon = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
        <path d="M12 12a3 3 0 100-6 3 3 0 000 6z"></path>
        <path d="M12 12v6"></path>
    </svg>
);

const AdvisoryIcon = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 20h9"></path>
        <path d="M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4L16.5 3.5z"></path>
    </svg>
);


// --- OurServices Component ---
function OurServices() {
    const services = [
        {
            id: 1,
            title: "Crop Health & Fertilizer Advisory",
            description: "Keep your crops healthy with our AI-powered system. Accurately detect leaf diseases and get customized fertilizer recommendations for your soil and weather.",
            icon: CropHealthIcon,
        },
        {
            id: 2,
            title: "Farmer Assistant Chatbot",
            description: "Get instant answers from our intelligent chatbot. From crop issues to government policies, our NLP-based assistant is here to answer all your agriculture-related queries.",
            icon: ChatbotIcon,
        },
        {
            id: 3,
            title: "Financial Risk Assessment",
            description: "Make informed decisions with our financial assessment tool. Predict your loan repayment likelihood and credit score, helping you plan your finances better.",
            icon: FinanceIcon,
        },
        {
            id: 4,
            title: "Micro-Insurance Recommendations",
            description: "Protect your crops and income from unforeseen events. We recommend micro-insurance plans tailored to your specific needs, securing your future.",
            icon: InsuranceIcon,
        },
        {
            id: 5,
            title: "Market Access & Linkages",
            description: "Eliminate middlemen and get the best prices for your produce. AgroFinCare connects you directly to buyers and markets, increasing your earnings.",
            icon: MarketIcon,
        },
        {
            id: 6,
            title: "Expert Agricultural Advisory",
            description: "Get personalized advice from experienced agricultural experts. Receive guidance on crop selection, soil management, and modern farming techniques to maximize your productivity.",
            icon: AdvisoryIcon,
        },
    ];

    return (
        <div className="bg-white py-16 sm:py-24 font-sans">
            <div className="container mx-auto px-4 md:px-10">
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-4 leading-tight">
                        Our <span className="text-green-600">Services</span>
                    </h1>
                    <p className="text-lg text-gray-700 leading-relaxed">
                        At AgroFinCare, we offer a comprehensive suite of services designed to empower farmers.
                        Here's how we support your agricultural journey:
                    </p>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <div
                            key={service.id}
                            className={classNames(
                                "bg-gradient-to-br from-white to-green-50 rounded-xl",
                                "shadow-lg hover:shadow-2xl", // Stronger shadow on hover
                                "p-6 flex flex-col items-center text-center",
                                "transform transition-all duration-300 hover:-translate-y-2", // Lift effect on hover
                                "border border-transparent hover:border-green-400", // Border highlight on hover
                                "animate-fade-in-up" // Add animation class (requires Tailwind config)
                            )}
                            style={{ animationDelay: `${index * 0.1}s` }} // Staggered animation
                        >
                            <div className="w-20 h-20 bg-green-100 text-green-700 rounded-full flex items-center justify-center mb-6 shadow-md"> {/* Larger icon circle */}
                                <service.icon className="w-10 h-10" /> {/* Icon size within circle */}
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-3 leading-snug">{service.title}</h3> {/* Larger title */}
                            <p className="text-gray-700 leading-relaxed text-base">{service.description}</p> {/* Slightly larger description */}
                        </div>
                    ))}
                </div>

                {/* Call to Action */}
                <div className="text-center mt-20 max-w-4xl mx-auto p-10 bg-gradient-to-r from-green-600 to-green-800 rounded-xl shadow-2xl text-white"> {/* Stronger gradient, larger padding, stronger shadow */}
                    <h2 className="text-3xl sm:text-4xl font-extrabold mb-4 leading-tight">Want to know more?</h2>
                    <p className="text-lg mb-8 opacity-90">
                        Contact us today to learn more about our comprehensive services or to discuss your specific agricultural and financial needs.
                    </p>
                    <button
                        className={classNames(
                            "px-10 py-4 bg-white text-green-800 rounded-full text-xl font-bold", // White button, green text
                            "transition-all duration-300",
                            "shadow-xl hover:shadow-2xl", // Stronger shadow
                            "transform hover:scale-105 hover:bg-gray-100", // Subtle lift and color change on hover
                            "ring-2 ring-white ring-opacity-50 hover:ring-opacity-75" // Ring effect
                        )}
                        type="button"
                        onClick={() => alert('Contact us functionality goes here!')} // Replace with actual navigation to contact page
                    >
                        Contact Us
                    </button>
                </div>
            </div>
        </div>
    );
}

export default OurServices;
