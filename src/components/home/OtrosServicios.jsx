import React, { useEffect, useRef, useState } from "react";
import {
    FaSearch,
    FaChalkboardTeacher,
    FaRoad,
    FaClipboardCheck,
    FaChevronLeft,
    FaChevronRight,
} from "react-icons/fa";

const servicios = [
    {
        nombre: "AUDITORÍAS",
        icono: <FaClipboardCheck />,
        descripcion:
            "Realizamos auditorías integrales para verificar el cumplimiento de normativas y mejorar la gestión organizacional.",
        detalles: [
            "ISO 9001",
            "ISO 14001",
            "ISO 22301",
            "ISO 27001",
            "ISO 39001",
            "ISO 45001",
            "Auditoría PESV",
            "Auditoría RUC",
            "Auditoría SGSST",
        ],
    },
    {
        nombre: "INVESTIGACIONES DE ATEL",
        icono: <FaSearch />,
        descripcion:
            "Análisis detallado de accidentes de trabajo y enfermedades laborales para identificar causas y prevenir futuros incidentes.",
    },
    {
        nombre: "CAPACITACIONES EXPRES",
        icono: <FaChalkboardTeacher />,
        descripcion:
            "Capacitaciones rápidas y efectivas adaptadas a tu empresa en temas de seguridad y salud en el trabajo.",
    },
    {
        nombre: "IMPLEMENTACIÓN PESV",
        icono: <FaRoad />,
        descripcion:
            "Diseño e implementación de planes estratégicos de seguridad vial para reducir riesgos en la movilidad de tu organización.",
    },
];

export const OtrosServicios = () => {
    const [modalOpen, setModalOpen] = useState(false);
    const [servicioSeleccionado, setServicioSeleccionado] = useState(null);

    const scrollRef = useRef(null);
    const rafRef = useRef(null);
    const isUserInteractingRef = useRef(false); // pausa mientras el usuario interactúa
    const resumeTimeoutRef = useRef(null);

    // Creamos una lista duplicada para dar sensación de loop infinito
    const items = [...servicios, ...servicios];

    // velocidad en pixeles por frame (~60fps). Ajusta si quieres más lento/rápido
    const speed = 0.6;

    useEffect(() => {
        const el = scrollRef.current;
        if (!el) return;

        // Función que anima el scroll incrementalmente
        const step = () => {
            // si el usuario está interactuando, no auto-scroll
            if (!isUserInteractingRef.current) {
                // threshold = mitad del scrollWidth (porque duplicamos items)
                const threshold = el.scrollWidth / 2;

                // avanzar
                el.scrollLeft += speed;

                // si llegamos o pasamos la mitad, reseteamos restando la mitad para loop suave
                if (el.scrollLeft >= threshold) {
                    el.scrollLeft = el.scrollLeft - threshold;
                }
            }
            rafRef.current = requestAnimationFrame(step);
        };

        // inicia animación
        rafRef.current = requestAnimationFrame(step);

        // Limpieza
        return () => {
            cancelAnimationFrame(rafRef.current);
            if (resumeTimeoutRef.current) clearTimeout(resumeTimeoutRef.current);
        };
    }, []); // ejecuta solo al montar

    // Pausar autoplay por interacción del usuario
    useEffect(() => {
        const el = scrollRef.current;
        if (!el) return;

        const pause = () => {
            isUserInteractingRef.current = true;
            if (resumeTimeoutRef.current) clearTimeout(resumeTimeoutRef.current);
        };

        const resumeDelayed = () => {
            // reanudamos después de 1.2s sin interacción
            if (resumeTimeoutRef.current) clearTimeout(resumeTimeoutRef.current);
            resumeTimeoutRef.current = setTimeout(() => {
                isUserInteractingRef.current = false;
            }, 1200);
        };

        // handlers
        const onPointerDown = () => {
            pause();
        };
        const onPointerUp = () => {
            resumeDelayed();
        };
        const onMouseEnter = () => {
            pause();
        };
        const onMouseLeave = () => {
            resumeDelayed();
        };
        const onWheel = () => {
            pause();
            resumeDelayed();
        };
        const onTouchStart = () => {
            pause();
        };
        const onTouchEnd = () => {
            resumeDelayed();
        };

        // attach
        el.addEventListener("pointerdown", onPointerDown, { passive: true });
        window.addEventListener("pointerup", onPointerUp, { passive: true });
        el.addEventListener("mouseenter", onMouseEnter);
        el.addEventListener("mouseleave", onMouseLeave);
        el.addEventListener("wheel", onWheel, { passive: true });
        el.addEventListener("touchstart", onTouchStart, { passive: true });
        el.addEventListener("touchend", onTouchEnd, { passive: true });

        return () => {
            el.removeEventListener("pointerdown", onPointerDown);
            window.removeEventListener("pointerup", onPointerUp);
            el.removeEventListener("mouseenter", onMouseEnter);
            el.removeEventListener("mouseleave", onMouseLeave);
            el.removeEventListener("wheel", onWheel);
            el.removeEventListener("touchstart", onTouchStart);
            el.removeEventListener("touchend", onTouchEnd);
            if (resumeTimeoutRef.current) clearTimeout(resumeTimeoutRef.current);
        };
    }, []);

    // botones nav manual
    const scrollLeft = () => {
        const el = scrollRef.current;
        if (!el) return;
        // pausa temporal para evitar fight between user action and autoplay
        isUserInteractingRef.current = true;
        el.scrollBy({ left: -300, behavior: "smooth" });
        // reanudar luego
        if (resumeTimeoutRef.current) clearTimeout(resumeTimeoutRef.current);
        resumeTimeoutRef.current = setTimeout(() => {
            isUserInteractingRef.current = false;
        }, 800);
    };

    const scrollRight = () => {
        const el = scrollRef.current;
        if (!el) return;
        isUserInteractingRef.current = true;
        el.scrollBy({ left: 300, behavior: "smooth" });
        if (resumeTimeoutRef.current) clearTimeout(resumeTimeoutRef.current);
        resumeTimeoutRef.current = setTimeout(() => {
            isUserInteractingRef.current = false;
        }, 800);
    };

    // cerrar modal al presionar Esc
    useEffect(() => {
        const onKey = (e) => {
            if (e.key === "Escape") setModalOpen(false);
        };
        window.addEventListener("keydown", onKey);
        return () => window.removeEventListener("keydown", onKey);
    }, []);

    // Cerrar modal si se hace click fuera (overlay). El overlay ocupa todo el viewport y NO tiene fondo.
    const handleOverlayClick = (e) => {
        if (e.target.id === "overlay") {
            setModalOpen(false);
        }
    };

    return (
        <section className="bg-purple-50 py-12 px-4 text-center relative">
            <h2 className="text-4xl font-bold text-purple-800 mb-10">OTROS SERVICIOS SST</h2>

            <div className="relative w-full max-w-6xl mx-auto">
                {/* Botón Izquierda */}
                <button
                    onClick={scrollLeft}
                    aria-label="Anterior"
                    className="absolute left-0 top-1/2 -translate-y-1/2 bg-purple-600 text-white p-3 rounded-full shadow-md hover:bg-purple-700 z-10"
                >
                    <FaChevronLeft />
                </button>

                {/* Carrusel: duplicamos items para loop visual */}
                <div
                    ref={scrollRef}
                    className="overflow-x-auto scrollbar-none px-12"
                    // estilo pointer cursor para dejar claro que se puede arrastrar
                    style={{ cursor: "grab" }}
                >
                    <div className="flex items-center gap-10">
                        {items.map((servicio, index) => (
                            <div
                                key={index}
                                onClick={() => {
                                    setServicioSeleccionado(servicio);
                                    setModalOpen(true);
                                }}
                                className="cursor-pointer w-60 min-w-[15rem] h-60 flex-shrink-0 flex flex-col items-center justify-center bg-purple-600 text-white p-4 rounded-lg shadow-md hover:bg-purple-700 transition duration-300"
                            >
                                <div className="bg-white text-purple-700 w-24 h-24 rounded-full flex items-center justify-center mb-4 text-[2.4rem]">
                                    {servicio.icono}
                                </div>
                                <span className="text-center text-base font-semibold px-2 leading-snug">
                                    {servicio.nombre}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Botón Derecha */}
                <button
                    onClick={scrollRight}
                    aria-label="Siguiente"
                    className="absolute right-0 top-1/2 -translate-y-1/2 bg-purple-600 text-white p-3 rounded-full shadow-md hover:bg-purple-700 z-10"
                >
                    <FaChevronRight />
                </button>
            </div>

            {/* Modal (sin fondo negro). overlay ocupa todo el viewport, cerrar si click fuera) */}
            {modalOpen && (
                <div
                    id="overlay"
                    onClick={handleOverlayClick}
                    className="fixed inset-0 flex items-center justify-center z-50"
                    role="dialog"
                    aria-modal="true"
                >
                    <div className="bg-white p-6 rounded-xl shadow-2xl max-w-sm w-full relative">
                        <h3 className="text-2xl font-bold text-purple-700 mb-4">
                            {servicioSeleccionado?.nombre}
                        </h3>

                        {servicioSeleccionado?.detalles ? (
                            <ul className="text-gray-700 text-left list-disc list-inside mb-6">
                                {servicioSeleccionado.detalles.map((item, i) => (
                                    <li key={i}>{item}</li>
                                ))}
                            </ul>
                        ) : (
                            <p className="text-gray-700 mb-6">{servicioSeleccionado?.descripcion}</p>
                        )}

                        <div className="flex justify-end">
                            <button
                                onClick={() => setModalOpen(false)}
                                className="px-5 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition"
                            >
                                Cerrar
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};

export default OtrosServicios;
