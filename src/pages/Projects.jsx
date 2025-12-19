import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Projects = () => {
    const navigate = useNavigate();
  return (
    <section
      id="projects"
      className="min-h-screen bg-gray-300 text-black px-6 sm:px-12 md:px-24 py-24"
    >
      <h2 className="text-3xl md:text-4xl font-light tracking-wide mb-16">
        Projects
      </h2>

      
      <div className="space-y-16">
        <Project
          title="Redux Project"
          description="A React application demonstrating global state management using Redux Toolkit, async actions, and a scalable store architecture."
          tech="React · Redux Toolkit · JavaScript"
          github="https://github.com/Abi-390/ReduxProject"
          live="https://otakustreetwear.vercel.app"
        />

        <Project
          title="RecipeSaga"
          description="Recipe Saga is a modern, user-friendly recipe management web app where users can explore, create, and save their favorite dishes. ."
          tech="React · local storage · Tailwind CSS"
          github="https://github.com/Abi-390/RecipeSaga"
          live="https://recipe-saga.vercel.app"
        />
      </div>

      {/* Practice Projects */}
      <div className="mt-24">
        <h3 className="text-lg font-light tracking-wider text-gray-500 mb-8">
          Practice Projects
        </h3>

        <div className="space-y-10">
          <SmallProject
            title="Kanban Board"
            github="https://github.com/Abi-390/kanbanBoardReact"
            live="https://kanban-board-react-eta.vercel.app/"
          />

          <SmallProject
            title="Todo List (React)"
            github="https://github.com/Abi-390/TodoListReact"
            live="https://todo-list-react-rouge-seven.vercel.app/"
          />

          <SmallProject
            title="GitHub User Finder"
            github="https://github.com/Abi-390/GithubUserFinder"
            live="https://your-githubfinder.vercel.app"
          />
        </div>
      </div>
    
      <div className="mt-24 flex justify-center">
        <p
          onClick={() => navigate("/personalhistory")}
          className="text-sm font-bold tracking-widest cursor-pointer opacity-70 hover:opacity-100 transition"
        >
          ABOUT ME
        </p>
      </div>
    </section>
  );
};

const Project = ({ title, description, tech, github, live }) => (
  <div className="max-w-3xl">
    <h3 className="text-xl font-light tracking-wide mb-2">
      {title}
    </h3>

    <p className="text-gray-600 mb-4">
      {description}
    </p>

    <p className="text-sm text-gray-500 mb-6">
      {tech}
    </p>

    <div className="flex items-center gap-6 text-sm">
      {github && (
        <a
          href={github}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 hover:opacity-70 transition"
        >
          <FaGithub />
          Code
        </a>
      )}

      {live && (
        <a
          href={live}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 hover:opacity-70 transition"
        >
          <FaExternalLinkAlt />
          Live
        </a>
      )}
    </div>
  </div>
);

const SmallProject = ({ title, github, live }) => (
  <div className="flex items-center gap-6 text-gray-700 text-sm">
    <span className="tracking-wide">{title}</span>

    {github && (
      <a
        href={github}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-1 hover:opacity-70 transition"
      >
        <FaGithub />
        Code
      </a>
    )}

    {live && (
      <a
        href={live}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-1 hover:opacity-70 transition"
      >
        <FaExternalLinkAlt />
        Live
      </a>
    )}
  </div>
);

export default Projects;
