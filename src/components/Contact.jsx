import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaFilePdf
} from "react-icons/fa";

import MeteorField from "./MeteorField";

function Contact() {
  return (
    <section
      id="contact"
      className="relative py-32 text-center px-8 overflow-hidden"
      data-aos="zoom-in-up"
    >

      {/* Falling stars / meteors */}
      <MeteorField meteorCount={12} starCount={40} />

      <div className="relative z-10">

        {/* Section Title */}
        <h2 className="section-title">
          Contact Me
        </h2>

        {/* Description */}
        <p className="text-gray-300 text-lg mb-12">
          Let's connect and build something amazing.
        </p>

        {/* Social Icons */}
        <div className="flex justify-center items-center gap-10 text-5xl mt-16">

          {/* Email */}
          <a
            href="mailto:dhanushsj2004@gmail.com"
            className="hover:text-sky-400 transition duration-300"
            title="Email"
          >
            <FaEnvelope />
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/Dhanushsj12"
            target="_blank"
            rel="noreferrer"
            className="hover:text-sky-400 transition duration-300"
            title="GitHub"
          >
            <FaGithub />
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/dhanush-s-j-034147271"
            target="_blank"
            rel="noreferrer"
            className="hover:text-sky-400 transition duration-300"
            title="LinkedIn"
          >
            <FaLinkedin />
          </a>

          {/* Resume */}
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="hover:text-red-400 transition duration-300"
            title="Resume"
          >
            <FaFilePdf />
          </a>

        </div>

      </div>

    </section>
  );
}

export default Contact;