import { motion } from "framer-motion";
import { FiGithub, FiLinkedin } from "react-icons/fi";

const navLinks = [
    { name: "Sobre mí", href: "#about" },
    { name: "Stack", href: "#stack" },
    { name: "Proyectos", href: "#projects" },
    { name: "Experiencia", href: "#experience" },
    { name: "Contacto", href: "#contact" },
];

function Footer() {
    return (
        <footer className="relative bg-bg text-text border-t border-white/5 px-6 md:px-10 lg:px-20 py-14 overflow-hidden">

            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-100 h-px bg-linear-to-r from-transparent via-violet-bright/20 to-transparent" />

            <div className="container mx-auto max-w-6xl">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-6 items-start">

                    {/* Logo + tagline */}
                    <div className="flex flex-col gap-3">
                        <span className="font-mono text-xs font-bold uppercase tracking-wider text-text">AM_DEV</span>
                        <p className="font-mono text-[9px] text-text-dim/30 uppercase tracking-[0.2em] leading-relaxed max-w-45">
                            Full Stack Developer<br />Buenos Aires, ARG
                        </p>
                    </div>

                    {/* Nav links */}
                    <nav className="flex flex-col gap-3">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="font-mono text-[9px] uppercase tracking-[0.25em] text-text-dim/30 hover:text-violet-bright transition-colors duration-300 w-fit"
                            >
                                {link.name}
                            </a>
                        ))}
                    </nav>

                    {/* Socials */}
                    <div className="flex flex-col gap-5 md:items-end">
                        <div className="flex items-center gap-4">
                            <a
                                href="https://github.com/alymarquez"
                                target="_blank"
                                rel="noreferrer"
                                className="text-text-dim/30 hover:text-violet-bright transition-colors"
                                aria-label="GitHub"
                            >
                                <FiGithub className="text-base" />
                            </a>
                            <a
                                href="https://linkedin.com/in/alymarquez"
                                target="_blank"
                                rel="noreferrer"
                                className="text-text-dim/30 hover:text-violet-bright transition-colors"
                                aria-label="LinkedIn"
                            >
                                <FiLinkedin className="text-base" />
                            </a>
                        </div>

                        {/* Status */}
                        <div className="flex items-center gap-2">
                            <span className="relative flex h-1.5 w-1.5">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-violet-bright opacity-60" />
                                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-violet-bright" />
                            </span>
                            <span className="font-mono text-[8px] uppercase tracking-[0.3em] text-text-dim/25">
                                Open to work
                            </span>
                        </div>
                    </div>

                </div>

                {/* Bottom bar */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="mt-12 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-3"
                >
                    <span className="font-mono text-[8px] text-text-dim/20 uppercase tracking-[0.3em]">
                        © 2026 · Alina Marquez
                    </span>
                    <span className="font-mono text-[8px] text-text-dim/15 uppercase tracking-[0.3em]">
                        Diseñado y desarrollado con ♥
                    </span>
                </motion.div>

            </div>
        </footer>
    );
}

export default Footer;