import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({ navbar }) => {
  const { logo } = navbar;
  return (
    <div className="w-full h-20 px-5 md:px-10">
      <div className="flex items-center justify-between w-full h-full">
        <Link to="/">
          {" "}
          <img src={logo} />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
