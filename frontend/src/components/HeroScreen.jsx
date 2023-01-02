import React from "react";

const HeroScreen = () => {
  return (
    <div
      className="hero min-h-screen"
      style={{ backgroundImage: `url("https://images-assets.nasa.gov/image/PIA03276/PIA03276~orig.jpg")` }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">Bonjour</h1>
          <p className="mb-5">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button className="btn btn-primary">Commencer</button>
        </div>
      </div>
    </div>
  );
};

export default HeroScreen;
