import React from 'react'
import { GoArrowDown } from 'react-icons/go'

const Intro = () => {
    return (
        <div className="w-full bg-purple-100 flex flex-col justify-center items-center text-center px-10 mt-33  py-20 mb-0 md:py-30">
            <h1 className="text-6xl md:text-6xl font-bold text-purple-800 mb-6 leading-tight max-w-4xl -mt-11">
                Consultoría & Asesoría Especializada
            </h1>
            <p className="text-3xl md:text-3xl text-purple-700 mb-8 max-w-2xl">
                en implementación del SG-SST para micro y pequeñas empresas.
            </p>
            <p className="text-purple-700 px-8 py-4 text-3xl font-medium">
                Consulta aquí nuestros planes SG-SST
            </p>
            <GoArrowDown className="text-6xl md:text-6xl font-bold text-purple-800  leading-tight max-w-4xl animate-bounce mt-10"/>
        </div>
    )
}

export default Intro