import "../styles/experience.css";
import { useState, useEffect } from "react";
import { experienceProjects, type ExperienceProject } from "./ExperienceProjects";

const cardDuration = 1;

type CardProperties = {
  project: ExperienceProject
  delay: number
  duration: number
}

const Card = (properties: CardProperties) => {
  return (
    <div
      className="flex step-body flex-col place-content-center p-4 rounded-xl bg-base-200 gap-1"
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
  );
}

export const ExperienceMobile = () => {
  var delay = 0;
  return <div className="flex flex-col m-4 gap-8">
    <Card delay={delay} duration={cardDuration} project={experienceProjects["mirea"]!} />
    <Card delay={delay += cardDuration} duration={cardDuration} project={experienceProjects["ue-1"]!} />
    <Card delay={delay += cardDuration} duration={cardDuration} project={experienceProjects["ue-2"]!} />
    <Card delay={delay += cardDuration} duration={cardDuration} project={experienceProjects["ue-3"]!} />
    <Card delay={delay += cardDuration} duration={cardDuration} project={experienceProjects["taxi"]!} />
    <Card delay={delay += cardDuration} duration={cardDuration} project={experienceProjects["java-1"]!} />
    <Card delay={delay += cardDuration} duration={cardDuration} project={experienceProjects["java-2"]!} />
    <Card delay={delay += cardDuration} duration={cardDuration} project={experienceProjects["java-3"]!} />
    <Card delay={delay += cardDuration} duration={cardDuration} project={experienceProjects["tl-1"]!} />
    <Card delay={delay += cardDuration} duration={cardDuration} project={experienceProjects["archdev-1"]!} />
    <Card delay={delay += cardDuration} duration={cardDuration} project={experienceProjects["archdev-2"]!} />
    <Card delay={delay += cardDuration} duration={cardDuration} project={experienceProjects["tl-2"]!} />
    <Card delay={delay += cardDuration} duration={cardDuration} project={experienceProjects["principal-1"]!} />
    <Card delay={delay += cardDuration} duration={cardDuration} project={experienceProjects["principal-2"]!} />
    <Card delay={delay += cardDuration} duration={cardDuration} project={experienceProjects["devops-1"]!} />
    <Card delay={delay += cardDuration} duration={cardDuration} project={experienceProjects["principal-3"]!} />
    <Card delay={delay += cardDuration} duration={cardDuration} project={experienceProjects["principal-4"]!} />
    <Card delay={delay += cardDuration} duration={cardDuration} project={experienceProjects["principal-5"]!} />
  </div>;
}