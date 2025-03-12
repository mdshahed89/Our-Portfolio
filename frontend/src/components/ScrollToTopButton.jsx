"use client";
import { IoIosArrowUp } from "react-icons/io";
import { useState, useEffect } from "react";
const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > window.innerHeight) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`fixed bottom-4 right-5 p-3 bg-[#17DB4F] text-white rounded-full z-50 shadow-[0px_1px_10px_rgba(0,0,0,0.15)] cursor-pointer transition-opacity duration-300 ${
        isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
      onClick={scrollToTop}
      title="Back to Top"
    >
      <IoIosArrowUp size={25} />
    </div>
  );
};

export default ScrollToTopButton;
