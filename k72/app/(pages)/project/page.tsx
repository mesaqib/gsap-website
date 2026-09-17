"use client"
import ProjectCards from "@/app/components/ProjectCards";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import React from "react";

const page = () => {
  const projects = [
    {
      image1: "/media/img/proj1.jpg",
      image2: "/media/img/proj2.png",
    },
    {
      image2: "/media/img/proj1.jpg",
      image1: "/media/img/proj2.png",
    },
    {
      image1: "/media/img/proj1.jpg",
      image2: "/media/img/proj2.png",
    },
    
  ];

  gsap.registerPlugin(ScrollTrigger)

  useGSAP(function() {
     gsap.from(".heroProject", {
      height: '0',
      stagger: {
        amount: .1,
      },
      scrollTrigger: {
        trigger: ".hero",
        markers: true,
        start: "top 100%",
        end: "top -150%",
        scrub: true,
      }
     })
  })


  return (
    <>
      <div>
        <h1 className="text-[13vw] font-[heading1] pt-[43vh] uppercase">
          Projects
        </h1>
      </div>

      <div className="-mt-20 p-4 hero">
        {projects.map((elem) => {
          return (
            <div className="heroProject h-[480px] flex gap-4" key={"elem"}>
              <ProjectCards image1={elem.image1} image2={elem.image2} />
            </div>
          );
        })}
      </div>

      <div className="h-[70vh]"></div>
    </>
  );
};

export default page;
