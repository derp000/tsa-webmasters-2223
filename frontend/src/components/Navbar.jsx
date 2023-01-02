import React from "react";
import { Disclosure } from "@headlessui/react";
import { AiOutlineRocket } from "react-icons/ai";

const Navbar = () => {
  return (
    // <Disclosure as="nav" className="bg-orange-500">
    //   <div className="flex items-center justify-between h-20">
    //     <div className="absolute flex items-center justify-start pl-5">
    //       <p>Absolute</p>
    //     </div>
    //     <div className="w-screen">
    //       <div className="relative flex justify-end pr-10">
    //         <div className="flex flex-row space-x-10">
    //           <p>Hi</p>
    //           <p>Bye</p>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </Disclosure>
  <div className="navbar bg-base-100 border-white">
  <div className="navbar-start border-white">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
        <li><a href = "/">Home</a></li>
        {/* <li tabIndex={0}>
          <a className="justify-between">
            Parent
            <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"/></svg>
          </a>
          <ul className="p-2">
            <li><a>Submenu 1</a></li>
            <li><a>Submenu 2</a></li>
          </ul>
        </li> */}
        <li><a href = "/aboutus">About Us</a></li>
      </ul>
    </div>
    <a className="btn btn-ghost normal-case text-xl">TSA Webmasters</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li><a href = "/">Home</a></li>
      {/* <li tabIndex={0}>
        <a>
          Parent
          <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/></svg>
        </a>
        <ul className="p-2">
          <li><a>Submenu 1</a></li>
          <li><a>Submenu 2</a></li>
        </ul>
      </li> */}
      <li><a href = "/aboutus">About Us</a></li>
    </ul>
  </div>
  <div className = "navbar-end">
      <a className = "btn">
        <AiOutlineRocket />
      </a>
      
  </div>
</div>
  );
};

export default Navbar;
