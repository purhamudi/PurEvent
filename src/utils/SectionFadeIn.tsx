import { ReactNode } from "react";
import { useScrollFadeIn } from "../hooks/useScrollFadeIn";

const SectionFadeIn: React.FC<{ children: ReactNode }> = ({ children }) => {
  const { ref, isVisible } = useScrollFadeIn();

  return (
    <div
      ref={ref}
      className={`opacity-0 transition-opacity delay-100 duration-1000 ${
        isVisible ? "opacity-100" : ""
      }`}
    >
      {children}
    </div>
  );
};

export default SectionFadeIn;