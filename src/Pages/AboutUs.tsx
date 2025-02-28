// import { Parallax } from "react-parallax";
// import Text from "../components/Library/Text/Text.component";
import { useEffect, useState } from "react";
import bgImg4 from "../assets/images/background/dump/image.jpg";
import bgImg1 from "../assets/images/background/dump/pexels-photo-529621.jpeg";
import bgImg2 from "../assets/images/background/dump/pexels-photo-597909.jpeg";
import bgImg3 from "../assets/images/background/dump/pexels-photo-714666.jpeg";
import bgImg5 from "../assets/images/background/dump/premium_photo-1673483585933-93ab140492d3.jpeg";
// import Button from "../components/Library/Button/Button.component";

type section = {
  id: string;
  strength: number;
  header: string;
  text: string;
  img: string;
  button?: string;
};
const parallaxSections: section[] = [
  {
    id: "about-us-1",
    strength: 500,
    header:
      "WIR SIND EINE DER SPEZIALISIERTESTEN BÜRO- KULTURVERBESSERER - EVENT - AGENTUREN FÜR UNTERNEHMEN.",
    text: "Sagen andere auch über sich.",
    img: bgImg1,
  },
  {
    id: "about-us-2",
    strength: 200,
    header: "WIR PLANEN, ORGANISIEREN UND SETZEN UM.",
    text: "Klar, das machen viele.",
    img: bgImg2,
  },
  {
    id: "about-us-3",
    strength: 750,
    header: "TIMMT, ABER WIR MACHEN ESGREIFBARER",
    text: "Persönlicher. Nahbarer. Echter. Wir sind kein anonymer Dienstleister, sondern euer treue Partner, der mitdenkt, mitfühlt und mitreißt.",
    img: bgImg3,
  },
  {
    id: "about-us-4",
    strength: 500,
    header: "UND WIR ARBEITEN MIT DENBESTEN.",
    text: "Egal ob mediterranes Buffet, asiatisches Fingerfood oder ein wilder Mix aus allem – wir machen es möglich! Unser breites Netzwerk aus exzellenten Restaurantpartnern gibt uns die Freiheit, Catering genau nach euren Vorstellungen zu gestalten. Für ein Catering, das überrascht, begeistert und einfach passt.",
    img: bgImg4,
  },
  {
    id: "about-us-5",
    strength: 720,
    header: "IN DÜSSELDORF UND ÜBERALL, WO IHR UNS BRAUCHT.",
    text: "Ob Düsseldorf oder Umgebung – wir sind da, wo euer Event stattfindet.",
    img: bgImg5,
  },
  {
    id: "about-us-6",
    strength: 220,
    header: "UND ERFAHREN SIND WIR AUCH.",
    text: "Mit mehr als 13 Jahren Expertise in der Gastronomie, Eventmanagement und Catering wissen wir genau, worauf es ankommt.",
    img: bgImg5,
  },
  {
    id: "about-us-7",
    strength: 420,
    header: "FÜR UNTERNEHMEN, DIE MEHR WOLLEN ALS EIN 08/15 EVENT..",
    text: "Ob Team-Events, Firmenfeiern oder Business- Catering – wir stärken Teams, bringen Mitarbeiter zusammen und machen das Büro wieder zum Erlebnis.",
    img: bgImg5,
  },
  {
    id: "about-us-8",
    strength: 620,
    header: "WIR HALTEN UNS FÜR BESONDERS. WEIL WIR ES PERSÖNLICH NEHMEN.",
    text: "Weil wir zuhören, verstehen und individuell beraten. Weil wir Events lieben. Weil wir lieber machen, statt nur zu labern. Und weil wir ein kreativer Haufen sind, der sich durch gemeinsame Werte und unerschütterliche Teamarbeit auszeichnet. So sind wir – ganz ehrlich!",
    img: bgImg5,
    button: "Lass uns dein Projekt besprechen",
  },
];
export default function AboutUs() {
  useEffect(() => {
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 20);
  }, []);

  return (
    <div>
      <PaginationDots sections={parallaxSections} />
      <div>
        {/* {parallaxSections.map((section, index) => (
        <Parallax
        key={index}
        blur={1}
        bgImage={section.img}
          strength={section.strength}
          bgImageStyle={{ backgroundPosition: 'center center' }} 
        //   style={{position: 'relative', overflow: 'hidden'}}
        >
          <div id={section.id} className="h-100 flex justify-center align-center flex-col items-center px-12">
            <Text type="h3">{section.header}</Text>
            <Text type="p" variant="primary">{section.text}</Text>
            {section.button && <Button className="underline">{section.button}</Button>}
          </div>
        </Parallax>
      ))} */}
      </div>
    </div>
  );
}

function PaginationDots({ sections }: { sections: section[] }) {
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

  const scrollToSection = (index: number) => {
    document.getElementById(sections[index].id)?.scrollIntoView({
      behavior: "smooth",
      block: "end",
      inline: "nearest",
    });
    setActiveIndex(index);
  };

  return (
    <div className="fixed right-5 top-1/2 transform -translate-y-1/2 flex flex-col gap-2.5 justify-center z-10">
      {sections.map((_, index) => (
        <button
          key={index}
          className={`w-2 h-2 rounded-full transition-all p-1 shadow-sm ${
            index === activeIndex ? "bg-gray-800 w-1 h-4" : "bg-gray-400"
          }`}
          onClick={() => scrollToSection(index)}
        />
      ))}
    </div>
  );
}
