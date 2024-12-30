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
      className={`fixed bottom-5 right-5 p-3 bg-[#20C19E] text-white rounded-full shadow-lg cursor-pointer transition-opacity duration-300 ${
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
