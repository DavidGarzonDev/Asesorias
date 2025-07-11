import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaLinkedin, FaInstagram, FaFacebookF, FaTwitter, FaBars, FaTimes, FaWhatsapp } from "react-icons/fa";

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
                <div className="bg-purple-100 text-purple-800 text-xl py-6 px-5 flex justify-between items-center font-bold">

                    <div className="flex items-center gap-4">
                        <span>¡Contáctanos!</span>
                        <a
                            href="https://wa.me/573192410053?text=¡Hola! necesito Consultar sobre el diseño, implementación y acompañamiento del SG-SST. Mi nombre es..."
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FaWhatsapp className="text-4xl hover:text-purple-600 cursor-pointer" />
                        </a>
                    </div>

                    {/* Aquí irían otras redes sociales si las quieres */}
                    {/* <div className="flex gap-4 text-3xl">
    <a href="#" className="hover:text-purple-600"><FaLinkedin /></a>
    <a href="#" className="hover:text-purple-600"><FaInstagram /></a>
    <a href="#" className="hover:text-purple-600"><FaFacebookF /></a>
    <a href="#" className="hover:text-purple-600"><FaTwitter /></a>
  </div> */}

                </div>

            )}

            {/* Main Navbar */}
            <nav className={`bg-white px-8 shadow flex flex-col md:flex-row justify-between items-center transition-all duration-300 ${isScrolled ? "py-4" : "py-8"}`}>

                <div className="w-full flex justify-between items-center md:w-auto">
                    {/* Logo */}
                    <Link to="/" className="text-3xl font-bold text-purple-700 flex items-center gap-2">
                        <span>Asesorias</span>
                    </Link>

                    {/* Mobile Hamburger */}
                    <div className="md:hidden text-3xl text-purple-700 cursor-pointer" onClick={() => setMenuOpen(!menuOpen)}>
                        {menuOpen ? <FaTimes /> : <FaBars />}
                    </div>
                </div>

                {/* Desktop Menu */}
                <ul className="hidden md:flex gap-8 text-purple-700 text-xl font-medium items-center">
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
                    <ul className="flex flex-col mt-6 gap-4 text-lg font-medium items-start w-full pl-8 md:hidden">
                        {navItems.map((item, index) => (
                            <li key={index} onClick={() => setMenuOpen(false)}>
                                <Link to={item.path}>
                                    <span
                                        className="px-5 py-2 rounded transition  text-purple-700 "

                                    >
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
