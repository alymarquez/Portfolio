import { motion } from "framer-motion";
import { FiMapPin, FiCalendar, FiBookOpen } from "react-icons/fi";
import fotoMia from "../assets/fotomia.png";

const FACTS = [
  { icon: FiMapPin, label: "Ubicación", value: "Haedo, Buenos Aires" },
  { icon: FiCalendar, label: "Disponibilidad", value: "Part-time" },
  { icon: FiBookOpen, label: "Formación", value: "Lic. en Informática (UNAHUR)" },
];

function About() {
  return (
    <section
      id="about"
      className="relative min-h-screen flex items-center bg-bg-secondary text-text px-6 md:px-10 lg:px-20 py-28 overflow-hidden"
    >
      
      {/* Glows de fondo */}
      <div className="absolute top-[10%] right-[-10%] w-125 h-125 bg-violet-bright/5 blur-[130px] rounded-full pointer-events-none" />

      <div className="container mx-auto max-w-6xl relative z-10">

        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-4 mb-12 lg:mb-16"
        >
          <span className="font-mono text-[9px] uppercase tracking-[0.35em] text-violet-bright">01</span>
          <div className="h-px w-10 bg-violet-bright/30" />
          <span className="font-mono text-[9px] uppercase tracking-[0.35em] text-text-dim/40">Sobre mí</span>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* COLUMNA IZQUIERDA: TEXTO */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="font-title text-3xl md:text-5xl font-bold tracking-tight leading-tight mb-6">
              Apasionada por construir
              <span className="text-violet-bright block font-light italic mt-1">soluciones que funcionen.</span>
            </h2>

            <div className="space-y-4 text-text-dim text-sm leading-relaxed font-light max-w-md border-l border-white/5 pl-6">
              <p>
                Soy <span className="text-text font-normal">técnica universitaria en programación</span> y actualmente
                continúo la licenciatura en Informática en la UNAHUR (Universidad Nacional de Hurlingham).
              </p>
              <p>
                Me especializo en el <span className="text-violet-neon font-normal">backend</span>: lógica de negocio, APIs REST
                y arquitecturas con Node.js, Express y bases de datos.
              </p>
              <p className="hidden md:block">
                Curiosa, constante y con ganas de aprender en entornos reales.
              </p>
            </div>
          </motion.div>

          {/* COLUMNA DERECHA: FOTO + FACTS */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="flex flex-col items-center lg:items-end gap-8"
          >
            {/* Contenedor de la foto */}
            <div className="relative group">
              <div className="absolute top-0 left-6 right-6 h-px bg-linear-to-r from-transparent via-violet-bright/40 to-transparent z-20" />
              <div className="absolute bottom-0 left-6 right-6 h-px bg-linear-to-r from-transparent via-violet-bright/40 to-transparent z-20" />
              
              <div className="relative w-64 h-80 md:w-72 md:h-96 overflow-hidden border border-white/10 bg-white/5 backdrop-blur-sm rounded-sm p-2 transition-all duration-500">
                <img
                  src={fotoMia}
                  alt="Alina Marquez"
                  className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
                />
              </div>
              <div className="absolute -bottom-2 -right-2 w-10 h-10 border-b-2 border-r-2 border-violet-bright/20 z-20 pointer-events-none" />
            </div>

            {/* FACTS */}
            <div className="w-full max-w-[320px] space-y-3">
              {FACTS.map((fact) => {
                const Icon = fact.icon;
                return (
                  <div key={fact.label} className="flex items-center gap-3 justify-start lg:justify-end text-right">
                    <div className="text-[9px] font-mono uppercase tracking-[0.15em]">
                      <span className="text-text-dim/40">{fact.label}: </span>
                      <span className="text-text/70">{fact.value}</span>
                    </div>
                    <Icon className="text-violet-bright/40 text-[10px] shrink-0 order-first lg:order-last" />
                  </div>
                );
              })}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

export default About;