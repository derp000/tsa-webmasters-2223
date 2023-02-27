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

const AboutUs = () => {
  return (
    <div>
      <HeroImage callToAction={cta} imgUrl={space_image} />
      <HeroText heading={heading} title={title} body={body} />
    </div>
  );
};

export default AboutUs;
