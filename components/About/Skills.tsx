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
    <>
      <div className="flex justify-center mx-4">
        <section className="w-full flex flex-col p-20 border-b-2 bordre-solid border-gray-300 text-gray-800">
          <span className="font-semibold text-4xl text-primary">
            I am confortable in...
          </span>
          <ul className="flex flex-wrap mt-8 jsutify-start">
            {skills.map((skill, index) => (
              <li key={index} className="w-1/3">
                <h3 className="font-semibold text-2xl text-primary">
                  {skill.title}
                </h3>
                <ul className="mt-4">
                  {skill.skills.map((s, subIndex) => (
                    <li key={subIndex} className="font-medium text-base">
                      {s}
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </>
  );
};

export default Skills;
