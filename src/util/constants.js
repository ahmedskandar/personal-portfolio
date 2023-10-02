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

 const PORTFOLIO_TECH_STACK = [
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

 const NEXTEVENTS_TECH_STACK = [
  {
    label: 'Next JS'
  },
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

 const PORTFOLIO_METRICS = [
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

 const NEXTEVENTS_METRICS = [
  {
    label: "Performance",
    icon: faGaugeHigh,
    value: "99",
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

export const FLOWDIRECTION = (number) =>
  number % 2 === 0 ? "flex-row" : "flex-row md:flex-row-reverse";

export const PROJECT_DATA = [
  {
    heading: "Personal Portfolio",

    description:
      "Uniquely designed by figma and developed custom portfolio with a modern flair which showcases my skills, projects etc.",
    techStack: PORTFOLIO_TECH_STACK,
    metrics: PORTFOLIO_METRICS,
    imageSrc: "/assets/images/portfolio-project-image.webp",
  },
  {
    heading: "Next Events",

    description:
      "A dynamic web application designed for effortless user registration and login and temporary data storage using JavaScript objects. Users can seamlessly create, view, update, and delete events that can be viewed by other users, promoting efficient event management. This project highlights proficient web development and dynamic data handling in a user-friendly interface by using the latest and greatest technologies.",
    techStack: NEXTEVENTS_TECH_STACK,
    metrics: NEXTEVENTS_METRICS,
    imageSrc: "/assets/images/portfolio-project-image.webp",
  },
];

export const COMMON_BUTTON_STYLE =
  "py-5 text-xl rounded-lg w-full hover:scale-110 transition-all duration-300 ease-in-out";
