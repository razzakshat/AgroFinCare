import React from 'react';

// Reusing the classNames utility from your other components
const classNames = (...classes) => {
    return classes.filter(Boolean).join(' ');
};

// --- FarmerStories Component ---
function FarmerStories() {
    // Sample data for farmer stories
    const stories = [
        {
            id: 1,
            name: "Rajesh Kumar",
            location: "Punjab, India",
            quote: "AgroFinCare transformed my farm. With their timely loan, I invested in modern irrigation, doubling my yield and income. Their support goes beyond finance; it's a partnership for prosperity.",
            image: "https://placehold.co/400x300/a7f3d0/065f46?text=Rajesh+Kumar", // Placeholder image
        },
        {
            id: 2,
            name: "Priya Sharma",
            location: "Maharashtra, India",
            quote: "The advisory services from AgroFinCare helped me switch to organic farming. It was a big step, but their guidance on crop rotation and pest management made it possible. My produce is healthier, and so is my family.",
            image: "https://placehold.co/400x300/d1fae5/065f46?text=Priya+Sharma", // Placeholder image
        },
        {
            id: 3,
            name: "Ahmed Khan",
            location: "Uttar Pradesh, India",
            quote: "Market access was always a challenge. AgroFinCare connected me directly to buyers, eliminating middlemen. Now, I get fair prices for my crops, which means a better life for my children.",
            image: "https://placehold.co/400x300/ecfdf5/065f46?text=Ahmed+Khan", // Placeholder image
        },

    ];

    return (
        <div className="bg-white py-16 sm:py-24 font-sans">
            <div className="container mx-auto px-4 md:px-10">
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-4 leading-tight">
                        Our <span className="text-green-600">Farmer Stories</span>
                    </h1>
                    <p className="text-lg text-gray-700 leading-relaxed">
                        Hear directly from the heart of our community. These are the voices of resilience,
                        innovation, and success, made possible through partnership with AgroFinCare.
                    </p>
                </div>

                {/* Stories Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {stories.map((story) => (
                        <div key={story.id} className="bg-gray-50 rounded-xl shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
                            <img
                                src={story.image}
                                alt={`Portrait of ${story.name}`}
                                className="w-full h-48 object-cover object-center"
                                onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/400x300/cccccc/333333?text=Image+Error"; }}
                            />
                            <div className="p-6">
                                <p className="text-lg font-semibold text-gray-800 mb-3 leading-snug">
                                    "{story.quote}"
                                </p>
                                <p className="text-green-600 font-bold text-base mt-4">{story.name}</p>
                                <p className="text-gray-500 text-sm">{story.location}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Call to Action */}
                <div className="text-center mt-20 max-w-3xl mx-auto p-8 bg-green-50 rounded-xl shadow-md">
                    <h2 className="text-3xl font-bold text-green-800 mb-4">Be Our Next Success Story!</h2>
                    <p className="text-lg text-gray-700 mb-6">
                        Ready to transform your farming journey? Connect with AgroFinCare today and
                        discover how our solutions can help you achieve your agricultural goals.
                    </p>
                    <button
                        className="px-8 py-3 bg-green-600 hover:bg-green-700 text-white rounded-full text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
                        type="button"
                        onClick={() => alert('Connect with us functionality goes here!')} // Replace with actual navigation to contact page
                    >
                        Get Started Today
                    </button>
                </div>
            </div>
        </div>
    );
}

export default FarmerStories;
