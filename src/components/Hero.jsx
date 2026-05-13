import { motion } from "framer-motion";

import {
  FaGithub,
  FaLinkedin,
  FaEnvelope
} from "react-icons/fa";

import profile from "../assets/profile.png";

function Hero() {

  return (
    <section className="min-h-screen flex items-center justify-center px-6 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 overflow-hidden">

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20 items-center">

        {/* LEFT SIDE */}

        <div data-aos="fade-right">

          <motion.p
            initial={{ opacity:0 }}
            animate={{ opacity:1 }}
            transition={{ duration:1 }}
            className="text-sky-400 text-xl mb-4 font-semibold tracking-widest uppercase"
          >
            Welcome To My Portfolio
          </motion.p>

          <motion.h1
            initial={{ opacity:0, y:-40 }}
            animate={{ opacity:1, y:0 }}
            transition={{ duration:1 }}
            className="text-7xl md:text-8xl font-extrabold leading-tight mb-6"
          >

            <span className="bg-gradient-to-r from-sky-400 to-purple-500 bg-clip-text text-transparent">
              Dhanush
            </span>

            <br />

            <span className="text-white">
              S J
            </span>

          </motion.h1>

          <motion.p
            initial={{ opacity:0 }}
            animate={{ opacity:1 }}
            transition={{ delay:0.5 }}
            className="text-2xl text-gray-300 leading-10 max-w-2xl"
          >
           Software Engineering Student | Full Stack Developer | AI & Backend Enthusiast
          </motion.p>

          <motion.p
            initial={{ opacity:0 }}
            animate={{ opacity:1 }}
            transition={{ delay:0.8 }}
            className="text-gray-400 mt-8 text-lg leading-9 max-w-2xl"
          >
            Passionate about building scalable backend systems,
            intelligent AI applications, and modern web experiences.
          </motion.p>

          {/* BUTTONS */}

          <div className="flex gap-6 mt-12 flex-wrap">

            <a
              href="#projects"
              className="
              bg-gradient-to-r
              from-sky-500
              to-purple-600
              px-10 py-4
              rounded-2xl
              text-lg
              font-semibold
              hover:scale-110
              transition
              duration-300
              shadow-[0_0_30px_rgba(56,189,248,0.4)]
              "
            >
              Explore Projects
            </a>

            <a
              href="#contact"
              className="
              border border-slate-600
              px-10 py-4
              rounded-2xl
              text-lg
              font-semibold
              hover:bg-slate-800
              transition
              duration-300
              "
            >
              Contact Me
            </a>

          </div>

          {/* SOCIAL ICONS */}

          <div className="flex gap-8 text-4xl mt-12">

            <a
              href="https://github.com/Dhanushsj12"
              target="_blank"
              className="
              text-gray-300
              hover:text-sky-400
              hover:scale-125
              transition
              duration-300
              "
            >
              <FaGithub />
            </a>

            <a
              href="https://linkedin.com"
              target="_blank"
              className="
              text-gray-300
              hover:text-blue-500
              hover:scale-125
              transition
              duration-300
              "
            >
              <FaLinkedin />
            </a>

            <a
              href="mailto:dhanushsj2004@gmail.com"
              className="
              text-gray-300
              hover:text-red-400
              hover:scale-125
              transition
              duration-300
              "
            >
              <FaEnvelope />
            </a>

          </div>

        </div>

        {/* RIGHT SIDE */}

        <div
          className="flex justify-center"
          data-aos="fade-left"
        >

          <div
            className="
            relative
            group
            "
          >

            {/* GLOW EFFECT */}

            <div
              className="
              absolute
              inset-0
              rounded-full
              bg-gradient-to-r
              from-sky-500
              to-purple-600
              blur-3xl
              opacity-30
              group-hover:opacity-50
              transition
              duration-500
              "
            />

            {/* IMAGE */}

            <img
              src={profile}
              alt="profile"
              className="
              relative
              w-[320px]
              h-[320px]
              md:w-[380px]
              md:h-[380px]
              object-cover
              rounded-full
              border-4 border-sky-500/40
              shadow-[0_0_40px_rgba(56,189,248,0.3)]
              hover:scale-105
              transition
              duration-500
              "
            />

          </div>

        </div>

      </div>

    </section>
  );
}

export default Hero;