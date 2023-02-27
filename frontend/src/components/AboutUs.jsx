import React from "react";
import HeroImage from "./HeroImage";
import HeroText from "./HeroText";

const cta = "We're gonna get YOU to space.";
const space_image = "https://cataas.com/cat/says/Space%20Rocks!";

const heading = "The best of the best";
const title = "Home to leading aerospace professionals.";
const body = `
  Helios is an international, English-speaking astronaut training 
  program that includes vetting candidates, two-year long formal astronaut 
  training, and a crewed Mars mission in partnership with NASA and ESA.`;
const nasa = (
  <img
    className="lg:mt-10 md:h-64 md:w-64 sm:h-48 sm:w-48 sm:block hidden"
    src="src/assets/NASA_logo.svg"
  />
);
const esa = (
  <img
    className="md:h-32 md:w-64 lg:mt-[6.5rem] sm:h-24 sm:w-48 sm:bg-white sm:block hidden"
    src="src/assets/European_Space_Agency_logo.svg"
  />
);

const AboutUs = () => {
  return (
    <div>
      <HeroImage callToAction={cta} imgUrl={space_image} />
      <HeroText heading={heading} title={title} body={body} images={[nasa, esa]} />
    </div>
  );
};

export default AboutUs;
