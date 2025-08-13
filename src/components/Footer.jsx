import React from "react";
import { FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="  pt-16 pb-8 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
          {/* Brand Column */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold flex items-center">
              QueenAritCircle
            </h3>
            <p className="">
              Empowering women in tech through collaborative challenges and
              mentorship.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-[#fa57a6] transition-colors">
                <FaTwitter size={20} />
              </a>
              <a href="#" className=" hover:text-[#fa57a6] transition-colors">
                <FaLinkedin size={20} />
              </a>
              <a href="#" className=" hover:text-[#fa57a6] transition-colors">
                <FaGithub size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Explore</h4>
            <ul className="space-y-2 ">
              <li>
                <a href="#" className="">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="">
                  Career Growth
                </a>
              </li>
              <li>
                <a href="#" className="">
                  Events
                </a>
              </li>
              <li>
                <a href="#" className="">
                  Challenges
                </a>
              </li>
              <li>
                <a href="#" className="">
                  Success Stories
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Resources</h4>
            <ul className="space-y-2 ">
              <li>
                <a href="#" className="">
                  Mentorship
                </a>
              </li>
              <li>
                <a href="#" className="">
                  Learning Paths
                </a>
              </li>
              <li>
                <a href="#" className="">
                  Community Guidelines
                </a>
              </li>
              <li>
                <a href="#" className="">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="">
                  Blog
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Get In Touch</h4>
            <ul className="space-y-2 ">
              <li className="flex items-start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-2 mt-0.5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                hello@queenaritcircle.com
              </li>
              <li className="flex items-start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-2 mt-0.5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                    clipRule="evenodd"
                  />
                </svg>
                Lagos, Nigeria
              </li>
              <li className="mt-4">
                <button className="px-6 py-2 bg-[#fa57a6] text-white rounded-3xl hover:bg-[#FD3B9A] transition-colors">
                  Join Our Community
                </button>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t  pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className=" mb-4 md:mb-0">
            © {new Date().getFullYear()} QueenAritCircle. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Code of Conduct</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
