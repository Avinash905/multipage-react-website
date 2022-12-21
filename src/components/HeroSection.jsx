import React from "react";
import { NavLink } from "react-router-dom";

export default function HeroSection({ topSpan, name, image }) {
  return (
    <>
      <section>
        <div className="hero-section grid grid-two">
          <div className="hero-left">
            <span className="hero-top">{topSpan}</span>
            <h1 className="heading-one">{name}</h1>
            <p>
              I'm the Founder and CEO of ZenAvi. Also full stack developer and a
              freelancer.
            </p>
            <NavLink to="/contact" className="btn btn-outline-light">
              Hire me
            </NavLink>
          </div>
          <div className="hero-right">
            <img src={image} alt="hero" />
          </div>
        </div>
      </section>
    </>
  );
}
