import React from "react";

const HeroScreen = () => {
  return (
    <div>
      <div className="absolute w-[40rem] h-20 left-32 top-80">
        <div className="text-7xl text-white font-extrabold leading-snug">
          Be the next astronaut.
        </div>
      </div>
      <div className="absolute w-[40rem] h-24 left-32 top-[35rem]">
        <div className="text-lg">
          Our team of experts uses a methodology to identify the credit cards most likely to fit your needs. 
We examine annual percentage rates, annual fees.
        </div>
      </div>
      <button className="absolute w-48 h-14 left-32 top-[42rem] bg-yellow-100 hover:bg-yellow-200 rounded-md"> 
        <div className="text-2xl text-black font-bold text-center">
          Get Started
        </div>
      </button>
    </div>
  );
};

export default HeroScreen;
