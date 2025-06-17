const TestimonialsSection = () => {
  const testimonials = [
    {
      id: 1,
      quote:
        "Working with this team was an absolute pleasure. Their attention to detail and creative approach resulted in a website that exceeded our expectations.",
      name: "Sarah Johnson",
      role: "Marketing Director, TechCorp",
      avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
      id: 2,
      quote:
        "The level of professionalism and technical expertise demonstrated was impressive. They delivered our project on time and within budget.",
      name: "Michael Chen",
      role: "CEO, StartupHub",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
      id: 3,
      quote:
        "Exceptional service from start to finish. They understood our vision perfectly and translated it into a beautiful digital experience.",
      name: "Emma Rodriguez",
      role: "Product Manager, DesignCo",
      avatar: "https://randomuser.me/api/portraits/women/68.jpg",
    },
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50 font-roboto" style={{backgroundColor: "#F5FCFF"}} id="testimonials">
      <div className="max-w-7xl mx-4">
        <div className="mb-12">
          <h2 className="text-base font-semibold">Clients Feedback</h2>
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Customer testimonials
          </h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="group relative bg-white p-6 rounded-lg border-2 border-green-800 hover:border-green-600 transition-all duration-300 shadow-sm hover:shadow-md"
            >
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-green-800"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              
              <blockquote className="text-gray-600 dark:text-gray-300 mb-6">
                <p className="italic">"{testimonial.quote}"</p>
              </blockquote>

              <div className="flex items-center">
                <img
                  className="h-10 w-10 rounded-full object-cover"
                  src={testimonial.avatar}
                  alt={testimonial.name}
                />
                <div className="ml-3">
                  <p className="text-sm font-medium text-gray-900 dark:text-white">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
