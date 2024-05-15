import React from "react";
import { usePathname } from "next/navigation";

import { FacebookShareButton } from "react-share";

const SharePostBtn = ({ baseURL }) => {
  const pathname = usePathname();
  const postURL = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
    baseURL + pathname
  )}`;

  return (
    <FacebookShareButton url={baseURL + pathname}>
      <div className="flex items-center justify-center gap-1 p-1 bg-[#1877f2] text-white w-[80px] rounded-[4px] text-sm font-bold mt-8">
        <i className="fa-brands fa-facebook w-[16px] h-[16px] mb-0"></i>
        <span>Share</span>
      </div>
    </FacebookShareButton>

    // <a
    //   href={postURL}
    //   target="_blank"
    //   className="flex items-center justify-center gap-1 p-1 bg-[#1877f2] text-white w-[77px] rounded-[4px] text-sm font-bold mt-8"
    // >
    //   <i className="fa-brands fa-facebook w-[16px] h-[16px]"></i>
    //   <span>Share</span>
    // </a>
  );
};

export default SharePostBtn;
