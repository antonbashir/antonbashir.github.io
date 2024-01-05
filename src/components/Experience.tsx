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