import React, { useState } from "react";

const OldHome = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="bg-cover bg-black">
      <div className="bg-center bg-contain bg-no-repeat bg-[url('assets/mars.jpg')]">
        <div className="flex flex-col items-center justify-center h-screen">
          <div className="text-white font-bold sm:text-6xl text-5xl pb-5">
            <h1>Our Company</h1>
          </div>
          <button
            className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded"
            onClick={() => setCount(count + 1)}
          >
            {count} Joined!
          </button>
        </div>
      </div>
    </div>
  );
};

export default OldHome;
