import aboutImage from "../assets/images/about.png";

const AboutSection = () => {
  return (
    <section
      className="py-6 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900 font-roboto min-h-[80vh] flex items-center"
      id="about"
    >
      <div className="max-w-7xl mx-auto w-full px-4">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          {/* Image container - now fully responsive */}
          <div className="w-full lg:w-1/2 flex justify-center">
            <div className="relative w-full max-w-md lg:max-w-none rounded-xl overflow-hidden aspect-square lg:aspect-auto">
              <img
                src={aboutImage}
                alt="About me"
                className="w-full h-full object-cover object-center"
              />
            </div>
          </div>

          <div className="w-full lg:w-1/2 mt-8 lg:mt-0">
            <h2 className="text-base font-semibold">
              About
            </h2>
            <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
              About Me
            </h1>
            <div className="mt-6 space-y-4 text-gray-700 dark:text-gray-300">
              <p className="text-sm leading-relaxed">
                I'm a Full-Stack Developer with over 2 years of experience in
                Web Development. Currently pursuing my Bachelor of Engineering
                in Software Engineering at Quaid-e-Awam University of
                Engineering, Science and Technology Nawabshah, I specialize in
                building reliable, scalable websites that make a difference.
              </p>
              <p className="text-sm leading-relaxed">
                Full Stack Developer specializing in MERN stack with 2+ years of
                experience building web applications.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;