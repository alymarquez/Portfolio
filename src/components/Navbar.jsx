import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
    { name: "Sobre mí", href: "#about" },
    { name: "Stack", href: "#stack" },
    { name: "Proyectos", href: "#projects" },
    { name: "Experiencia", href: "#experience" },
    { name: "Contacto", href: "#contact" },
];

function Navbar() {
    // Rastrear que link tiene el mouse encima para el hover
    const [hoveredIndex, setHoveredIndex] = useState(null);
    const [menuOpen, setMenuOpen] = useState(false);

    // Cerrar menú al hacer scroll o resize
    useEffect(() => {
        const close = () => setMenuOpen(false);
        window.addEventListener("resize", close);
        return () => window.removeEventListener("resize", close);
    }, []);

    // Evitar scroll cuando el menú está abierto
    useEffect(() => {
        document.body.style.overflow = menuOpen ? "hidden" : "";
        return () => { document.body.style.overflow = ""; };
    }, [menuOpen]);

    return (
        <>
            <nav className="sticky top-0 backdrop-blur z-50 bg-bg/10 py-5">
                <div className="container mx-auto px-6 md:px-10 flex items-center justify-between">
                    {/* LOGO */}
                    <div className="text-text font-mono text-xs font-bold uppercase tracking-wider">AM_DEV</div>

                    {/* NAV */}
                    <ul className="hidden md:flex items-center gap-2">
                        {navLinks.map((link, index) => (
                            <li
                                key={link.name}
                                className="relative px-4 py-2"
                                onMouseEnter={() => setHoveredIndex(index)} // Al entrar al link, se guarda su index
                                onMouseLeave={() => setHoveredIndex(null)} // Al salir, se resetea el index
                            >
                                <a
                                    href={link.href}
                                    className={`relative z-10 text-[10px] font-mono uppercase tracking-widest transition-colors duration-300 ${hoveredIndex === index ? "text-white" : "text-text-dim"
                                        }`}
                                >
                                    {link.name}
                                </a>

                                <AnimatePresence>
                                    {hoveredIndex === index && (
                                        <motion.div
                                            layoutId="nav-pill"
                                            initial={{ opacity: 0, scale: 0.9 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            exit={{ opacity: 0, scale: 0.9 }}
                                            transition={{ duration: 0.3, ease: "easeInOut" }}
                                            className="absolute inset-0 bg-white/5 border border-white/10 rounded-xl z-0" />
                                    )}
                                </AnimatePresence>
                            </li>
                        ))}
                    </ul>

                    {/* BOTÓN HAMBURGUESA MOBILE */}
                    <button
                        className="md:hidden flex flex-col justify-center items-center w-8 h-8 gap-1.5 z-50 relative"
                        onClick={() => setMenuOpen((prev) => !prev)}
                        aria-label="Toggle menu"
                    >
                        <motion.span
                            animate={menuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
                            transition={{ duration: 0.3 }}
                            className="block w-5 h-px bg-text-dim origin-center"
                        />
                        <motion.span
                            animate={menuOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
                            transition={{ duration: 0.2 }}
                            className="block w-5 h-px bg-text-dim origin-center"
                        />
                        <motion.span
                            animate={menuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
                            transition={{ duration: 0.3 }}
                            className="block w-5 h-px bg-text-dim origin-center"
                        />
                    </button>
                </div>

                {/* BORDE GRADIENTE */}
                <div className="absolute bottom-0 left-0 w-full h-px bg-linear-to-r from-violet via-rose to-blue-cold opacity-50" />
            </nav>

            {/* MENÚ MOBILE FULLSCREEN */}
            <AnimatePresence>
                {menuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.35, ease: "easeInOut" }}
                        className="fixed inset-0 z-40 bg-bg/95 backdrop-blur-xl flex flex-col items-center justify-center gap-2 md:hidden"
                    >
                        {/* Glow  */}
                        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-violet-bright/10 blur-[100px] rounded-full pointer-events-none" />

                        <ul className="flex flex-col items-center gap-6 relative z-10">
                            {navLinks.map((link, index) => (
                                <motion.li
                                    key={link.name}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.07, duration: 0.4 }}
                                >
                                    <a
                                        href={link.href}
                                        onClick={() => setMenuOpen(false)}
                                        className="font-mono text-sm uppercase tracking-[0.3em] text-text-dim hover:text-violet-bright transition-colors duration-300"
                                    >
                                        <span className="text-violet-bright/40 mr-3 text-xs">0{index + 1}</span>
                                        {link.name}
                                    </a>
                                </motion.li>
                            ))}
                        </ul>

                        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-16 h-px bg-linear-to-r from-violet-bright/40 to-transparent" />
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    )
}

export default Navbar