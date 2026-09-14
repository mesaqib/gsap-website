import React from "react";
import Video from "./BgVideo";
import HeroHomeText from "./HeroHomeText";
import HomeBottomText from "./HomeBottomText";

const Home = () => {
  return (
    <>
      <div className="h-screen w-screen  fixed">
        <Video />
      </div>

      <div className="relative h-screen w-screen flex justify-between flex-col items-center">
        <HeroHomeText />
        <HomeBottomText/>
      </div>
    </>
  );
};

export default Home;
