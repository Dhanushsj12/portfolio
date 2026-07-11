function Experience() {

  return (

    <section
      id="experience"
      className="py-32 px-6"
      data-aos="fade-up"
    >

      <h2 className="section-title gradient-text">
        Experience
      </h2>

      <div className="max-w-5xl mx-auto mt-16">

        <div
          className="
          bg-white/5
          backdrop-blur-xl
          border border-white/10
          rounded-3xl
          p-10
          hover:border-sky-400/30
          hover:shadow-[0_0_35px_rgba(56,189,248,0.2)]
          transition-all
          duration-500
          "
        >

          <p className="text-sky-400 font-semibold text-lg mb-2">
            Industrial Internship
          </p>

          <h3 className="text-3xl font-bold text-white">
            Microsoft Azure AZ-900
          </h3>

          <p className="text-gray-400 mt-2">
            Cloud Development Project
          </p>

          <p className="text-gray-300 leading-8 mt-8 text-lg">

            Completed an industry-oriented cloud development project by
            designing and deploying a cloud-native Document Management
            System using Flask, Azure App Service, Azure SQL Database,
            Azure Blob Storage and GitHub Actions CI/CD.

          </p>

          <div className="flex flex-wrap gap-3 mt-10">

            {[
              "Azure",
              "Azure SQL",
              "Blob Storage",
              "Azure App Service",
              "GitHub Actions",
              "CI/CD",
              "Flask",
              "SQLAlchemy"
            ].map((tech,index)=>(

              <span
                key={index}
                className="
                px-4
                py-2
                rounded-full
                bg-sky-500/10
                border
                border-sky-400/20
                text-sky-300
                text-sm
                "
              >
                {tech}
              </span>

            ))}

          </div>

        </div>

      </div>

    </section>

  );

}

export default Experience;