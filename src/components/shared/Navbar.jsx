import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaWhatsapp, FaBars, FaTimes } from "react-icons/fa";

export const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navItems = [
        { name: "Cómo funciona", path: "/como-funciona" },
        { name: "Planes", path: "/" },
        { name: "Blog SG-SST", path: "/blog" },
        { name: "Preguntas frecuentes", path: "/preguntas-frecuentes" },
    ];

    const isActive = (path) => location.pathname === path;

    return (
        <header className="w-full fixed top-0 left-0 z-50 transition-all duration-300">

            {/* Top Bar */}
            {!isScrolled && (
                <div className="bg-purple-100 text-purple-800 text-lg py-4 px-5 flex justify-between items-center font-bold">
                    <div className="flex items-center gap-3">
                        <span>¡Contáctanos!</span>
                        <a
                            href="https://wa.me/573117279603?text=¡Hola!, Quiero más información. Mi nombre es..."
                            target="_blank"
                            rel="noopener noreferrer"
                            className="transition-transform transform hover:scale-110"
                        >
                            <FaWhatsapp className="text-green-500 hover:text-green-600 text-2xl" />
                        </a>
                    </div>
                </div>
            )}

            {/* Main Navbar */}
            <nav className={`bg-white px-6 shadow flex flex-wrap md:flex-nowrap justify-between items-center transition-all duration-300 ${isScrolled ? "py-4" : "py-6"}`}>

                {/* Logo + Eslogan */}
                <div className="flex flex-col items-center md:items-start">
                    <Link to="/" className="flex flex-col items-center md:items-start">
                        <span className="text-2xl md:text-3xl font-extrabold text-purple-700 leading-tight text-center md:text-left">SIG TRABAJO SEGURO</span>
                        <span className="text-xs md:text-sm text-purple-500 italic mt-1 text-center md:text-left">
                            Diseñamos tu sistema, tú cumples legal y tranquilo.
                        </span>
                    </Link>
                </div>

                {/* Mobile Hamburger */}
                <div className="md:hidden text-3xl text-purple-700 cursor-pointer ml-auto mt-3" onClick={() => setMenuOpen(!menuOpen)}>
                    {menuOpen ? <FaTimes /> : <FaBars />}
                </div>

                {/* Desktop Menu */}
                <ul className="hidden md:flex gap-8 text-purple-700 text-lg font-medium items-center">
                    {navItems.map((item, index) => (
                        <li key={index}>
                            <Link to={item.path}>
                                <span
                                    className={`px-5 py-2 rounded transition 
                                        ${isActive(item.path)
                                            ? "bg-purple-700 text-white"
                                            : "hover:bg-purple-600 hover:text-white text-purple-700"
                                        }`}
                                >
                                    {item.name}
                                </span>
                            </Link>
                        </li>
                    ))}
                </ul>

                {/* Mobile Menu */}
                {menuOpen && (
                    <ul className="w-full mt-4 flex flex-col gap-3 text-lg font-medium text-purple-700 md:hidden">
                        {navItems.map((item, index) => (
                            <li key={index} onClick={() => setMenuOpen(false)}>
                                <Link to={item.path}>
                                    <span className="block px-4 py-3 rounded hover:bg-purple-100">
                                        {item.name}
                                    </span>
                                </Link>
                            </li>
                        ))}
                    </ul>
                )}
            </nav>
        </header>
    );
};
