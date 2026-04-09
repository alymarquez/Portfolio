import { useEffect, useState } from "react";
import { motion } from 'framer-motion';
import DarkVeil   from './../components/DarkVeil';

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
                <div className="fixed inset-0 z-0">
                    <DarkVeil hueShift={340} noiseIntensity={0} scanlineIntensity={0} speed={1} scanlineFrequency={0} warpAmount={1} />
                </div>
            
                <div className="container z-10 mx-auto px-6 md:px-10 lg:px-20 max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-12 items-center py-32 min-h-screen">
            
                    {/* TEXTO */}
                    <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.9, ease: "easeOut" }}
                    className="flex flex-col items-start gap-7 pointer-events-none"
                    >
                    <motion.div initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }} className="flex items-center gap-3">
                        <span className="relative flex h-1.5 w-1.5">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-violet-bright opacity-75" />
                        <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-violet-bright" />
                        </span>
                        <span className="font-mono text-[9px] uppercase tracking-[0.35em] text-text-dim">Disponible para oportunidades</span>
                    </motion.div>
            
                    <h1 className="pointer-events-auto font-title text-6xl sm:text-7xl lg:text-8xl font-extrabold leading-none tracking-tight hover:tracking-wide transition-all duration-500">
                        Alina{" "}
                        <span className="bg-linear-to-r from-violet-bright via-rose to-blue-cold bg-size-[300%_auto] bg-clip-text text-transparent animate-gradient-x drop-shadow-[0_0_20px_rgba(168,85,247,0.5)]">
                        Marquez
                        </span>
                    </h1>
            
                    <span className="font-mono text-[10px] uppercase tracking-[0.35em] text-text-dim/60 h-4">
                        {text}<span className="animate-blink ml-0.5">|</span>
                    </span>
            
                    <p className="text-text-dim text-sm leading-[1.9] max-w-md font-light">
                        Orientada al backend, apasionada por la lógica y la construcción de
                        soluciones sólidas. Buscando crecer en un equipo real.
                    </p>
            
                    <div className="flex flex-wrap gap-4 mt-4 pointer-events-auto">
                        <a href="#projects" className="btn-clip btn-glow relative inline-flex items-center px-7 py-3 border border-violet-bright font-mono text-[10px] uppercase tracking-widest text-white overflow-hidden group transition-all duration-300">
                        <span className="relative z-10">Ver proyectos</span>
                        <span className="absolute inset-0 bg-violet scale-x-0 origin-left transition-transform duration-500 ease-out group-hover:scale-x-100" />
                        </a>
                        <a href="#contact" className="relative inline-flex items-center px-7 py-3 border border-white/10 font-mono text-[10px] uppercase tracking-widest text-text-dim hover:text-white hover:border-white/25 transition-all duration-300">
                        Contactar
                        </a>
                    </div>
                    </motion.div>
                </div>
            
                {/* Scroll */}
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5 }} className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10">
                    <span className="font-mono text-[8px] uppercase tracking-[0.4em] text-text-dim/20">scroll</span>
                    <motion.div animate={{ y: [0, 6, 0] }} transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }} className="w-px h-8 bg-linear-to-b from-violet-bright/40 to-transparent" />
                </motion.div>
                </section>
        </>
    );
}

export default Hero;
