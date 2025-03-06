import { useEffect, useRef, useState } from "react";

// import img from '../../../assets/images/background/dump/videos/test/'
const frameCount = 160; // Adjust based on how many images you have
const images = Array.from(
  { length: frameCount },
  (_, i) =>
    `../../../assets/images/background/dump/videos/test/vid_${String(
      i + 1
    ).padStart(4, "0")}.png`
);

interface ScrollImageSequenceProps {
  scrollValue: number;
}
const ScrollImageSequence:React.FC<ScrollImageSequenceProps> = ({scrollValue}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [frame, setFrame] = useState(scrollValue)

  useEffect(()=>{
    setFrame(Math.round(scrollValue*1.6))
  },[ scrollValue ])

  return (
    <div ref={containerRef} className="flex justify-center items-center">
      <img
        src={images[frame]}
        alt={`Frame ${frame}`}
        className="h-auto max-w-screen-lg w-11/12"
      />
    </div>
  );
};

export default ScrollImageSequence;