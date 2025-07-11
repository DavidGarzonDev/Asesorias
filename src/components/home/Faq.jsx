import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const PreguntasFrecuentes = () => {
    const preguntas = [
        {
            pregunta: "¿Qué es Seguridad y Salud en el Trabajo (SST)?",
            respuesta: "Es un conjunto de actividades destinadas a proteger la salud y la seguridad de los trabajadores en su entorno laboral.",
        },
        {
            pregunta: "¿En qué consiste el Sistema de Gestión de la Seguridad y Salud en el Trabajo (SG-SST)?",
            respuesta: "Es un proceso lógico y por etapas basado en la mejora continua que busca anticipar, reconocer, evaluar y controlar los riesgos que puedan afectar la salud o seguridad de los trabajadores.",
        },
        {
            pregunta: "¿Qué requisitos debe cumplir la persona encargada de Diseñar el SG-SST para mi empresa?",
            respuesta: "Debe ser una persona capacitada o con licencia en Salud Ocupacional o Seguridad y Salud en el Trabajo, conforme a la normatividad vigente.",
        },
        {
            pregunta: "¿Debo implementar el SG-SST en mi empresa?",
            respuesta: "Sí, todas las empresas en Colombia, sin importar su tamaño o número de empleados, deben implementar el SG-SST.",
        },
        {
            pregunta: "¿Si solo tengo empleados por prestación de servicios tengo que hacer el SG-SST?",
            respuesta: "Sí, el SG-SST aplica también a contratistas y personal por prestación de servicios, de acuerdo a la legislación.",
        },
        {
            pregunta: "¿Si soy una entidad sin ánimo de lucro o una unidad residencial (PH) tengo que hacer el SG-SST?",
            respuesta: "Sí, cualquier entidad que tenga personal a cargo, independiente de su naturaleza jurídica, debe cumplir con el SG-SST.",
        },
    ];

    const [openIndex, setOpenIndex] = useState(null);

    const togglePregunta = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="w-full bg-purple-100 py-40 px-6">
            <div className="max-w-5xl mx-auto text-center mb-">
                <h2 className="text-4xl md:text-5xl font-bold text-purple-800 mb-4">
                    Preguntas Frecuentes
                </h2>
                <p className="text-lg text-gray-700">
                    Encontrarás 6 de las preguntas que debes saber para crear el SG-SST
                </p>
            </div>

            <div className="max-w-4xl mx-auto space-y-6 text-left">
                {preguntas.map((item, index) => (
                    <div
                        key={index}
                        className="bg-white p-6 rounded-lg shadow border border-purple-200 cursor-pointer"
                        onClick={() => togglePregunta(index)}
                    >
                        <div className="flex justify-between items-center">
                            <h3 className="text-lg md:text-xl font-semibold text-purple-800">
                                {item.pregunta}
                            </h3>
                            {openIndex === index ? (
                                <FaChevronUp className="text-purple-700" />
                            ) : (
                                <FaChevronDown className="text-purple-700" />
                            )}
                        </div>
                        {openIndex === index && (
                            <p className="mt-4 text-gray-700 leading-relaxed text-sm md:text-base">
                                {item.respuesta}
                            </p>
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
};

export default PreguntasFrecuentes;
