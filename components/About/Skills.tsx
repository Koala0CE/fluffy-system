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
        <section className="w-full flex flex-col p-5 xs:p-10 sm:p-12 md:p-16 lg:p-20 border-b-2 border-solid border-gray-300 dark:border-white text-gray-800 dark:text-white">
          <span className="font-semibold text-lg sm:text-3xl md:text-4xl text-primary dark:text-secondary">
            I am comfortable in...
          </span>
          <ul className="flex flex-wrap mt-8 justify-center xs:justify-start">
            {skills.map((skill, index) => (
              <li key={index} className="w-full sm:w-1/2 md:w-1/3 p-2 sm:mb-4">
                <h3 className="font-semibold capitalize text-2xl text-primary sm:text-xl">
                  {skill.title}
                </h3>
                <ul className="mt-4">
                  {skill.skills.map((s, subIndex) => (
                    <li
                      key={subIndex}
                      className="font-medium text-base sm:text-sm sm:mb-2"
                    >
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
