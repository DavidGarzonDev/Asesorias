import { FaSearch, FaChalkboardTeacher, FaRoad, FaClipboardCheck } from "react-icons/fa";

const servicios = [
    { nombre: "AUDITORÍAS", icono: <FaClipboardCheck /> },
    { nombre: "INVESTIGACIONES DE ATEL", icono: <FaSearch /> },
    { nombre: "CAPACITACIONES EXPRES", icono: <FaChalkboardTeacher /> },
    { nombre: "IMPLEMENTACIÓN PESV", icono: <FaRoad /> },
];

export const OtrosServicios = () => {
    return (
        <section className="bg-purple-50 py-12 px-4 text-center">
            <h2 className="text-4xl font-bold text-purple-800 mb-10">OTROS SERVICIOS SST</h2>

            <div className="overflow-hidden w-full max-w-6xl mx-auto px-5">
                <div className="flex animate-[slide_25s_linear_infinite] whitespace-nowrap items-center gap-10">
                    {servicios.concat(servicios).map((servicio, index) => (
                        <div
                            key={index}
                            className="w-60 min-w-[15rem] h-60 flex-shrink-0 flex flex-col items-center justify-center bg-purple-600 text-white p-4 rounded-lg shadow-md hover:bg-purple-700 transition duration-300"
                        >
                            <div className="bg-white text-purple-700 w-24 h-24 rounded-full flex items-center justify-center mb-4 text-[3rem]">
                                {servicio.icono}
                            </div>
                            <span className="text-center text-base font-semibold px-2 leading-snug">
                                {servicio.nombre}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
