import React from "react";
import { createBrowserRouter } from "react-router";

import { Home } from "../pages/Home";
import { Product } from "../pages/Product";
import { Contact } from "../pages/Contact";
import { About } from "../pages/About";
import { Navbar } from "../layout/Navbar";
import { SignIn } from "../pages/SignIn";
import { Profile } from "../pages/Profile";
import { ProductDetails } from "../Component/ProductDetails";
import { ErrorComponent } from "../Component/ErrorComponent";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Navbar />,
    errorElement: <ErrorComponent/>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/product",
        element: <Product />,
      },
      {
        path: "/product/:id",
        element: <ProductDetails />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/signin",
        element: <SignIn />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
    ],
  },
]);
