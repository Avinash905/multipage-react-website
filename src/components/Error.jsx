import React from "react";
import { NavLink } from "react-router-dom";
import image from "../images/error.svg";

export default function Error() {
  return (
    <section>
      <div className="grid error-page">
        <img src={image} className="w-75 mx-auto" alt="" />
        <NavLink to="/" className="btn btn-outline-light mx-auto">
          Go Back
        </NavLink>
      </div>
    </section>
  );
}
