import {
  faCss3Alt,
  faHtml5,
  faReact,
  faSquareJs,
} from "@fortawesome/free-brands-svg-icons";
import {
  faGaugeHigh,
  faWheelchair,
  faMedal,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";

export const CORE_SKILL_ICONS = [
  {
    label: "HTML5",
    icon: faHtml5,
  },
  {
    label: "CSS3",
    icon: faCss3Alt,
  },
  {
    label: "JavaScript",
    icon: faSquareJs,
  },
];

export const OTHER_SKILL_ICONS = [
  {
    label: "React JS",
    icon: faReact,
  },
  {
    label: "Next JS",
    icon: faCss3Alt,
  },
  {
    label: "Tailwind CSS",
  },
  {
    label: "Material UI",
  },
];

 export const SECONDARY_SKILL_TITLE = (
   <>
     FRAMEWORKS/
     <br />
     LIBRARIES
   </>
 );

export const FLOWDIRECTION = (number) =>  number % 2 === 0 ? "flex-row" : "flex-row md:flex-row-reverse";

export const PROJECT_DATA = [{ t: "t" }, { r: "r" }];

export const TECH_STACK = [
  {
    label: "React JS",
    icon: faReact,
  },
  {
    label: "HTML5",
    icon: faHtml5,
  },
  {
    label: "CSS3",
    icon: faCss3Alt,
  },
  {
    label: "Tailwind",
  },
];

export const LIGHTHOUSE_METRICS = [
  {
    label: "Performance",
    icon: faGaugeHigh,
    value: "100",
  },
  {
    label: "Accessibility",
    icon: faWheelchair,
    value: "100",
  },
  {
    label: "Best Practices",
    icon: faMedal,
    value: "100",
  },
  {
    label: "SEO",
    icon: faMagnifyingGlass,
    value: "91",
  },
];

 export const COMMON_BUTTON_STYLE =
   "py-5 text-xl rounded-lg w-full hover:scale-110 transition-all duration-300 ease-in-out";