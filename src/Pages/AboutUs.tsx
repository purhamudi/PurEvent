// import { Parallax } from "react-parallax";
// import Text from "../components/Library/Text/Text.component";
import { JSX, useEffect, useRef, useState } from "react";
// import Button from "../components/Library/Button/Button.component";
import { TypographyH2, TypographyP } from "../components/ui/typography";

import { default as imgSection1, default as imgSection2, default as imgSection3 } from '../assets/images/aboutus/img-food.jpeg';

type section = {
  id: string;
  title:JSX.Element,
  body: JSX.Element,
  image:JSX.Element,
  strength?: number;
  header?: string;
  text?: string;
  img?: string;
  button?: string;
};
const parallaxSections: section[] = [
  {
    id:'section1',
    title: <TypographyH2>WIR SIND EINE DER spezialisiertesten BÜRO-KULTURVERBESSERER - Agenturen für Office-Catering.</TypographyH2>,
    body: <TypographyP>Sagen andere auch über sich.</TypographyP>,
    image: <img src={imgSection1} alt="Placeholder" className="rounded-lg object-cover w-full h-auto lg:h-full" />,
  },
  {
    id:'section2',
    title: <TypographyH2>WIR PLANEN, ORGANISIEREN UND SETZEN UM.</TypographyH2>,
    body: <TypographyP>Klar, das machen viele.</TypographyP>,
    image: <img src={imgSection2} alt="Placeholder" className="rounded-lg object-cover w-full h-auto lg:h-full" />,
  },
  {
    id:'section3',
    title: <TypographyH2>STIMMT, ABER WIR bringen frischen Wind in die Office-Kultur – und auf den Teller.</TypographyH2>,
    body: <TypographyP>Denn mit einem clever durchdachten Business-Catering sorgen wir nicht nur für Genuss, sondern auch für Motivation, kreative Pausen und eine Atmosphäre, in der Teams gemeinsam wachsen.</TypographyP>,
    image: <img src={imgSection3} alt="Placeholder" className="rounded-lg object-cover w-full h-auto lg:h-full" />,
  },
  {
    id:'section4',
    title: <TypographyH2>denn WIR ARBEITEN MIT DEN BESTEN.</TypographyH2>,
    body: <TypographyP>Egal ob moderne arabische Spezialitäten, asiatisches Fingerfood oder ein wilder Mix aus allem – wir machen es möglich! Unser Netzwerk aus exzellenten Restaurantpartnern gibt uns die Freiheit, Catering genau nach euren Vorstellungen zu gestalten. Für ein Catering, das überrascht, begeistert und einfach passt.</TypographyP>,
    image: <img src={imgSection3} alt="Placeholder" className="rounded-lg object-cover w-full h-auto lg:h-full" />,
  },
  {
    id:'section5',
    title: <TypographyH2>In Düsseldorf UND ÜBERALL, WO IHR UNS BRAUCHT.</TypographyH2>,
    body: <TypographyP>Ob Düsseldorf oder Umgebung – wir sind da, wo euer Event stattfindet.</TypographyP>,
    image: <img src={imgSection3} alt="Placeholder" className="rounded-lg object-cover w-full h-auto lg:h-full" />,
  },
  {
    id:'section6',
    title: <TypographyH2>WIR HALTEN UNS FÜR BESONDERS, WEIL WIR ES PERSÖNLICH NEHMEN.</TypographyH2>,
    body: <TypographyP>Weil wir lieber anpacken als nur reden. Weil wir echt sind und verbindlich. Weil wir für das brennen, was wir tun. Weil wir nicht nur versprechen, sondern liefern. Und weil wir als Team füreinander da sind und gemeinsam wachsen. Das ist PureEvent – zuverlässig, engagiert, echt.</TypographyP>,
    image: <img src={imgSection3} alt="Placeholder" className="rounded-lg object-cover w-full h-auto lg:h-full" />,
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
    image: <img src={imgSection3} alt="Placeholder" className="rounded-lg object-cover w-full h-auto lg:h-full" />,
  },
];

export default function AboutUs() {
  const container = useRef<HTMLDivElement | null>(null);
  
  useEffect(() => {
    setTimeout(() => {
      container.current?.scrollTo(0, 0);
    }, 20);
  }, []);


  const scrollToSection = (index: number) => {
    const element = document.getElementById(parallaxSections[index].id);
    if (element) {
      const offset = 80; // Adjust this value to set the desired offset
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });

    }
  };

  return (
    <div ref={container} className="overflow-y-auto">
      <PaginationDots sections={parallaxSections} scrollToSection={scrollToSection} />
        {parallaxSections.map((section, index) => {
          return (
              <div key={section.id} id={section.id} className="flex flex-col md:flex-row items-center justify-center gap-12 p-12">
                <div className={`w-full lg:w-1/2 text-center lg:text-left max-w-xl ${index % 2 === 0 ? "order-1" : "order-2"}`}>
                  {section.title}
                  {section.body}
                </div>
                <div className={`w-full lg:w-1/2 flex justify-center h-auto lg:h-full md:${index % 2 === 0 ? "order-2" : "order-1"}`}>
                  {section.image}
                </div>
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

        // Find the section closest to the top
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
