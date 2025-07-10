import { Link } from "react-router-dom";
import { FaLinkedin, FaInstagram, FaFacebookF, FaTwitter } from "react-icons/fa";

export const Navbar = () => {
    return (
        <header className="w-full">

            {/* Top Bar */}
            <div className="bg-purple-100 text-purple-800 text-xl py-6 px-8 flex justify-between items-center font-bold">
                <span>¡Llámanos! 0000000</span>
                <div className="flex gap-4 text-3xl">
                    <a href="#" className="hover:text-purple-600"><FaLinkedin /></a>
                    <a href="#" className="hover:text-purple-600"><FaInstagram /></a>
                    <a href="#" className="hover:text-purple-600"><FaFacebookF /></a>
                    <a href="#" className="hover:text-purple-600"><FaTwitter /></a>
                </div>
            </div>

            {/* Main Navbar */}
            <nav className="bg-white py-8 px-8 shadow flex flex-col md:flex-row justify-between items-center ">

                {/* Logo */}
                <Link to="/" className="text-3xl font-bold text-purple-700 flex items-center gap-2 mb-4 md:mb-0">
                    <span>Nombre</span>
                    
                </Link>

                {/* Menú */}
                <ul className="flex gap-8 text-purple-700 text-sm font-medium items-center">
                    <li>
                        <Link to="/como-funciona" className="hover:text-purple-900 transition">
                            Cómo funciona
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/"
                            className="bg-purple-600 text-white px-5 py-2 hover:bg-purple-700 transition"
                        >
                            Planes
                        </Link>
                    </li>
                    <li>
                        <Link to="/blog" className="hover:text-purple-900 transition">
                            Blog SG-SST
                        </Link>
                    </li>
                    <li>
                        <Link to="/preguntas-frecuentes" className="hover:text-purple-900 transition">
                            Preguntas frecuentes
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};
