import React, { useEffect, useState } from "react";

export default function GoToTop() {
  const [isVisible, setIsVisible] = useState(false);

  const goTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  const listenToScroll = () => {
    let hiddenHeight = 200;
    const scroll =
      document.body.scrollTop || document.documentElement.scrollTop;
    if (scroll > hiddenHeight) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", listenToScroll);
    return () => {
      window.removeEventListener("scroll", listenToScroll);
    };
  }, []);

  return (
    <>
      {isVisible && (
        <div className="go-top" onClick={goTop}>
          <i className="fa-solid fa-arrow-up"></i>
        </div>
      )}
    </>
  );
}
