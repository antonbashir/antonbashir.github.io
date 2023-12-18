import { gsap } from "gsap";
import React, { useEffect, useRef } from "react";


function MobileNav() {
  const app = useRef<HTMLDivElement>(null);


  useEffect(() => {
    gsap.to(app.current, { rotate: 360, duration: 5,  })
  }, [])

  return (
    <>
      <div className="rectangle" ref={app}>Hello World</div>
    </>
  )
}
export default MobileNav;