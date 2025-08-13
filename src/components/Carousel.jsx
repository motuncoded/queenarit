import React from "react";

const Carousel = () => {
  return (
    <section className="md:my-20 my-10 px-4 grid grid-cols-1 md:grid-cols-3 gap-8 place-items-center">
      <div>
        <img
          src="/queenarit.jpg"
          alt="queenarit"
          className="rounded-2xl w-[352px] object-cover border-[#fa57a6] border-2"
        />
      </div>
      <div>
        <img
          src="/community.png"
          alt="queenarit"
          className="rounded-2xl w-[460px] h-[250px] object-cover border-[#fa57a6] border-2"
        />
      </div>
      <div>
        <img
          src="/king_robert.jpg"
          alt="queenarit"
          className="rounded-2xl w-[350px] object-cover border-[#fa57a6] border-2"
        />
      </div>
    </section>
  );
};

export default Carousel;
