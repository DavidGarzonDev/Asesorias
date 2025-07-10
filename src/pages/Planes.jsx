import React, { useState } from "react";
import { FaArrowRight, FaEnvelope, FaExclamationTriangle } from "react-icons/fa";
import PreguntasFrecuentes from "../components/home/Faq";

const Planes = () => {
    const [activeTab, setActiveTab] = useState("diseño");

    const planesDiseño = [
        { nombre: "Cuidamos 2", empleados: "Hasta 2 empleados", precio: "$540.000*" },
        { nombre: "Cuidamos 5", empleados: "3 a 5 empleados", precio: "$730.000*" },
        { nombre: "Cuidamos 10", empleados: "6 a 10 empleados", precio: "$990.000*" },
        { nombre: "Cuidamos 15", empleados: "11 a 15 empleados", precio: "$1.590.000*" },
    ];

    const planesAdmin = [
        { nombre: "Cuidamos 5", empleados: "3 a 5 empleados", precio: "$197.500*" },
        { nombre: "Cuidamos 10", empleados: "6 a 10 empleados", precio: "$249.000*" },
        { nombre: "Cuidamos 15", empleados: "11 a 15 empleados", precio: "$354.250*" },
        { nombre: "Cuidamos 25", empleados: "16 a 25 empleados", precio: "$630.000*" },
    ];

    return (
        <>
            {/* SECCIÓN INTRO */}
            <div className="w-full bg-purple-100 flex flex-col justify-center items-center text-center px-10 py-16">
                <h1 className="text-4xl md:text-5xl font-bold text-purple-800 mb-6 leading-tight max-w-4xl">
                    Consultoría & Asesoría Especializada
                </h1>
                <p className="text-lg md:text-xl text-purple-700 mb-8 max-w-2xl">
                    en implementación del SG-SST para micro y pequeñas empresas.
                </p>
                <p className="text-purple-700 px-8 py-4 text-2xl font-medium">
                    Consulta aquí nuestros planes SG-SST
                </p>
            </div>

            {/* BOTONES */}
            <div className="max-w-7xl mx-auto py-10 px-4 flex flex-col md:flex-row gap-4 justify-center">
                <button
                    onClick={() => setActiveTab("diseño")}
                    className={`px-8 py-5 rounded text-xl font-semibold border-2 flex items-center justify-center gap-2 ${activeTab === "diseño"
                        ? "bg-purple-600 text-white border-purple-600"
                        : "bg-white text-purple-700 border-purple-600"
                        } transition`}
                >
                    Plan Diseño <FaArrowRight />
                </button>
                <button
                    onClick={() => setActiveTab("admin")}
                    className={`px-8 py-5 rounded text-xl font-semibold border-2 flex items-center justify-center gap-2 ${activeTab === "admin"
                        ? "bg-purple-600 text-white border-purple-600"
                        : "bg-white text-purple-700 border-purple-600"
                        } transition`}
                >
                    Plan Administración <FaArrowRight />
                </button>
            </div>

            {/* CONTENIDO */}
            <div className="max-w-7xl mx-auto px-4 py-10">
                <div className="flex flex-col md:flex-row gap-10 items-start mb-12">

                    {/* TÍTULO A LA IZQUIERDA */}
                    <div className="md:w-1/2 flex items-center justify-center text-center md:text-left">
                        <h2 className="text-4xl md:text-5xl font-bold text-purple-800 leading-tight">
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
                <div className="flex flex-col gap-8">
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


            <section className="w-full bg-purple-50 py-16 px-6">
                <div className="max-w-4xl mx-auto text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-bold text-purple-800 mb-4">
                        Nuestros precios aplican
                    </h2>
                    <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                        Para empresas cuya actividad económica esté clasificada en los siguientes niveles de riesgo:
                    </p>
                </div>

                {/* Riesgos Permitidos */}
                <div className="max-w-3xl mx-auto mb-12 bg-white p-8 rounded-lg shadow border border-purple-200">
                    <h3 className="text-2xl font-semibold text-purple-800 mb-4">Riesgos aceptados</h3>
                    <ul className="list-disc pl-6 text-gray-700 text-base space-y-2 leading-relaxed">
                        <li>Riesgo 1</li>
                        <li>Riesgo 2</li>
                        <li>Riesgo 3</li>
                    </ul>
                </div>

                {/* Atención */}
                <div className="max-w-3xl mx-auto bg-purple-100 p-8 rounded-lg shadow border border-purple-300">
                    <div className="flex items-center gap-3 mb-4">
                        <FaExclamationTriangle className="text-purple-700 text-3xl" />
                        <h3 className="text-2xl font-semibold text-purple-800">¡Atención!</h3>
                    </div>
                    <p className="text-base text-gray-700 mb-6 leading-relaxed">
                        Por el momento, <span className="font-semibold text-purple-800">no estamos atendiendo</span> empresas cuyas actividades económicas estén relacionadas con:
                    </p>
                    <ul className="list-disc pl-6 text-gray-700 text-base space-y-2 leading-relaxed">
                        <li>Construcción</li>
                        <li>Fabricación y comercialización de productos químicos</li>
                        <li>Minería</li>
                        <li>Instalación de estructura metálica en construcción</li>
                        <li>Carpintería para construcción</li>
                        <li>Mantenimiento de maquinaria amarilla</li>
                    </ul>
                </div>
            </section>

            <section className="w-full bg-purple-600 py-16 px-6">
                <div className="max-w-3xl mx-auto text-center text-white">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        ¿Tienes más de 25 empleados?
                    </h2>
                    <p className="text-lg md:text-xl mb-8">
                        Escríbenos, ¡te podemos ayudar!
                    </p>

                    <button className="bg-white text-purple-700 px-8 py-3 rounded-full font-semibold text-lg flex items-center gap-3 mx-auto hover:bg-purple-100 transition">
                        <FaEnvelope /> Contáctanos
                    </button>
                </div>
            </section>


            <section className="w-full bg-purple-50 py-16 px-6">
                <div className="max-w-6xl mx-auto text-center mb-10">
                    <h2 className="text-4xl md:text-5xl font-bold text-purple-800 mb-4">
                        Nuestros Clientes
                    </h2>
                    <p className="text-lg text-gray-700">
                        Empresas que han confiado en nuestros servicios
                    </p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto items-center justify-center">
                    {/* Imagen 1 */}
                    <div className="bg-white border border-purple-200 rounded-lg p-6 flex items-center justify-center shadow">
                        <img
                            src="https://via.placeholder.com/150x80?text=Logo+1"
                            alt="Cliente 1"
                            className="max-h-16 object-contain"
                        />
                    </div>

                    {/* Imagen 2 */}
                    <div className="bg-white border border-purple-200 rounded-lg p-6 flex items-center justify-center shadow">
                        <img
                            src="https://via.placeholder.com/150x80?text=Logo+2"
                            alt="Cliente 2"
                            className="max-h-16 object-contain"
                        />
                    </div>

                    {/* Imagen 3 */}
                    <div className="bg-white border border-purple-200 rounded-lg p-6 flex items-center justify-center shadow">
                        <img
                            src="https://via.placeholder.com/150x80?text=Logo+3"
                            alt="Cliente 3"
                            className="max-h-16 object-contain"
                        />
                    </div>

                    {/* Imagen 4 */}
                    <div className="bg-white border border-purple-200 rounded-lg p-6 flex items-center justify-center shadow">
                        <img
                            src="https://via.placeholder.com/150x80?text=Logo+4"
                            alt="Cliente 4"
                            className="max-h-16 object-contain"
                        />
                    </div>
                </div>
            </section>

            <PreguntasFrecuentes/>
        </>
    );
};

export default Planes;
