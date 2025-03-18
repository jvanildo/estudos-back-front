import { lazy } from "react";
import { RouteObject } from "react-router-dom";
import Home from "../pages/Home";
import { AboutProvider } from "../context/AboutContext";

const About = lazy(() => import("../pages/About"));

export const routes: RouteObject[] = [
  { path: "/", element: <Home /> },
  { 
    path: "/about",
    element: (
      <AboutProvider>
        <About />
      </AboutProvider>
    ), 
  },
];
