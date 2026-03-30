import { useEffect, useState } from "react";
import { motion } from 'framer-motion';

function Hero() {
    const fullText = "DESARROLLADORA FULL STACK";
    const [text, setText] = useState("");
    const [index, setIndex] = useState(0);

    // Efecto de escritura
    useEffect(() => {
        if(index < fullText.length) {
            const timeout = setTimeout(() => {
                setText((prev) => prev + fullText[index]);
                setIndex(index + 1);
            }, 60);

            return () => clearTimeout(timeout);
        }

    }, [index]);

    return (
        <>
            <section className="relative min-h-screen flex items-center bg-bg text-text overflow-hidden">

                <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
                    {/* Glow */}
                    <div className="absolute top-[30%] right-[-10%] w-150 h-150 bg-violet/30 blur-[200px] opacity-50 rounded-full"/>
                    <div className="absolute bottom-[10%] left-[-10%] w-125 h-125 bg-blue-cold/20 blur-[200px] opacity-50 rounded-full"/>

                    {/* Fondo */}
                    <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#ffffff_1px,transparent_1px)] bg-size-[20px_20px]"/>

                </div>

                
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                        duration: 0.8,
                        ease: "easeOut"
                    }}
                    className="container mx-auto py-30 px-10 sm:px-10 lg:px-0 flex flex-col items-start gap-6"
                >
                    
                    <span className="text-violet-bright uppercase tracking-wider sm:text-xs">
                        ─── Disponible para oportunidades
                    </span>
                    
                    <h1 className="font-title text-5xl lg:text-7xl font-extrabold hover:tracking-wide transition-all duration-300">
                        Alina <br />
                        <span className="bg-linear-to-r from-violet-bright via-rose to-blue-cold bg-size-[300%_auto] bg-clip-text text-transparent animate-gradient-x drop-shadow-[0_0_15px_rgba(168,85,247,0.6)]">
                            Marquez
                        </span>
                    </h1>

                    <span className="text-text-dim font-mono uppercase tracking-widest text-md">
                        {text}
                        <span className="animate-blink ml-1">|</span>
                    </span>

                    <p className="text-text-dim font-sans text-md max-w-lg w-full">
                        Orientada al backend, apasionada por la lógica y la construcción de
                        soluciones sólidas. Actualmente expandiendo mis conocimientos en
                        nuevas áreas y buscando crecer profesionalmente.
                    </p>

                    <div className="flex gap-4 mt-6">
                        {/* Estructura del botón + borde */}
                        <a
                            href="#"
                            className="btn-clip btn-glow relative inline-block px-8 py-3
                                    border border-violet-bright
                                    font-mono text-xs uppercase tracking-widest text-white
                                    overflow-hidden group transition-all duration-300"
                        >
                            <span className="relative z-10">Ver proyectos</span>{" "}
                            {/*Para que el texto este arriba del fondo*/}
                            {/* Fondo animado */}
                            <span
                                className="absolute inset-0 bg-violet
                                    scale-x-0 origin-left
                                    transition-transform duration-500 ease-out
                                    group-hover:scale-x-100"
                            ></span>
                        </a>

                        <motion.div whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 300 }}>
                            <button className="border border-violet-bright text-violet-bright bg-violet-bright/10 px-6 py-3 font-medium hover:border-violet-bright/50 hover:bg-violet-bright/20 transition-colors">
                                Contactar
                            </button>
                        </motion.div>
                    </div>
                </motion.div>
            </section>
        </>
    );
}

export default Hero;
