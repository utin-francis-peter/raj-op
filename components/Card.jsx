"use client";

import Link from "next/link";
import Image from "next/image";
import Button from "./Button/Button";

const Card = ({
  image,
  title,
  slug,
  desc,
  location,
  typology,
  hasFooter,
  onClick,
  href,
}) => {
  const isLink = typeof slug !== "undefined";

  const content = (
    <div
      className={`rounded-[10px] overflow-hidden pb-5 leading-[1.6]`}
      style={{ boxShadow: "0px 0px 4px rgba(0, 0, 0, 0.25)" }}>
      {image && (
        <div className="h-[220px] relative">
          <Image src={image} alt="blog post picture" objectFit="cover" fill />
        </div>
      )}

      <main style={{ padding: "20px 25px 25px 25px" }}>
        <h4
          className={`font-bold mb-[0.5rem] text-[24px]`}
          style={{ lineHeight: 1.4 }}>
          {title}
        </h4>

        <p className="text-[16px] text-[#444] ">{desc}</p>

        {hasFooter && (
          <footer className="mt-5">
            <p className="mb-8 leading-loose font-semibold">
              <span>Location : </span>
              {location}
              <br />
              <span>Typology</span> : {typology}
            </p>
            <Button
              beforeBgGradient={`linear-gradient(
      90.14deg,
      #c6ab66 1.34%,
      #ffeba2 65.98%,
      #c8a845 98.3%
    )`}
              twStyles={""}
              href={`${href}/${slug}`}>
              View Details
            </Button>
          </footer>
        )}
      </main>
    </div>
  );

  return isLink ? (
    <Link className=" h-min" onClick={onClick} href={`${href}/${slug}`}>
      {content}
    </Link>
  ) : (
    <>{content}</>
  );
};

export default Card;
