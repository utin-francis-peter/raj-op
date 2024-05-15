"use client";

import React, { useState, useEffect } from "react";
import "./Header.scss";
import Image from "next/image";
import NavLink from "@/components/NavLink/NavLink";
import FacebookSVG from "@/components/FacebookSVG";
import Link from "next/link";

import Logo from "../../../public/newlogo.png";
import Facebook from "../../../public/icons/facebook.svg";
import CloseMenu from "../../../public/icons/close.svg";
import OpenMenu from "../../../public/icons/menu.svg";

import { usePathname } from "next/navigation";

const Header = ({ isScrolled }) => {
  const [showMobNav, setShowMobNav] = useState(false);

  useEffect(() => {
    if (typeof document !== "undefined") {
      const body = document?.body;

      showMobNav
        ? (body.style.overflowY = "hidden")
        : (body.style.overflowY = "visible");
    }
  }, [showMobNav]);

  return (
    // TODO: transition-effect applies to other properties (like bg) but not fixed or relative position changes. Find out why!
    <header
      className={`h-[100px] flex items-center ${
        isScrolled
          ? "fixed-header transition-effect"
          : "relative transition-effect"
      }`}
      style={{ boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)" }}
    >
      <nav
        className={`w-full md:flex items-center justify-between grid-container`}
      >
        {/* responsive logo + mob hamburger */}
        <div className="flex items-center justify-between">
          <Link href="/">
            <Image
              className="logo"
              src={Logo}
              alt="Raj Housing logo"
              width={65}
              height={80}
            />
          </Link>
          <button
            className="md:hidden"
            onClick={() => setShowMobNav(!showMobNav)}
            aria-label="menu button"
          >
            <Image
              src={!showMobNav ? OpenMenu : CloseMenu}
              alt="menu button"
              width={40}
              height={40}
            />
          </button>
        </div>

        <div
          className={`overflow-hidden transition-all duration-300 delay-150 absolute left-0 top-full w-full md:h-full md:static grow flex items-center justify-center md:block md:max-w-[75%] z-50 bg-white md:bg-transparent ${
            showMobNav ? "h-screen" : "h-0"
          } `}
        >
          <ul className="flex flex-col items-center justify-end gap-[1rem] md:gap-[2rem] text-center md:text-end text-[18px] md:flex-row -mt-[12rem] md:mt-0 font-semibold">
            {navList.map((nav, i) => (
              // TODO: for weird reasons, the NavLink ::after height isn't working as expected here
              <li
                className="text-center md:py-5 md:text-center"
                onClick={() => setShowMobNav(false)}
                key={nav.id}
              >
                <NavLink twStyles="z-30" href={nav.path}>
                  {nav.title}
                </NavLink>
              </li>
            ))}
            <a
              className="mt-4 md:hidden"
              href="https://www.facebook.com/rajhousingdevelopment/"
            >
              <FacebookSVG />
            </a>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;

export const navList = [
  {
    id: "1",
    title: "Blog",
    path: "/blog",
  },
  {
    id: "2",
    title: "Ongoing Projects",
    path: "/ongoing-projects",
  },
  {
    id: "3",
    title: "Completed Projects",
    path: "/completed-projects",
  },
  {
    id: "4",
    title: "About Us",
    path: "/about-us",
  },
  {
    id: "5",
    title: "Contact",
    path: "/contact",
  },
];
