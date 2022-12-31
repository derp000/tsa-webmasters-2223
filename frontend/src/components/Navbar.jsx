import React from "react";
import { Disclosure } from "@headlessui/react";

const Navbar = () => {
  return (
    <Disclosure as="nav" className="bg-orange-500">
      <div className="flex items-center justify-between h-20">
        <div className="absolute flex items-center justify-start pl-5">
          <p>Absolute</p>
        </div>
        <div className="w-screen">
          <div className="relative flex justify-end pr-10">
            <div className="flex flex-row space-x-10">
              <p>Hi</p>
              <p>Bye</p>
            </div>
          </div>
        </div>
      </div>
    </Disclosure>
  );
};

export default Navbar;
