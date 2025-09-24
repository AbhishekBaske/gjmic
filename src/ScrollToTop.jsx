// ScrollToTop.jsx
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = ({ scrollTarget }) => {
  const { pathname } = useLocation();

  useEffect(() => {
    if (scrollTarget) {
      // scroll to provided target (footer)
      scrollTarget.scrollIntoView({ behavior: "smooth" });
    } else {
      // default scroll to top
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [pathname, scrollTarget]);

  return null;
};

export default ScrollToTop;
