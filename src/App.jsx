import { useState, useEffect } from "react";
import AOS from "aos";
import Stats from "./components/Stats";
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Home from "./pages/Home";
import Features from "./components/Features";
import Testimonials from "./components/Testimonials";
import Chefs from "./components/Chefs";
import Footer from "./components/Footer";
const App = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  useEffect(() => {
  AOS.init({
    duration: 1000,
    once: true,
  });
}, []);

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  const handleReset = () => {
    setSearchQuery("");
  };

  return (
    <div className={darkMode ? "app dark" : "app"}>
      <Navbar
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        onSearch={handleSearch}
        onReset={handleReset}
      />

      <Hero />
      
<Stats />
      <Features />
      <Testimonials />
      <Chefs />
      <Stats />
      <Home searchQuery={searchQuery} />
      <Footer />
    </div>
  );
};

export default App;