import { gsap } from "gsap";
import React, { useEffect, useRef } from "react";


function MobileNav() {
  const app = useRef<HTMLDivElement>(null);
  useEffect(() => {
    gsap.to(app.current, {
      rotation: 360,
      x: '100vw',
      xPercent: -100,
      duration: 2,
      repeat: -1,
      ease: "power1.out",
      yoyo: true,
    });
  }, [])
  return (
    <>
      <div className="rectangle" ref={app}></div> 
    </>
  )
}
export default MobileNav;