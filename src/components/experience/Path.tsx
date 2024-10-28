import { useEffect } from "react";
import { experienceProjects, type ExperienceProject } from "./Projects";
import { ExperienceSteps } from "./Steps";
import { ExperienceRoad } from "./Road";

const mobileCardDuration = 1;

type CardProperties = {
  project: ExperienceProject
  delay: number
  duration: number
}

const MobileCard = (properties: CardProperties) => (
  <div
    className="flex step-body flex-col place-content-center p-4 rounded-xl bg-base-200 gap-2"
    style={{
      animation: `step linear ${properties.duration}s`,
      animationIterationCount: 1,
      animationFillMode: "forwards",
      animationDelay: `${properties.delay}s`,
    }}>
    <div className="flex flex-row gap-1 place-items-center">
      <p className="font-bold text-lg flex-1">{properties.project.role}</p>
      <p className="font-thin text-xs">{properties.project.year}</p>
    </div>
    <p className="text-md">{properties.project.name}</p>
    <div className="flex flex-wrap gap-2">
      {properties.project.tags.map(tag => <div className="badge badge-lg badge-primary" key={tag}>{tag}</div>)}
    </div>
  </div>
)


export const ExperienceDesktop = () => {
  useEffect(() => {
    function onResize() {
      window.location.reload();
    }
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, [])
  return <div className="wrapper">
    <div className="container">
      <ExperienceRoad />
      <ExperienceSteps />
    </div>
  </div>;
}

export const ExperienceMobile = () => {
  var delay = 0;
  return <div className="flex flex-col m-4 gap-8">
    <MobileCard delay={delay} duration={mobileCardDuration} project={experienceProjects["mirea"]!} />
    <MobileCard delay={delay += mobileCardDuration} duration={mobileCardDuration} project={experienceProjects["ue-1"]!} />
    <MobileCard delay={delay += mobileCardDuration} duration={mobileCardDuration} project={experienceProjects["ue-2"]!} />
    <MobileCard delay={delay += mobileCardDuration} duration={mobileCardDuration} project={experienceProjects["ue-3"]!} />
    <MobileCard delay={delay += mobileCardDuration} duration={mobileCardDuration} project={experienceProjects["taxi"]!} />
    <MobileCard delay={delay += mobileCardDuration} duration={mobileCardDuration} project={experienceProjects["java-1"]!} />
    <MobileCard delay={delay += mobileCardDuration} duration={mobileCardDuration} project={experienceProjects["java-2"]!} />
    <MobileCard delay={delay += mobileCardDuration} duration={mobileCardDuration} project={experienceProjects["java-3"]!} />
    <MobileCard delay={delay += mobileCardDuration} duration={mobileCardDuration} project={experienceProjects["tl-1"]!} />
    <MobileCard delay={delay += mobileCardDuration} duration={mobileCardDuration} project={experienceProjects["archdev-1"]!} />
    <MobileCard delay={delay += mobileCardDuration} duration={mobileCardDuration} project={experienceProjects["archdev-2"]!} />
    <MobileCard delay={delay += mobileCardDuration} duration={mobileCardDuration} project={experienceProjects["tl-2"]!} />
    <MobileCard delay={delay += mobileCardDuration} duration={mobileCardDuration} project={experienceProjects["principal-1"]!} />
    <MobileCard delay={delay += mobileCardDuration} duration={mobileCardDuration} project={experienceProjects["principal-2"]!} />
    <MobileCard delay={delay += mobileCardDuration} duration={mobileCardDuration} project={experienceProjects["devops-1"]!} />
    <MobileCard delay={delay += mobileCardDuration} duration={mobileCardDuration} project={experienceProjects["principal-3"]!} />
    <MobileCard delay={delay += mobileCardDuration} duration={mobileCardDuration} project={experienceProjects["principal-4"]!} />
    <MobileCard delay={delay += mobileCardDuration} duration={mobileCardDuration} project={experienceProjects["principal-5"]!} />
  </div>;
}

export const ExperiencePath = () => (window.innerWidth > 1320 && !window.navigator.userAgent.toLocaleLowerCase().includes("linux")) ? <ExperienceDesktop /> : <ExperienceMobile />