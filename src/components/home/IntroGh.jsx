import React from 'react'
import { GoArrowDown } from 'react-icons/go'

const IntroGh = () => {
    return (
        <div
            className="relative w-full h-[650px] flex items-center
        justify-center bg-cover bg-center text-center"
            style={{ backgroundImage: `url("/recursos.webp")` }}

        >
            {/* Capa morada semitransparente */}
            <div className="absolute inset-0 bg-purple-900/50"></div>

            {/* Contenido centrado */}
            <div className="relative z-10 max-w-4xl px-6 mt-50">
                <h1 className="text-6xl  font-bold text-white mb-6 leading-tight">
                    Consultoría Especializada en Gestión Humana
                </h1>
        
                <p className="text-xl md:text-3xl font-medium text-white mb-10">
                    Consulta aquí nuestros servicios de Gestión Humana
                </p>
                <GoArrowDown className="text-5xl md:text-6xl text-white animate-bounce mx-auto" />
            </div>
        </div>
    )
}

export default IntroGh
