import Lottie from "lottie-react";
import { useLottie } from "lottie-react";
import foxAnimation from "./fox.json";

type Properties = {}

export const FoxAnimation = (properties: Properties) => {
  const options = {
    animationData: foxAnimation,
    loop: true,
    style: { width: "45rem" }
  };
  const { View } = useLottie(options);
  return <>{View}</>
}
