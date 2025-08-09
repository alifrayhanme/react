import React from "react";
import { Link } from "react-router";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center h-16 bg-lime-400 px-6 py-4">
      <div>
        <Link to={"/"}>e-commerce</Link>
      </div>
      <div>
        <ul className="flex justify-center items-center gap-5">
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/cart"}>Cart</Link>
          </li>
          <li>
            <Link to={"/about"}>About</Link>
          </li>
          <li>
            <Link to={"/sign-up"}>SignUp</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
