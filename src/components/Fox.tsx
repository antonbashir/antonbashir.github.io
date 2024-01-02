import { useLottie } from "lottie-react";
import foxAnimation from "./fox.json";

export const FoxAnimation = () => {
  const options = {
    animationData: foxAnimation,
    loop: true,
    style: { width: "35rem", height: "35rem", position: "relative", left: "-15px" }
  };
  // @ts-ignore
  const { View } = useLottie(options);
  return <>{View}</>
}
