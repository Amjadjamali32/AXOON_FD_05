import myimage from "../assets/images/myimage2.jpg";

const HeroSection = () => {
  return (
    <section
      className="min-h-screen mt-4 sm:mt-0 flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-16 py-12 bg-white font-roboto"
      style={{ backgroundColor: "#F5FCFF" }}
    >
      <div className="md:w-1/2 text-center md:text-left">
        <h1 className="text-xl sm:text-md font-medium text-gray-700 mb-4">
          Hey, I am Amjad
        </h1>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          I am a <span className="text-violet-600">MERN</span> Stack Developer
        </h2>
        <p className="text-gray-600 mb-6 max-w-md">
          I'm a Full Stack Developer specializing in MERN stack with 2+ years of
          experience building web applications.
        </p>
        <a
          href="#contact"
          className="inline-block px-6 py-3 bg-violet-600 text-white font-normal rounded-md shadow hover:bg-violet-700 transition"
        >
          Get In Touch
        </a>
      </div>

      <div className="md:w-1/2 flex justify-center mb-10 md:mb-0">
        <div className="relative w-4/6 h-96 rounded-sm overflow-hidden">
          <img
            src={myimage}
            alt="Profile"
            className="object-cover w-full shadow-md rounded-sm"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
