import React from "react";
import { NavLink } from "react-router-dom";
import { useGlobalContext } from "./Context";

export default function Services() {
  const { services } = useGlobalContext();
  return (
    <>
      <section>
        <div className="service-cont">
          <h2 className="text-center my-5 service-head">Our Services</h2>
          <div className="card-cont d-flex flex-wrap gap-5 text-center">
            {services.map((currEle, index) => {
              return (
                <div
                  className="card"
                  style={{ width: "30rem" }}
                  key={currEle.id}
                >
                  <figure>
                    <img
                      src={currEle.image}
                      className="card-img-top"
                      alt="service"
                      loading="lazy"
                    />
                  </figure>
                  <div className="card-body">
                    <h5 className="card-title mt-3">{currEle.title}</h5>
                    <p className="card-text">{currEle.desc}</p>
                    <NavLink
                      to="/multipage-react-website/services"
                      className="read-more btn"
                    >
                      Read More
                    </NavLink>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
