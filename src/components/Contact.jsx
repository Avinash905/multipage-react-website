import React from "react";

export default function Contact() {
  return (
    <>
      <section>
        <div className="contact-cont">
          <h2 className="contact-head text-center my-5">
            Feel Free To Contact Us
          </h2>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d6654955.168732536!2d78.98004476038474!3d28.138144405975204!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1671609783767!5m2!1sen!2sin"
            width="100%"
            height="300"
            style={{ border: "0" }}
            allowFullScreen=""
            loading="lazy"
            title="location"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
          <form method="post" action="https://formspree.io/f/xkneldwn">
            <div className="form-div">
              <div className="row mb-3">
                <div className="col">
                  <label
                    htmlFor="inputEmail3"
                    className="col-sm-2 col-form-label"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="inputEmail3"
                    placeholder="Enter your full name"
                    required
                    name="name"
                  />
                </div>
              </div>
              <div className="row mb-3">
                <div className="col">
                  <label
                    htmlFor="inputEmail3"
                    className="col-sm-2 col-form-label"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="inputEmail3"
                    placeholder="example@xyz.com"
                    required
                    name="email"
                  />
                </div>
              </div>
              <div className="row mb-3">
                <div className="col">
                  <label htmlFor="message" className="col-sm-2 col-form-label">
                    Message
                  </label>
                  <textarea
                    className="form-control"
                    id="message"
                    rows="5"
                    required
                    name="message"
                  ></textarea>
                </div>
              </div>
              <button type="submit" className="btn btn-outline-primary">
                Submit
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}
