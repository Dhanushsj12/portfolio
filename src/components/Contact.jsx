import {
FaGithub,
FaLinkedin,
FaEnvelope,
FaFilePdf
} from "react-icons/fa";

function Contact() {

return ( <section
   id="contact"
   className="py-32 text-center px-8"
   data-aos="zoom-in-up"
 >


  <h2 className="section-title">
    Contact Me
  </h2>

  <p className="text-gray-300 text-lg mb-12">
    Let's connect and build something amazing.
  </p>

  <div className="flex justify-center items-center gap-10 text-5xl mt-16">

    <a
      href="mailto:dhanushsj2004@gmail.com"
      className="hover:text-sky-400 transition duration-300"
      title="Email"
    >
      <FaEnvelope />
    </a>

    <a
      href="https://github.com/Dhanushsj12"
      target="_blank"
      rel="noreferrer"
      className="hover:text-sky-400 transition duration-300"
      title="GitHub"
    >
      <FaGithub />
    </a>

    <a
      href="https://www.linkedin.com/in/dhanush-s-j-034147271"
      target="_blank"
      rel="noreferrer"
      className="hover:text-sky-400 transition duration-300"
      title="LinkedIn"
    >
      <FaLinkedin />
    </a>

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

</section>


);
}

export default Contact;
