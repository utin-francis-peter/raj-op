"use client";
import useAos from "@/hooks/useAos";
import useScroll from "@/hooks/useScroll";
import React from "react";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";

const Layout = ({ children }) => {
  const { isScrolled } = useScroll();
  useAos();

  return (
    <>
      <Header isScrolled={isScrolled} />
      <main className={`flex-1 ${isScrolled ? "pt-[100px]" : ""}`}>
        {children}
      </main>
      <Footer />
    </>
  );
};

export default Layout;
