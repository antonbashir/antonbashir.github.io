import { useLottie } from "lottie-react";
import foxAnimation from "./fox.json";

export const FoxAnimation = () => {
  const options = {
    animationData: foxAnimation,
    loop: true,
  };
  const { View } = useLottie(options, { width: "35rem", height: "35rem", position: "relative", left: "-15px" });
  return <>{View}</>
}
