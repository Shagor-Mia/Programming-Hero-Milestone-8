import React from "react";

const NavLink = ({ link }) => {
  return (
    <li className="px-5 hover:bg-amber-500 rounded-lg">
      <a href={link.path}>{link.name}</a>
    </li>
  );
};

export default NavLink;
