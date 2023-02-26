import React from "react";

const LandingPage = () => {
  return (
    <div className="hero min-h-screen bg-black px-10">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          src="https://images-assets.nasa.gov/image/PIA03276/PIA03276~orig.jpg"
          className="max-w-sm rounded-lg shadow-2xl"
        />
        <div>
          <h1 className="text-5xl font-bold">Become the next astronaut.</h1>
          <p className="py-6 pr-24">
            Create a fictitious company and design an appropriate website. The
            website should provide information starting with promotion, basic
            information, cost, planning, training, vehicles, safety, launch, and
            recovery.
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
