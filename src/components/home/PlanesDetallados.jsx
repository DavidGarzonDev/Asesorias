import React, { useState } from "react";
import { FaArrowDown, FaWhatsapp } from "react-icons/fa";

const PlanesDetallados = () => {
    const [activeTab, setActiveTab] = useState("diseño");

    const planesDiseño = [
        {
            nombre: "Diseño SG-SST",
            riesgo: "Riesgo I, II, III",
            empresa: "Microempresa",
            empleados: "1 a 10 trabajadores",
            precio: "$500.000"
        },
        {
            nombre: "Diseño SG-SST",
            riesgo: "Riesgo I, II, III",
            empresa: "Pequeña empresa",
            empleados: "11 a 50 trabajadores",
            precio: "$1.800.000"
        },
        {
            nombre: "Diseño SG-SST",
            riesgo: "Riesgo IV, V",
            empresa: "Empresa estándar",
            empleados: "1 a 50 trabajadores",
            precio: "Entre $800.000  a $2.200.000"
        },
        {
            nombre: "Diseño SG-SST",
            riesgo: "Riesgo I, II, III",
            empresa: "Empresa con procesos complejos",
            empleados: "11 a 15 empleados",
            precio: "$1.590.000"
        }
    ];

    const planesAdmin = [
        {
            nombre: "Administracion",
            riesgo: "Riesgo I, II, III",
            empresa: "Microempresa",
            empleados: "1 a 10 empleados",
            precio: "$700.000"
        },
        {
            nombre: "Administracion",
            riesgo: "Riesgo I, II, III",
            empresa: "Pequeña empresa",
            empleados: "11 a 50 empleados",
            precio: "$1.200.000"
        },
        {
            nombre: "Administracion",
            riesgo: "Riesgo IV, V",
            empresa: "Micro o pequeña empresa",
            empleados: "11 a 15 empleados",
            precio: "$1.800.000"
        },
        
    ];

    const planes = activeTab === "diseño" ? planesDiseño : planesAdmin;

    return (
        <>
            <div className="max-w-7xl mx-auto py-10 px-4 flex flex-col md:flex-row gap-4 justify-center">
                <button
                    onClick={() => setActiveTab("diseño")}
                    className={`px-8 py-6 rounded text-3xl font-semibold border-3 flex items-center justify-center gap-2 ${activeTab === "diseño" ? "bg-purple-600 text-white border-purple-600" : "bg-white text-purple-700 border-purple-600"} transition`}
                >
                    Diseño <FaArrowDown />
                </button>
                <button
                    onClick={() => setActiveTab("admin")}
                    className={`px-8 py-6 rounded text-3xl font-semibold border-3 flex items-center justify-center gap-2 ${activeTab === "admin" ? "bg-purple-600 text-white border-purple-600" : "bg-white text-purple-700 border-purple-600"} transition`}
                >
                    Administración <FaArrowDown />
                </button>
            </div>

            <div className="max-w-7xl mx-auto px-4 py-10">
                <div className="flex flex-col md:flex-row gap-10 items-start mb-12">
                    <div className="md:w-1/2 flex items-center justify-center text-center md:text-left">
                        <h2 className="text-5xl md:text-6xl font-bold text-purple-800 leading-tight">
                            {activeTab === "diseño" ? "Diseño" : "Administración"}
                        </h2>
                    </div>

                    <div className="md:w-1/2 bg-purple-50 p-8 rounded-lg shadow text-left">
                        {activeTab === "diseño" ? (
                            <>
                                
                                <ul className="list-disc pl-5 text-gray-700 space-y-3 text-base leading-relaxed">
                                    <li>Hacemos el SG-SST práctico y simple para tu empresa.</li>
                                    <li>Implementación según Resolución 0312 de 2019.</li>
                                    <li>Metodología rápida, flexible y sin desgaste.</li>
                                    <li>Acreditación del SG-SST y certificado ARL.</li>
                                </ul>
                            </>
                        ) : (
                            <>
                                
                                <ul className="list-disc pl-5 text-gray-700 space-y-3 text-base leading-relaxed">
                                    <li>Mantenimiento y Administración del SG-SST en el ciclo anual.</li>
                                    <li>Seguimiento, plan de trabajo, capacitaciones y cierre de ciclo.</li>
                                    <li>Soporte ante ARL, MinTrabajo y reporte anual obligatorio.</li>
                                    <li>Autoevaluación anual y constancia ante la ARL.</li>
                                </ul>
                                <p className="mt-4 text-purple-700 text-sm italic">* 20% de descuento por pago anual anticipado.</p>
                            </>
                        )}
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {planes.map((plan, index) => (
                        <div key={index} className={`flex flex-col justify-between p-8 rounded-lg shadow-lg h-full ${index % 2 === 0 ? "bg-purple-600 text-white" : "bg-white text-purple-800 border border-purple-200"}`}>
                            <div>
                                <h3 className="text-2xl font-bold mb-3 text-center">{plan.nombre}</h3>
                                <div className="mb-3">
                                    <p className="text-sm font-semibold">Tipo de riesgo:</p>
                                    <p>{plan.riesgo}</p>
                                </div>
                                <div className="mb-3">
                                    <p className="text-sm font-semibold">Tipo de empresa:</p>
                                    <p>{plan.empresa}</p>
                                </div>
                                <div className="mb-5">
                                    <p className="text-sm font-semibold">Número de empleados:</p>
                                    <p>{plan.empleados}</p>
                                </div>
                                <p className="text-3xl font-bold mb-5 text-center">{plan.precio}</p>
                                <p className={`mb-6 text-center text-sm ${index % 2 === 0 ? "text-purple-100" : "text-gray-600"}`}>
                                    {activeTab === "diseño" ? "Precio plan diseño, no incluye IVA" : "Inversión mensual, no incluye IVA"}
                                </p>
                            </div>
                            <div className="mt-auto flex justify-center">
                                <a
                                    href="https://wa.me/573117279603?text=Hola, quiero más información sobre los planes. Mi nombre es..."
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`flex items-center gap-2 px-6 py-3 rounded text-lg font-semibold transition transform hover:scale-105 hover:shadow-lg
                                        ${index % 2 === 0
                                            ? 'bg-white text-purple-700 hover:bg-purple-100'
                                            : 'bg-purple-600 text-white hover:bg-purple-700'
                                        }`}
                                >
                                    <span>Contáctanos</span>
                                    <FaWhatsapp className={`${index % 2 === 0 ? 'text-green-500 hover:text-green-600' : 'text-green-300 hover:text-green-200'} text-2xl transition-colors duration-300`} />
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
                <p className="text-xs text-gray-500 mt-6 text-center">* Aplican términos y condiciones</p>
            </div>
        </>
    );
};

export default PlanesDetallados;
