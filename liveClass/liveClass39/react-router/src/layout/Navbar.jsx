import React from "react";
import { Link, Outlet } from "react-router";

export const Navbar = () => {
  return (
    <>
      <header>
        <div>
          <Link to="/">reactRouter</Link>
        </div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="product">Product</Link>
            </li>
            <li>
              <Link to="contact">Contact</Link>
            </li>
            <li>
              <Link to="about">About</Link>
            </li>
            <li>
              <Link to="signin">SignIn</Link>
            </li>
          </ul>
        </nav>
      </header>
      <Outlet />
    </>
  );
};
