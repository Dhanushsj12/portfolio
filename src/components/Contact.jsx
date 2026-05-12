import {
  FaGithub,
  FaLinkedin,
  FaEnvelope
} from "react-icons/fa";

function Contact() {

  return (
    <section id="contact" className="py-24 text-center px-8"data-aos="zoom-in-up"
    >

      <h2 className="section-title">
        Contact Me
      </h2>

      <p className="text-gray-300 text-lg mb-10">
        Let's connect and build something amazing.
      </p>

      <div className="flex justify-center gap-8 text-5xl">

        <a href="mailto:dhanushsj2004@gmail.com">
          <FaEnvelope />
        </a>

        <a href="https://github.com/Dhanushsj12">
          <FaGithub />
        </a>

        <a href="https://linkedin.com">
          <FaLinkedin />
        </a>

      </div>

    </section>
  );
}

export default Contact;