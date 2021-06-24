import { useEffect, useState } from "react";

export const useScroll = (array) => {
  const [scrollDirection, setScrollDirection] = useState(0);
  const [prevOffset, setPrevOffset] = useState(0);
  const toggleScrollDirection = () => {
    let scrollY = window.scrollY;
    if (scrollY === 0) {
      setScrollDirection(null);
    }
    if (scrollY > prevOffset) {
      setScrollDirection((prev) => (prev === array.length - 1 ? 0 : prev + 1));
    } else if (scrollY < prevOffset) {
      setScrollDirection((prev) => (prev === 0 ? array.length - 1 : prev - 1));
    }
    setPrevOffset(scrollY);
  };
  useEffect(() => {
    window.addEventListener("wheel", toggleScrollDirection);
    return () => {
      window.removeEventListener("wheel", toggleScrollDirection);
    };
  });
  return scrollDirection;
};
