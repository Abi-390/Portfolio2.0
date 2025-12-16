import { Routes, Route } from "react-router-dom";
import PersonalHistory from "../pages/PersonalHistory";
import Home from "../pages/Home";
import Projects from "../pages/Projects";
import Skills from "../pages/Skills";
import ContactMe from '../pages/ContactMe'


const Mainroutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/skills" element={<Skills />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/personalhistory" element={<PersonalHistory />} />
      <Route path="/contact" element={<ContactMe/>} /> 
    </Routes>
  );
};

export default Mainroutes;
