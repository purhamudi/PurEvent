import { useEffect, useRef, useState } from "react";
import ScrollImageSequence from "./ScrollImageSequence";
import ScrollTextSequence from "./ScrollTextSequence";

const ScrollSequenceEffect = () =>{

      const containerRef = useRef<HTMLDivElement>(null);
      const [scrollValue, setScrollValue] = useState(0);
        const speedFactor = 0.4;
    

      useEffect(() => {
        const handleScroll = () => {
          if (!containerRef.current) return;
    
          const { top, height } = containerRef.current.getBoundingClientRect();
          const viewportHeight = window.innerHeight;
    
          // Calculate scroll progress relative to the component
          const scrollFraction = Math.min(
            Math.max(((viewportHeight - top  - 200) * speedFactor) / height, 0), // Apply speed factor
            1
          );
    
          // Update frame based on scroll progress
          const scrollValue = Math.floor(scrollFraction * (100 - 1));
          setScrollValue(scrollValue);
        };
    
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
      }, []);

    return <>
        <div ref={containerRef} className="grow relative h-full w-full flex items-center">
          <ScrollImageSequence scrollValue={scrollValue}/>
        </div>
        <div className="w-full h-[200px]">
          <ScrollTextSequence scrollValue={scrollValue} />
        </div>
    </>
}
export default ScrollSequenceEffect