import React from "react";
import HeroImage from "./HeroImage";

const cta =
  "We're a group of leading aerospace professionals ready to get YOU to space.";
const space_image = "https://cataas.com/cat/says/Space%20Rocks!";

const AboutUs = () => {
  return (
    <>
      <HeroImage callToAction={cta} imgUrl={space_image} />
    </>
  );
};

export default AboutUs;
