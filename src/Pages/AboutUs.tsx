import { JSX, useEffect, useRef, useState } from "react";
import { TypographyH2, TypographyP } from "../components/ui/typography";

import { default as imgSection1, default as imgSection3 } from '../assets/images/aboutus/img-food.jpeg';
import { Card } from "../components/ui/card";
import SectionFadeIn from "../utils/SectionFadeIn";

type section = {
  id: string;
  title:JSX.Element,
  body: JSX.Element,
  image?:JSX.Element,
};
const parallaxSections: section[] = [
  {
    id:'section1',
    title: <TypographyH2>WIR SIND EINE DER spezialisiertesten BÜRO-KULTURVERBESSERER - Agenturen für Office-Catering.</TypographyH2>,
    body: <TypographyP>Sagen andere auch über sich.</TypographyP>,
    image: <img src={imgSection1} alt="Placeholder" className="object-cover w-full h-auto lg:h-full" />,
  },
  {
    id:'section2',
    title: <TypographyH2>WIR PLANEN, ORGANISIEREN UND SETZEN UM.</TypographyH2>,
    body: <TypographyP>Klar, das machen viele.</TypographyP>,
  },
  {
    id:'section3',
    title: <TypographyH2>STIMMT, ABER WIR bringen frischen Wind in die Office-Kultur – und auf den Teller.</TypographyH2>,
    body: <TypographyP>Denn mit einem clever durchdachten Business-Catering sorgen wir nicht nur für Genuss, sondern auch für Motivation, kreative Pausen und eine Atmosphäre, in der Teams gemeinsam wachsen.</TypographyP>,
    image: <img src={imgSection3} alt="Placeholder" className="object-cover w-full h-auto lg:h-full" />,
  },
  {
    id:'section4',
    title: <TypographyH2>denn WIR ARBEITEN MIT DEN BESTEN.</TypographyH2>,
    body: <TypographyP>Egal ob moderne arabische Spezialitäten, asiatisches Fingerfood oder ein wilder Mix aus allem – wir machen es möglich! Unser Netzwerk aus exzellenten Restaurantpartnern gibt uns die Freiheit, Catering genau nach euren Vorstellungen zu gestalten. Für ein Catering, das überrascht, begeistert und einfach passt.</TypographyP>,
  },
  {
    id:'section5',
    title: <TypographyH2>In Düsseldorf UND ÜBERALL, WO IHR UNS BRAUCHT.</TypographyH2>,
    body: <TypographyP>Ob Düsseldorf oder Umgebung – wir sind da, wo euer Event stattfindet.</TypographyP>,
    image: <img src={imgSection3} alt="Placeholder" className="object-cover w-full h-auto lg:h-full" />,
  },
  {
    id:'section6',
    title: <TypographyH2>WIR HALTEN UNS FÜR BESONDERS, WEIL WIR ES PERSÖNLICH NEHMEN.</TypographyH2>,
    body: <TypographyP>Weil wir lieber anpacken als nur reden. Weil wir echt sind und verbindlich. Weil wir für das brennen, was wir tun. Weil wir nicht nur versprechen, sondern liefern. Und weil wir als Team füreinander da sind und gemeinsam wachsen. Das ist PureEvent – zuverlässig, engagiert, echt.</TypographyP>,
    image: <img src={imgSection3} alt="Placeholder" className="object-cover w-full h-auto lg:h-full" />,
  },
  {
    id:'section7',
    title: <TypographyH2>UND ERFAHREN SIND WIR AUCH.</TypographyH2>,
    body: (
      <div>
        <TypographyP>Mit über 13 Jahren in der Gastronomie, Eventmanagement und Catering haben wir ganz schön viel erlebt.</TypographyP>
        <div className="mt-6 flex flex-col gap-4">
          <button className="px-6 py-2 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700">Du planst was Cooles? Erzählt uns davon!</button>
          <button className="px-6 py-2 bg-gray-300 text-black rounded-lg shadow-md hover:bg-gray-400">Lass uns dein Projekt besprechen</button>
        </div>
      </div>
    ),
    image: <img src={imgSection3} alt="Placeholder" className="object-cover w-full h-auto lg:h-full" />,
  },
];

export default function AboutUs() {
  const container = useRef<HTMLDivElement | null>(null);
  const parallaxRef = useRef<HTMLSpanElement | null>(null);
  const scaleRef = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (scaleRef.current) {
        const rect = scaleRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        
        if (rect.top < windowHeight * 0.95 && rect.bottom > windowHeight * 0.45) {
          scaleRef.current.style.transform = "scale(1)";
          scaleRef.current.style.transition = "transform 0.3s ease-in-out";
        } else {
          scaleRef.current.style.transform = "scale(0)";
        }
      }

      if (parallaxRef.current) {
        const scrollY = window.scrollY;
        console.log(scrollY)
        parallaxRef.current.style.willChange = "transform";
        parallaxRef.current.style.transform = `translateY(-${scrollY * 1.1}px)`;
      }
    };



    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (index: number) => {
    const element = document.getElementById(parallaxSections[index].id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });

    }
  };

  return (
    <div ref={container} className="overflow-visible overflow-x-hidden relative z-0">
        <div className="min-h-[80vh] min-w-[80vw] w-full absolute -right-0 z-[-1] animate-[scaleUp_800ms_ease-in-out_forwards]">

          {/* <span
          ref={parallaxRef} 
            className="h-[100vw] w-[100vw] max-h-[1000px] max-w-[1000px] rounded-full bg-white border border-gray-100 fixed top-28 left-1/2 "
          ></span> */}

{/* 
          <span
            ref={scaleRef}
            className="h-[100vw] w-[100vw] max-h-[150px] max-w-[150px] rounded-full bg-white border border-gray-100 fixed top-[238%] left-[4%] scale-0 bg-brand-800"
          ></span> */}
        </div>

        <PaginationDots sections={parallaxSections} scrollToSection={scrollToSection} />
        {parallaxSections.map((section, index) => {
          return (
            <div className="md:p-8 p-2"  id={section.id}>
            <SectionFadeIn>
              <Card className="w-full max-w-5xl shadow-lg border border-gray-200 rounded-lg bg-white min-h-[68vh] flex overflow-hidden">

                <div key={section.id} className="flex flex-col md:flex-row items-center justify-center gap-10 grow">
                  <div className={`w-full py-8 px-6 lg:w-1/2 text-center lg:text-left max-w-xl ${index % 2 === 0 ? "md:order-1" : "md:order-2"}`}>
                    {section.title}
                    {section.body}
                  </div>
                  {section.image && <div className={`w-full h-100 lg:w-1/2 flex justify-center h-auto sm:h-full ${index % 2 === 0 ? "md:order-2" : "md:order-1"}`}>
                    {section.image}
                  </div>}
                </div>
              </Card>
            </SectionFadeIn>
            </div>
              )
            })
        }
    </div>
  );
}

function PaginationDots({ sections, scrollToSection }: { sections: section[]; scrollToSection: (index: number) => void }) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      requestAnimationFrame(() => {
        const sectionOffsets = sections.map(
          (section) =>
            document.getElementById(section.id)?.getBoundingClientRect().top
        );

        const closestIndex = sectionOffsets.findIndex(
          (offset: number | undefined) =>
            offset && offset >= 0 && offset <= window.innerHeight / 2
        );

        if (closestIndex !== -1) {
          setActiveIndex(closestIndex);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo =(index: number)=>{
    scrollToSection(index)
    setActiveIndex(index);
  }

  return (
    <div className="fixed right-5 top-1/2 transform -translate-y-1/2 flex flex-col gap-2.5 justify-center z-10">
      {sections.map((_, index) => (
        <button
          key={index}
          className={`w-2 h-2 rounded-full transition-all p-1 shadow-sm ${
            index === activeIndex ? "bg-gray-800 w-1 h-4" : "bg-gray-400"
          }`}
          onClick={() => scrollTo(index)}
        />
      ))}
    </div>
  );
}

