import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Carousel from "../components/Carousel";
import WhyJoinUs from "../components/WhyJoinUs";
import Challenges from "../components/Challenges";
import SuccessStories from "../components/SuccessStories";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="">
      <div className="container max-w-[1300px] mx-auto">
        <Navbar />
        <Hero />
        <Carousel />
      </div>

      <WhyJoinUs />
      <Challenges />
      <SuccessStories />
      <Footer />
    </div>
  );
};

export default Home;
