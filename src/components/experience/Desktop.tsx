import { motion } from "framer-motion";
import { useEffect, useState, useRef, type ReactNode } from "react";
import "../../styles/experience.css";

const maxLineProgress = 100;

export const experienceStepDuration = 0.5;
export const experiencePointDuration = 0.5;
export const experiencePathDuration = 1;


export type ExperiencePointProperties = {
  id: string
  transform: string
  paths: string[]
  fill: string
  duration: number
  delay: number
}

export const ExperiencePoint = (properties: ExperiencePointProperties) => (
  <motion.g
    transform={properties.transform}
    filter="url(#glow)">
    {properties.paths.map(path => <motion.path
      key={path}
      d={path}
      fill="#ffffff"
      stroke="none"
      strokeWidth={"1"}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      filter="url(#glow)"
      transition={{
        ease: "linear",
        duration: properties.duration,
        delay: properties.delay,
      }} />)}
  </motion.g>
);


export type ExperiencePathProperties = {
  id: string
  stroke: string
  path: string
  duration: number
  delay: number
  transform?: string
}

export const ExperiencePath = (properties: ExperiencePathProperties) => (
  <motion.path
    transform={properties.transform}
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


export type ExperienceStepProperties = {
  left: boolean
  children: ReactNode
  sizing: { left?: number, top?: number, line: number }
  delay: number
  duration: number
}

export const ExperienceStep = (properties: ExperienceStepProperties) => {
  const [value, setValue] = useState(0);
  const [launched, setLaunched] = useState(false);
  const [done, setDone] = useState(false);
  const requestRef = useRef<number | undefined>()

  useEffect(() => {
    if (launched) {
      let start: number;
      let counter: number = 0;
      const step = (timestamp: number) => {
        if (done) return;
        if (start === undefined)
          start = timestamp;
        const elapsed = timestamp - start;
        counter += elapsed;
        setValue(counter);
        if (counter < maxLineProgress) {
          requestRef.current = window.requestAnimationFrame(step);
          return;
        }
        setDone(true);
        return;
      }
      requestRef.current = window.requestAnimationFrame(step);
    }
    return () => {
      setDone(true);
      window.cancelAnimationFrame(requestRef.current!);
    };
  }, [launched]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (launched) {
        clearInterval(interval);
        return;
      }
      setLaunched(true);
    }, properties.delay * 1000);
    return () => clearInterval(interval);
  }, [launched]);

  return (
    <div className="step flex flex-row place-content-center place-items-center"
      style={{
        left: properties.sizing.left,
        top: properties.sizing.top,
      }}
    >
      {properties.left && <progress className='step-left-line' style={{ width: properties.sizing.line }} value={value} max='100' />}
      <div
        className="flex step-body flex-col place-content-center p-4 rounded-xl bg-base-200 gap-1"
        style={{
          animation: `step linear ${properties.duration}s`,
          animationIterationCount: 1,
          animationFillMode: "forwards",
          animationDelay: `${properties.delay * 1000 + 50}ms`,
        }}>
        {properties.children}
      </div>
      {!properties.left && <progress className='step-right-line' style={{ width: properties.sizing.line }} value={value} max='100' />}
    </div>
  );
};