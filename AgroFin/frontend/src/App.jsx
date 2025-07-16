import React, { useState, useEffect } from 'react';
import './index.css';

// --- Utility Function (replaces 'cn') ---
// A simple helper to conditionally join class names together.
const cn = (...classes) => {
    return classes.filter(Boolean).join(' ');
}

// --- SVG Icons & Logo (replacing imports) ---
const Logo = ({ className }) => (
    <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M50,95 C25.147,95 5,74.853 5,50 C5,25.147 25.147,5 50,5 C74.853,5 95,25.147 95,50 C95,74.853 74.853,95 50,95 Z" stroke="#22c55e" strokeWidth="4"/>
        <path d="M50 75C50 75 50 25 70 45C70 45 50 65 50 75Z" fill="#22c55e" />
        <path d="M50 75C50 75 50 25 30 45C30 45 50 65 50 75Z" fill="#86efac" />
    </svg>
);
const MenuIcon = ({ size = 24, className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>
);
const XIcon = ({ size = 24, className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
);
const ArrowRight = ({ size = 18, className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
);

// --- Main Application Component ---
function App() {
    // State to track if the page has been scrolled
    const [scrolled, setScrolled] = useState(false);
    // State to track if the mobile menu is open
    const [menuOpen, setMenuOpen] = useState(false);

    // Effect to add and clean up the scroll event listener
    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 10;
            setScrolled(isScrolled);
        };

        // Add event listener
        window.addEventListener('scroll', handleScroll);

        // Cleanup function to remove the listener
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    
    // The header text and button style changes when scrolled
    const isScrolledStyle = scrolled;

    return (
        <div className="bg-white">
            <header
                className={cn(
                    "fixed top-0 left-0 w-full z-50 transition-all duration-300 ease-in-out",
                    scrolled ? "py-2" : "py-4"
                )}
            >
                <div
                    className={cn(
                        "mx-auto flex items-center justify-between transition-all duration-300 ease-in-out transform",
                        scrolled
                            ? "container px-4 py-1 bg-black/70 backdrop-blur-lg rounded-full max-w-6xl"
                            : "container px-4 md:px-10"
                    )}
                >
                    {/* Logo & Brand */}
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10">
                            <Logo className="w-full h-full object-contain" />
                        </div>
                        <a href="#" className={cn("text-2xl font-bold transition", isScrolledStyle ? "text-white" : "text-gray-800")}>
                            AgroFin<span className="text-green-500">Care</span>
                        </a>
                    </div>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center space-x-2 text-sm font-medium">
                        {["Home", "Our Services", "Farmer Stories", "Contact Us"].map((text) => (
                            <a
                                key={text}
                                href={`#${text.toLowerCase().replace(/ /g, "")}`}
                                className={cn("px-4 py-2 rounded-full transition", isScrolledStyle ? "text-white hover:bg-white/10" : "text-black hover:bg-black/10")}
                            >
                                {text}
                            </a>
                        ))}
                    </nav>

                    {/* CTA Buttons */}
                    <div className="hidden md:flex items-center space-x-4">
                        <button className="px-5 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-full transition-all border border-gray-500 text-sm">
                            1
                        </button>
                        <button className="px-6 py-2 bg-green-600 hover:bg-green-700 text-white rounded-full flex items-center gap-2 transition-all text-sm">
                            2 <ArrowRight size={16} />
                        </button>
                    </div>

                    {/* Hamburger Menu for Mobile */}
                    <div className="flex md:hidden items-center">
                        <button onClick={() => setMenuOpen((prev) => !prev)} className={cn("p-2 rounded-full transition-colors", isScrolledStyle ? "text-white hover:bg-white/20" : "text-black hover:bg-black/10")}>
                            {menuOpen ? <XIcon size={24} /> : <MenuIcon size={24} />}
                        </button>
                    </div>
                </div>
            </header>

            {/* Mobile Menu Overlay */}
            {menuOpen && (
                <div className="md:hidden fixed top-0 left-0 right-0 z-40 bg-black/95 backdrop-blur-xl px-6 py-8 shadow-lg mx-4 rounded-3xl mt-[72px] text-white">
                    <nav className="flex flex-col space-y-4 items-center">
                        {["Home", "Our Services", "Farmer Stories", "Contact Us"].map((text) => (
                            <a key={text} href={`#${text.toLowerCase().replace(/ /g, "")}`} className="text-lg hover:text-green-400 transition" onClick={() => setMenuOpen(false)}>
                                {text}
                            </a>
                        ))}
                    </nav>
                    <div className="mt-8 flex flex-col space-y-4 items-center">
                        <button className="w-full bg-gray-700 text-white px-5 py-3 rounded-full">
                            1.i
                        </button>
                        <button className="w-full bg-green-600 hover:bg-green-700 text-white px-5 py-3 rounded-full flex items-center justify-center gap-2">
                            2.i <ArrowRight size={18} />
                        </button>
                    </div>
                </div>
            )}

            {/* Main Content Sections To Enable Scrolling */}
            <main>
                <section id="home" className="h-screen bg-cover bg-center flex items-center justify-center text-white" style={{backgroundImage: "url('https://placehold.co/1920x1080/4a5c32/ffffff?text=Empowering+Agriculture')"}}>
                    <div className="text-center bg-black/50 p-8 rounded-lg">
                        <h1 className="text-5xl font-bold">___</h1>
                        <p className="mt-4 text-xl">Reliable loans and support for the modern farmer.</p>
                    </div>
                </section>
                <section id="ourservices" className="min-h-screen container mx-auto py-24 px-4">
                    <h2 className="text-4xl font-bold text-center mb-12">Our Services</h2>
                    <p className="max-w-3xl mx-auto text-lg text-gray-700 text-center">
                        text
                    </p>
                </section>
                <section id="farmerstories" className="min-h-screen bg-gray-100 py-24 px-4">
                     <h2 className="text-4xl font-bold text-center mb-12">Farmer Stories</h2>
                    <p className="max-w-3xl mx-auto text-lg text-gray-700 text-center">
                        Read testimonials from farmers across the country who have grown their businesses with the help of AgroFinCare. Their success is our success.
                    </p>
                </section>
                 <section id="contactus" className="min-h-screen container mx-auto py-24 px-4">
                    <h2 className="text-4xl font-bold text-center mb-12">Contact Us</h2>
                    <p className="max-w-3xl mx-auto text-lg text-gray-700 text-center">
                        Have questions? Our team of experts is ready to help. Reach out today to learn how we can support your agricultural business.
                    </p>
                </section>
            </main>
        </div>
    );
}

export default App;
