import Nav from "./components/Nav";
import ScrollToTop from "./components/ScrollToTop";
import Mainroutes from "./routes/Mainroutes";

const App = () => {
  return (
    <div>
      <ScrollToTop/>
      <Nav />
      <Mainroutes />
    </div>
  );
};

export default App;
