import { motion } from "framer-motion";

// Datos clave — rápidos de escanear
const FACTS = [
  { icon: "◈", label: "Ubicación", value: "Buenos Aires, ARG" },
  { icon: "◈", label: "Disponibilidad", value: "Part-time" },
  { icon: "◈", label: "Formación", value: "Tec. Programación + Lic. Informática (UNAHUR)" },
];

function About() {
  return (
    <section
      id="about"
      className="relative min-h-screen flex items-center bg-bg-secondary text-text px-6 md:px-10 lg:px-20 py-28 overflow-hidden"
    >

      <div className="container mx-auto max-w-6xl">

        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-4 mb-20"
        >
          <span className="font-mono text-[9px] uppercase tracking-[0.35em] text-violet-bright">01</span>
          <div className="h-px w-10 bg-violet-bright/30" />
          <span className="font-mono text-[9px] uppercase tracking-[0.35em] text-text-dim/40">Sobre mí</span>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">

          {/* TEXTO */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="font-title text-4xl md:text-5xl font-bold tracking-tight leading-tight mb-8">
              Apasionada por construir
              <span className="text-violet-bright block font-light italic mt-1">soluciones que funcionen.</span>
            </h2>

            <div className="space-y-4 text-text-dim text-sm leading-[1.9] font-light max-w-md border-l border-white/5 pl-6">
              <p>
                Soy <span className="text-text font-normal">técnica universitaria en programación</span> y actualmente
                continúo la licenciatura en Informática en la UNAHUR.
              </p>
              <p>
                Mi formación me permitió desarrollarme como <span className="text-violet-neon font-normal">full stack</span>, pero encontré una mayor afinidad con el <span className="text-violet-neon font-normal">backend</span>: lógica de negocio, APIs REST
                y arquitecturas con Node.js, Express y bases de datos relacionales y NoSQL.
              </p>
              <p>
                Curiosa, constante, y con ganas de aprender en un entorno real.
              </p>
            </div>
          </motion.div>

          {/* CARD DE INFO */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Glow */}
            <div className="absolute -inset-4 bg-violet-bright/5 blur-3xl rounded-2xl pointer-events-none" />

            <div className="relative border border-white/5 bg-linear-to-br from-white/4 to-transparent rounded-sm p-8 backdrop-blur-sm">
              {/* Bordes decorativos top/bottom */}
              <div className="absolute top-0 left-6 right-6 h-px bg-linear-to-r from-transparent via-violet-bright/25 to-transparent" />
              <div className="absolute bottom-0 left-6 right-6 h-px bg-linear-to-r from-transparent via-violet-bright/25 to-transparent" />

              {/* código minimalista */}
              <div className="font-mono text-xs text-text-dim/50 mb-8 leading-relaxed">
                <span className="text-violet-bright/50 italic">const</span>{" "}
                <span className="text-text/70">dev</span>{" "}
                <span className="text-violet-bright/50">=</span> {"{"}
                <div className="pl-4 mt-1 space-y-0.5">
                  <div>name: <span className="text-text/80">"Alina Marquez"</span>,</div>
                  <div>focus: <span className="text-violet-neon">"Backend"</span>,</div>
                  <div>stack: <span className="text-text/80">["MERN", "PERN"]</span></div>
                </div>
                {"}"}
              </div>

              {/* Facts */}
              <div className="space-y-5 border-t border-white/5 pt-7">
                {FACTS.map((fact) => (
                  <div key={fact.label} className="flex items-start gap-4">
                    <span className="text-violet-bright/40 font-mono text-xs mt-0.5 shrink-0">{fact.icon}</span>
                    <div className="text-[10px] font-mono uppercase tracking-[0.18em] leading-relaxed">
                      <span className="text-text-dim/40">{fact.label}: </span>
                      <span className="text-text/70">{fact.value}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

export default About;