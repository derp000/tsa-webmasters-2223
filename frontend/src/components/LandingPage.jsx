import React from "react";

const LandingPage = () => {
  return (
    <div>
      <div className="flex flex-col items-start p-0 gap-10 h-[26rem] left-28 right-[40rem] top-52">
        <div className="w-[38rem] h-80 flex-none order-none self-stretch grow-0 text-7xl text-white font-extrabold">
          Be the next astronaut.
        </div>
        <div className="w-[38rem] h-24 flex-none order-1 self-stretch grow-0">
          <div className="text-lg">
            Our team of experts uses a methodology to identify the credit cards most likely to fit your needs. We examine annual percentage rates, annual fees.
          </div>
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

export default LandingPage;
