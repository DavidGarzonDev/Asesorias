import React from 'react'
import { FaExclamationTriangle } from 'react-icons/fa'

const RiesgosPermitidos = () => {
    return (
        <section className="w-full bg-purple-50 py-16 px-6">
            

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
    )
}

export default RiesgosPermitidos