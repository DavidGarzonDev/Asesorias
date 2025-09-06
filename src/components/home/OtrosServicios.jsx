import { useState } from "react";
import { FaSearch, FaChalkboardTeacher, FaRoad, FaClipboardCheck } from "react-icons/fa";

const servicios = [
    {
        nombre: "AUDITORÍAS",
        icono: <FaClipboardCheck />,
        descripcion: "Realizamos auditorías integrales para verificar el cumplimiento de normativas y mejorar la gestión organizacional.",
        detalles: [
            "ISO 9001",
            "ISO 14001",
            "ISO 22301",
            "ISO 27001",
            "ISO 39001",
            "ISO 45001",
            "Auditoría PESV",
            "Auditoría RUC",
            "Auditoría SGSST",
        ]
    },
    {
        nombre: "INVESTIGACIONES DE ATEL",
        icono: <FaSearch />,
        descripcion: "Análisis detallado de accidentes de trabajo y enfermedades laborales para identificar causas y prevenir futuros incidentes."
    },
    {
        nombre: "CAPACITACIONES EXPRES",
        icono: <FaChalkboardTeacher />,
        descripcion: "Capacitaciones rápidas y efectivas adaptadas a tu empresa en temas de seguridad y salud en el trabajo."
    },
    {
        nombre: "IMPLEMENTACIÓN PESV",
        icono: <FaRoad />,
        descripcion: "Diseño e implementación de planes estratégicos de seguridad vial para reducir riesgos en la movilidad de tu organización."
    },
];

export const OtrosServicios = () => {
    const [modalOpen, setModalOpen] = useState(false);
    const [servicioSeleccionado, setServicioSeleccionado] = useState(null);

    return (
        <section className="bg-purple-50 py-12 px-4 text-center relative">
            <h2 className="text-4xl font-bold text-purple-800 mb-10">OTROS SERVICIOS SST</h2>

            <div className="overflow-hidden w-full max-w-6xl mx-auto px-5">
                <div className="flex animate-[slide_25s_linear_infinite] whitespace-nowrap items-center gap-10">
                    {servicios.concat(servicios).map((servicio, index) => (
                        <div
                            key={index}
                            onClick={() => {
                                setServicioSeleccionado(servicio);
                                setModalOpen(true);
                            }}
                            className="cursor-pointer w-60 min-w-[15rem] h-60 flex-shrink-0 flex flex-col items-center justify-center bg-purple-600 text-white p-4 rounded-lg shadow-md hover:bg-purple-700 transition duration-300"
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

            {/* Modal flotante */}
            {modalOpen && (
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-6 rounded-xl shadow-2xl max-w-sm w-full z-50">
                    <h3 className="text-2xl font-bold text-purple-700 mb-4">
                        {servicioSeleccionado?.nombre}
                    </h3>

                    {/* Mostrar lista si tiene detalles */}
                    {servicioSeleccionado?.detalles ? (
                        <ul className="text-gray-700 text-left list-disc list-inside mb-6">
                            {servicioSeleccionado.detalles.map((item, i) => (
                                <li key={i}>{item}</li>
                            ))}
                        </ul>
                    ) : (
                        <p className="text-gray-700 mb-6">{servicioSeleccionado?.descripcion}</p>
                    )}

                    <button
                        onClick={() => setModalOpen(false)}
                        className="px-5 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition"
                    >
                        Cerrar
                    </button>
                </div>
            )}
        </section>
    );
};
