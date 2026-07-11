function Certifications() {

  const certificates = [

    {
      title: "Generative AI Essentials: Using LLMs to Work with Data",
      issuer: "IBM SkillsBuild",
      date: "June 2026",
      tags: ["Generative AI", "LLMs", "IBM SkillsBuild"],
      link: "https://www.credly.com/badges/dc2bf324-561d-4b9c-9c27-19e874480e05/public_url"
    },

    {
      title: "AI Fundamentals: Foundations for Understanding AI",
      issuer: "IBM SkillsBuild",
      date: "June 2026",
      tags: ["Artificial Intelligence", "IBM SkillsBuild"],
      link: "https://www.credly.com/badges/b1c207bb-b727-43bb-935e-7a4bc4209b1a/public_url"
    }

  ];

  return (

    <section
      id="certifications"
      className="py-32 px-6"
      data-aos="fade-up"
    >

      <h2 className="section-title gradient-text">
        Certifications
      </h2>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 mt-20">

        {certificates.map((cert, index) => (

          <div
            key={index}
            className="
              bg-white/5
              backdrop-blur-xl
              border border-white/10
              rounded-3xl
              p-8
              hover:-translate-y-2
              hover:border-sky-400/30
              hover:shadow-[0_0_35px_rgba(56,189,248,0.2)]
              transition-all
              duration-500
            "
          >

            {/* Certificate Icon */}

            <div className="text-5xl mb-5">
              
            </div>

            {/* Issuer */}

            <p className="text-sky-400 font-semibold mb-2">
              {cert.issuer}
            </p>

            {/* Certificate Name */}

            <h3 className="text-2xl font-bold mb-4 leading-snug">
              {cert.title}
            </h3>

            {/* Date */}

            <p className="text-gray-400 mb-6">
              Issued: {cert.date}
            </p>

            {/* Tags */}

            <div className="flex flex-wrap gap-3 mb-8">

              {cert.tags.map((tag, i) => (

                <span
                  key={i}
                  className="
                    px-4 py-2
                    rounded-full
                    bg-sky-500/10
                    border border-sky-400/20
                    text-sky-300
                    text-sm
                  "
                >
                  {tag}
                </span>

              ))}

            </div>

            {/* Button */}

            <a
              href={cert.link}
              target="_blank"
              rel="noreferrer"
              className="
                inline-block
                bg-gradient-to-r
                from-sky-500
                to-purple-600
                px-6
                py-3
                rounded-2xl
                font-semibold
                hover:scale-105
                hover:shadow-[0_0_20px_rgba(56,189,248,0.4)]
                transition
                duration-300
              "
            >
              View Credential
            </a>

          </div>

        ))}

      </div>

    </section>

  );

}

export default Certifications;