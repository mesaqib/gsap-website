"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { usePathname } from "next/navigation";
import {ReactNode, useRef } from "react";


type StairAnimationProps = {
  children: ReactNode;
};

const StairAnimation = ({children}: StairAnimationProps) => {
  const pathName = usePathname();

  const stairParentRef = useRef(null);
  const pageRef = useRef(null);

  useGSAP(function () {
    const tl = gsap.timeline();
     
    tl.to(stairParentRef.current, {
      display: 'flex',
    });

    tl.from(".stair", {
      height: 0,
      stagger: {
        amount: -0.25,
      },
    });
    tl.to(".stair", {
      y: "100%",
      stagger: {
        amount: -0.25,
      },
    });

    tl.from(pageRef.current, {
         opacity: 0,
         delay: .00001,
    })

    tl.to(stairParentRef.current, {
      display: 'none',
    });

    tl.to(".stair", {
      y: "0%",
    });


  },[pathName]);

  return (
    <>
    <div>
      <div
        ref={stairParentRef}
        className="h-screen w-screen fixed z-10 top-0 flex"
      >
        <div className="stair h-full w-1/5 bg-black"></div>
        <div className="stair h-full w-1/5 bg-black"></div>
        <div className="stair h-full w-1/5 bg-black"></div>
        <div className="stair h-full w-1/5 bg-black"></div>
        <div className="stair h-full w-1/5 bg-black"></div>
      </div>
    </div>
       <div ref={pageRef}>
        {children}
       </div>
    </>
  );
};

export default StairAnimation;
