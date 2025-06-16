import FirstImage from "../assets/images/First_Task_output.png";
import SecondImage from "../assets/images/task_02_output.png";
import ThirdImage from "../assets/images/task03_output.png";
import FourthImage from "../assets/images/task_04_output.png";

const PortfolioSection = () => {
  const projects = [
    {
      id: 1,
      title: "Simple Personal Webpage",
      description: "A simple personal portfolio website using only HTML.",
      image: FirstImage,
      githubLink: "https://github.com/Amjadjamali32/AXOON_FD_01.git",
    },
    {
      id: 2,
      title: "Hero Section Using Flexbox",
      description:
        "A Responsive ecommerce platform Hero Section using Flexbox.",
      image: SecondImage,
      githubLink: "https://github.com/Amjadjamali32/AXOON_FD_02.git",
    },
    {
      id: 3,
      title: "Responsive Blog Section",
      description:
        "A responsive blog section with a clean layout and modern design.",
      image: ThirdImage,
      githubLink: "https://github.com/Amjadjamali32/AXOON_FD_03.git",
    },
    {
      id: 4,
      title: "Contact Section",
      description:
        "A responsive contact section with a clean layout and modern design.",
      image: FourthImage,
      githubLink: "https://github.com/Amjadjamali32/AXOON_FD_04.git",
    },
  ];

  return (
    <section
      className="py-12 px-4 sm:px-6 lg:px-8 bg-white font-roboto"
      id="portfolio"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
          <div>
            <h2 className="text-base font-semibold">Recent Projects</h2>
            <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              My Portfolio
            </h1>
          </div>
          <a
            href="https://github.com/Amjadjamali32/MyPortfolio.git"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 md:mt-0 inline-flex items-center px-4 py-2.5 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-pink-500 hover:bg-pink-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500 transition-colors duration-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-2"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
            </svg>
            Visit My Github
          </a>
        </div>

        {/* Project Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group relative bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md transition-shadow duration-300 border border-gray-100 dark:border-gray-700"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {project.description}
                </p>
                <button className="hover:[box-shadow:0_4px_0_0_theme('colors.violet.600')] transition-all duration-300">
                  <a
                    href={project.dribbbleLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-sm font-medium relative transition-colors duration-300"
                  >
                    View on Github
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-green-800"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M7 17L17 7M7 7h10v10"
                      />
                    </svg>
                  </a>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
