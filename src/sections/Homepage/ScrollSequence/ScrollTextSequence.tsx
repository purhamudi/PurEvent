import { useRef } from "react";

interface ScrollTextSequenceProps {
  scrollValue: number; // Scroll percentage (0 to 100)
}

const ScrollTextSequence: React.FC<ScrollTextSequenceProps> = ({ scrollValue }) => {
  const textContainerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);


  if (textRef.current?.scrollHeight == undefined) return;
  const fraction = textRef.current?.scrollHeight / 100;
  


  return (
    <div
      ref={textContainerRef}
      className="h-[200px] overflow-hidden text-xl text-gray-800 flex items-center justify-center relative"
      id="scroll-text-container"
    >
      <p
        ref={textRef}
        id="scroll-text"
        className="absolute top-0 duration-500 text-5xl"
        style={{
          top: - scrollValue * fraction,
          transform: `translateY(0px)`,//`translateY(${offsetY}px)`, // Move text based on scroll percentage
          transition: "top 0.3s ease-out", // Smooth transition
        }}
      >
        Welcome to our catering experience! As you scroll, you'll discover more about our high-quality service, delicious meals, and expert chefs who craft unforgettable dishes for your events.
        Welcome to our catering experience! As you scroll, you'll discover more about our high-quality service, delicious meals, and expert chefs who craft unforgettable dishes for your events.
      </p>
    </div>
  );
};

export default ScrollTextSequence;