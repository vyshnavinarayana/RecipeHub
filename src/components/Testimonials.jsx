import "./styles/Testimonials.css";

const reviews = [
  {
    name: "Sarah Johnson",
    role: "Home Cook",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    review:
      "RecipeHub has completely changed the way I cook. Every recipe is simple and delicious.",
  },
  {
    name: "Michael Brown",
    role: "Professional Chef",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    review:
      "Beautiful design and excellent collection of recipes from around the world.",
  },
  {
    name: "Emma Wilson",
    role: "Food Blogger",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
    review:
      "The best recipe website I've used. Highly recommended for beginners.",
  },
];

const Testimonials = () => {
  return (
    <section className="testimonials">
      <h2>💬 What Our Users Say</h2>

      <div
  className="testimonial-card"
  data-aos="flip-left"
>
        {reviews.map((item, index) => (
          <div className="testimonial-card" key={index}>
            <img src={item.image} alt={item.name} />

            <h3>{item.name}</h3>

            <span>{item.role}</span>

            <p>"{item.review}"</p>

            <div className="stars">
              ⭐⭐⭐⭐⭐
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;