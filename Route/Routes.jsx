import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout";
import Home from "../src/components/Homepage/Home";
import Notfound from "../src/components/NotFfound/Notfound";

import React from "react";

const contacts = React.lazy(() =>
  import("../src/components/ContactPage/ContactPage")
);
const Teampage = React.lazy(() => import("../src/components/Team/Teampage"));

const Services = React.lazy(() =>
  import("../src/components/services/Services")
);
const Portfolio = React.lazy(() =>
 import("../src/components/Portoflio")
);
export const routes = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: "contact", Component: contacts },
      { path: "team", Component: Teampage },
      { path: "services", Component: Services },
{ path: "Portfolio", Component: Portfolio },

    ],
  },

  {
    path: "*",
    Component: Notfound,
  },
]);
