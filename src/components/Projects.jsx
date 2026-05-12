import projects from "../data/projects";

import {
  FaGithub
} from "react-icons/fa";

function Projects() {

  return (

    <section
      id="projects"
      className="py-32 px-6"
      data-aos="fade-up"
    >

      <h2 className="section-title gradient-text">
        Projects
      </h2>

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 mt-20">

        {projects.map((project,index)=>(

          <div
            key={index}
            className="
            group
            relative
            overflow-hidden
            bg-white/5
            backdrop-blur-xl
            border border-white/10
            rounded-3xl
            p-8
            hover:-translate-y-3
            hover:border-sky-400/30
            hover:shadow-[0_0_40px_rgba(56,189,248,0.2)]
            transition-all
            ease-in-out
            duration-500
            cursor-pointer
            "
          >

            {/* GLOW EFFECT */}

            <div
              className="
              absolute
              inset-0
              bg-gradient-to-r
              from-sky-500/10
              to-purple-500/10
              opacity-0
              group-hover:opacity-100
              transition
              duration-500
              "
            />

            {/* PROJECT NUMBER */}

            <div
              className="
              absolute
              top-6
              right-6
              text-6xl
              font-extrabold
              text-white/5
              "
            >
              0{index+1}
            </div>

            {/* CONTENT */}

            <div className="relative z-10">

              <h3 className="text-3xl font-bold mb-5">
                {project.title}
              </h3>

              {/* TECH STACK */}

              <div className="flex flex-wrap gap-3 mb-6">

                {project.tech.split(",").map((tech,i)=>(

                  <span
                    key={i}
                    className="
                    px-4 py-2
                    text-sm
                    rounded-full
                    bg-sky-500/10
                    border border-sky-400/20
                    text-sky-300
                    "
                  >
                    {tech}
                  </span>

                ))}

              </div>

              {/* DESCRIPTION */}

              <p className="text-gray-300 leading-8 text-lg">
                {project.desc}
              </p>

              {/* GITHUB BUTTON */}

              <div className="flex gap-5 mt-10">

                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="
                  flex items-center gap-3
                  bg-gradient-to-r
                  from-sky-500
                  to-purple-600
                  px-6 py-3
                  rounded-2xl
                  font-semibold
                  hover:scale-105
                  hover:shadow-[0_0_25px_rgba(56,189,248,0.5)]
                  transition
                  duration-300
                  w-fit
                  "
                >
                  <FaGithub />
                  GitHub
                </a>

              </div>

            </div>

          </div>

        ))}

      </div>

    </section>
  );
}

export default Projects;