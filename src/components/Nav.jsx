import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <nav
      className="
        fixed top-0 left-0 w-full
        flex items-center justify-center gap-5
        py-4
        bg-transparent
        text-white
        z-50 px-2
      "
    >
      <NavLink className={({ isActive }) => isActive ? "text-blue-400" : ""} to="/">
        Home
      </NavLink>
      <NavLink className={({ isActive }) => isActive ? "text-blue-400" : ""} to="/skills">
        Skills
      </NavLink>
      <NavLink className={({ isActive }) => isActive ? "text-blue-400" : ""} to="/projects">
        Projects
      </NavLink>
      <NavLink className={({ isActive }) => isActive ? "text-blue-400" : ""} to="/personalhistory">
        About
      </NavLink>
      <NavLink className={({ isActive }) => isActive ? "text-blue-400" : ""} to="/contact">
        Contact
      </NavLink>
    </nav>
  );
};

export default Nav;
