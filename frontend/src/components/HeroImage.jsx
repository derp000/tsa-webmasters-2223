import React from "react";

const HeroImage = ({ callToAction, imgSrc }) => {
  return (
    <div
      className="hero h-1/2"
      style={{
        backgroundImage: `url(${imgSrc})`,
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content px-10">
        <div className="max-w-screen">
          <h1 className="mb-5 mt-10 xl:text-8xl text-3xl font-bold">
            {callToAction}
          </h1>
          <button className="btn btn-primary mb-10 text-xs lg:text-sm">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroImage;
