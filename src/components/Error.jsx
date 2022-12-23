import React from "react";
import { NavLink } from "react-router-dom";
import image from "../images/error.svg";

export default function Error() {
  return (
    <section>
      <div className="error-page d-flex flex-column">
        <img src={image} className="w-75 mx-auto" alt="" />
        <NavLink
          to="/multipage-react-website"
          className="btn btn-outline-light mx-auto"
        >
          Go to Home
        </NavLink>
      </div>
    </section>
  );
}
