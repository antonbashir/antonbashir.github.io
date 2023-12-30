import Lottie from "lottie-react";
import { useLottie } from "lottie-react";
import foxAnimation from "./fox.json";

type Properties = {

}

export const FoxAnimation = (props: Properties) => {
  const options = {
    animationData: foxAnimation,
    loop: true,
    style: { width: "500px" }
  };

  const { View } = useLottie(options);

  return <>{View}</>
}
