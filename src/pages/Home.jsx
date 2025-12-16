import { useNavigate } from "react-router-dom";

const Home = () => {
    const navigate = useNavigate();
  return (
    <section
      className="relative w-screen h-screen overflow-hidden"
      style={{
        backgroundImage: "url('/Home.jpg')",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black/60"></div>

      <div className="relative z-10 h-full flex items-center justify-center px-4 text-white">
        <div className="text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-light tracking-wide">
            Life on Abinash Deka
          </h1>
          <p className="mt-4 text-lg text-gray-300 tracking-wider">
            Software End-to-end Engineer
          </p>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center z-20">
        <p
          onClick={()=>navigate("/skills")}
          className="mb-3 text-sm font-bold text-white tracking-widest"
        >
          VIEW SKILLS
        </p>
      </div>
    </section>
  );
};

export default Home;
