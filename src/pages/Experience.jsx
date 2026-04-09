import { motion } from "framer-motion";

const EXPERIENCE = [
  {
    date: "Dic 2025 — Presente",
    title: "Full Stack Developer & Co-founder",
    company: "Byteland · Freelance",
    type: "trabajo",
    details: [
      "Desarrollo de soluciones web con stacks MERN y PERN.",
      "Despliegue y mantenimiento en Vercel, Railway y Hostinger.",
      "Prototipado de interfaces en Figma y gestión de cliente.",
    ],
  },
  {
    date: "Abr 2025 — Jul 2025",
    title: "Colaboradora Académica",
    company: "UNAHUR · Programación con Objetos I",
    type: "academia",
    details: [
      "Asistencia presencial en prácticas para conceptos de POO.",
      "Soporte técnico y resolución de dudas en comunidad de Discord.",
      "Participación en proceso de corrección de trabajos prácticos."
    ],
  },
];

function SkillBar({ skill, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      viewport={{ once: true }}
    >
      <div className="flex justify-between items-center mb-1.5">
        <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-text-dim/40">{skill.label}</span>
        <span className="font-mono text-[9px] text-violet-bright/50">{skill.level}%</span>
      </div>
      <div className="h-px w-full bg-white/5 relative overflow-hidden">
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ delay: index * 0.1 + 0.3, duration: 0.9, ease: "easeOut" }}
          viewport={{ once: true }}
          className="absolute inset-y-0 left-0 origin-left"
          style={{
            width: `${skill.level}%`,
            background: "linear-gradient(to right, rgba(168,85,247,0.7), rgba(59,130,246,0.5))",
            height: "1px",
          }}
        />
        {/* Punto al final de la barra */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: index * 0.1 + 1.1 }}
          viewport={{ once: true }}
          className="absolute top-1/2 -translate-y-1/2 w-1 h-1 rounded-full bg-violet-bright"
          style={{ left: `calc(${skill.level}% - 2px)`, boxShadow: "0 0 6px rgba(168,85,247,0.9)" }}
        />
      </div>
    </motion.div>
  );
}

function Experience() {
  return (
    <section
      id="experience"
      className="relative bg-bg text-text px-6 md:px-10 lg:px-20 py-28 overflow-hidden"
    >
      {/* Glows */}
      <div className="absolute top-[15%] right-[-5%] w-87.5 h-87.5 bg-violet-bright/5 blur-[110px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[10%] left-[-5%] w-62.5 h-62.5 bg-blue-cold/4 blur-[90px] rounded-full pointer-events-none" />

      <div className="container mx-auto max-w-6xl relative z-10">

        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-4 mb-20"
        >
          <span className="font-mono text-[9px] uppercase tracking-[0.35em] text-violet-bright">04</span>
          <div className="h-px w-10 bg-violet-bright/30" />
          <span className="font-mono text-[9px] uppercase tracking-[0.35em] text-text-dim/40">Experiencia</span>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-16 lg:gap-20 items-start">

          {/* TIMELINE */}
          <div className="relative pl-8 md:pl-12">
            {/* Línea vertical */}
            <div className="absolute left-0 top-2 bottom-2 w-px bg-linear-to-b from-transparent via-violet-bright/35 to-transparent" />

            <div className="space-y-14">
              {EXPERIENCE.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative group"
                >
                  {/* Punto brillante */}
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ delay: index * 0.1 + 0.2, type: "spring", stiffness: 300 }}
                    viewport={{ once: true }}
                    className="absolute left-[-2.1rem] md:left-[-2.85rem] top-[0.45rem] w-2 h-2 rounded-full bg-violet-bright"
                    style={{ boxShadow: "0 0 10px rgba(168,85,247,0.9)" }}
                  />

                  {/* Conector horizontal hacia el contenido */}
                  <div className="absolute -left-6 md:left-[-2.2rem] top-3 w-4 md:w-6 h-px bg-violet-bright/15" />

                  {/* Fecha */}
                  <span className="font-mono text-[9px] tracking-[0.2em] text-violet-bright/45 uppercase">
                    {exp.date}
                  </span>

                  <h3 className="font-title text-xl font-bold text-white tracking-tight mt-2 mb-0.5 group-hover:text-violet-bright transition-colors duration-300">
                    {exp.title}
                  </h3>
                  <span className="font-mono text-[9px] text-violet-neon/50 tracking-widest uppercase block mb-5">
                    {exp.company}
                  </span>

                  <ul className="space-y-2">
                    {exp.details.map((item, i) => (
                      <li key={i} className="relative pl-4 text-sm text-text-dim/55 font-light leading-relaxed">
                        <span className="absolute left-0 text-violet-bright/30">›</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;