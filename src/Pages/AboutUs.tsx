import { JSX, useEffect, useRef, useState } from "react";
import { TypographyH2, TypographyP } from "../components/ui/typography";

import imgSection1 from '../assets/images/aboutus/img-food.jpeg';
import imgSection2 from '../assets/images/aboutus/img-food2.jpg';
import imgSection3 from '../assets/images/aboutus/img-food3.jpg';
import imgSection4 from '../assets/images/aboutus/img-food4.jpg';
import imgSection5 from '../assets/images/aboutus/img-food5.jpg';
import { Card } from "../components/ui/card";
import SectionFadeIn from "../utils/SectionFadeIn";
// import imgSection6 from '../assets/images/aboutus/img-food.jpeg';


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
    image: <img src={imgSection2} alt="Placeholder" className="object-cover w-full h-auto lg:h-full" />,
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
    image: <img src={imgSection4} alt="Placeholder" className="object-cover w-full h-auto lg:h-full" />,
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
    image: <img src={imgSection5} alt="Placeholder" className="object-cover w-full h-auto lg:h-full" />,
  },
];

export default function AboutUs() {
  const container = useRef<HTMLDivElement | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

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
    <div ref={container} className="overflow-visible overflow-x-hidden relative z-0 mt-12">
        <div className="min-h-[80vh] min-w-[80vw] w-full absolute -right-0 z-[-1] animate-[scaleUp_800ms_ease-in-out_forwards]">
        </div>

        <PaginationDots sections={parallaxSections} scrollToSection={scrollToSection} setActiveIndex={setActiveIndex} activeIndex={activeIndex}/>
        {parallaxSections.map((section, index) => {
          return (
            <div className="md:p-4 p-2"  id={section.id}>
            <SectionFadeIn>
              <Card className="m-auto w-full max-w-5xl shadow-lg border border-gray-200 rounded-lg bg-white min-h-[63vh] flex overflow-hidden">

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

        {activeIndex !== parallaxSections.length-1 && <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-10">
          <button
            onClick={() => scrollToSection(activeIndex + 1)}
            className="p-1 text-white transition-all grow-1 focus:ring-0 focus:outline-none w-10 h-10 animate-float flex"
          >
            
            <svg className="w-10 h-10" xmlns="http://www.w3.org/2000/svg" width="96" height="96" fill="#000000" viewBox="0 0 256 256"><path d="M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,53.66,90.34L128,164.69l74.34-74.35a8,8,0,0,1,11.32,11.32Z"></path></svg>
          </button>
        </div>}
    </div>
  );
}

function PaginationDots({ sections, scrollToSection, setActiveIndex, activeIndex }: { activeIndex:number; sections: section[]; scrollToSection: (index: number) => void; setActiveIndex: (index: number) => void }) {
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
  }, [sections, setActiveIndex]);

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
