import React from "react";

const HeroText = ({ header, title, body }) => {
  return (
    <div className="hero h-fit bg-base-200">
      <div className="hero-content text-left">
        <div className="max-w-screen">
          <h6 className="text-2xl font-bold mt-10">The best of the best</h6>
          <h1 className="text-7xl font-bold mt-2">
            Home to leading aerospace professionals.
          </h1>
          <div className="inline-flex gap-10 mt-5">
            <p className="py-6 text-2xl max-w-md leading-loose">
              Helios is an international, English-speaking astronaut training
              program that includes vetting candidates, two-year long formal
              astronaut training, and a crewed Mars mission in partnership with
              NASA and ESA.
            </p>
            <img className="mt-10 h-64 w-64" src="src/assets/NASA_logo.svg" />
            {/* mt-10 + mt-16 */}
            <img
              className="h-32 w-64 mt-[6.5rem] bg-white"
              src="src/assets/European_Space_Agency_logo.svg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroText;
