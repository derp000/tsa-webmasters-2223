import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  // [url('https://images-assets.nasa.gov/image/PIA04591/PIA04591~orig.jpg')]

  return (
    <div className="bg-cover bg-black">
      <div className="bg-center bg-contain bg-no-repeat bg-[url('assets/mars.jpg')]">
        <div className="flex flex-col items-center justify-center h-screen">
          <h1 className="text-white font-bold text-6xl pb-5">Mars Interest</h1>
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
}

export default App;
