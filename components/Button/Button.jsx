import Link from "next/link";
import React from "react";
import "./index.scss";

const Button = ({
  isLink = true,
  isTargetBlank,
  href,
  twStyles,
  onClick,
  btnHasBorderColor = false,
  btnBorderColor,
  beforeBgGradient = "white",
  initialColor = "white",
  size,
  AOSClassname = "",
  children,
}) => {
  const content = (
    <button
      data-aos={AOSClassname}
      className={`btn-component ${
        size == "sm" ? "inline-block" : "w-full h-full"
      } ${twStyles} ${btnHasBorderColor ? `border-2 ${btnBorderColor}` : ""}`}
      style={{
        "--before-bg-gradient": beforeBgGradient,
        "--initial-color": initialColor,
      }}
      onClick={onClick}
    >
      <span className="w-full h-full flex items-center justify-center gap-2">
        {children}
      </span>
    </button>
  );

  return isLink ? (
    <Link
      className="link-styles "
      style={{
        "--before-bg-gradient": beforeBgGradient,
        "--initial-color": initialColor,
      }}
      href={href}
      target={isTargetBlank ? "_blank" : ""}
    >
      {content}
    </Link>
  ) : (
    content
  );
};

export default Button;
