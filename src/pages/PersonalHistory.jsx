import { useNavigate } from "react-router-dom";

const PersonalHistory = () => {
  const navigate=useNavigate()
  return (
    <section
      id="about"
      className="min-h-screen bg-gray-300 text-black px-6 sm:px-12 md:px-24 py-24"
    >
      <h2 className="text-3xl md:text-4xl font-light tracking-wide mb-20">
        Personal History
      </h2>

      <div className="relative max-w-4xl mx-auto">
        <div className="absolute left-4 top-0 h-full w-px bg-gray-500 md:left-1/2"></div>

        <TimelineItem
          title="Primary Education"
          subtitle="Salmara L.P. School"
          description="Completed my primary education, building a strong foundation in basic academics."
        />

        <TimelineItem
          title="Middle School"
          subtitle="Salmara M.E. School"
          description="Continued my studies with growing interest in mathematics and logical thinking."
          right
        />

        <TimelineItem
          title="High School"
          subtitle="Agdala Chariali High School"
          description="Passed the Class 10 board examination with 94.83%, with strong performance in Mathematics, Science, and Social Science."
        />

        <TimelineItem
          title="Higher Secondary"
          subtitle="Zenith Academy (Science Stream)"
          description="Studied Physics, Chemistry, Mathematics, and Biology, gaining exposure to analytical and scientific thinking."
          right
        />

        <TimelineItem
          title="Graduation"
          subtitle="Bachelor of Computer Applications — Dibrugarh University"
          description="Graduated from NERIM Group of Institutions with a CGPA of 8.66, developing a strong foundation in computer science and software development."
        />

        <TimelineItem
          title="Internship"
          subtitle="Software Developer Intern — Zephyr Solutions"
          description="Worked on real-world React projects, collaborated using GitHub, and followed structured development workflows in a professional team environment."
          right
        />

        <TimelineItem
          title="Beyond Code"
          subtitle="Interests & Hobbies"
          description="Outside development, I enjoy playing cricket and badminton, working out, watching anime, and solving brain riddles during my free time."
        />
      </div>

      <div className="mt-24 flex justify-center">
        <p
          onClick={() => navigate("/contact")}
          className="text-sm font-bold tracking-widest cursor-pointer opacity-70 hover:opacity-100 transition"
        >
          CONTACT ME
        </p>
      </div>
    </section>
  );
};

const TimelineItem = ({ title, subtitle, description, right }) => {
  return (
    <div
      className={`relative mb-16 flex ${
        right ? "md:justify-end" : "md:justify-start"
      }`}
    >
      <div className="absolute left-4 top-4 w-3 h-3 rounded-full bg-gray-800 md:left-1/2 md:-translate-x-1/2"></div>

      <div
        className={`ml-12 md:ml-0 md:w-5/12 ${
          right ? "md:text-left" : "md:text-left"
        }`}
      >
        <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
          <h3 className="text-lg font-medium mb-1">{title}</h3>
          <p className="text-sm text-gray-500 mb-3">{subtitle}</p>
          <p className="text-gray-700 leading-relaxed text-sm">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default PersonalHistory;
