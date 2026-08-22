import MeteorField from "./MeteorField";

function Quote() {
  return (
    <section
      id="quote"
      className="relative py-32 px-6 overflow-hidden"
      data-aos="fade-up"
    >

      {/* Falling Stars / Meteors */}
      <MeteorField
        meteorCount={12}
        starCount={40}
      />

      {/* Quote Content */}
      <div className="relative z-10 max-w-5xl mx-auto text-center">

        <p className="text-3xl md:text-5xl font-semibold leading-relaxed text-gray-200">
          "Turning ideas into solutions through technology,
          innovation, and continuous learning."
        </p>

        <p className="mt-8 text-xl md:text-2xl font-semibold gradient-text">
          — DHANUSH S J
        </p>

      </div>

    </section>
  );
}

export default Quote;