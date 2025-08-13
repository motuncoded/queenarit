import React, { useState } from "react";
import {
  FaCalendarAlt,
  FaClock,
  FaCalendarDay,
  FaHourglassHalf,
  FaRocket,
} from "react-icons/fa";
const Challenges = () => {
  const [activeTab, setActiveTab] = useState(0);
  const tabsData = [
    {
      id: 0,
      name: "All",
      items: [
        {
          id: 1,
          name: "Virtual Assistant",
          Date: "10-05-2025",
          Duration: "4 weeks",
          button: "Join Challenge",
        },
        {
          id: 2,
          name: "Virtual Assistant",
          Date: "10-05-2025",
          Duration: "4 weeks",
          button: "Join Challenge",
        },
        {
          id: 3,
          name: "Product Management",
          Date: "20-05-2025",
          Duration: "4 weeks",
          button: "Join Challenge",
        },
        {
          id: 4,
          name: "Miracle's Space",
          Days: "Mondays",
          Time: "9pm",
          Duration: "2 hours",
          button: "Join ",
        },
        {
          id: 5,
          name: "Mentors' corner",
          Days: "1st Saturday of every Month",
          Time: "1-2pm",
          Duration: "2 hours",
          button: "Join ",
        },
      ],
    },
    {
      id: 1,
      name: "Challenges",
      items: [
        {
          id: 1,
          name: "Virtual Assistant",
          Date: "10-05-2025",
          Duration: "4 weeks",
          button: "Join Challenge",
        },
        {
          id: 2,
          name: "Data analysis",
          Date: "10-05-2025",
          Duration: "4 weeks",
          button: "Join Challenge",
        },
        {
          id: 3,
          name: "Product Management",
          Date: "20-05-2025",
          Duration: "4 weeks",
          button: "Join Challenge",
        },
        {
          id: 4,
          name: "Hackathon",
          Date: "20-05-2025",
          Duration: "5 weeks",
          button: "Join Challenge",
        },
        {
          id: 5,
          name: "Technical Writing",
          Date: "20-05-2025",
          Duration: "5 weeks",
          button: "Join Challenge",
        },
        {
          id: 6,
          name: "Product Management",
          Date: "20-05-2025",
          Duration: "5 weeks",
          button: "Join Challenge",
        },
      ],
    },
    {
      id: 2,
      name: "Upcoming Events",
      items: [
        {
          id: 1,
          name: "Jacy's Space",
          Date: "Friday",
          Duration: "2 hours",
          Time: "5pm",
          button: "Join the space",
        },
        {
          id: 2,
          name: "Miracle's Space",
          Days: "Mondays",
          Time: "9pm",
          Duration: "2 hours",
          button: "Join the space",
        },
        {
          id: 3,
          name: "Mentors' corner",
          Days: "1st Saturday of every Month",
          Duration: "2 hours",
          Time: "1-2pm",

          button: "Register for the event",
        },
        {
          id: 4,
          name: "OSCAFEST",
          Date: "Friday & Satursday",
          Time: "8am",
          button: "Register for the event",
        },
        {
          id: 5,
          name: "CHAOSS",
          Date: "Wednesday",
          Time: "8am",
          button: "Register for the event",
        },
        {
          id: 6,
          name: "Ego's Space",
          Date: "Sunday",
          Time: "5pm",
          button: "Join the space",
        },
      ],
    },
  ];

  const ChallengeCard = ({ item }) => (
    <div className="p-6 border border-gray-200 rounded-2xl hover:shadow-lg transition-all duration-300 flex flex-col items-center bg-white">
      {/* Icon Header */}
      <div className="mb-4 p-3 bg-[#F5F3FF] rounded-full">
        <FaRocket className="text-2xl text-[#6C5CEF]" />
      </div>

      {/* Title */}
      <h3 className="font-bold text-xl text-gray-800 text-center mb-3">
        {item.name}
      </h3>

      {/* Details with Icons */}
      <div className="w-full mt-2 space-y-3">
        {item.Date && (
          <div className="flex items-center gap-2">
            <FaCalendarAlt className="text-[#6C5CEF]" />
            <p className="text-gray-600">Date: {item.Date}</p>
          </div>
        )}

        {item.Days && (
          <div className="flex items-center gap-2">
            <FaCalendarDay className="text-[#6C5CEF]" />
            <p className="text-gray-600">Days: {item.Days}</p>
          </div>
        )}

        {item.Time && (
          <div className="flex items-center gap-2">
            <FaClock className="text-[#6C5CEF]" />
            <p className="text-gray-600">Time: {item.Time}</p>
          </div>
        )}

        {item.Duration && (
          <div className="flex items-center gap-2">
            <FaHourglassHalf className="text-[#6C5CEF]" />
            <p className="text-gray-600">Duration: {item.Duration}</p>
          </div>
        )}
      </div>

      {/* Button */}
      {item.button && (
        <button className="mt-6 w-full px-6 py-3 bg-[#fa57a6] text-white rounded-lg hover:bg-pink-700 transition-colors font-medium flex items-center justify-center gap-2">
          {item.button}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      )}
    </div>
  );
  const TabHeader = ({ tab, isActive, onClick }) => (
    <button
      onClick={onClick}
      className={`md:py-3 py-1 md:px-4 rounded-2xl font-medium md:text-lg transition-colors ${
        isActive
          ? "bg-[#fa57a6] text-white shadow-md"
          : "text-gray-700 bg-pink-100"
      }`}
    >
      {tab.name}
    </button>
  );
  return (
    <section className="max-w-7xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
        Community Challenges
      </h2>

      <div className="mx-auto p-4">
        <div className="max-w-xl mx-auto grid grid-cols-3 gap-4 mb-6">
          {tabsData.map((tab) => (
            <TabHeader
              key={tab.id}
              tab={tab}
              isActive={activeTab === tab.id}
              onClick={() => setActiveTab(tab.id)}
            />
          ))}
        </div>

        <div className="p-6 mt-10">
          <div className="grid grid-cols-1 md:grid-cols-2  gap-6">
            {tabsData[activeTab].items.map((item) => (
              <ChallengeCard key={`${activeTab}-${item.id}`} item={item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Challenges;
