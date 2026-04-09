import { motion } from "framer-motion";
import {
    SiMongodb, SiExpress, SiReact, SiNodedotjs,
    SiPostgresql, SiJavascript, SiPython, SiGit,
    SiSequelize, SiMongoose, SiPostman, SiFigma,
} from "react-icons/si";

const TECHS = [
    { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
    { name: "Express", icon: SiExpress, color: "#e2e8f0" },
    { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
    { name: "React", icon: SiReact, color: "#61DAFB" },
    { name: "Python", icon: SiPython, color: "#3776AB" },
    { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
    { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
    { name: "Sequelize", icon: SiSequelize, color: "#52B0E7" },
    { name: "Mongoose", icon: SiMongoose, color: "#c0392b" },
    { name: "Postman", icon: SiPostman, color: "#FF6C37" },
    { name: "Git", icon: SiGit, color: "#F05032" },
    { name: "Figma", icon: SiFigma, color: "#F24E1E" },
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.045 } },
};

const itemVariants = {
    hidden: { y: 16, opacity: 0 },
    visible: { y: 0, opacity: 1 },
};

function TechStack() {
    return (
        <section
            id="stack"
            className="relative min-h-screen flex flex-col justify-center bg-bg text-text px-6 md:px-10 lg:px-20 py-28 overflow-hidden"
        >

            <div
                className="absolute inset-0 z-0 pointer-events-none opacity-[0.10]"
                style={{
                    backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)",
                    backgroundSize: "50px 50px",
                    backgroundAttachment: "fixed",
                }}
            />
            {/* Glows */}
            <div className="absolute top-[-10%] left-[-10%] w-150 h-150 bg-violet-bright/8 blur-[130px] rounded-full pointer-events-none" />
            <div className="absolute bottom-[5%] right-[-5%] w-100 h-100 bg-blue-cold/5 blur-[110px] rounded-full pointer-events-none" />

            <div className="container mx-auto max-w-6xl relative z-10">

                {/* Section header */}
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-4 mb-20"
                >
                    <span className="font-mono text-[9px] uppercase tracking-[0.35em] text-violet-bright">02</span>
                    <div className="h-px w-10 bg-violet-bright/30" />
                    <span className="font-mono text-[9px] uppercase tracking-[0.35em] text-text-dim/40">Stack</span>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">

                    {/* Texto */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="font-title text-4xl md:text-5xl font-bold tracking-tight leading-tight mb-8">
                            Herramientas y{" "}
                            <span className="text-violet-bright font-light italic block mt-1">tecnologías.</span>
                        </h2>
                        <div className="text-text-dim text-sm leading-[1.9] font-light max-w-xs space-y-3 border-l border-white/5 pl-6">
                            <p>
                                Stack principal <span className="text-text font-normal">MERN / PERN</span>. Foco en backend con Node.js, Express y Javascript.
                                Gestión de bases de datos mediante <span className="text-text">ORMs (Sequelize/Mongoose)</span>.
                            </p>
                            <p>
                                Flujo de trabajo con <span className="text-text font-normal">Git, Postman y Figma</span> para el diseño y testing de soluciones.
                            </p>
                        </div>
                    </motion.div>

                    {/* Grid de íconos */}
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="grid grid-cols-3 sm:grid-cols-4 gap-8"
                    >
                        {TECHS.map((tech) => {
                            const Icon = tech.icon;
                            const safeKey = tech.name.replace(/\./g, "");
                            return (
                                <motion.div
                                    key={tech.name}
                                    variants={itemVariants}
                                    whileHover={{ y: -4, borderColor: "rgba(139,92,246,0.3)" }}
                                    className={`group tech-${safeKey} relative flex flex-col items-center justify-center p-4 bg-white/2 border border-white/5 rounded-sm backdrop-blur-sm transition-all duration-300 cursor-default`}
                                >
                                    {/* Inyección de color real en hover — Tailwind no puede purgar */}
                                    <style>{`.tech-${safeKey}:hover .ti { color: ${tech.color} !important; }`}</style>

                                    <Icon
                                        className="ti text-xl md:text-2xl transition-colors duration-300"
                                        style={{ color: "rgba(148,163,184,0.35)" }}
                                    />
                                    <span className="mt-2.5 font-mono text-[8px] uppercase tracking-widest text-text-dim/40 group-hover:text-text/60 transition-colors text-center">
                                        {tech.name}
                                    </span>

                                    {/* Glow con color del tech */}
                                    <div
                                        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none rounded-sm"
                                        style={{ background: `radial-gradient(circle at center, ${tech.color}14 0%, transparent 70%)` }}
                                    />
                                </motion.div>
                            );
                        })}
                    </motion.div>

                </div>
            </div>
        </section>
    );
}

export default TechStack;