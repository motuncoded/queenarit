import React from "react";

const SuccessStories = () => {
  const testimonials = [
    {
      id: 1,
      name: "Jacy Joe",
      role: "Product Manager",
      quote:
        "This community completely transformed my career. The challenges helped me gain practical skills I use every day at work.",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
      id: 2,
      name: "Miracle Agitan",
      role: "Virtual Assistant",
      quote:
        "The supportive environment and real-world projects gave me the confidence to switch to tech within just 3 months!",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
      id: 3,
      name: "Motunrayo Adeneye",
      role: "Software Developer",
      quote:
        "I met my current team through these challenges. The networking opportunities are as valuable as the learning itself.",
      image: "https://randomuser.me/api/portraits/women/68.jpg",
    },
    {
      id: 4,
      name: "Ada",
      role: "UX/UI Developer",
      quote:
        "I met my current team through these challenges. The networking opportunities are as valuable as the learning itself.",
      image: "https://randomuser.me/api/portraits/women/28.jpg",
    },
    {
      id: 5,
      name: "Bunmi",
      role: "Frontend Developer",
      quote:
        "I met my current team through these challenges. The networking opportunities are as valuable as the learning itself.",
      image: "https://randomuser.me/api/portraits/men/24.jpg",
    },
    {
      id: 6,
      name: "Ego",
      role: "UX/UI Developer",
      quote:
        "I met my current team through these challenges. The networking opportunities are as valuable as the learning itself.",
      image: "https://randomuser.me/api/portraits/women/24.jpg",
    },
  ];

  return (
    <section className="py-16 px-4 bg-[#F5F3FF]">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">
          What Our Members Say
        </h2>
        <p className="text-lg text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          Hear from people who transformed their careers through our community
          challenges
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col items-center"
            >
              <div className="relative mb-6">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-24 h-24 rounded-full object-cover border-4 border-[#6C5CEF]"
                />
                <div className="absolute -bottom-2 -right-2 bg-[#fa57a6] text-white p-2 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </div>

              <blockquote className="text-lg text-gray-600 text-center mb-6 flex-grow">
                "{testimonial.quote}"
              </blockquote>

              <div className="text-center">
                <p className="font-bold text-gray-900">{testimonial.name}</p>
                <p className="text-[#6C5CEF]">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;
