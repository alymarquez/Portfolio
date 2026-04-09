import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    FiGithub,
    FiLinkedin,
    FiSend,
    FiArrowUpRight,
    FiCopy,
    FiCheck,
} from "react-icons/fi";

const SOCIALS = [
    { label: "GitHub", value: "alymarquez", href: "https://github.com/alymarquez", icon: FiGithub },
    { label: "LinkedIn", value: "Alina Marquez", href: "https://linkedin.com/in/alina-marquez", icon: FiLinkedin },
];

function Contact() {
    const [status, setStatus] = useState("");
    const [copied, setCopied] = useState(false);

    // Datos del email protegidos
    const user = "alinamarquez505";
    const domain = "gmail.com";
    const fullEmail = `${user}@${domain}`;

    const handleCopy = () => {
        navigator.clipboard.writeText(fullEmail).then(() => {
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus("sending");

        const form = e.target;
        const data = new FormData(form);

        const response = await fetch("https://formspree.io/f/mjgpqkkk", {
            method: "POST",
            body: data,
            headers: { 'Accept': 'application/json' }
        });

        if (response.ok) {
            setStatus("success");
            form.reset();
            setTimeout(() => setStatus(""), 5000);
        } else {
            setStatus("error");
        }
    };

    return (
        <section id="contact" className="relative min-h-screen flex flex-col justify-center bg-bg-secondary text-text px-6 md:px-10 lg:px-20 py-28 overflow-hidden">

            {/* Glows */}
            <div className="absolute bottom-[-10%] right-[-10%] w-150 h-150 bg-violet-bright/7 blur-[140px] rounded-full pointer-events-none" />
            <div className="absolute top-[20%] left-[-5%] w-75 h-75 bg-rose/4 blur-[110px] rounded-full pointer-events-none" />

            <div className="container mx-auto max-w-6xl relative z-10">

                {/* Section header */}
                <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="flex items-center gap-4 mb-20">
                    <span className="font-mono text-[9px] uppercase tracking-[0.35em] text-violet-bright">05</span>
                    <div className="h-px w-10 bg-violet-bright/30" />
                    <span className="font-mono text-[9px] uppercase tracking-[0.35em] text-text-dim/40">Contacto</span>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">

                    {/* Columna Izquierda: Textos y Socials */}
                    <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
                        <h2 className="font-title text-4xl md:text-5xl font-bold tracking-tight leading-tight mb-6">
                            Hablemos.
                            <span className="text-violet-bright font-light italic block mt-1 text-3xl md:text-4xl">Estoy disponible.</span>
                        </h2>

                        <p className="text-text-dim text-sm leading-[1.9] font-light max-w-sm mb-10">
                            Buscando mi primera oportunidad formal. Si tenés una propuesta o querés conectar, escribime.
                        </p>

                        {/* Botón de Copiar Email integrado */}
                        <div className="mb-12">
                            <button onClick={handleCopy} className="flex items-center gap-3 group w-fit">
                                <div className="flex items-center justify-center w-8 h-8 rounded-full border border-violet-bright/20 group-hover:border-violet-bright/50 transition-colors">
                                    <AnimatePresence mode="wait">
                                        {copied ? (
                                            <motion.div key="check" initial={{ scale: 0 }} animate={{ scale: 1 }} exit={{ scale: 0 }}>
                                                <FiCheck className="text-violet-bright text-xs" />
                                            </motion.div>
                                        ) : (
                                            <motion.div key="mail" initial={{ scale: 0 }} animate={{ scale: 1 }} exit={{ scale: 0 }}>
                                                <FiCopy className="text-violet-bright/50 group-hover:text-violet-bright text-xs" />
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                                <span className="font-mono text-[10px] uppercase tracking-widest text-text-dim/60 group-hover:text-text transition-colors">
                                    {copied ? "Dirección copiada" : "Copiar email profesional"}
                                </span>
                            </button>
                        </div>

                        <div className="flex flex-col gap-5">
                            {SOCIALS.map((s, i) => {
                                const Icon = s.icon;
                                return (
                                    <motion.a
                                        key={s.label}
                                        href={s.href}
                                        target="_blank"
                                        rel="noreferrer"
                                        initial={{ opacity: 0, x: -16 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ delay: i * 0.08 }}
                                        viewport={{ once: true }}
                                        className="group flex items-center gap-4 w-fit"
                                    >
                                        <Icon className="text-violet-bright/30 group-hover:text-violet-bright transition-colors text-sm" />
                                        <div>
                                            <span className="font-mono text-[8px] uppercase tracking-[0.2em] text-text-dim/25 block">{s.label}</span>
                                            <span className="font-mono text-[10px] text-text-dim/50 group-hover:text-violet-bright transition-colors">
                                                {s.value} <FiArrowUpRight className="inline ml-0.5 opacity-0 group-hover:opacity-100 transition-opacity text-xs" />
                                            </span>
                                        </div>
                                    </motion.a>
                                );
                            })}
                        </div>
                    </motion.div>

                    {/* Columna Derecha: Formulario */}
                    <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="relative">
                        <div className="absolute -inset-4 bg-violet-bright/4 blur-2xl rounded-2xl pointer-events-none" />

                        <div className="relative border border-white/5 bg-linear-to-br from-white/4 to-transparent rounded-sm p-8 backdrop-blur-sm">
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div>
                                    <label htmlFor="name" className="block font-mono text-[10px] uppercase tracking-widest text-text-dim/40 mb-2">Nombre</label>
                                    <input required type="text" name="name" id="name" className="w-full bg-white/5 border border-white/10 px-4 py-3 text-sm font-light focus:outline-none focus:border-violet-bright/50 transition-colors" />
                                </div>

                                <div>
                                    <label htmlFor="email" className="block font-mono text-[10px] uppercase tracking-widest text-text-dim/40 mb-2">Tu Email</label>
                                    <input required type="email" name="email" id="email" className="w-full bg-white/5 border border-white/10 px-4 py-3 text-sm font-light focus:outline-none focus:border-violet-bright/50 transition-colors" />
                                </div>

                                <div>
                                    <label htmlFor="message" className="block font-mono text-[10px] uppercase tracking-widest text-text-dim/40 mb-2">Mensaje</label>
                                    <textarea required name="message" id="message" rows="4" className="w-full bg-white/5 border border-white/10 px-4 py-3 text-sm font-light focus:outline-none focus:border-violet-bright/50 transition-colors resize-none" />
                                </div>

                                <button
                                    type="submit"
                                    disabled={status === "sending"}
                                    className="btn-clip relative inline-flex items-center justify-center gap-2 w-full px-7 py-4 border border-violet-bright/40 font-mono text-[10px] uppercase tracking-widest text-white group overflow-hidden transition-all hover:border-violet-bright disabled:opacity-50"
                                >
                                    <span className="relative z-10 flex items-center gap-2">
                                        {status === "sending" ? "Enviando..." : status === "success" ? "¡Mensaje enviado!" : <><FiSend className="text-xs" /> Enviar mensaje</>}
                                    </span>
                                    <span className="absolute inset-0 bg-violet-bright/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                                </button>

                                <AnimatePresence>
                                    {status === "success" && (
                                        <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="text-[10px] font-mono text-emerald-400 text-center uppercase tracking-widest">
                                            Recibido. Te responderé pronto.
                                        </motion.p>
                                    )}
                                </AnimatePresence>
                            </form>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

export default Contact;