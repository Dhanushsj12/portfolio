function Navbar() {

  return (
    <nav className="fixed w-full backdrop-blur-md bg-slate-900/70 z-50 border-b border-slate-800">

      <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">

        <h1 className="text-3xl font-bold gradient-text">
          Dhanush
        </h1>

        <ul className="hidden md:flex gap-10 text-lg font-medium">

          <li><a href="#about" className="hover:text-sky-400 transition">About</a></li>
          <li><a href="#skills" className="hover:text-sky-400 transition">Skills</a></li>
          <li><a href="#projects" className="hover:text-sky-400 transition">Projects</a></li>
          <li><a href="#education" className="hover:text-sky-400 transition">Education</a></li>
          <li><a href="#contact" className="hover:text-sky-400 transition">Contact</a></li>

        </ul>

      </div>

    </nav>
  );
}

export default Navbar;