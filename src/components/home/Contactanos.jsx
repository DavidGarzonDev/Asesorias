import React from 'react'
import { FaEnvelope } from 'react-icons/fa'

const Contactanos = () => {
    return (
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
    )
}

export default Contactanos