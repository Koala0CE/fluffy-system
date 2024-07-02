import React from "react";

const skills = [
  {
    title: "Frontend",
    skills: ["React", "Next.js", "Tailwind CSS", "Bootstrap", "Material-UI"],
  },
  {
    title: "Backend",
    skills: ["Node.js", "Express", "MongoDB", "Firebase", "PostgreSQL"],
  },
  {
    title: "Others",
    skills: ["Git", "GitHub", "Heroku", "Netlify", "Vercel"],
  },
];

const Skills = () => {
  return (
    <section className="w-full flex flex-col p-20 border-b-2 bordre-solid border-black text-black ">
      Skills
      <span className="font-semibold text-4xl text-red-400">
        I am confortable in...
      </span>
      <ul className="flex flex-wrap mt-8 jsutify-start">
        {skills.map((skill) => (
          <li className="w-1/3">
            <h3 className="font-semibold text-2xl text-red-400">
              {skill.title}
            </h3>
            <ul className="mt-4">
              {skill.skills.map((s) => (
                <li className="font-medium text-base">{s}</li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Skills;
