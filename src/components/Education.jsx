import {
  FaGraduationCap
} from "react-icons/fa";

function Education() {

  return (

    <section
      id="education"
      className="py-32 px-6"
      data-aos="fade-up"
    >

      <h2 className="section-title gradient-text">
        Education
      </h2>

      <div className="max-w-5xl mx-auto mt-20">

        {/* EDUCATION CARD */}

        <div
          className="
          group
          relative
          overflow-hidden
          bg-white/5
          backdrop-blur-xl
          border border-white/10
          rounded-3xl
          p-10
          hover:-translate-y-3
          hover:border-sky-400/30
          hover:shadow-[0_0_40px_rgba(56,189,248,0.2)]
          transition-all
          duration-500
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

          {/* CONTENT */}

          <div className="relative z-10 flex flex-col md:flex-row gap-8 items-start">

            {/* ICON */}

            <div
              className="
              text-6xl
              text-sky-400
              bg-sky-500/10
              p-6
              rounded-2xl
              border border-sky-400/20
              "
            >
              <FaGraduationCap />
            </div>

            {/* DETAILS */}

            <div className="flex-1">

              <h3 className="text-4xl font-bold mb-4">
                Vellore Institute of Technology
              </h3>

              <p className="text-xl text-sky-300 mb-4">
                M.Tech Integrated Software Engineering
              </p>

              <p className="text-gray-300 leading-8 text-lg">
                Focused on Full Stack Development,
                Backend Engineering, Cloud Computing,
                Artificial Intelligence, Machine Learning.
              </p>

              {/* INFO TAGS */}

              <div className="flex flex-wrap gap-4 mt-8">

                <span
                  className="
                  px-5 py-2
                  rounded-full
                  bg-sky-500/10
                  border border-sky-400/20
                  text-sky-300
                  "
                >
                  CGPA : 8.13
                </span>

                <span
                  className="
                  px-5 py-2
                  rounded-full
                  bg-purple-500/10
                  border border-purple-400/20
                  text-purple-300
                  "
                >
                  2022 - 2027
                </span>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Education;