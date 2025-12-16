import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

const ContactMe = () => {
  return (
    <section
      id="contact"
      className="min-h-screen bg-gray-300 flex items-center justify-center px-4 sm:px-6"
    >
      <div
        className="
          w-full
          max-w-lg
          rounded-2xl
          bg-gradient-to-br from-white via-gray-50 to-gray-100
          shadow-xl
          p-6 sm:p-10
          text-black
        "
      >
        <h2 className="text-2xl sm:text-3xl font-light tracking-wide mb-6">
          Contact
        </h2>

        <p className="text-gray-600 mb-8 text-sm sm:text-base leading-relaxed">
          If you’d like to discuss a project, opportunity, or just say hello,
          feel free to reach out.
        </p>

        <div className="space-y-5">
          <ContactItem
            icon={<FaEnvelope />}
            label="Email"
            value="dekaabinash95@gmail.com"
            link="mailto:dekaabinash95@gmail.com"
          />

          <ContactItem
            icon={<FaGithub />}
            label="GitHub"
            value="Abi-390"
            link="https://github.com/Abi-390"
          />

          <ContactItem
            icon={<FaLinkedin />}
            label="LinkedIn"
            value="Abinash Deka
"
            link="https://www.linkedin.com/in/abinash-deka-605731279
"
          />
        </div>
      </div>
    </section>
  );
};

const ContactItem = ({ icon, label, value, link }) => (
  <a
    href={link}
    target="_blank"
    rel="noopener noreferrer"
    className="
      flex
      flex-col
      sm:flex-row
      sm:items-center
      gap-2 sm:gap-4
      text-gray-700
      hover:text-black
      transition
      break-all
    "
  >
    <span className="text-lg">{icon}</span>

    <span className="text-xs uppercase tracking-widest text-gray-500">
      {label}
    </span>

    <span className="sm:ml-auto text-sm">{value}</span>
  </a>
);

export default ContactMe;
