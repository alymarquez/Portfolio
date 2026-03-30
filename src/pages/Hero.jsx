import { useEffect, useState } from "react";

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
            <section className="min-h-screen flex items-center bg-bg text-text">
                <div className="container mx-auto py-30 px-10 sm:px-10 lg:px-0 flex flex-col items-start gap-6">
                    <span className="text-violet-bright uppercase tracking-wider sm:text-xs">
                        Disponible para oportunidades
                    </span>
                    <h1 className="font-title text-5xl lg:text-7xl font-extrabold">
                        Alina <br />
                        <span className="bg-linear-to-r from-violet-bright to-blue-cold bg-clip-text text-transparent">
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

                        <button className="border border-violet-bright text-violet-bright bg-violet-bright/10 px-6 py-3 font-medium hover:border-violet-bright/50 hover:bg-violet-bright/20 transition-colors">
                            Contactar
                        </button>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Hero;
