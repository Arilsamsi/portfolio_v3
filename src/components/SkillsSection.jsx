//Skills
import htmlLogo from "../assets/skills/html.png";
import cssLogo from "../assets/skills/css.png";
import jsLogo from "../assets/skills/js.png";
import phpLogo from "../assets/skills/php.png";
import laravelLogo from "../assets/skills/laravel.png";
import vueLogo from "../assets/skills/vuejs.png";
import reactLogo from "../assets/skills/react.png";

export default function SkillsSection() {
  const skills = [
    { name: "HTML", logo: htmlLogo },
    { name: "CSS", logo: cssLogo },
    { name: "JavaScript", logo: jsLogo },
    { name: "PHP", logo: phpLogo },
    { name: "Laravel", logo: laravelLogo },
    { name: "Vue", logo: vueLogo },
    { name: "React", logo: reactLogo },
  ];

  return (
    <section className="py-10 px-4">
      <h2 className="text-3xl sm:text-4xl font-bold mb-6">Skills</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-4 justify-items-center">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="bg-white hover:bg-gray-100 transition duration-300 shadow-md rounded-xl border border-gray-300 p-2 flex flex-row items-center gap-4 w-full max-w-[300px]"
          >
            <img
              src={skill.logo}
              alt={skill.name}
              className="w-10 h-10 object-contain"
            />
            <span className="text-base font-medium">{skill.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
