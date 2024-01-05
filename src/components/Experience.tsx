import "../styles/experience.css";
import { useEffect, useRef, useState } from "react";
import * as d3 from "d3";
import { motion } from "framer-motion";

const LineChart = () => {
  return (
    <div>
      <div
        className="example"
        style={{
          border: "none",
          padding: "0",
          marginLeft: "auto",
          marginRight: "auto"
        }}
      >
      </div>
    </div>
  );
};

export const ExperiencePath = () => {
  return <>
    <div className="container flex flex-row place-items-center">
      <div className="description border-green-200 border-x border-y p-4">
        <p>The beginning of my path</p>
      </div>
      <progress className="label" value="100" max="100"></progress>
      <div className="glowing-circle"></div>
      <LineChart ></LineChart>
    </div>
    <div className="flex place-content-center">
      <div className="imageContainer">
        <img
          className="object-fill h-full w-full max-w-7xl m-16 rounded-3xl foregroundImg"
          src="/experience.jpeg"
        />
        <img
          className="object-fill h-full w-full max-w-7xl m-16 rounded-3xl backgroundImg"
          src="/experience.jpeg"
        />
      </div>
    </div>
  </>
}