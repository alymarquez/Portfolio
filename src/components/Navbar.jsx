import { useState } from "react";
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
  return (
    <>
        <nav className="sticky top-0 backdrop-blur z-50 bg-bg/10 py-5 ">
            <div className="container mx-auto flex items-center justify-between">
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
                            className={`relative z-10 text-[10px] font-mono uppercase tracking-widest transition-colors duration-500 ${
                            hoveredIndex === index ? "text-white" : "text-text-dim"
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
                                className="absolute inset-0 bg-white/5 border border-white/10 rounded-xl z-0"                            />
                            )}
                        </AnimatePresence>
                        </li>
                    ))}
                    </ul>
            </div>

            {/* BORDE GRADIENTE */}
            <div className="absolute bottom-0 left-0 w-full h-px bg-linear-to-r from-violet via-rose to-blue-cold opacity-50" />
        </nav>
    </>
  )
}

export default Navbar