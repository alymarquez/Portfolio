
function Navbar() {
  return (
    <>
        <nav className="sticky top-0 backdrop-blur z-50 bg-bg py-7 ">
            <div className="container mx-auto flex items-center justify-between">
                {/* LOGO */}
                <div className="text-text font-mono text-xs font-bold uppercase tracking-wider">AM_DEV</div>

                {/* NAV */}
                <ul className="hidden md:flex items-center gap-10 text-text-dim font-mono uppercase tracking-wider text-xs">
                    <li>
                        <a href="#about" className="hover:text-violet-bright transition-colors duration-300 cursor-pointer">Sobre mí</a>
                    </li>
                    <li >
                        <a href="#stack" className="hover:text-violet-bright transition-colors duration-300 cursor-pointer">Stack</a>
                    </li>
                    <li >
                        <a href="#projects" className="hover:text-violet-bright transition-colors duration-300 cursor-pointer">Proyectos</a>
                    </li>
                    <li >
                        <a href="#experience" className="hover:text-violet-bright transition-colors duration-300 cursor-pointer">Experiencia</a>
                    </li>
                    <li >
                        <a href="#contact" className="hover:text-violet-bright transition-colors duration-300 cursor-pointer">Contacto</a>
                    </li>
                </ul>
            </div>

            {/* BORDE GRADIENTE */}
            <div className="absolute bottom-0 left-0 w-full h-px bg-linear-to-r from-violet via-rose to-blue-cold opacity-50" />
        </nav>
    </>
  )
}

export default Navbar