import { FaUserShield, FaSearch, FaChalkboardTeacher, FaRoad, FaClipboardCheck } from "react-icons/fa";

const servicios = [
    { nombre: "AUDITORÍAS", icono: <FaClipboardCheck size={60} /> },
    { nombre: "INVESTIGACIONES DE ATEL", icono: <FaSearch size={60} /> },
    { nombre: "CAPACITACIONES EXPRES", icono: <FaChalkboardTeacher size={60} /> },
    { nombre: "IMPLEMENTACIÓN PESV", icono: <FaRoad size={60} /> },
];

export const OtrosServicios = () => {
    return (
        <section className="bg-purple-50 py-12 px-4 text-center">
            <h2 className="text-4xl font-bold text-purple-800 mb-10">OTROS SERVICIOS SST</h2>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 justify-items-center">
                {servicios.map((servicio, index) => (
                    <div
                        key={index}
                        className="w-60 h-60 flex flex-col items-center justify-center bg-purple-600 text-white p-4 rounded-lg shadow-md hover:bg-purple-700 transition duration-300"
                    >
                        <div className="bg-white text-purple-700 w-30 h-30 rounded-full flex items-center justify-center mb-4">
                            {servicio.icono}
                        </div>
                        <span className="text-xl font-semibold text-center px-2">{servicio.nombre}</span>
                    </div>
                ))}
            </div>
        </section>
    );
};
