import { lazy } from "react";
import { RouteObject } from "react-router-dom";
import Home from "../pages/Home";
import { AboutProvider } from "../context/AboutContext";

const About = lazy(() => import("../pages/About"));
const Cadastro = lazy(() => import("../pages/Cadastro"));

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
  {path: "/cadastro", element: <Cadastro />},
];
