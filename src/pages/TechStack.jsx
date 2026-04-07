import { motion } from "framer-motion";
import {
    SiMongodb, SiExpress, SiReact, SiNodedotjs,
    SiPostgresql, SiJavascript, SiPython, SiGit,
    SiSequelize, SiMongoose, SiPostman, SiFigma
} from "react-icons/si";

const TECHS = [
    { name: "Node.js", icon: <SiNodedotjs />, color: "text-[#339933]" },
    { name: "Express", icon: <SiExpress />, color: "text-white" },
    { name: "JavaScript", icon: <SiJavascript />, color: "text-[#F7DF1E]" },
    { name: "React", icon: <SiReact />, color: "text-[#61DAFB]" },
    { name: "Python", icon: <SiPython />, color: "text-[#3776AB]" },
    { name: "PostgreSQL", icon: <SiPostgresql />, color: "text-[#4169E1]" },
    { name: "MongoDB", icon: <SiMongodb />, color: "text-[#47A248]" },
    { name: "Sequelize", icon: <SiSequelize />, color: "text-[#52B0E7]" },
    { name: "Mongoose", icon: <SiMongoose />, color: "text-[#880000]" },
    { name: "Postman", icon: <SiPostman />, color: "text-[#FF6C37]" },
    { name: "Git", icon: <SiGit />, color: "text-[#F05032]" },
    { name: "Figma", icon: <SiFigma />, color: "text-[#F24E1E]" },
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.05 },
    },
};

const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
};

function TechStack() {

    return (
        <section
            id="stack"
            className="relative min-h-screen flex flex-col justify-center bg-bg text-text px-6 md:px-10 py-24 overflow-hidden"
        >

            {/* CAPA PARALLAX FIXED */}
            <div
                className="fixed inset-0 z-0 pointer-events-none"
            >
                {/* Círculo de luz */}
                <div className="absolute top-[-10%] left-[-10%] w-150 h-150 bg-violet-bright/10 blur-[120px] rounded-full" />

                {/* Patrón de puntos */}
                <div className="absolute inset-0 opacity-[0.15]"
                    style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '50px 50px' }}
                />

                <div className="absolute bottom-[10%] right-[-5%] w-100 h-100 bg-violet-bright/5 blur-[100px] rounded-full" />
            </div>

            <div className="container mx-auto max-w-6xl relative z-10">

                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-4 mb-16"
                >
                    <span className="font-mono text-[10px] tracking-[0.3em] text-violet-bright uppercase">Stack</span>
                    <div className="h-px w-20 md:w-40 bg-linear-to-r from-violet-bright/40 to-transparent"></div>
                    <span className="font-mono text-[10px] text-text-dim/30">02</span>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">

                    {/* Texto */}
                    <div>
                        <h2 className="font-title text-4xl md:text-5xl font-bold tracking-tight mb-6">
                            Herramientas y <br />
                            <span className="text-violet-bright font-light italic">tecnologías.</span>
                        </h2>
                        <div className="text-slate-400 text-[14px] leading-[1.8] font-light max-w-sm space-y-4 border-l border-white/5 pl-6">
                            <p>
                                Especializada en <span className="text-text">Backend</span> bajo stacks MERN y PERN. Manejo de lógica robusta con Node.js, Express y Python.
                            </p>
                            <p>
                                Gestión de bases de datos mediante <span className="text-text">ORMs (Sequelize/Mongoose)</span> y diseño de REST APIs eficientes.
                            </p>
                            <p>
                                Flujo de trabajo con <span className="text-text font-normal">Git, Postman y Figma</span> para el diseño y testing de soluciones.
                            </p>
                        </div>
                    </div>

                    {/* Grid de Iconos */}
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 md:gap-4"
                    >
                        {TECHS.map((tech) => (
                            <motion.div
                                key={tech.name}
                                variants={itemVariants}
                                whileHover={{
                                    y: -5,
                                    backgroundColor: "rgba(139, 92, 246, 0.05)",
                                    borderColor: "rgba(139, 92, 246, 0.3)"
                                }}
                                className="group relative flex flex-col items-center justify-center p-5 bg-white/2 border border-white/5 rounded-sm backdrop-blur-sm transition-all duration-300"
                            >
                                <div className={`text-2xl md:text-3xl text-text-dim/40 transition-colors duration-300 group-hover:${tech.color}`}>
                                    {tech.icon}
                                </div>

                                <span className="mt-3 font-mono text-[9px] uppercase tracking-widest text-text-dim/50 group-hover:text-text transition-colors text-center">
                                    {tech.name}
                                </span>

                                {/* Glow decorativo hover */}
                                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none bg-radial from-violet-bright/10 to-transparent blur-xl" />
                            </motion.div>
                        ))}
                    </motion.div>

                </div>
            </div>
        </section>
    );
}

export default TechStack;