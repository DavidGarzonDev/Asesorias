import React from 'react'

const Clientes = () => {
    return (
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
    )
}

export default Clientes