import React, { useState, useEffect, useCallback } from 'react';

// --- Utility Function ---
const classNames = (...classes) => {
    return classes.filter(Boolean).join(' ');
};

// --- SVG Icons & Logo Components ---

/**
 * Renders the AgroFinCare logo as an SVG.
 * @param {object} props - Component props.
 * @param {string} [props.className] - Tailwind CSS classes for styling the SVG.
 */
const Logo = ({ className }) => (
    <svg className={classNames("transition-colors duration-300", className)} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Changed stroke to currentColor to inherit color from parent Tailwind class */}
        <path d="M50,95 C25.147,95 5,74.853 5,50 C5,25.147 25.147,5 50,5 C74.853,5 95,25.147 95,50 C95,74.853 74.853,95 50,95 Z" stroke="currentColor" strokeWidth="4"/>
        <path d="M50 75C50 75 50 25 70 45C70 45 50 65 50 75Z" fill="#22c55e" /> {/* AgroFin green */}
        <path d="M50 75C50 75 50 25 30 45C30 45 50 65 50 75Z" fill="#86efac" /> {/* Lighter green */}
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

// --- Main Navbar Component ---
function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    const handleScroll = useCallback(() => {
        setScrolled(window.scrollY > 10);
    }, []);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [handleScroll]);

    const isScrolled = scrolled;

    const navLinks = [
        { text: "Home", href: "#home" },
        { text: "Our Services", href: "#ourservices" },
        { text: "Farmer Stories", href: "#farmerstories" },
        { text: "Contact Us", href: "#contactus" },
    ];

    const handleNavLinkClick = useCallback(() => {
        setMenuOpen(false);
    }, []);

    return (
        <div className="relative">
            <header
                className={classNames(
                    "fixed top-0 left-0 w-full z-50 transition-all duration-300 ease-in-out",
                    scrolled ? "py-2 shadow-lg" : "py-4" // Added shadow-lg on scroll
                )}
            >
                <div
                    className={classNames(
                        "mx-auto flex items-center justify-between transition-all duration-300 ease-in-out transform",
                        scrolled
                            ? "container px-4 py-1 bg-green-800/80 backdrop-blur-lg rounded-full max-w-6xl" // Changed bg to green-800/80
                            : "container px-4 md:px-10 bg-transparent" // Explicitly setting white for un-scrolled state
                    )}
                >
                    {/* Logo & Brand */}
                    <div className="flex items-center gap-3">
                        {/* Logo color dynamic based on scroll, stroke color inherited */}
                        <div className={classNames("w-10 h-10 transition-colors duration-300", isScrolled ? "text-green-200" : "text-green-600")}>
                            <Logo className="w-full h-full object-contain" />
                        </div>
                        <a href="#top" className={classNames("text-2xl font-bold transition-colors duration-300 font-sans", isScrolled ? "text-white" : "text-gray-800")}>
                            AgroFin<span className="text-green-500">Care</span>
                        </a>
                    </div>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center space-x-2 text-sm font-medium">
                        {navLinks.map((link) => (
                            <a
                                key={link.text}
                                href={link.href}
                                className={classNames(
                                    "px-4 py-2 rounded-full transition-colors duration-300",
                                    isScrolled
                                        ? "text-white hover:text-green-200 hover:bg-white/10" // Brighter green on hover
                                        : "text-gray-700 hover:text-green-600 hover:bg-gray-100" // Green hover for light theme
                                )}
                            >
                                {link.text}
                            </a>
                        ))}
                    </nav>

                    {/* CTA Buttons */}
                    <div className="hidden md:flex items-center space-x-4">
                        <button
                            className={classNames(
                                "px-5 py-2 rounded-full transition-all duration-300 text-sm",
                                isScrolled
                                    ? "bg-transparent border border-white/50 text-white hover:bg-white hover:text-green-800"
                                    : "bg-gray-700 border border-gray-700 text-white hover:bg-gray-800"
                            )}
                            type="button"
                        >
                            Login
                        </button>
                        <button
                            className={classNames(
                                "px-6 py-2 rounded-full flex items-center gap-2 transition-all duration-300 text-sm",
                                isScrolled
                                    ? "bg-green-500 text-white hover:bg-green-600"
                                    : "bg-green-600 text-white hover:bg-green-700 shadow-md" // Added shadow
                            )}
                            type="button"
                        >
                            Join the Rev <ArrowRight size={16} />
                        </button>
                    </div>

                    {/* Hamburger Menu for Mobile */}
                    <div className="flex md:hidden items-center">
                        <button
                            onClick={() => setMenuOpen((prev) => !prev)}
                            className={classNames(
                                "p-2 rounded-full transition-colors duration-300",
                                isScrolled ? "text-white hover:bg-white/20" : "text-gray-700 hover:bg-gray-100"
                            )}
                            aria-controls="mobile-menu"
                            aria-expanded={menuOpen}
                            type="button"
                        >
                            <span className="sr-only">{menuOpen ? "Close menu" : "Open menu"}</span>
                            {menuOpen ? <XIcon size={24} /> : <MenuIcon size={24} />}
                        </button>
                    </div>
                </div>
            </header>

            {/* Mobile Menu Overlay */}
            {menuOpen && (
                <div
                    id="mobile-menu"
                    className="md:hidden fixed top-0 left-0 right-0 z-40 bg-gradient-to-br from-green-800 to-green-900 backdrop-blur-xl px-6 py-8 shadow-2xl mx-4 rounded-3xl mt-[72px] text-white animate-slide-down" // Enhanced background & shadow, new animation
                >
                    <nav className="flex flex-col space-y-4 items-center">
                        {navLinks.map((link) => (
                            <a
                                key={link.text}
                                href={link.href}
                                className="text-lg font-medium py-2 w-full text-center hover:text-green-200 transition-colors duration-300 rounded-md"
                                onClick={handleNavLinkClick}
                            >
                                {link.text}
                            </a>
                        ))}
                    </nav>
                    <div className="mt-8 flex flex-col space-y-4 items-center">
                        <button
                            className="w-full bg-green-700 hover:bg-green-600 text-white px-5 py-3 rounded-full transition-colors duration-300"
                            type="button"
                        >
                            Login
                        </button>
                        <button
                            className="w-full bg-white hover:bg-gray-100 text-green-800 px-5 py-3 rounded-full flex items-center justify-center gap-2 transition-colors duration-300"
                            type="button"
                        >
                            Join the Rev <ArrowRight size={18} className="text-green-800" /> {/* Ensure arrow is green */}
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Navbar;