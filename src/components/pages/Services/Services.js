import React from "react";
import HeroSection from "../../HeroSection";
import Pricing from "../../Pricing";

import { homeObjectOne, homeObjFour, homeObjThree, homeObjTwo } from "./Data";

function Services() {
  return (
    <>
      <Pricing />
      <HeroSection {...homeObjectOne} />
    </>
  );
}

export default Services;
