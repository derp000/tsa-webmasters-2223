import React from "react";
import HeroImage from "./HeroImage";
import HeroText from "./HeroText";

const cta = "We're gonna get YOU to space.";
const space_image = "https://cataas.com/cat/says/Space%20Rocks!";

const bodyIntro = `
  Helios is an international, English-speaking astronaut training 
  program that includes vetting candidates, two-year long formal astronaut 
  training, and a crewed Mars mission in partnership with NASA and ESA.`;
const nasa = (
  <img
    className="lg:mt-10 md:h-64 md:w-64 sm:h-48 sm:w-48 sm:block hidden"
    src="src/assets/NASA_logo.svg"
    alt="Nasa Logo"
    key="nasa_logo"
  />
);
// mt-10 + mt-16
const esa = (
  <img
    className="md:h-32 md:w-64 lg:mt-[6.5rem] sm:h-24 sm:w-48 sm:bg-white sm:block hidden"
    src="src/assets/European_Space_Agency_logo.svg"
    alt="ESA Logo"
    key="esa_logo"
  />
);

const bodySite = `
  Helios is based out of Huntsville, Alabama, a world-renowned hub for aerospace. 
  At Space Camp in Huntsville Alabama, where many youth and adults do mock astronaut training, 
  Helios will construct their own building. Space Camp, which is internationally funded by space 
  programs, already has many advanced features including a neutral buoyancy pool, three duplicate 
  spacecraft for stimulations, and a newly built mars habitat stimulator. These will be shared by 
  Space Camp and Helios for training purposes. In its own building, Helios will build a g-force 
  accelerator, physical and mental testing rooms, and offices.
`;
// 3:2 image
const huntsville = (
  <img
    className="mt-10 mx-auto sm:h-[48rem] h-96 w-[32rem] max-h-fit"
    src="src/assets/HuntsvilleRocket.jpg"
    alt="Rockets on display in Huntsville"
    key="huntsville"
  />
);

const AboutUs = () => {
  return (
    <div>
      <HeroImage callToAction={cta} imgUrl={space_image} />
      <HeroText
        heading={"The best of the best"}
        title={"Home to leading aerospace professionals."}
        body={bodyIntro}
        images={[nasa, esa]}
      />
      <HeroText
        heading={"Welcome to AL"}
        title={"Born in the heart of Alabama's space industry."}
        body={bodySite}
        images={[huntsville]}
        reverseAlign={true}
      />
    </div>
  );
};

export default AboutUs;
