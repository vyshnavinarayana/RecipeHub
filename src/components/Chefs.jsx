import "./styles/Chefs.css";

const chefs = [
  {
    name: "Gordon Smith",
    speciality: "Italian Cuisine",
    image: "https://randomuser.me/api/portraits/men/45.jpg",
  },
  {
    name: "Sophia Williams",
    speciality: "Desserts",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
  },
  {
    name: "David Johnson",
    speciality: "Asian Cuisine",
    image: "https://randomuser.me/api/portraits/men/52.jpg",
  },
];

const Chefs = () => {
  return (
    <section className="chefs">
      <h2 data-aos="fade-up">
        👨‍🍳 Meet Our Expert Chefs
      </h2>

      <div className="chef-container">
        {chefs.map((chef, index) => (
          <div
            className="chef-card"
            key={index}
            data-aos="zoom-in"
            data-aos-delay={index * 150}
          >
            <img src={chef.image} alt={chef.name} />

            <h3>{chef.name}</h3>

            <p>{chef.speciality}</p>

            <button>View Recipes</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Chefs;