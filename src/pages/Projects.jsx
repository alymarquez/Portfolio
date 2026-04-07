import { motion } from "framer-motion";
import { FiArrowUpRight, FiGithub } from "react-icons/fi";

const PROJECTS = [
  {
    title: "MedIntegral",
    sub: null,
    year: "2025",
    category: "Gestión de Prepaga Médica",
    desc: "Sistema integral para la administración de afiliados, grupos familiares, prestadores y agendas de turnos.",
    tags: ["React", "Node.js", "PostgreSQL", "PERN Stack"],
    link: "https://medintegral-frontend.vercel.app/",
    code: "https://github.com/alymarquez/medintegral-frontend",
  },
  {
    title: "Byteland",
    sub: null,
    year: "2026",
    category: "Agencia de Servicios Digitales",
    desc: "Creación de landing pages y soluciones web a medida. Enfoque en performance y diseño UX/UI para clientes reales.",
    tags: ["React", "Tailwind", "Figma"],
    link: "https://byteland.com.ar",
    code: null,
  }
];

function Projects() {
  return (
    <section id="projects" className="relative min-h-screen bg-bg text-text px-6 md:px-10 py-32 z-10">
      <div className="container mx-auto max-w-6xl">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-4 mb-28"
        >
          <span className="font-mono text-[10px] tracking-[0.3em] text-violet-bright uppercase">
            Proyectos
          </span>

          <div className="h-px w-20 md:w-40 bg-linear-to-r from-violet-bright/40 to-transparent"></div>

          <span className="font-mono text-[10px] text-text-dim/30 uppercase tracking-widest">
            03
          </span>
        </motion.div>

        {/* Lista */}
        <div className="border-t border-white/5">
          {PROJECTS.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative border-b border-white/5"
            >
              <div className="relative flex flex-col md:flex-row md:items-center justify-between gap-6 py-12 md:py-14 transition-all duration-500 ease-out z-10 group-hover:px-4">
                
                {/* Izquierda */}
                <div className="flex flex-col gap-3">
                  <div className="flex items-center gap-4">
                    <span className="font-mono text-[10px] text-violet-bright/50">
                      {project.year}
                    </span>
                    <h3 className="text-3xl md:text-5xl font-medium tracking-tighter group-hover:italic transition-all duration-500">
                      {project.title}
                    </h3>
                  </div>

                  <p className="text-text-dim/60 text-sm font-light max-w-md mt-1 leading-relaxed">
                    {project.desc}
                  </p>
                </div>

                {/* Derecha */}
                <div className="mt-6 md:mt-0 flex flex-col md:items-end gap-5">
                  <div className="flex flex-col md:items-end gap-1">
                    <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-text-dim/40 group-hover:text-violet-bright transition-colors">
                      {project.category}
                    </span>
                    <span className="font-mono text-[9px] text-text-dim/20 uppercase italic">
                      {project.sub}
                    </span>
                  </div>

                  <div className="flex items-center gap-4">
                    {/* Tags */}
                    <div className="flex gap-2">
                      {project.tags.slice(0, 3).map(tag => (
                        <span
                          key={tag}
                          className="text-[9px] text-text-dim/30 border border-white/5 px-2 py-0.5 rounded-sm uppercase tracking-tighter"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Links */}
                    <div className="flex items-center gap-3 border-l border-white/10 pl-4 ml-2">
                      {project.code && (
                        <a
                          href={project.code}
                          target="_blank"
                          rel="noreferrer"
                          className="text-text-dim/40 hover:text-violet-bright transition-colors text-base"
                        >
                          <FiGithub />
                        </a>
                      )}
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noreferrer"
                        className="text-text-dim/40 hover:text-violet-bright transition-colors text-xl group-hover:translate-x-1 group-hover:-translate-y-1 transform duration-300"
                      >
                        <FiArrowUpRight />
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Hover */}
              <div className="absolute inset-0 bg-white/1.5 scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-bottom pointer-events-none" />
            </motion.div>
          ))}
        </div>

        {/* Footer */}
        <footer className="mt-20 flex justify-between items-center">
          <p className="font-mono text-[9px] text-text-dim/20 uppercase tracking-[0.3em]">
            Proyectos seleccionados
          </p>
          <a
            href="https://github.com/alymarquez"
            target="_blank"
            rel="noreferrer"
            className="group font-mono text-[10px] text-violet-bright/40 hover:text-violet-bright transition-colors flex items-center gap-2"
          >
            EXPLORAR MÁS EN GITHUB <span className="group-hover:translate-x-1 transition-transform">→</span>
          </a>
        </footer>
      </div>
    </section>
  );
}

export default Projects;