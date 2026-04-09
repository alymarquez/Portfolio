import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { FiArrowUpRight, FiGithub } from "react-icons/fi";
import { useRef } from "react";

const PROJECTS = [
  {
    title: "MedIntegral",
    year: "2025",
    category: "Gestión de Prepaga Médica",
    desc: "Sistema para la administración de afiliados, grupos familiares, prestadores y agendas de turnos.",
    tags: ["React", "Node.js", "PostgreSQL"],
    link: "https://medintegral-frontend.vercel.app/",
    code: "https://github.com/alymarquez/medintegral-frontend",
    accent: "#a855f7",
    accentB: "#3b82f6",
    screenshot: null, // "/screenshots/medintegral.png"
  },
  {
    title: "Byteland",
    year: "2026",
    category: "Agencia de Servicios Digitales",
    desc: "Landing pages y soluciones web a medida. Performance y diseño UX/UI para clientes reales.",
    tags: ["React", "Tailwind", "Figma"],
    link: "https://byteland.com.ar",
    code: null,
    accent: "#f0abcb",
    accentB: "#a855f7",
    screenshot: null,
  },
];

// Mockup de browser cuando no hay screenshot
function BrowserMockup({ project, index }) {
  return (
    <div
      className="w-full h-full rounded-sm overflow-hidden border border-white/6"
      style={{ background: "#0a0a12" }}
    >
      {/* Barra de browser */}
      <div className="flex items-center gap-2 px-3 py-2.5 border-b border-white/5 bg-white/2">
        <div className="flex gap-1.5">
          <div className="w-2 h-2 rounded-full bg-white/10" />
          <div className="w-2 h-2 rounded-full bg-white/10" />
          <div className="w-2 h-2 rounded-full bg-white/10" />
        </div>
        <div className="flex-1 mx-3 h-4 bg-white/4 rounded-sm flex items-center px-2">
          <span className="font-mono text-[7px] text-white/20 truncate">{project.link}</span>
        </div>
      </div>

      {/* Contenido simulado */}
      <div className="relative p-4 h-[calc(100%-36px)] overflow-hidden">

        {/* Glow del acento del proyecto */}
        <div
          className="absolute top-0 right-0 w-32 h-32 rounded-full blur-3xl opacity-30 pointer-events-none"
          style={{ background: project.accent }}
        />

        {/* Navbar simulada */}
        <div className="flex items-center justify-between mb-5">
          <div className="w-16 h-2 rounded-sm" style={{ background: `${project.accent}40` }} />
          <div className="flex gap-2">
            {[1, 2, 3].map(i => (
              <div key={i} className="w-8 h-1.5 rounded-sm bg-white/8" />
            ))}
          </div>
        </div>

        {/* Hero simulado */}
        <div className="mb-4">
          <div className="w-3/4 h-3 rounded-sm bg-white/12 mb-2" />
          <div className="w-1/2 h-3 rounded-sm mb-3" style={{ background: `${project.accent}50` }} />
          <div className="w-full h-1.5 rounded-sm bg-white/5 mb-1.5" />
          <div className="w-4/5 h-1.5 rounded-sm bg-white/5 mb-4" />
          <div className="flex gap-2">
            <div className="w-16 h-5 rounded-sm" style={{ background: `${project.accent}30`, border: `1px solid ${project.accent}40` }} />
            <div className="w-16 h-5 rounded-sm bg-white/5 border border-white/8" />
          </div>
        </div>

        {/* Cards simuladas */}
        <div className="grid grid-cols-3 gap-2 mt-4">
          {[0, 1, 2].map(i => (
            <div key={i} className="rounded-sm p-2 border border-white/5 bg-white/2">
              <div className="w-full h-6 rounded-sm mb-2" style={{ background: i === index % 3 ? `${project.accentB}20` : "rgba(255,255,255,0.03)" }} />
              <div className="w-full h-1 rounded-sm bg-white/6 mb-1" />
              <div className="w-2/3 h-1 rounded-sm bg-white/4" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// Card de proyecto con efecto 3D y animación de entrada
function ProjectCard({ project, index }) {
  const cardRef = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [4, -4]), { stiffness: 200, damping: 20 });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-4, 4]), { stiffness: 200, damping: 20 });

  const handleMouseMove = (e) => {
    const rect = cardRef.current?.getBoundingClientRect();
    if (!rect) return;
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };
  const handleMouseLeave = () => { x.set(0); y.set(0); };

  return (
    <motion.article
      ref={cardRef}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      viewport={{ once: true }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d", perspective: 800 }}
      className="group relative border border-white/5 bg-white/1.5 rounded-sm overflow-hidden hover:border-violet-bright/20 transition-colors duration-500"
    >
      {/* Preview visual */}
      <div className="relative h-52 overflow-hidden border-b border-white/5">
        {project.screenshot ? (
          <img
            src={project.screenshot}
            alt={project.title}
            className="w-full h-full object-cover object-top grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
          />
        ) : (
          <BrowserMockup project={project} index={index} />
        )}
        {/* Overlay gradiente sobre el preview */}
        <div className="absolute inset-0 bg-linear-to-t from-bg/80 via-transparent to-transparent pointer-events-none" />

        {/* Badge de año */}
        <div className="absolute top-3 left-3 font-mono text-[8px] uppercase tracking-widest text-text-dim/30 bg-bg/80 px-2 py-1 border border-white/5 backdrop-blur-sm">
          {project.year}
        </div>

        {/* Links flotantes */}
        <div className="absolute top-3 right-3 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          {project.code && (
            <a href={project.code} target="_blank" rel="noreferrer"
              className="w-7 h-7 flex items-center justify-center bg-bg/90 border border-white/8 text-text-dim/50 hover:text-violet-bright transition-colors backdrop-blur-sm"
            >
              <FiGithub className="text-xs" />
            </a>
          )}
          <a href={project.link} target="_blank" rel="noreferrer"
            className="w-7 h-7 flex items-center justify-center bg-bg/90 border border-white/8 text-text-dim/50 hover:text-violet-bright transition-colors backdrop-blur-sm"
          >
            <FiArrowUpRight className="text-sm" />
          </a>
        </div>
      </div>

      {/* Info */}
      <div className="p-6">
        <div className="flex items-start justify-between gap-4 mb-3">
          <h3 className="font-title text-2xl font-bold tracking-tight group-hover:text-violet-bright transition-colors duration-400">
            {project.title}
          </h3>
          <FiArrowUpRight className="text-text-dim/20 group-hover:text-violet-bright group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300 shrink-0 mt-1" />
        </div>

        <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-text-dim/30 mb-3">
          {project.category}
        </p>

        <p className="text-text-dim/50 text-sm font-light leading-relaxed mb-5">
          {project.desc}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5">
          {project.tags.map(tag => (
            <span key={tag} className="font-mono text-[8px] uppercase tracking-tight text-text-dim/25 border border-white/5 px-2 py-0.5 rounded-sm">
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Glow en hover con el color del proyecto */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-sm"
        style={{ background: `radial-gradient(circle at 50% 0%, ${project.accent}08 0%, transparent 60%)` }}
      />
    </motion.article>
  );
}

function Projects() {
  return (
    <section
      id="projects"
      className="relative bg-bg-secondary text-text px-6 md:px-10 lg:px-20 py-28 z-10 overflow-hidden"
    >
      {/* Glow */}
      <div className="absolute bottom-0 right-0 w-100 h-100 bg-violet-bright/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto max-w-6xl relative z-10">

        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-4 mb-20"
        >
          <span className="font-mono text-[9px] uppercase tracking-[0.35em] text-violet-bright">03</span>
          <div className="h-px w-10 bg-violet-bright/30" />
          <span className="font-mono text-[9px] uppercase tracking-[0.35em] text-text-dim/40">Proyectos</span>
        </motion.div>

        {/* Grid de proyectos */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {PROJECTS.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>

        {/* Ver más */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-14 flex justify-end"
        >
          <a
            href="https://github.com/alymarquez"
            target="_blank"
            rel="noreferrer"
            className="group font-mono text-[9px] uppercase tracking-[0.3em] text-text-dim/25 hover:text-violet-bright transition-colors flex items-center gap-2"
          >
            Más en GitHub
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </a>
        </motion.div>

      </div>
    </section>
  );
}

export default Projects;