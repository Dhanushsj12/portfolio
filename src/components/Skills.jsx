import {
  FaReact,
  FaPython,
  FaDocker,
  FaAws,
  FaNodeJs,
  FaJs,
} from "react-icons/fa";

import {
  SiMongodb,
  SiFlask,
} from "react-icons/si";

function Skills() {

  const skills = [

    {
      name:"JavaScript",
      icon:<FaJs />,
      color:"hover:text-yellow-400"
    },

    {
      name:"Python",
      icon:<FaPython />,
      color:"hover:text-blue-400"
    },

    {
      name:"ReactJS",
      icon:<FaReact />,
      color:"hover:text-cyan-400"
    },

    {
      name:"Node.js",
      icon:<FaNodeJs />,
      color:"hover:text-green-400"
    },

    {
      name:"Flask",
      icon:<SiFlask />,
      color:"hover:text-gray-300"
    },

    {
      name:"MongoDB",
      icon:<SiMongodb />,
      color:"hover:text-green-500"
    },

    {
      name:"Docker",
      icon:<FaDocker />,
      color:"hover:text-sky-400"
    },

    {
      name:"AWS",
      icon:<FaAws />,
      color:"hover:text-orange-400"
    },

  ];

  return (

    <section
      id="skills"
      className="py-32 px-6"
      data-aos="fade-up"
    >

      <h2 className="section-title gradient-text">
        Skills
      </h2>

      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-20 justify-items-center">

        {skills.map((skill,index)=>(

          <div
            key={index}
            className="
            group
            relative
            w-[250px]
            h-[220px]
            bg-white/5
            backdrop-blur-lg
            border border-white/10
            rounded-3xl
            p-8
            flex
            flex-col
            items-center
            justify-center
            gap-5
            hover:-translate-y-3
            hover:border-sky-400/40
            hover:shadow-[0_0_40px_rgba(56,189,248,0.25)]
            transition-all
            duration-500
            cursor-pointer
            "
          >

            {/* GLOW */}

            <div
              className="
              absolute
              inset-0
              rounded-3xl
              bg-gradient-to-r
              from-sky-500/10
              to-purple-500/10
              opacity-0
              group-hover:opacity-100
              transition
              duration-500
              "
            />

            {/* ICON */}

            <div
              className={`
              text-6xl
              text-white
              ${skill.color}
              transition
              duration-500
              group-hover:scale-125
              `}
            >
              {skill.icon}
            </div>

            {/* TEXT */}

            <h3 className="text-xl font-semibold text-center">
              {skill.name}
            </h3>

          </div>

        ))}

      </div>

    </section>
  );
}

export default Skills;