import { DotLottiePlayer } from "@dotlottie/react-player";
import "@dotlottie/react-player/dist/index.css";

import React from "react";

const lottieAnimation = () => {
  return (
    <DotLottiePlayer
      autoplay
      loop
      src={"/lottieAnimation.lottie"}
    ></DotLottiePlayer>
  );
};

export default lottieAnimation;
