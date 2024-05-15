import React from "react";
import { usePathname } from "next/navigation";
import "./NavLink.scss";

const NavLink = ({
  href,
  hasUnderline = true,
  underlineBorderColor = "#333",
  twStyles,
  children,
}) => {
  const pathname = usePathname();

  const content = (
    <span>
      <a
        className={`${twStyles}  nav-link ${
          href === pathname || pathname.includes(href) ? "active-link" : ""
        }`}
        href={href}
        style={{ "--underline-color": underlineBorderColor }}
      >
        {children}
      </a>
    </span>
  );

  return hasUnderline ? (
    <div className="has-underline">{content}</div>
  ) : (
    <>{content}</>
  );
};

export default NavLink;
