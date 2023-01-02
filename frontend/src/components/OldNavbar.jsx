import React from "react";
import { Disclosure } from "@headlessui/react";
import { Bars3Icon } from "@heroicons/react/24/outline";

const Navbar = () => {
  return (
    <Disclosure as="nav" className="absolute bg-orange-500 h-20">
      <div className="flex items-center justify-between h-full text-2xl">
        <div className="lg:block hidden items-center">
          <div className="absolute justify-start pl-10">
            <p>Company Name</p>
          </div>
          <div className="w-screen">
            <div className="relative flex justify-end pr-10">
              <div className="font-bold">
                <div className="flex flex-row space-x-5">
                  <div className="flex items-center justify-center w-40 h-15 hover:bg-white rounded-md">
                    <p>Pricing</p>
                  </div>
                  <div className="flex items-center justify-center w-40 h-10 hover:bg-white rounded-md">
                    <p>About Us</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:hidden block w-screen px-5">
          <div className="flex items-center justify-between font-bold">
            <Bars3Icon className="h-9 w-9" />
            <div className="relative flex justify-end pr-1">
              <p>Company Name</p>
            </div>
          </div>
        </div>
      </div>
    </Disclosure>
  );
};

export default Navbar;
