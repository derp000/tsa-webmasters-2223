import React from "react";

const HeroImage = ({ callToAction, imgUrl }) => {
  return (
    <div
      className="hero h-1/2"
      style={{
        backgroundImage: `url(${imgUrl})`,
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-4xl">
          <h1 className="mb-5 mt-10 xl:text-5xl text-3xl font-bold xl:leading-relaxed">
            {callToAction}
          </h1>
          <button className="btn btn-primary mb-10">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default HeroImage;
