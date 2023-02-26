import { Fragment } from "react";
import { Link, NavLink } from "react-router-dom";
import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const Navbar = ({ categories }) => {
  return (
    <>
      <Disclosure as="nav" className="bg-gray-800">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="relative flex h-16 items-center justify-between">
            <div className="relative flex flex-shrink items-center lg:justify-start justify-between w-full font-bold text-white">
              <div className="sm:hidden absolute inset-y-0 left-0 flex items-center">
                {/* Menu UI */}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <XMarkIcon
                    className="ui-open:block ui-not-open:hidden h-6 w-6"
                    aria-hidden="true"
                  />
                  <Bars3Icon
                    className="ui-open:hidden ui-not-open:block h-6 w-6"
                    aria-hidden="true"
                  />
                </Disclosure.Button>
              </div>
              {/* logo */}
              <Link to="/" className="block w-auto mx-auto sm:mx-0 lg:hidden">
                <h1>Helios</h1>
              </Link>
              <Link to="/" className="hidden w-auto lg:block">
                <h1>Helios</h1>
              </Link>
            </div>
            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-end">
              {/* nav items */}
              <div className="hidden sm:ml-6 sm:block">
                <div className="flex space-x-4">
                  {categories.map((item) => (
                    <NavLink
                      key={item.name}
                      to={`/${item.to}`}
                      className={({ isActive }) =>
                        isActive
                          ? "bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium"
                          : "text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                      }
                    >
                      {item.name}
                    </NavLink>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Menu Items */}
        <Disclosure.Panel className="sm:hidden">
          <div className="space-y-1 px-2 pt-2 pb-3">
            {categories.map((item) => (
              <Disclosure.Button
                key={item.name}
                as={Fragment}
                className={({ isActive }) =>
                  isActive
                    ? "bg-gray-900 text-white hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                    : "text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                }
              >
                <NavLink to={`/${item.to}`}>{item.name}</NavLink>
              </Disclosure.Button>
            ))}
          </div>
        </Disclosure.Panel>
      </Disclosure>
    </>
  );
};

export default Navbar;
