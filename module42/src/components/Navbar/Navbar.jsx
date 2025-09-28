import React, { useState } from "react";
import NavLink from "./Navlink";
import { Menu, X } from "lucide-react";

const navLinks = [
  {
    id: 1,
    name: "Home",
    path: "/",
  },
  {
    id: 2,
    name: "About",
    path: "/about",
  },
  {
    id: 3,
    name: "Services",
    path: "/services",
  },
  {
    id: 4,
    name: "Blog",
    path: "/blog",
  },
  {
    id: 5,
    name: "Contact",
    path: "/contact",
  },
];
const link = navLinks.map((link, index) => <NavLink key={index} link={link} />);
const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="flex justify-between items-center px-10 container mx-auto">
      <div className="flex ">
        <span onClick={() => setOpen(!open)} className="md:hidden">
          {open ? <X /> : <Menu />}
        </span>
        <ul
          className={`md:hidden absolute  duration-500 ${
            open ? "top-8" : "-top-40"
          } bg-amber-400 text-black`}
        >
          {link}
        </ul>
        <h1 className="ml-3">Navbar</h1>
      </div>

      <ul className="md:flex md:gap-5 md:px-5 hidden">{link}</ul>

      <button className="btn pr-10">Sign In</button>
    </div>
  );
};

export default Navbar;
