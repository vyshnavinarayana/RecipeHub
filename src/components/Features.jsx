import "./styles/Features.css";
import {
  FaUtensils,
  FaHeart,
  FaSearch,
  FaBolt,
} from "react-icons/fa";

const Features = () => {
  const data = [
    {
      icon: <FaUtensils />,
      title: "5000+ Recipes",
      text: "Discover delicious recipes from all around the world.",
    },
    {
      icon: <FaHeart />,
      title: "Save Favorites",
      text: "Bookmark your favorite recipes and access them anytime.",
    },
    {
      icon: <FaSearch />,
      title: "Quick Search",
      text: "Search meals instantly by name or category.",
    },
    {
      icon: <FaBolt />,
      title: "Fast Experience",
      text: "Modern UI with lightning fast performance.",
    },
  ];

  return (
 <section
  className="features"
  data-aos="fade-right"
> <h2>Why Choose RecipeHub?</h2>

      <div className="feature-grid">
        {data.map((item, index) => (
         <div
  className="feature-card"
  key={index}
  data-aos="fade-up"
  data-aos-delay={index * 150}
>
            <div className="feature-icon">
              {item.icon}
            </div>

            <h3>{item.title}</h3>

            <p>{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;