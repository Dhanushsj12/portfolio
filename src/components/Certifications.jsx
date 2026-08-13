import { FaExternalLinkAlt, FaMicrosoft } from "react-icons/fa";

function Certifications() {
  const certificates = [
    {
      title: "Microsoft Certified: Azure Fundamentals (AZ-900)",
      issuer: "Microsoft",
      date: "July 2026",
      tags: [
        "Microsoft Azure",
        "Cloud Computing",
        "Azure Fundamentals",
        "AZ-900"
      ],
      link: "https://learn.microsoft.com/en-us/users/dhanushsj-0479/credentials/cc25d263d81b2927"
    },

    {
      title: "Generative AI Essentials: Using LLMs to Work with Data",
      issuer: "IBM SkillsBuild",
      date: "June 2026",
      tags: [
        "Generative AI",
        "LLMs",
        "IBM SkillsBuild"
      ],
      link: "https://www.credly.com/badges/dc2bf324-561d-4b9c-9c27-19e874480e05/public_url"
    },

    {
      title: "AI Fundamentals: Foundations for Understanding AI",
      issuer: "IBM SkillsBuild",
      date: "June 2026",
      tags: [
        "Artificial Intelligence",
        "IBM SkillsBuild"
      ],
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

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-20">

        {certificates.map((cert, index) => (

          <div
            key={index}
            className="
              group
              bg-white/5
              backdrop-blur-xl
              border border-white/10
              rounded-3xl
              p-8
              hover:-translate-y-3
              hover:border-sky-400/40
              hover:shadow-[0_0_40px_rgba(56,189,248,0.2)]
              transition-all
              duration-500
              flex
              flex-col
            "
          >

            <div className="flex items-center justify-between mb-6">

              <div className="
                w-14
                h-14
                rounded-2xl
                bg-sky-500/10
                border border-sky-400/20
                flex
                items-center
                justify-center
                text-3xl
                text-sky-400
              ">
                <FaMicrosoft />
              </div>

              <span className="
                text-sm
                text-gray-400
                bg-white/5
                px-4
                py-2
                rounded-full
              ">
                {cert.date}
              </span>

            </div>

            <p className="text-sky-400 font-semibold mb-3">
              {cert.issuer}
            </p>

            <h3 className="text-xl font-bold mb-5 leading-relaxed">
              {cert.title}
            </h3>

            <div className="flex flex-wrap gap-2 mb-8">

              {cert.tags.map((tag, i) => (

                <span
                  key={i}
                  className="
                    px-3
                    py-1
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

            <a
              href={cert.link}
              target="_blank"
              rel="noreferrer"
              className="
                mt-auto
                flex
                items-center
                justify-center
                gap-3
                bg-gradient-to-r
                from-sky-500
                to-purple-600
                px-6
                py-3
                rounded-2xl
                font-semibold
                hover:scale-105
                transition
                duration-300
              "
            >
              View Credential
              <FaExternalLinkAlt className="text-sm" />
            </a>

          </div>

        ))}

      </div>

    </section>
  );
}

export default Certifications;