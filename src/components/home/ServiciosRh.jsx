import React, { useState } from "react";
import { ClipboardList, FileSearch, Users } from "lucide-react";

const ServiciosRh = () => {
    const [open, setOpen] = useState(false);
    const [selected, setSelected] = useState(null);

    const servicios = [
        {
            titulo: "Aplicación de batería de riesgo psicosocial",
            descripcion:
                "Realizamos la aplicación completa de la batería de riesgo psicosocial según la normativa vigente, garantizando confidencialidad y un informe detallado para la empresa.",
            icono: <ClipboardList className="w-10 h-10 text-purple-600" />,
        },
        {
            titulo: "Revisión y depuración de cartera EPS, ARL y AFP",
            descripcion:
                "Analizamos y depuramos la información de la cartera con las entidades prestadoras de salud, riesgos laborales y fondos de pensión, optimizando la gestión de aportes.",
            icono: <FileSearch className="w-10 h-10 text-purple-600" />,
        },
        {
            titulo:
                "Auditoría en procesos de GH ",
            descripcion:
                "Auditoría especializada para garantizar la correcta gestión en afiliaciones, liquidación de nómina y prestaciones sociales, reduciendo riesgos y errores administrativos.",
            icono: <Users className="w-10 h-10 text-purple-600" />,
        },
    ];

    return (
        <div className="w-full max-w-3xl mx-auto py-10">
            <h2 className="text-5xl font-bold text-center mb-8 text-purple-600">
                Servicios de Recursos Humanos
            </h2>
            <div className="grid grid-cols-3 ">
                {servicios.map((servicio, index) => (
                    <div
                        key={index}
                        className="bg-white shadow-lg rounded-xl p-6 cursor-pointer hover:shadow-xl transition text-center flex flex-col items-center"
                        onClick={() => {
                            setSelected(servicio);
                            setOpen(true);
                        }}
                    >
                        {servicio.icono}
                        <h3 className="mt-4 text-lg ">{servicio.titulo}</h3>
                    </div>
                ))}
            </div>

            {/* Modal */}
            {open && (
                <div className="fixed inset-0 bg-transparentbg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white rounded-xl p-6 max-w-lg w-full shadow-lg">
                        <h3 className="text-xl font-bold mb-4 text-purple-600">{selected?.titulo}</h3>
                        <p className="text-gray-700">{selected?.descripcion}</p>
                        <button
                            onClick={() => setOpen(false)}
                            className="mt-6 bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition"
                        >
                            Cerrar
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ServiciosRh;
