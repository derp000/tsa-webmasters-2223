import React from "react";

const HeroText = ({ heading, title, body, images }) => {
  return (
    <div className="hero h-fit bg-base-200 px-5">
      <div className="hero-content text-left">
        <div className="max-w-5xl">
          <h6 className="md:text-2xl text-xl font-bold mt-10">{heading}</h6>
          <h1 className="md:text-7xl text-5xl font-bold mt-2">{title}</h1>
          <div className="md:inline-flex md:gap-10 md:mt-5">
            <p className="py-6 lg:text-2xl text-3xl md:max-w-md lg:leading-loose leading-loose">
              {body}
            </p>
            <div className="lg:contents md:grid md:ml-10">
              <img
                className="lg:mt-10 md:h-64 md:w-64 sm:h-48 sm:w-48 sm:block hidden"
                src="src/assets/NASA_logo.svg"
              />
              {/* mt-10 + mt-12 or lg:mt-16  */}
              <img
                className="md:h-32 md:w-64 lg:mt-[6.5rem] sm:h-24 sm:w-48 sm:bg-white sm:block hidden"
                src="src/assets/European_Space_Agency_logo.svg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroText;
