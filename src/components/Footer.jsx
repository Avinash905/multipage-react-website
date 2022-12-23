import React from "react";
import { NavLink } from "react-router-dom";

export default function Footer() {
  return (
    <>
      <footer>
        <div className="footer">
          <div className="footer-top grid-two shadow">
            <div className="left">
              <p className="footer-top-text">Ready to get started?</p>
              <p className="footer-top-text">Talk to us today</p>
            </div>
            <div className="button text-end">
              <NavLink to="/multipage-react-website/contact" className="btn">
                get started
              </NavLink>
            </div>
          </div>
          <div className="grid-four footer-grid">
            <div className="footer-details">
              <h4>Dunna Avinash</h4>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi,
                magnam
              </p>
            </div>
            <div className="subscribe">
              <h4>Subscribe to get important updates</h4>
              <input
                type="email"
                className="subs-input"
                placeholder="YOUR E-MAIL"
              />
              <button className="btn">SUBSCRIBE</button>
            </div>
            <div className="follow">
              <h4>Follow Us</h4>
              <a
                href="https://github.com/Avinash905"
                target="blank"
                className="social"
              >
                <i className="fa-brands fa-github"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/dunna-avinash-a1b326192"
                target="blank"
                className="social"
              >
                <i className="fa-brands fa-linkedin"></i>
              </a>
              <a
                href="https://twitter.com/AvinashDunna"
                target="blank"
                className="social"
              >
                <i className="fa-brands fa-twitter"></i>
              </a>
            </div>
            <div className="call">
              <h4>Call Us</h4>
              <a href="tel:+919876543210">+91 9876543210</a>
            </div>
          </div>
          <hr />
          <div className="footer-bottom footer-grid grid-two">
            <p className="copyright">
              ©️ {new Date().getFullYear()} Dunna Avinash. All Rights Reserved
            </p>
            <div className="privacy">
              <p>PRIVACY POLICY</p>
              <p>TERMS & CONDITIONS</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
