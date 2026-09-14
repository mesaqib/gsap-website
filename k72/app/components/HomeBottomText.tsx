import Link from "next/link";
import React from "react";

const HomeBottomText = () => {
  return (
<div className="flex gap-10">
 
  <Link
    href="/project"
    className="inline-block rounded-full border border-3 border-white   text-[6.5vw] font-heading1 uppercase text-white  px-6"
  >
    Project
  </Link>

  <Link
    href="/agency"
    className="inline-block rounded-full border border-3 border-white   text-[6.5vw] font-heading1 uppercase text-white px-6"
  >
    Agency
  </Link>
</div>
  );
};

export default HomeBottomText;
