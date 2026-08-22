import { useRef, useState } from "react";

import projects from "../data/projects";

import {
  FaGithub
} from "react-icons/fa";


function Projects() {

  // Currently displayed image
  const [activeProject, setActiveProject] = useState(null);

  // Store the timeout so it can be cleared
  const hideTimer = useRef(null);

  // Drag / swipe
  const dragStartX = useRef(null);
  const isDragging = useRef(false);


  // =========================================================
  // SHOW PROJECT IMAGE
  // =========================================================

  const showProjectImage = (index) => {

    // Clear previous timer
    if (hideTimer.current) {
      clearTimeout(hideTimer.current);
    }

    // Show image
    setActiveProject(index);

    // Hide image after 2 seconds
    hideTimer.current = setTimeout(() => {

      setActiveProject(null);

    }, 2000);

  };


  // =========================================================
  // PROJECT CLICK
  // =========================================================

  const handleProjectClick = (index) => {

    if (isDragging.current) {
      return;
    }

    showProjectImage(index);

  };


  // =========================================================
  // DRAG START
  // =========================================================

  const handlePointerDown = (e) => {

    dragStartX.current = e.clientX;

    isDragging.current = false;

  };


  // =========================================================
  // DRAG END
  // =========================================================

  const handlePointerUp = (e) => {

    if (dragStartX.current === null) {
      return;
    }


    const dragDistance =
      e.clientX - dragStartX.current;


    const swipeThreshold = 60;


    // =======================================================
    // SWIPE LEFT → NEXT PROJECT
    // =======================================================

    if (dragDistance < -swipeThreshold) {

      isDragging.current = true;

      setActiveProject((prev) => {

        let nextIndex;

        if (prev === null) {
          nextIndex = 0;
        } else {
          nextIndex =
            (prev + 1) % projects.length;
        }

        showProjectImage(nextIndex);

        return nextIndex;

      });

    }


    // =======================================================
    // SWIPE RIGHT → PREVIOUS PROJECT
    // =======================================================

    else if (dragDistance > swipeThreshold) {

      isDragging.current = true;

      setActiveProject((prev) => {

        let nextIndex;

        if (prev === null) {
          nextIndex = projects.length - 1;
        } else {
          nextIndex =
            (prev - 1 + projects.length) %
            projects.length;
        }

        showProjectImage(nextIndex);

        return nextIndex;

      });

    }


    dragStartX.current = null;


    // Reset drag state
    setTimeout(() => {

      isDragging.current = false;

    }, 50);

  };


  // =========================================================
  // CANCEL DRAG
  // =========================================================

  const handlePointerCancel = () => {

    dragStartX.current = null;

    isDragging.current = false;

  };


  return (

    <section
      id="projects"
      className="py-32 px-6"
      data-aos="fade-up"
    >


      {/* =====================================================
          TITLE
      ===================================================== */}

      <h2 className="section-title gradient-text">
        Projects
      </h2>


      {/* =====================================================
          PROJECT GRID
      ===================================================== */}

      <div
        className="
          max-w-7xl
          mx-auto
          grid
          md:grid-cols-2
          gap-10
          mt-20
          select-none
        "

        onPointerDown={handlePointerDown}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerCancel}
      >


        {projects.map((project, index) => (

          <div
            key={index}

            onClick={() =>
              handleProjectClick(index)
            }

            className={`
              group
              relative
              overflow-hidden
              bg-white/5
              backdrop-blur-xl
              border
              rounded-3xl
              p-8
              cursor-pointer
              transition-all
              ease-in-out
              duration-500

              hover:-translate-y-3

              ${
                activeProject === index
                  ? `
                    border-sky-400/60
                    shadow-[0_0_50px_rgba(56,189,248,0.25)]
                  `
                  : `
                    border-white/10
                    hover:border-sky-400/30
                    hover:shadow-[0_0_40px_rgba(56,189,248,0.2)]
                  `
              }
            `}
          >


            {/* =================================================
                GLOW
            ================================================= */}

            <div
              className={`
                absolute
                inset-0
                bg-gradient-to-r
                from-sky-500/10
                to-purple-500/10
                transition
                duration-500

                ${
                  activeProject === index
                    ? "opacity-100"
                    : "opacity-0 group-hover:opacity-100"
                }
              `}
            />


            {/* =================================================
                PROJECT NUMBER
            ================================================= */}

            <div
              className="
                absolute
                top-6
                right-6
                text-6xl
                font-extrabold
                text-white/5
                pointer-events-none
              "
            >
              {String(index + 1).padStart(2, "0")}
            </div>


            {/* =================================================
                CONTENT
            ================================================= */}

            <div className="relative z-10">


              {/* =================================================
                  TITLE
              ================================================= */}

              <h3 className="text-3xl font-bold mb-5">
                {project.title}
              </h3>


              {/* =================================================
                  TECH STACK
              ================================================= */}

              <div className="flex flex-wrap gap-3 mb-6">

                {project.tech
                  .split(",")
                  .map((tech, i) => (

                    <span
                      key={i}
                      className="
                        px-4
                        py-2
                        text-sm
                        rounded-full
                        bg-sky-500/10
                        border
                        border-sky-400/20
                        text-sky-300
                      "
                    >
                      {tech.trim()}
                    </span>

                  ))}

              </div>


              {/* =================================================
                  IMAGE / DESCRIPTION
              ================================================= */}

              {activeProject === index ? (

                <img
                  src={project.image}
                  alt={project.title}
                  draggable="false"
                  className="
                    w-full
                    h-72
                    object-contain
                    rounded-2xl
                    mb-4
                    transition-all
                    duration-500
                    pointer-events-none
                  "
                />

              ) : (

                <p className="text-gray-300 leading-8 text-lg">
                  {project.desc}
                </p>

              )}


              {/* =================================================
                  GITHUB
              ================================================= */}

              <div className="flex gap-5 mt-8">

                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"

                  onPointerDown={(e) => {
                    e.stopPropagation();
                  }}

                  onClick={(e) => {
                    e.stopPropagation();
                  }}

                  className="
                    flex
                    items-center
                    gap-3
                    bg-gradient-to-r
                    from-sky-500
                    to-purple-600
                    px-6
                    py-3
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