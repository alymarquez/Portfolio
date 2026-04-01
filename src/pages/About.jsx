import { motion } from "framer-motion";

function About() {
  return (
    <section className="relative min-h-screen flex items-center bg-bg text-text px-6 md:px-10 py-20 lg:py-0 z-10 overflow-hidden">
      
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        
        {/* COLUMNA TEXTO */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="order-1"
        >
          {/* Header */}
          <div className="flex items-center gap-4 mb-6 md:mb-8">
            <span className="text-violet-bright font-mono text-[10px] uppercase tracking-[0.3em]">
              Sobre mí
            </span>
            <div className="h-px w-20 md:w-32 lg:w-40 bg-linear-to-r from-violet-bright/40 to-transparent"></div>
            <span className="font-mono text-[10px] text-text-dim/30">01</span>
          </div>

          <h2 className="font-title text-3xl md:text-4xl lg:text-5xl font-bold mt-4 tracking-tight leading-tight">
            Apasionada por construir
            <span className="text-violet-bright block md:inline"> soluciones sólidas</span>
          </h2>

          <div className="text-slate-400 mt-6 md:mt-8 max-w-lg text-[14px] leading-[1.8] tracking-wide space-y-4 font-light">
            <p>
              Soy <span className="text-text">técnica universitaria en programación</span> y actualmente estoy continuando la licenciatura en Informática en la Universidad Nacional de Hurlingham.
            </p>
            <p>
              Mi formación me permitió desarrollarme como <span className="text-violet-bright/80 font-normal">full stack</span>, aunque encontré una mayor afinidad con el <span className="text-text font-normal">backend</span> por su estructura, lógica y organización.
            </p>
            <p>
              Me considero una persona curiosa y constante. Disfruto enfrentar problemas, entender cómo funcionan las cosas y mejorar mis soluciones.
            </p>
            <p>
              Busco una oportunidad profesional en un equipo donde pueda aprender, contribuir y crecer.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="relative order-2"
        >
          {/* Glow de fondo */}
          <div className="w-full h-72 md:h-100 rounded-2xl bg-violet-bright/10 blur-3xl absolute -z-10"></div>

          {/* Cuadro */}
          <div className="relative border border-white/5 bg-linear-to-br from-white/5 to-transparent rounded-sm p-6 md:p-8 backdrop-blur-sm">
            {/* Borde top y bottom */}
            <div className="absolute top-0 left-6 right-6 h-px bg-linear-to-r from-transparent via-violet-bright/30 to-transparent"></div>
            <div className="absolute bottom-0 left-6 right-6 h-px bg-linear-to-r from-transparent via-violet-bright/30 to-transparent"></div>

            <div className="font-mono text-[13px] md:text-sm text-text-dim mb-8 md:mb-10 leading-relaxed">
              <span className="text-violet-bright/60 italic">const</span> dev = {"{"}
              <div className="pl-4">
                name: <span className="text-text">"Alina Marquez"</span>, <br />
                role: <span className="text-text">"Full Stack"</span>, <br />
                focus: <span className="text-text">"Backend"</span>
              </div>
              {"}"}
            </div>

            {/* Info Detallada */}
            <div className="space-y-5 border-t border-white/5 pt-6 md:pt-8">
              <div className="flex items-start gap-4">
                <span className="text-violet-bright font-mono text-xs mt-1">{'>'}_</span>
                <div className="text-[10px] md:text-[11px] uppercase tracking-[0.2em] leading-relaxed">
                  <span className="text-text-dim">Ubicación:</span>
                  <span className="text-text block sm:inline ml-0 sm:ml-2">Buenos Aires, ARG</span>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="text-violet-bright font-mono text-xs mt-1">◈</span>
                <div className="text-[10px] md:text-[11px] uppercase tracking-[0.2em] leading-relaxed">
                  <span className="text-text-dim">Disponibilidad:</span>
                  <span className="text-text block sm:inline ml-0 sm:ml-2">Part-time</span>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="text-violet-bright font-mono text-xs mt-1">✦</span>
                <div className="text-[10px] md:text-[11px] uppercase tracking-[0.2em] leading-relaxed">
                  <span className="text-text-dim">Formación:</span>
                  <span className="text-text block sm:inline ml-0 sm:ml-2">Tec. Programación / Lic. Info</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}

export default About;