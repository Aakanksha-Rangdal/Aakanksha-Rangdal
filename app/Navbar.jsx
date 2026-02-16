import React from "react";
import Home from "@/public/images/home.png";

const Navbar = () => {
  return (
    <nav className=" bg-linear-to-b from-[#634340] to-[#C988824D] h-16 w-full">
      <ul className="flex items-center justify-end gap-56 mr-20 py-4.5 pl-8 text-2xl">
        <li>
          <a href="/work">Work</a>
        </li>
        <li>
          <a href="/about">About</a>
        </li>
        <li>
          <a href="/contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
