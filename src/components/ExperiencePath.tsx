import { ExperienceDesktop } from "./ExperienceDesktop";
import { ExperienceMobile } from "./ExperienceMobile";

export const ExperiencePath = () => {
  return window.innerWidth > 1320 ? <ExperienceDesktop /> : <ExperienceMobile />;
}