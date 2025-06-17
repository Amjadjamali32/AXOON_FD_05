const ContactForm = () => {
  const topics = [
    "General Inquiry",
    "Project Collaboration",
    "Freelance Work",
    "Job Opportunity",
    "Other",
  ];

  return (
    <section className="py-6 px-4 sm:px-6 lg:px-8 bg-gray-50 font-roboto" id="contact">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-base font-semibold">Get In Touch</h2>
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Contact me
          </h1>
          <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? Feel free to reach
            out!
          </p>
        </div>

        {/* Contact Form */}
        <form className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label
                htmlFor="first-name"
                className="block text-sm font-medium mb-1"
              >
                First Name
              </label>
              <input
                type="text"
                id="first-name"
                name="first-name"
                required
                className="w-full px-4 py-2 border border-violet-600 rounded-md shadow-sm focus:outline-violet-600"
              />
            </div>
            <div>
              <label
                htmlFor="last-name"
                className="block text-sm font-medium mb-1"
              >
                Last Name
              </label>
              <input
                type="text"
                id="last-name"
                name="last-name"
                required
                className="w-full px-4 py-2 border border-violet-600 rounded-md shadow-sm focus:outline-violet-600"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full px-4 py-2 border border-violet-600 rounded-md shadow-sm focus:outline-violet-600"
              />
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-medium mb-1">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                className="w-full px-4 py-2 border border-violet-600 rounded-md shadow-sm focus:outline-violet-600"
              />
            </div>
          </div>

          <div>
            <label htmlFor="topic" className="block text-sm font-medium mb-1">
              Choose a Topic
            </label>
            <select
              id="topic"
              name="topic"
              className="w-full px-4 py-2.5 border border-violet-600 rounded-md shadow-sm focus:outline-violet-600"
            >
              {topics.map((topic, index) => (
                <option key={index} value={topic}>
                  {topic}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium mb-1">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              required
              className="w-full px-4 py-2 border border-violet-600 rounded-md shadow-sm focus:outline-violet-600"
            />
          </div>

          <div className="flex items-center">
            <input
              id="terms"
              name="terms"
              type="checkbox"
              required
              className="h-4 w-4 border-violet-600 accent-violet-600"
            />
            <label htmlFor="terms" className="ml-2 block text-sm">
              I accept the terms
            </label>
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="inline-flex items-center px-10 py-2.5 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-violet-600 hover:bg-violet-700 focus:outline-none transition-colors duration-300"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
