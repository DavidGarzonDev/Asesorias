import { Link } from "react-router-dom";

export const Footer = () => {
    return (
        <footer className="bg-purple-900 text-white py-10 px-6">
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">

                {/* Descripción */}
                <div>
                    <h3 className="text-lg font-semibold mb-4">Cuidamos ®</h3>
                    <p className="text-sm leading-relaxed text-gray-300">
                        Somos expertos en la implementación de sistemas de gestión en seguridad y salud en el trabajo (SG-SST) para micro y pequeñas empresas. Nuestra metodología ha sido validada por cientos de clientes a nivel nacional.
                    </p>
                </div>

                {/* Menú */}
                <div>
                    <h3 className="text-lg font-semibold mb-4">Menú</h3>
                    <ul className="space-y-2 text-sm text-gray-300">
                        <li><Link to="/" className="hover:text-white">Inicio</Link></li>
                        <li><Link to="/como-funciona" className="hover:text-white">¿Cómo funciona?</Link></li>
                        <li><Link to="/blog" className="hover:text-white">Blog SG-SST</Link></li>
                        <li><Link to="/" className="hover:text-white">Planes</Link></li>
                        <li><Link to="/preguntas-frecuentes" className="hover:text-white">Preguntas frecuentes</Link></li>
                        <li><Link to="#" className="hover:text-white">Política de privacidad</Link></li>
                    </ul>
                </div>

                {/* Contacto */}
                <div>
                    <h3 className="text-lg font-semibold mb-4">Contacto</h3>
                    <ul className="space-y-2 text-sm text-gray-300">
                        <li>Carrera 48 No 10-45 Oficina 807</li>
                        <li>Centro Comercial Monterrey</li>
                        <li>Medellín, Colombia</li>
                        <li><a href="mailto:contacto@cuidamos.com.co" className="hover:text-white">contacto@cuidamos.com.co</a></li>
                        <li>(+57) 300 537 9620</li>
                        <li>(+57) 319 241 0053</li>
                    </ul>
                </div>
            </div>

            <div className="border-t border-purple-700 mt-10 pt-4 text-xs text-gray-400 text-center">
                <p>
                    Cuidamos SST es una marca de Cuidamos Colombia S.A.S. Todos los derechos reservados. © 2023
                    <Link to="#" className="hover:text-white ml-1">Política de privacidad</Link>
                </p>
                <p className="mt-2">
                    Desarrollado por <a href="https://rlealweb.com" className="hover:text-white">rlealweb.com</a> & Cuidamos
                </p>
            </div>
        </footer>
    );
};
