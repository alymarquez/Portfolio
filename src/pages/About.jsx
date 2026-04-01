import { motion } from "framer-motion";

function About() {
  return (
    <section className="relative min-h-screen flex items-center bg-bg text-text px-10 z-10 overflow-hidden">
      
      <div className="container mx-auto grid lg:grid-cols-2 gap-16 items-center">
        
        {/* COLUMNA TEXTO */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Header  */}
          <div className="flex items-center gap-4 mb-8">
            <span className="text-violet-bright font-mono text-[10px] uppercase tracking-[0.3em]">
              Sobre mí
            </span>
            <div className="h-px w-120 bg-linear-to-r from-violet-bright/40 to-transparent"></div>
            <span className="font-mono text-[10px] text-text-dim/30">01</span>
          </div>

          <h2 className="font-title text-4xl lg:text-5xl font-bold mt-4 tracking-tight">
            Apasionada por construir
            <span className="text-violet-bright"> soluciones sólidas</span>
          </h2>

          <div className="text-slate-400 mt-8 max-w-lg text-[14px] leading-[1.8] tracking-wide space-y-4 font-light">
            <p>
              Soy <span className="text-text">técnica universitaria en programación</span> y actualmente estoy continuando la licenciatura en Informática en la Universidad Nacional de Hurlingham.
            </p>
            <p>
              Mi formación me permitió desarrollarme como <span className="text-violet-bright/80">full stack</span>, aunque encontré una mayor afinidad con el <span className="text-text">backend</span> por su estructura, lógica y organización.
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
          className="relative"
        >
          <div className="w-full h-100 rounded-2xl bg-violet-bright/10 blur-3xl absolute -z-10"></div>

          {/* Cuadro */}
          <div className="relative border border-white/5 bg-linear-to-br from-white/5 to-transparent rounded-sm p-8 backdrop-blur-sm">
            {/* Borde top y bottom */}
            <div className="absolute top-0 left-10 right-10 h-px bg-linear-to-r from-transparent via-violet-bright/30 to-transparent"></div>
            <div className="absolute bottom-0 left-10 right-10 h-px bg-linear-to-r from-transparent via-violet-bright/30 to-transparent"></div>

            <div className="font-mono text-sm text-text-dim mb-10 leading-relaxed">
              <span className="text-violet-bright/60">const</span> dev = {"{"}
              <div className="pl-4">
                name: <span className="text-text">"Alina Marquez"</span>, <br />
                role: <span className="text-text">"Full Stack"</span>, <br />
                focus: <span className="text-text">"Backend"</span>
              </div>
              {"}"}
            </div>

            {/* Info */}
            <div className="space-y-4 border-t border-white/5 pt-8">
              <div className="flex items-center gap-4">
                <span className="text-violet-bright font-mono text-xs">{'>'}_</span>
                <div className="text-[11px] uppercase tracking-[0.2em]">
                  <span className="text-text-dim">Ubicación:</span> <span className="text-text ml-2">Buenos Aires, ARG</span>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-violet-bright font-mono text-xs">◈</span>
                <div className="text-[11px] uppercase tracking-[0.2em]">
                  <span className="text-text-dim">Disponibilidad:</span> <span className="text-text ml-2">Part-time</span>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-violet-bright font-mono text-xs">✦</span>
                <div className="text-[11px] uppercase tracking-[0.2em]">
                  <span className="text-text-dim">Formación:</span> <span className="text-text ml-2">Tec. Programación / Lic. Informática</span>
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