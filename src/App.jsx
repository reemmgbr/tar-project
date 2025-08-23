import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import Home from "./components/Homepage/Home";
import Routing from "../Route";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

export default function App() {
  useEffect(() => {
    ScrollSmoother.create({
      // دول ممكن نكتبهم وممكن لا لان gsap بيفهمهم لوحده
      wrapper: "#smooth-wrapper",
      content: "#smooth-content",
      smooth: 1.5,
      effects: true,
    });
  }, []);

  return (
    <div id="smooth-wrapper">
      <div id="smooth-content">
        <Routing />
      </div>
    </div>
  );
}
