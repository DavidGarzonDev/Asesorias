
import React, { useState } from "react";
import { FaArrowDown } from "react-icons/fa";

const PlanesDetallados = () => {
    const [activeTab, setActiveTab] = useState("diseño");

    const planesDiseño = [
        { nombre: "DISEÑO", empleados: "Hasta 2 empleados", precio: "$540.000*" },
        { nombre: "DISEÑO", empleados: "3 a 5 empleados", precio: "$730.000*" },
        { nombre: "DISEÑO", empleados: "6 a 10 empleados", precio: "$990.000*" },
        { nombre: "DISEÑO", empleados: "11 a 15 empleados", precio: "$1.590.000*" },
    ];

    const planesAdmin = [
        { nombre: "ADMIN", empleados: "3 a 5 empleados", precio: "$197.500*" },
        { nombre: "ADMIN", empleados: "6 a 10 empleados", precio: "$249.000*" },
        { nombre: "ADMIN", empleados: "11 a 15 empleados", precio: "$354.250*" },
        { nombre: "ADMIN", empleados: "16 a 25 empleados", precio: "$630.000*" },
    ];
    return (
        <>
            <div className="max-w-7xl mx-auto py-10 px-4 flex flex-col md:flex-row gap-4 justify-center ">
                <button
                    onClick={() => setActiveTab("diseño")}
                    className={`px-8 py-6 rounded text-3xl font-semibold border-3 flex items-center justify-center gap-2 ${activeTab === "diseño"
                        ? "bg-purple-600 text-white border-purple-600"
                        : "bg-white text-purple-700 border-purple-600"
                        } transition`}
                >
                    Plan Diseño <FaArrowDown />
                </button>
                <button
                    onClick={() => setActiveTab("admin")}
                    className={`px-8 py-6 rounded text-3xl font-semibold border-3 flex items-center justify-center gap-2  ${activeTab === "admin"
                        ? "bg-purple-600 text-white border-purple-600"
                        : "bg-white text-purple-700 border-purple-600"
                        } transition`}
                >
                    Plan Administración <FaArrowDown />
                </button>
            </div>


            <div className="max-w-7xl mx-auto px-4 py-10">
                <div className="flex flex-col md:flex-row gap-10 items-start mb-12">

                    {/* TÍTULO A LA IZQUIERDA */}
                    <div className="md:w-1/2 flex items-center justify-center text-center md:text-left">
                        <h2 className="text-5xl md:text-6xl font-bold text-purple-800 leading-tight">
                            {activeTab === "diseño" ? "Plan Diseño" : "Plan Administración"}
                        </h2>
                    </div>

                    {/* DESCRIPCIÓN A LA DERECHA */}
                    <div className="md:w-1/2 bg-purple-50 p-8 rounded-lg shadow text-left">
                        {activeTab === "diseño" ? (
                            <>
                                <h3 className="text-2xl font-bold text-purple-800 mb-4">Planes Diseño Cuidamos</h3>
                                <ul className="list-disc pl-5 text-gray-700 space-y-3 text-base leading-relaxed">
                                    <li>Hacemos el SG-SST práctico y simple para tu empresa.</li>
                                    <li>Implementación según Resolución 0312 de 2019.</li>
                                    <li>Metodología rápida, flexible y sin desgaste.</li>
                                    <li>Acreditación del SG-SST y certificado ARL.</li>
                                </ul>
                            </>
                        ) : (
                            <>
                                <h3 className="text-2xl font-bold text-purple-800 mb-4">Planes Mantenimiento y/o Administración Cuidamos*</h3>
                                <ul className="list-disc pl-5 text-gray-700 space-y-3 text-base leading-relaxed">
                                    <li>Mantenimiento y Administración del SG-SST en el ciclo anual.</li>
                                    <li>Seguimiento, plan de trabajo, capacitaciones y cierre de ciclo.</li>
                                    <li>Soporte ante ARL, MinTrabajo y reporte anual obligatorio.</li>
                                    <li>Autoevaluación anual y constancia ante la ARL.</li>
                                </ul>
                                <p className="mt-4 text-purple-700 text-sm italic">
                                    * 20% de descuento por pago anual anticipado.
                                </p>
                            </>
                        )}
                    </div>
                </div>

                {/* PLANES VERTICALES AMPLIOS */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {(activeTab === "diseño" ? planesDiseño : planesAdmin).map((plan, index) => (
                        <div
                            key={index}
                            className={`p-10 rounded-lg shadow-lg ${index % 2 === 0 ? "bg-purple-600 text-white" : "bg-white text-purple-800 border border-purple-200"
                                }`}
                        >
                            <h3 className="text-3xl font-bold mb-3 text-center">Plan {plan.nombre}</h3>
                            <p className="mb-3 text-lg text-center">{plan.empleados}</p>
                            <p className="text-4xl font-bold mb-5 text-center">{plan.precio}</p>
                            <p
                                className={`mb-6 text-base text-center ${index % 2 === 0 ? "text-purple-100" : "text-gray-600"
                                    }`}
                            >
                                {activeTab === "diseño"
                                    ? "Precio plan diseño, no incluye IVA"
                                    : "Inversión mensual, no incluye IVA"}
                            </p>
                            <div className="flex justify-center">
                                <button
                                    className={`px-6 py-3 rounded text-lg font-semibold ${index % 2 === 0
                                        ? "bg-white text-purple-700 hover:bg-purple-100"
                                        : "bg-purple-600 text-white hover:bg-purple-700"
                                        } transition`}
                                >
                                    Contáctanos
                                </button>
                            </div>
                        </div>
                    ))}
                    <p className="text-xs text-gray-500 mt-6 text-center">* Aplican términos y condiciones</p>
                </div>
            </div>
        </>
    )
}

export default PlanesDetallados