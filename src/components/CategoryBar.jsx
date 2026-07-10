import "./styles/CategoryBar.css";

const categories = [
  { name: "Italian", icon: "🍕" },
  { name: "Indian", icon: "🍛" },
  { name: "Fast Food", icon: "🍔" },
  { name: "Healthy", icon: "🥗" },
  { name: "Desserts", icon: "🍰" },
  { name: "Drinks", icon: "🥤" },
  { name: "Asian", icon: "🍜" },
  { name: "Mexican", icon: "🌮" },
];

export default function CategoryBar() {
  return (
    <section className="category-section">
      <div className="category-header">
        <h2>Browse Categories</h2>
        <p>Find delicious recipes by your favorite cuisine</p>
      </div>

      <div className="category-grid">
        {categories.map((category, index) => (
          <div className="category-card" key={index}>
            <div className="category-icon">{category.icon}</div>
            <h3>{category.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}