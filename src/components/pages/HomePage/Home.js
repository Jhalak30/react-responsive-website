import React from "react";
import HeroSection from "../../HeroSection";
import Pricing from "../../Pricing";
import { homeObjectOne, homeObjFour, homeObjThree, homeObjTwo } from "./Data";

function Home() {
  return (
    <>
      <HeroSection {...homeObjectOne} />
      <HeroSection {...homeObjThree} />
      <HeroSection {...homeObjTwo} />
      <Pricing />
      <HeroSection {...homeObjFour} />
    </>
  );
}

export default Home;
