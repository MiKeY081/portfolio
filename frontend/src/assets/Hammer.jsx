import React, { useState, useEffect } from "react";
import { animateScroll as scroll } from "react-scroll";
import { FiChevronUp } from "react-icons/fi";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const scrollToTop = () => {
    scroll.scrollToTop({
      duration: 500,
      smooth: true,
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;

      // Show the button when the user scrolls down
      setIsVisible(scrollTop > 100);
    };

    // Attach event listener when component mounts
    window.addEventListener("scroll", handleScroll);

    // Detach event listener when component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <button
      className={`fixed bottom-10 right-10 bg-green-500 p-3 rounded-full text-white shadow-md hover:bg-green-600 focus:outline-none ${
        !isVisible && "hidden"
      }`}
      onClick={scrollToTop}
    >
      <FiChevronUp size={24} />
    </button>
  );
};

export default ScrollToTopButton;
