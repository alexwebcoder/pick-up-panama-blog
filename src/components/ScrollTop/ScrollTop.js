import { FaAngleUp } from "react-icons/fa";
import "./ScrollTop.css";
import { useState, useEffect } from "react";

const ScrollTop = () => {
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 400) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    });
  }, []);

  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div tabIndex={0} className="top-to-bottom">
      {" "}
      {showTopBtn && (
        <FaAngleUp className="icon-position icon-style" onClick={goToTop} />
      )}{" "}
    </div>
  );
};
console.log( document.querySelector('.top-to-bottom'))
export default ScrollTop;
