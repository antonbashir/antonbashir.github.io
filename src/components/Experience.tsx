import "../styles/experience.css";
import { motion } from "framer-motion";
import { ExperienceImage } from "./ExperienceImage";
import type { ReactNode } from "react";

const cardDuration = 1;
const pointDuration = 1;
const pathDuration = 1;

type PointProperties = {
  transform: string
  paths: string[]
  fill: string
  duration: number
  delay: number
}

const Point = (properties: PointProperties) => {
  const strokeWidth = "1";
  return (
    <motion.g
      transform={properties.transform}
      filter="url(#glow)">
      {properties.paths.map(path => <motion.path
        d={path}
        fill="#ffffff"
        stroke="none"
        strokeWidth={strokeWidth}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        filter="url(#glow)"
        transition={{
          ease: "linear",
          duration: properties.duration,
          delay: properties.delay,
        }}
      />)}
    </motion.g>
  );
};

type PathProperties = {
  stroke: string
  path: string
  duration: number
  delay: number
}

const Path = (properties: PathProperties) => {
  return (
    <motion.path
      fill="none"
      stroke={properties.stroke}
      strokeWidth={"2"}
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={{
        ease: "linear",
        duration: properties.duration,
        delay: properties.delay
      }}
      filter="url(#glow)"
      d={properties.path} />
  );
};

type StepProperties = {
  left: boolean
  children: ReactNode
  sizing: { left?: number, top?: number, line: number }
  delay: number
  duration: number
}

const Step = (properties: StepProperties) => {
  return (
    <div className="step flex flex-row place-content-center place-items-center"
      style={{
        left: properties.sizing.left,
        top: properties.sizing.top,
        animation: `step linear ${properties.duration}s`,
        animationIterationCount: 1,
        animationFillMode: "forwards",
        animationDelay: `${properties.delay}s`,
      }}
    >
      {properties.left && <progress className='step-left-line' style={{ width: properties.sizing.line }} value='100' max='100' />}
      <div className="flex flex-col place-content-center step-body p-4 rounded-xl bg-base-200 gap-2">
        {properties.children}
      </div>
      {!properties.left && <progress className='step-left-line' style={{ width: properties.sizing.line }} value='100' max='100' />}
    </div>
  );
};

const Road = () => {
  var delay = 0;
  return <motion.svg width="1280px" height="2048px" viewBox="0 0 1280 2048" version="1.1">
    <defs>
      <filter id="glow" height="300%" width="300%" x="-75%" y="-75%">
        <feMorphology operator="dilate" radius="4" in="SourceAlpha" result="thicken" />
        <feGaussianBlur in="thicken" stdDeviation="10" result="blurred" />
        <feFlood floodColor="indigo" result="glowColor" />
        <feComposite in="glowColor" in2="blurred" operator="in" result="glowColored" />
        <feMerge>
          <feMergeNode in="glowColored" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
    </defs>
    <ExperienceImage />
    <Point
      duration={pointDuration}
      delay={delay}
      fill="#fffff"
      transform="matrix(-0.06400411,0,0,0.06400411,513.5966,109.84767)"
      paths={[
        "m 282.503,149.97 c -11.43,-2.858 -23.013,4.092 -25.87,15.522 l -42.667,170.667 c -2.858,11.43 4.092,23.013 15.522,25.87 11.43,2.857 23.013,-4.092 25.87,-15.522 L 298.025,175.84 c 2.858,-11.43 -4.092,-23.012 -15.522,-25.87 z",
        "M 170.662,234.667 V 192 c 11.782,0 21.333,-9.551 21.333,-21.333 0,-11.782 -9.551,-21.333 -21.333,-21.333 -25.201,0 -42.667,17.466 -42.667,42.667 v 33.83 l -15.085,15.085 c -8.331,8.331 -8.331,21.839 0,30.17 l 15.085,15.085 V 320 c 0,25.201 17.466,42.667 42.667,42.667 11.782,0 21.333,-9.551 21.333,-21.333 0,-11.782 -9.551,-21.333 -21.333,-21.333 v -42.667 c 0,-5.658 -2.248,-11.084 -6.248,-15.085 l -6.248,-6.249 6.248,-6.248 c 4.001,-4.001 6.248,-9.427 6.248,-15.085 z",
        "M 383.996,225.83 V 192 c 0,-25.201 -17.466,-42.667 -42.667,-42.667 -11.782,0 -21.333,9.551 -21.333,21.333 0,11.782 9.551,21.333 21.333,21.333 v 42.667 c 0,5.658 2.248,11.084 6.248,15.085 l 6.248,6.248 -6.248,6.248 c -4.001,4.001 -6.248,9.427 -6.248,15.085 V 320 c -11.782,0 -21.333,9.551 -21.333,21.333 0,11.782 9.551,21.333 21.333,21.333 25.201,0 42.667,-17.466 42.667,-42.667 v -33.83 l 15.085,-15.085 c 8.331,-8.331 8.331,-21.839 0,-30.17 z",
        "M 426.731,0 H 85.269 C 38.181,0 0,38.181 0,85.269 V 426.73 C 0,473.819 38.181,512 85.269,512 H 426.73 C 473.819,512 512,473.819 512,426.731 V 85.269 C 512,38.181 473.819,0 426.731,0 Z m 42.602,426.731 c 0,23.525 -19.078,42.603 -42.603,42.603 H 85.269 c -23.525,0 -42.603,-19.078 -42.603,-42.603 V 85.269 c 0,-23.525 19.078,-42.603 42.603,-42.603 H 426.73 c 23.525,0 42.603,19.078 42.603,42.603 z"
      ]}
    />
    <Path
      path="m 497.16107,142.62853 c 0.014,3.09313 0.0279,6.1862 -2.6415,9.44644 -2.66943,3.26024 -8.02195,6.68732 -14.07183,12.0865 -6.04989,5.39917 -12.79657,12.76996 -16.17798,17.31246 -3.3814,4.54249 -3.39744,6.25659 -3.40952,7.19289 -0.0121,0.93629 -0.0202,1.09462 -0.0283,1.25302"
      stroke="#ffffff"
      delay={delay += pointDuration}
      duration={pathDuration}
    />
    <Point
      duration={pointDuration}
      delay={delay += pathDuration}
      fill="#fffff"
      transform="matrix(0.06400411,0,0,0.06400411,444.0224,189.8901)"
      paths={[
        "m 282.503,149.97 c -11.43,-2.858 -23.013,4.092 -25.87,15.522 l -42.667,170.667 c -2.858,11.43 4.092,23.013 15.522,25.87 11.43,2.857 23.013,-4.092 25.87,-15.522 L 298.025,175.84 c 2.858,-11.43 -4.092,-23.012 -15.522,-25.87 z",
        "M 170.662,234.667 V 192 c 11.782,0 21.333,-9.551 21.333,-21.333 0,-11.782 -9.551,-21.333 -21.333,-21.333 -25.201,0 -42.667,17.466 -42.667,42.667 v 33.83 l -15.085,15.085 c -8.331,8.331 -8.331,21.839 0,30.17 l 15.085,15.085 V 320 c 0,25.201 17.466,42.667 42.667,42.667 11.782,0 21.333,-9.551 21.333,-21.333 0,-11.782 -9.551,-21.333 -21.333,-21.333 v -42.667 c 0,-5.658 -2.248,-11.084 -6.248,-15.085 l -6.248,-6.249 6.248,-6.248 c 4.001,-4.001 6.248,-9.427 6.248,-15.085 z",
        "M 383.996,225.83 V 192 c 0,-25.201 -17.466,-42.667 -42.667,-42.667 -11.782,0 -21.333,9.551 -21.333,21.333 0,11.782 9.551,21.333 21.333,21.333 v 42.667 c 0,5.658 2.248,11.084 6.248,15.085 l 6.248,6.248 -6.248,6.248 c -4.001,4.001 -6.248,9.427 -6.248,15.085 V 320 c -11.782,0 -21.333,9.551 -21.333,21.333 0,11.782 9.551,21.333 21.333,21.333 25.201,0 42.667,-17.466 42.667,-42.667 v -33.83 l 15.085,-15.085 c 8.331,-8.331 8.331,-21.839 0,-30.17 z",
        "M 426.731,0 H 85.269 C 38.181,0 0,38.181 0,85.269 V 426.73 C 0,473.819 38.181,512 85.269,512 H 426.73 C 473.819,512 512,473.819 512,426.731 V 85.269 C 512,38.181 473.819,0 426.731,0 Z m 42.602,426.731 c 0,23.525 -19.078,42.603 -42.603,42.603 H 85.269 c -23.525,0 -42.603,-19.078 -42.603,-42.603 V 85.269 c 0,-23.525 19.078,-42.603 42.603,-42.603 H 426.73 c 23.525,0 42.603,19.078 42.603,42.603 z"
      ]}
    />
    <Path
      path="m 460.04621,222.67095 c 0.0138,1.00471 0.0277,2.00942 1.62587,6.16159 1.5982,4.15217 4.78074,11.45172 9.01786,14.24162 4.23711,2.7899 9.52866,1.07015 11.92254,5.95481 2.39388,4.88466 1.88987,16.37334 1.38586,27.86225"
      stroke="#ffffff"
      delay={delay += pointDuration}
      duration={pathDuration}
    />
    <Point
      duration={pointDuration}
      delay={delay += pathDuration}
      fill="#fffff"
      transform="matrix(0.06400411,0,0,0.06400411,468.90519,276.51215)"
      paths={[
        "m 282.503,149.97 c -11.43,-2.858 -23.013,4.092 -25.87,15.522 l -42.667,170.667 c -2.858,11.43 4.092,23.013 15.522,25.87 11.43,2.857 23.013,-4.092 25.87,-15.522 L 298.025,175.84 c 2.858,-11.43 -4.092,-23.012 -15.522,-25.87 z",
        "M 170.662,234.667 V 192 c 11.782,0 21.333,-9.551 21.333,-21.333 0,-11.782 -9.551,-21.333 -21.333,-21.333 -25.201,0 -42.667,17.466 -42.667,42.667 v 33.83 l -15.085,15.085 c -8.331,8.331 -8.331,21.839 0,30.17 l 15.085,15.085 V 320 c 0,25.201 17.466,42.667 42.667,42.667 11.782,0 21.333,-9.551 21.333,-21.333 0,-11.782 -9.551,-21.333 -21.333,-21.333 v -42.667 c 0,-5.658 -2.248,-11.084 -6.248,-15.085 l -6.248,-6.249 6.248,-6.248 c 4.001,-4.001 6.248,-9.427 6.248,-15.085 z",
        "M 383.996,225.83 V 192 c 0,-25.201 -17.466,-42.667 -42.667,-42.667 -11.782,0 -21.333,9.551 -21.333,21.333 0,11.782 9.551,21.333 21.333,21.333 v 42.667 c 0,5.658 2.248,11.084 6.248,15.085 l 6.248,6.248 -6.248,6.248 c -4.001,4.001 -6.248,9.427 -6.248,15.085 V 320 c -11.782,0 -21.333,9.551 -21.333,21.333 0,11.782 9.551,21.333 21.333,21.333 25.201,0 42.667,-17.466 42.667,-42.667 v -33.83 l 15.085,-15.085 c 8.331,-8.331 8.331,-21.839 0,-30.17 z",
        "M 426.731,0 H 85.269 C 38.181,0 0,38.181 0,85.269 V 426.73 C 0,473.819 38.181,512 85.269,512 H 426.73 C 473.819,512 512,473.819 512,426.731 V 85.269 C 512,38.181 473.819,0 426.731,0 Z m 42.602,426.731 c 0,23.525 -19.078,42.603 -42.603,42.603 H 85.269 c -23.525,0 -42.603,-19.078 -42.603,-42.603 V 85.269 c 0,-23.525 19.078,-42.603 42.603,-42.603 H 426.73 c 23.525,0 42.603,19.078 42.603,42.603 z"
      ]}
    />
  </motion.svg>;
}

const Steps = () => {
  var delay = 0;
  return <>
    <Step delay={delay} duration={cardDuration} sizing={{ left: 156, top: 82, line: 50 }} left={false}>
      <div className="flex flex-row gap-2 place-items-center">
        <p className="font-bold text-md flex-1">Programming Engineer</p>
        <p className="font-thin text-xs">2014-2018</p>
      </div>
      <p className="text-md">Russian Technological University</p>
    </Step>
    <Step delay={delay += (pointDuration + pathDuration)} duration={cardDuration} sizing={{ left: 477, top: 150, line: 50 }} left={true}>
      <div className="flex flex-row gap-2 place-items-center">
        <p className="font-bold text-md flex-1">Unreal Engine Developer</p>
        <p className="font-thin text-xs">2015</p>
      </div>
      <p className="text-md">3D modeling software for modeling flats’ and rooms’ interior</p>
      <div className="flex flex-row">
        <div className="badge badge-sm badge-primary">Unreal Engine</div>
      </div>
    </Step>
    <Step delay={delay += (pointDuration + pathDuration)} duration={cardDuration} sizing={{ left: 147, top: 236, line: 50 }} left={false}>
      <div className="flex flex-row gap-2 place-items-center">
        <p className="font-bold text-md flex-1">Unreal Engine Developer</p>
        <p className="font-thin text-xs">2015</p>
      </div>
      <p className="text-md">Game - clone of the S.T.A.L.K.E.R</p>
      <div className="flex flex-row">
        <div className="badge badge-sm badge-primary">Unreal Engine</div>
      </div>
    </Step>
  </>;
}

export const ExperiencePath = () => {
  return <div className="wrapper">
    <div className="container">
      <Road />
      <Steps />
    </div>
  </div>
}