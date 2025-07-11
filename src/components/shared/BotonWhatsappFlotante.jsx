import { FaWhatsapp } from "react-icons/fa";

const BotonWhatsappFlotante = () => {
    return (
        <a
            href="https://wa.me/573117279603?text=Hola, quiero más información. Mi nombre es..."
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-5 left-5 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg flex items-center justify-center transition transform hover:scale-110 z-50 animate-bounce"
        >
            <FaWhatsapp className="text-3xl" />
        </a>
    );
};

export default BotonWhatsappFlotante;
