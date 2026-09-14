import React from "react";

import BgVideo from "../components/BgVideo";

const HeroHomeText = () => {
  return (
    <div className="text-center font-[heading2]  text-white">
      <div className="text-[9.5vw] uppercase leading-[9vw]">L'étincelle</div>
      <div className="text-[9.5vw] uppercase leading-[9vw] relative flex justify-center">
        qui 
        <div className="h-[14vh] w-[15vw] rounded-[45vw] overflow-hidden">
          <BgVideo />
        </div> 
        génère
      </div>
      <div className="text-[9.5vw] uppercase leading-[9vw]">LA créativité</div>
    </div>
  );
};

export default HeroHomeText;
