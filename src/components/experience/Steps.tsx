import { ExperienceStep, experiencePathDuration, experiencePointDuration, experienceStepDuration } from "./Desktop";
import { experienceProjects } from "./Projects";

export const ExperienceSteps = () => {
  var delay = 0;
  return <>
    <ExperienceStep delay={delay} duration={experienceStepDuration} sizing={{ left: 193, top: 62, line: 50 }} left={false}>
      <div className="flex flex-row gap-1 place-items-center">
        <p className="font-bold text-xs flex-1">{experienceProjects["mirea"].role}</p>
        <p className="font-thin text-xs">{experienceProjects["mirea"].year}</p>
      </div>
      <p className="text-xs">{experienceProjects["mirea"].name}</p>
      <div className="flex flex-wrap gap-1 max-w-xs w-52">
        {experienceProjects["mirea"].tags.map(tag => <div className="badge badge-sm badge-primary" key={tag}>{tag}</div>)}
      </div>
    </ExperienceStep>
    <ExperienceStep delay={delay += (experiencePointDuration + experiencePathDuration)} duration={experienceStepDuration} sizing={{ left: 477, top: 160, line: 50 }} left={true}>
      <div className="flex flex-row gap-1 place-items-center">
        <p className="font-bold text-xs flex-1">{experienceProjects["ue-1"].role}</p>
        <p className="font-thin text-xs">{experienceProjects["ue-1"].year}</p>
      </div>
      <p className="text-xs">{experienceProjects["ue-1"].name}</p>
      <div className="flex flex-row gap-1">
        {experienceProjects["ue-1"].tags.map(tag => <div className="badge badge-sm badge-primary" key={tag}>{tag}</div>)}
      </div>
    </ExperienceStep>
    <ExperienceStep delay={delay += (experiencePointDuration + experiencePathDuration)} duration={experienceStepDuration} sizing={{ left: 185, top: 250, line: 50 }} left={false}>
      <div className="flex flex-row gap-1 place-items-center">
        <p className="font-bold text-xs flex-1">{experienceProjects["ue-2"].role}</p>
        <p className="font-thin text-xs">{experienceProjects["ue-2"].year}</p>
      </div>
      <p className="text-xs">{experienceProjects["ue-2"].name}</p>
      <div className="flex flex-row gap-1">
        {experienceProjects["ue-2"].tags.map(tag => <div className="badge badge-sm badge-primary" key={tag}>{tag}</div>)}
      </div>
    </ExperienceStep>
    <ExperienceStep delay={delay += (experiencePointDuration + experiencePathDuration)} duration={experienceStepDuration} sizing={{ left: 577, top: 307, line: 50 }} left={true}>
      <div className="flex flex-row gap-1 place-items-center">
        <p className="font-bold text-xs flex-1">{experienceProjects["ue-3"].role}</p>
        <p className="font-thin text-xs">{experienceProjects["ue-3"].year}</p>
      </div>
      <p className="text-xs">{experienceProjects["ue-3"].name}</p>
      <div className="flex flex-row gap-1">
        {experienceProjects["ue-3"].tags.map(tag => <div className="badge badge-sm badge-primary" key={tag}>{tag}</div>)}
      </div>
    </ExperienceStep>
    <ExperienceStep delay={delay += (experiencePointDuration + experiencePathDuration)} duration={experienceStepDuration} sizing={{ left: 54, top: 344, line: 50 }} left={false}>
      <div className="flex flex-row gap-1 place-items-center">
        <p className="font-bold text-xs flex-1">{experienceProjects["taxi"].role}</p>
        <p className="font-thin text-xs">{experienceProjects["taxi"].year}</p>
      </div>
      <p className="text-xs">{experienceProjects["taxi"].name}</p>
      <div className="flex flex-wrap gap-1 max-w-xs">
        {experienceProjects["taxi"].tags.map(tag => <div className="badge badge-sm badge-primary" key={tag}>{tag}</div>)}
      </div>
    </ExperienceStep>
    <ExperienceStep delay={delay += (experiencePointDuration + experiencePathDuration)} duration={experienceStepDuration} sizing={{ left: 463, top: 415, line: 300 }} left={true}>
      <div className="flex flex-row gap-1 place-items-center">
        <p className="font-bold text-xs flex-1">{experienceProjects["java-1"].role}</p>
        <p className="font-thin text-xs">{experienceProjects["java-1"].year}</p>
      </div>
      <p className="text-xs">{experienceProjects["java-1"].name}</p>
      <div className="flex flex-wrap gap-1 max-w-xs">
        {experienceProjects["java-1"].tags.map(tag => <div className="badge badge-sm badge-primary" key={tag}>{tag}</div>)}
      </div>
    </ExperienceStep>
    <ExperienceStep delay={delay += (experiencePointDuration + experiencePathDuration)} duration={experienceStepDuration} sizing={{ left: 40, top: 468, line: 65 }} left={false}>
      <div className="flex flex-row gap-1 place-items-center">
        <p className="font-bold text-xs flex-1">{experienceProjects["java-2"].role}</p>
        <p className="font-thin text-xs">{experienceProjects["java-2"].year}</p>
      </div>
      <p className="text-xs">{experienceProjects["java-2"].name}</p>
      <div className="flex flex-wrap gap-1 max-w-xs w-56">
        {experienceProjects["java-2"].tags.map(tag => <div className="badge badge-sm badge-primary" key={tag}>{tag}</div>)}
      </div>
    </ExperienceStep>
    <ExperienceStep delay={delay += (experiencePointDuration + experiencePathDuration)} duration={experienceStepDuration} sizing={{ left: 335, top: 482, line: 145 }} left={true}>
      <div className="flex flex-row gap-1 place-items-center">
        <p className="font-bold text-xs flex-1">{experienceProjects["java-3"].role}</p>
        <p className="font-thin text-xs">{experienceProjects["java-3"].year}</p>
      </div>
      <p className="text-xs">{experienceProjects["java-3"].name}</p>
      <div className="flex flex-wrap gap-1 max-w-xs w-52">
        {experienceProjects["java-3"].tags.map(tag => <div className="badge badge-sm badge-primary" key={tag}>{tag}</div>)}
      </div>
    </ExperienceStep>
    <ExperienceStep delay={delay += (experiencePointDuration + experiencePathDuration)} duration={experienceStepDuration} sizing={{ left: 17, top: 590, line: 112 }} left={false}>
      <div className="flex flex-row gap-1 place-items-center">
        <p className="font-bold text-xs flex-1">{experienceProjects["tl-1"].role}</p>
        <p className="font-thin text-xs">{experienceProjects["tl-1"].year}</p>
      </div>
      <p className="text-xs">{experienceProjects["tl-1"].name}</p>
      <div className="flex flex-wrap gap-1 max-w-xs w-52">
        {experienceProjects["tl-1"].tags.map(tag => <div className="badge badge-sm badge-primary" key={tag}>{tag}</div>)}
      </div>
    </ExperienceStep>
    <ExperienceStep delay={delay += (experiencePointDuration + experiencePathDuration)} duration={experienceStepDuration} sizing={{ left: 308, top: 660, line: 132 }} left={true}>
      <div className="flex flex-row gap-1 place-items-center">
        <p className="font-bold text-xs flex-1">{experienceProjects["archdev-1"].role}</p>
        <p className="font-thin text-xs">{experienceProjects["archdev-1"].year}</p>
      </div>
      <p className="text-xs">{experienceProjects["archdev-1"].name}</p>
      <div className="flex flex-wrap gap-1 max-w-xs w-52">
        {experienceProjects["archdev-1"].tags.map(tag => <div className="badge badge-sm badge-primary" key={tag}>{tag}</div>)}
      </div>
    </ExperienceStep>
    <ExperienceStep delay={delay += (experiencePointDuration + experiencePathDuration)} duration={experienceStepDuration} sizing={{ left: 41, top: 753, line: 50 }} left={false}>
      <div className="flex flex-row gap-1 place-items-center">
        <p className="font-bold text-xs flex-1">{experienceProjects["archdev-2"].role}</p>
        <p className="font-thin text-xs">{experienceProjects["archdev-2"].year}</p>
      </div>
      <p className="text-xs">{experienceProjects["archdev-2"].name}</p>
      <div className="flex flex-wrap gap-1 max-w-xs w-52">
        {experienceProjects["archdev-2"].tags.map(tag => <div className="badge badge-sm badge-primary" key={tag}>{tag}</div>)}
      </div>
    </ExperienceStep>
    <ExperienceStep delay={delay += (experiencePointDuration + experiencePathDuration)} duration={experienceStepDuration} sizing={{ left: 464, top: 802, line: 150 }} left={true}>
      <div className="flex flex-row gap-1 place-items-center">
        <p className="font-bold text-xs flex-1">{experienceProjects["tl-2"].role}</p>
        <p className="font-thin text-xs">{experienceProjects["tl-2"].year}</p>
      </div>
      <p className="text-xs">{experienceProjects["tl-2"].name}</p>
      <div className="flex flex-wrap gap-1 max-w-xs w-52">
        {experienceProjects["tl-2"].tags.map(tag => <div className="badge badge-sm badge-primary" key={tag}>{tag}</div>)}
      </div>
    </ExperienceStep>
    <ExperienceStep delay={delay += (experiencePointDuration + experiencePathDuration)} duration={experienceStepDuration} sizing={{ left: 75, top: 915, line: 100 }} left={false}>
      <div className="flex flex-row gap-1 place-items-center">
        <p className="font-bold text-xs flex-1">{experienceProjects["principal-1"].role}</p>
        <p className="font-thin text-xs">{experienceProjects["principal-1"].year}</p>
      </div>
      <p className="text-xs">{experienceProjects["principal-1"].name}</p>
      <div className="flex flex-wrap gap-1 max-w-xs w-96">
        {experienceProjects["principal-1"].tags.map(tag => <div className="badge badge-sm badge-primary" key={tag}>{tag}</div>)}
      </div>
    </ExperienceStep>
    <ExperienceStep delay={delay += (experiencePointDuration + experiencePathDuration)} duration={experienceStepDuration} sizing={{ left: 649, top: 995, line: 100 }} left={true}>
      <div className="flex flex-row gap-1 place-items-center">
        <p className="font-bold text-xs flex-1">{experienceProjects["principal-2"].role}</p>
        <p className="font-thin text-xs">{experienceProjects["principal-2"].year}</p>
      </div>
      <p className="text-xs">{experienceProjects["principal-2"].name}</p>
      <div className="flex flex-wrap gap-1 max-w-xs w-96">
        {experienceProjects["principal-2"].tags.map(tag => <div className="badge badge-sm badge-primary" key={tag}>{tag}</div>)}
      </div>
    </ExperienceStep>
    <ExperienceStep delay={delay += (experiencePointDuration + experiencePathDuration)} duration={experienceStepDuration} sizing={{ left: 234, top: 1106, line: 100 }} left={false}>
      <div className="flex flex-row gap-1 place-items-center">
        <p className="font-bold text-xs flex-1">{experienceProjects["devops-1"].role}</p>
        <p className="font-thin text-xs">{experienceProjects["devops-1"].year}</p>
      </div>
      <p className="text-xs">{experienceProjects["devops-1"].name}</p>
      <div className="flex flex-wrap gap-1 max-w-xs w-96">
        {experienceProjects["devops-1"].tags.map(tag => <div className="badge badge-sm badge-primary" key={tag}>{tag}</div>)}
      </div>
    </ExperienceStep>
    <ExperienceStep delay={delay += (experiencePointDuration + experiencePathDuration)} duration={experienceStepDuration} sizing={{ left: 793, top: 1220, line: 100 }} left={true}>
      <div className="flex flex-row gap-1 place-items-center">
        <p className="font-bold text-xs flex-1">{experienceProjects["principal-3"].role}</p>
        <p className="font-thin text-xs">{experienceProjects["principal-3"].year}</p>
      </div>
      <p className="text-xs">{experienceProjects["principal-3"].name}</p>
      <div className="flex flex-wrap gap-1 max-w-xs w-96">
        {experienceProjects["principal-3"].tags.map(tag => <div className="badge badge-sm badge-primary" key={tag}>{tag}</div>)}
      </div>
    </ExperienceStep>
    <ExperienceStep delay={delay += (experiencePointDuration + experiencePathDuration)} duration={experienceStepDuration} sizing={{ left: 218, top: 1330, line: 100 }} left={false}>
      <div className="flex flex-row gap-1 place-items-center">
        <p className="font-bold text-xs flex-1">{experienceProjects["principal-4"].role}</p>
        <p className="font-thin text-xs">{experienceProjects["principal-4"].year}</p>
      </div>
      <p className="text-xs">{experienceProjects["principal-4"].name}</p>
      <div className="flex flex-wrap gap-1 max-w-xs w-96">
        {experienceProjects["principal-4"].tags.map(tag => <div className="badge badge-sm badge-primary" key={tag}>{tag}</div>)}
      </div>
    </ExperienceStep>
    <ExperienceStep delay={delay += (experiencePointDuration + experiencePathDuration)} duration={experienceStepDuration} sizing={{ left: 835, top: 1440, line: 50 }} left={true}>
      <div className="flex flex-row gap-1 place-items-center">
        <p className="font-bold text-xs flex-1">{experienceProjects["principal-5"].role}</p>
        <p className="font-thin text-xs">{experienceProjects["principal-5"].year}</p>
      </div>
      <p className="text-xs">{experienceProjects["principal-5"].name}</p>
      <div className="flex flex-wrap gap-1 max-w-xs w-96">
        {experienceProjects["principal-5"].tags.map(tag => <div className="badge badge-sm badge-primary" key={tag}>{tag}</div>)}
      </div>
    </ExperienceStep>
  </>;
}
