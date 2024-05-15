import React from "react";
import NavLink from "@/components/NavLink/NavLink";

import "./Footer.css";

const Footer = () => {
  return (
    <footer id="footer">
      <div className="grid-container">
        <div>
          <div className="flex flex-col gap-10 md:flex-row ">
            <div className="md:w-[25%]">
              <h4 className="mt-0">Visit Us</h4>
              <p className="md:max-w-[80%] text-[16px] font-normal">
                401, Rajdeep Galleria | Sadar, Ponda-Goa 403401
              </p>
            </div>

            <div className="md:w-[25%]">
              <h4 className="md:mt-0">Explore</h4>
              <p className="flex flex-col gap-5 md:gap-1">
                <NavLink
                  hasUnderline={false}
                  href="/blog"
                  underlineBorderColor="#fff"
                >
                  Blog
                </NavLink>
                <NavLink
                  hasUnderline={false}
                  href="/ongoing-projects"
                  underlineBorderColor="#fff"
                >
                  Ongoing Projects
                </NavLink>
                <NavLink
                  hasUnderline={false}
                  href="/completed-projects"
                  underlineBorderColor="#fff"
                >
                  Completed Projects
                </NavLink>
                <NavLink
                  hasUnderline={false}
                  href="/about-us"
                  underlineBorderColor="#fff"
                >
                  About
                </NavLink>
                <NavLink
                  hasUnderline={false}
                  href="/contact"
                  underlineBorderColor="#fff"
                >
                  Contact
                </NavLink>
              </p>
            </div>

            <div className="md:w-[25%]">
              <h4 className="md:mt-0">Contact</h4>
              <p className="flex flex-col gap-5 md:gap-1">
                <NavLink
                  hasUnderline={false}
                  href="mailto:sales@rajhousinggoa.com"
                  underlineBorderColor="#fff"
                >
                  sales@rajhousinggoa.com
                </NavLink>
                <NavLink
                  hasUnderline={false}
                  href="tel:9763719962"
                  underlineBorderColor="#fff"
                >
                  9763719962
                </NavLink>
                <NavLink
                  hasUnderline={false}
                  href="tel:9011044394"
                  underlineBorderColor="#fff"
                >
                  9011044394
                </NavLink>
              </p>
            </div>

            <div className="md:w-[25%]">
              <h4 className="md:mt-0">Social Media</h4>
              <p className="flex flex-col gap-5 md:gap-1">
                <NavLink
                  hasUnderline={false}
                  href="https://web.facebook.com/rajhousingdevelopment"
                  underlineBorderColor="#fff"
                  target="_blank"
                >
                  Facebook
                </NavLink>
                <NavLink
                  hasUnderline={false}
                  href="https://www.instagram.com/rajhousingdevelopment/"
                  underlineBorderColor="#fff"
                  target="_blank"
                >
                  Instagram
                </NavLink>
              </p>
            </div>
          </div>

          <div className="md:flex justify-between mt-[70px] text-[16px] md:w-[90%]">
            <p className="closure">
              All Rights Reserved
              <br />
              Raj Housing Dev. Pvt. Ltd.
            </p>

            <p className="credits">
              <span> Site by :</span>
              <NavLink
                hasUnderline={false}
                href="https://twitter.com/0xSalilNaik"
                underlineBorderColor="#fff"
                target="_blank"
                rel="noopener"
              >
                <span className="ml-2 text-white">Salil Naik</span>
              </NavLink>
              <span className="ml-2 text-[#ababab]">
                (maintained by{" "}
                <NavLink
                  hasUnderline={false}
                  href="https://www.linkedin.com/in/francis-peter-utin/"
                  underlineBorderColor="#fff"
                  target="_blank"
                  rel="noopener"
                >
                  Francis
                </NavLink>
                )
              </span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
