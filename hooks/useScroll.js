"use client";

import React, { useEffect, useState } from "react";

const useScroll = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;

      if (currentScrollPos < prevScrollPos) {
        setIsScrolled(true);
        // console.log("current scroll is lesser than prev scroll");
      } else {
        setIsScrolled(false);
        // console.log("current scroll is not lesser than prev scroll");
      }

      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);
  return { isScrolled };
};

export default useScroll;
