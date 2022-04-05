import { Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import Header from "./components/Header/Header";
import Reviews from "./components/Reviews/Reviews";
import Dashboard from "./components/Dashboard/Dashboard";
import Notfound from "./components/Notfound/Notfound";
import Blog from "./components/Blog/Blog";

function App() {
  return (
    <div className="bg-[#121b2e] text-white text-justify text-xl">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/blogs" element={<Blog />} />

        <Route path="*" element={<Notfound />} />
      </Routes>
    </div>
  );
}

export default App;
