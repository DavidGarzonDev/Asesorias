import React from 'react'

const Intro = () => {
    return (
        <div className="w-full bg-purple-100 flex flex-col justify-center items-center text-center px-10 mt-50  py-10 mb-40">
            <h1 className="text-6xl md:text-6xl font-bold text-purple-800 mb-6 leading-tight max-w-4xl">
                Consultoría & Asesoría Especializada
            </h1>
            <p className="text-lg md:text-xl text-purple-700 mb-8 max-w-2xl">
                en implementación del SG-SST para micro y pequeñas empresas.
            </p>
            <p className="text-purple-700 px-8 py-4 text-2xl font-medium">
                Consulta aquí nuestros planes SG-SST
            </p>
        </div>
    )
}

export default Intro