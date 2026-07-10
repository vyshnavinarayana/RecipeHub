import "./styles/Hero.css";

const Hero = () => {
  return (
    <section
  className="hero"
  data-aos="fade-down"
  data-aos-duration="1200"
>

      <div className="hero-overlay">

        <h1>🍽️ Discover Delicious Recipes</h1>

        <p>
          Explore hundreds of recipes from around the world.
          Search, save your favorites, and start cooking today!
        </p>

        <button
          onClick={() =>
            window.scrollTo({
              top: 650,
              behavior: "smooth",
            })
          }
        >
          Explore Recipes
        </button>

      </div>

    </section>
  );
};

export default Hero;