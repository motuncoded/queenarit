import React from "react";

const WhyJoinUs = () => {
  const benefits = [
    {
      title: "Career growth & mentorship",
      description:
        "Access to expert mentors and resources to accelerate your professional development.",
      img: "/people.png",
    },
    {
      title: "Global Networking",
      description:
        "Connect with tech professionals worldwide and expand your professional network.",

      img: "/world.png",
    },
    {
      title: "Job Opportunities",
      description:
        "Get access to exclusive job postings and career opportunities in top companies.",

      img: "/hiring.png",
    },
  ];

  return (
    <section className=" py-10 my-16 px-6 sm:px-12 bg-[linear-gradient(360deg,#F5F3FF_61.81%,#DCD8FF_100%)]">
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
          Why You Should Join Us?
        </h2>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 place-items-center ">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-[#fa57a6]  text-white rounded-2xl hover:shadow-md transition-all duration-300"
            >
              <img
                src={benefit.img}
                alt=""
                className="rounded-tl-2xl rounded-tr-2xl h-56 w-full object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold  mb-4">{benefit.title}</h3>
                <p className="text-gray-200">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 mt-10 place-items-center">
          <h4 className="text-4xl flex flex-col font-bold text-center ">
            1000+
            <span className="font-normal text-sm mt-3">Members Worldwide</span>
          </h4>
          <h4 className="text-4xl flex flex-col font-bold text-center ">
            10+
            <span className="font-normal text-sm mt-4">
              Countries represented
            </span>
          </h4>
          <h4 className="text-4xl flex flex-col font-bold text-center ">
            150+
            <span className="font-normal text-sm mt-4">
              Career Success Stories
            </span>
          </h4>{" "}
          <h4 className="text-4xl flex flex-col font-bold text-center ">
            50+
            <span className="font-normal text-sm mt-4">Skill Challenges</span>
          </h4>
        </div>
      </div>
    </section>
  );
};

export default WhyJoinUs;
