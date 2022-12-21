import React from "react";
import HeroSection from "./HeroSection";
import Contact from "./Contact";
import Services from "./Services";
import homeimg from "../images/hero.svg";

export default function Home() {
  const data = {
    topSpan: "Welcome to ",
    name: "ZenAvi",
    image: homeimg,
  };
  return (
    <>
      <HeroSection {...data} />
      <Services />
      <Contact />
    </>
  );
}
