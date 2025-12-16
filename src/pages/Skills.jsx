import {
  SiReact,
  SiRedux,
  SiTailwindcss,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiGithub,
  SiVercel,
  SiNetlify,
} from "react-icons/si";

import { FaDatabase, FaBolt } from "react-icons/fa"; // ✅ safe generic icons
import { useNavigate } from "react-router-dom";

const Skills = () => {
  const navigate = useNavigate();

  return (
    <section
      id="skills"
      className="relative min-h-screen bg-gray-300 text-black px-6 sm:px-12 md:px-24 py-24"
    >
      <h2 className="text-3xl md:text-4xl font-light tracking-wide mb-16">
        Skills
      </h2>

      <div className="grid gap-12 md:grid-cols-3">
        {/* Frontend */}
        <SkillGroup title="Frontend">
          <Skill icon={SiReact} name="React" color="#61DAFB" />
          <Skill icon={SiRedux} name="Redux Toolkit" color="#764ABC" />
          <Skill icon={FaBolt} name="React Query" color="#FF4154" />
          <Skill icon={FaDatabase} name="Zustand" color="#000000" />
          <Skill icon={SiTailwindcss} name="Tailwind CSS" color="#38BDF8" />
          <Skill icon={SiJavascript} name="JavaScript" color="#F7DF1E" />
          <Skill icon={SiHtml5} name="HTML" color="#E34F26" />
          <Skill icon={SiCss3} name="CSS" color="#1572B6" />
        </SkillGroup>

        {/* Backend */}
        <SkillGroup title="Backend">
          <Skill icon={SiNodedotjs} name="Node.js" color="#339933" />
          <Skill icon={SiExpress} name="Express" color="#000000" />
          <Skill icon={SiMongodb} name="MongoDB" color="#47A248" />
        </SkillGroup>

        {/* Tools */}
        <SkillGroup title="Tools">
          <Skill icon={SiGithub} name="GitHub" color="#181717" />
          <Skill icon={SiVercel} name="Vercel" color="#000000" />
          <Skill icon={SiNetlify} name="Netlify" color="#00C7B7" />
        </SkillGroup>
      </div>

      {/* CTA */}
      <div className="mt-24 flex justify-center">
        <p
          onClick={() => navigate("/projects")}
          className="text-sm font-bold tracking-widest cursor-pointer opacity-70 hover:opacity-100 transition"
        >
          VIEW PROJECTS
        </p>
      </div>
    </section>
  );
};

const SkillGroup = ({ title, children }) => (
  <div>
    <h3 className="text-lg font-light tracking-wider text-gray-500 mb-6">
      {title}
    </h3>
    <div className="space-y-4">{children}</div>
  </div>
);

const Skill = ({ icon: Icon, name, color }) => (
  <div className="flex items-center gap-3 text-gray-700">
    <Icon size={22} style={{ color }} />
    <span className="tracking-wide">{name}</span>
  </div>
);

export default Skills;
