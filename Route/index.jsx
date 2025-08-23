import { RouterProvider } from "react-router-dom";

import React from "react";
import { routes } from "./Routes";
import Loader from "../src/components/loader/Loader";

export default function Routing() {
  return (
    <React.Suspense fallback={<div><Loader/></div>}>
      <RouterProvider router={routes} />
    </React.Suspense>
  );
}
