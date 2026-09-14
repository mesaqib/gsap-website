"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useRef } from "react";

const page = () => {
  gsap.registerPlugin(ScrollTrigger);

  const imageDivRef = useRef<HTMLImageElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);

  const imageArray = [
    "/media/img/1.jpg",
    "/media/img/2.jpg",
    "/media/img/3.jpg",
    "/media/img/4.jpg",
    "/media/img/5.jpg",
    "/media/img/6.jpg",
    "/media/img/7.jpg",
    "/media/img/8.jpg",
  ];

  useGSAP(function () {
    gsap.to(imageDivRef.current, {
      scrollTrigger: {
        trigger: imageDivRef.current,
        start: "top 23%",
        end: "top -150%",
        scrub: true,
        pin: true,

        onUpdate: function (self) {
          const scrollProgress = self.progress;
          let imageIndex;
          if (self.progress < 1) {
            imageIndex = Math.floor(scrollProgress * imageArray.length);
          } else {
            imageIndex = imageArray.length - 1;
          }
          if (imageRef.current) {
            imageRef.current.src = imageArray[imageIndex];
          }
        },
      },
    });
  });

  return (
    <>
      <div className="p-1">
        <div
          ref={imageDivRef}
          className="absolute h-[20vw] left-[30vw] top-[23vh] z-1 rounded-3xl overflow-hidden"
        >
          <img
            ref={imageRef}
            src="media/img/1.jpg"
            alt="img"
            className="h-full w-full object-cover"
          />
        </div>

        <div className="z-2 relative">
          <div className="font-[heading1] mt-[56vh]">
            <h1 className="text-[19.8vw] leading-[17vw] text-center uppercase">
              Soixan7e <br /> Douze
            </h1>
          </div>

          <div className="flex justify-end">
            <p className="text-[3.6vw] font-[heading1] leading-[4vw] w-[60vw]">
              {" "}
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              Notre curiosité nourrit notre créativité. On reste humbles et on
              dit non aux gros egos, même le vôtre. Une marque est vivante. Elle
              a des valeurs, une personnalité, une histoire. Si on oublie ça, on
              peut faire de bons chiffres à court terme, mais on la tue à long
              terme. C’est pour ça qu’on s’engage à donner de la perspective,
              pour bâtir des marques influentes.
            </p>
          </div>
        </div>

        <div className="h-[100vh]"></div>
      </div>
    </>
  );
};

export default page;
