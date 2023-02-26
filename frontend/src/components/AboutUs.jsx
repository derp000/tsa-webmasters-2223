import React from "react";
import HeroImage from "./HeroImage";
import HeroText from "./HeroText";

const cta =
  "We're gonna get YOU to space.";
const space_image = "https://cataas.com/cat/says/Space%20Rocks!";

const AboutUs = () => {
  return (
    <div>
      <HeroImage callToAction={cta} imgUrl={space_image} />
      <HeroText />
    </div>
  );
};

export default AboutUs;
