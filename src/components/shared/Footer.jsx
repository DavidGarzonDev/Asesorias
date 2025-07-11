import { Link } from "react-router-dom";

export const Footer = () => {
    return (
        <footer className="bg-purple-900 text-white py-12 px-6">
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">

                {/* Marca y Descripción */}
                <div>
                    <h3 className="text-2xl font-bold text-white mb-2">SIG TRABAJO SEGURO</h3>
                    <p className="text-sm italic text-purple-300 mb-4">Diseñamos tu sistema, tú cumples legal y tranquilo.</p>
                    <p className="text-sm leading-relaxed text-gray-300">
                        Somos expertos en la implementación de Sistemas de Gestión en Seguridad y Salud en el Trabajo (SG-SST) para micro y pequeñas empresas. Nuestra metodología ha sido validada por empresas en todo el país, garantizando cumplimiento legal y tranquilidad empresarial.
                    </p>
                </div>

                {/* Menú */}
                <div>
                    <h3 className="text-lg font-semibold mb-4 text-white">Menú</h3>
                    <ul className="space-y-3 text-sm text-gray-300">
                        <li><Link to="/" className="hover:text-purple-100 transition">Inicio</Link></li>
                        <li><Link to="/como-funciona" className="hover:text-purple-100 transition">¿Cómo funciona?</Link></li>
                        <li><Link to="/blog" className="hover:text-purple-100 transition">Blog SG-SST</Link></li>
                        <li><Link to="/" className="hover:text-purple-100 transition">Planes</Link></li>
                        <li><Link to="/preguntas-frecuentes" className="hover:text-purple-100 transition">Preguntas frecuentes</Link></li>
                        <li><Link to="#" className="hover:text-purple-100 transition">Política de privacidad</Link></li>
                    </ul>
                </div>

                {/* Contacto */}
                <div>
                    <h3 className="text-lg font-semibold mb-4 text-white">Contacto</h3>
                    <ul className="space-y-3 text-sm text-gray-300">
                        <li>Dirección: Calle Ejemplo #00-00</li>
                        <li>Ciudad: Yumbo, Capital Industrial</li>
                        <li>Valle del Cauca - Colombia</li>
                        <li>
                            <a href="mailto:ejemplo@gmail.com" className="hover:text-purple-100 transition">
                                ejemplo@gmail.com
                            </a>
                        </li>
                        <li>
                            <a href="https://wa.me/573113663729?text=¡Hola! Quisiera recibir más información sobre los planes SG-SST." 
                               target="_blank" 
                               rel="noopener noreferrer"
                               className="hover:text-purple-100 transition">
                                WhatsApp: +57 311 366 3729
                            </a>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="border-t border-purple-700 mt-12 pt-6 text-xs text-gray-400 text-center">
                <p>
                    SIG TRABAJO SEGURO ® es una marca registrada. Todos los derechos reservados. © 2025
                    <Link to="#" className="hover:text-purple-100 ml-1">Política de privacidad</Link>
                </p>
                <p className="mt-2">
                    Desarrollado por <span className="text-slate-200 font-bold">DavidGarzonDev</span>
                </p>
            </div>
        </footer>
    );
};
