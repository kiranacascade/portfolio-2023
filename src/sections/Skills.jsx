import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import react from "../assets/react.png";
import nodejs from "../assets/nodejs.png";
import tailwind from "../assets/tailwind.png";
import redux from "../assets/redux.png";
import mysql from "../assets/mysql.png";
import sequelize from "../assets/sequelize.png";
import git from "../assets/git.png";

const skills = [
  {
    text: "HTML",
    icon: html,
  },
  {
    text: "CSS",
    icon: css,
  },
  {
    text: "JavaScript",
    icon: javascript,
  },
  {
    text: "React",
    icon: react,
  },
  {
    text: "NodeJS",
    icon: nodejs,
  },
  {
    text: "Redux",
    icon: redux,
  },
  {
    text: "MySQL",
    icon: mysql,
  },
  {
    text: "Sequelize",
    icon: sequelize,
  },
  {
    text: "Tailwind",
    icon: tailwind,
  },
  {
    text: "Git",
    icon: git,
  },
];

export default function Skills() {
  return (
    <div className="bg-white pt-0 pb-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 data-aos="fade-up" className="text-center text-3xl font-bold text-darkGray mb-4">
          MY SKILLS
        </h2>
        <div data-aos="fade-up" className="mx-auto mt-10 grid max-w-lg grid-cols-2 md:grid-cols-4 lg:grid-cols-5 items-center gap-x-5 gap-y-10 sm:max-w-xl sm:gap-x-4 lg:mx-0 lg:max-w-none">
          {skills.map((skill, index) => (
            <div key={index} className="flex items-center justify-center rounded-lg py-3 hover:bg-purple-100 hover:-translate-y-2 transition duration-300">
              <img src={skill.icon} alt="skill.text" className="h-8 w-8 mr-3" />
              <p className="text-darkGray hover:text-dark text-md font-bold">{skill.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
