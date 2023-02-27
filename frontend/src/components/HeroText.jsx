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
            <div className="lg:contents sm:grid md:grid-cols-none sm:grid-cols-2 place-items-center md:ml-10">
              {images.map((img) => img)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroText;
