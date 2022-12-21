import React from "react";
import HeroSection from "./HeroSection";
import aboutimg from "../images/about1.svg";

export default function About() {
  const data = {
    topSpan: "HI THERE, I AM",
    name: "Dunna Avinash",
    image: aboutimg,
  };
  return (
    <>
      <HeroSection {...data} />
    </>
  );
}
