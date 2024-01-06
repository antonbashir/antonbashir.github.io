import { ExperienceDesktop } from "./ExperienceDesktop";
import { ExperienceMobile } from "./ExperienceMobile";

export const ExperiencePath = () => {
  console.log(window.innerWidth);
  return window.innerWidth > 1320 ? <ExperienceDesktop /> : <ExperienceMobile />;
}