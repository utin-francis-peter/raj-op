import React from "react";
import Link from "next/link";

import "./Card.css";
import Button from "@/components/Button/Button";

const Card = ({
  title,
  desc,
  btnHasBorderColor,
  btnBorderColor,
  beforeBgGradient,
  initialColor,
  href,
  AOSClassname,
}) => {
  return (
    <div id="color-blocks" className="md:max-w-[350px]">
      <div className="block creative">
        <h3 className="font-extrabold text-[24px] md:text-[30px]">{title}</h3>
        <p>{desc}</p>
        <div className="w-[100px] m-auto button">
          <Button
            btnHasBorderColor={btnHasBorderColor}
            btnBorderColor={btnBorderColor}
            beforeBgGradient={beforeBgGradient}
            initialColor={initialColor}
            href={href}
            AOSClassname={AOSClassname}
          >
            View
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Card;
