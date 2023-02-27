import React from "react";

const HeroText = ({ heading, title, body, images, reverseAlign }) => {
  const heroBodyText = (
    <p
      className="text-left py-6 lg:text-2xl text-2xl md:max-w-md lg:leading-loose leading-loose"
      key="main_text"
    >
      {body}
    </p>
  );

  let heroImages;
  if (!images) {
    heroImages = <></>;
  } else {
    heroImages =
      images.length > 1 ? (
        <div
          className={`lg:contents sm:grid md:grid-cols-none sm:grid-cols-${
            images.length
          } place-items-center ${reverseAlign ? "md:mr-10" : "md:ml-10"}`}
          key="images"
        >
          {images?.map((img) => img)}
        </div>
      ) : (
        <div key="images">{images[0]}</div>
      );
  }

  const heroBody = [heroBodyText, heroImages];

  return (
    <div className="hero h-fit bg-base-200 px-2 mt-5">
      <div
        className={`hero-content ${reverseAlign ? "text-right" : "text-left"}`}
      >
        <div className="max-w-5xl">
          <h6 className="md:text-2xl text-xl font-bold mt-10">{heading}</h6>
          <h1 className="md:text-7xl text-5xl font-bold mt-2">{title}</h1>
          <div className="md:inline-flex md:gap-10 md:mt-5 md:items-start">
            {reverseAlign
              ? heroBody.reverse().map((hero) => hero)
              : heroBody.map((hero) => hero)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroText;
