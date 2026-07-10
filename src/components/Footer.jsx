import "./styles/Footer.css";

const Footer = () => {
  return (
    <footer
      className="footer"
      data-aos="fade-up"
      data-aos-duration="1000"
    >
      <div className="footer-container">

        <div
          className="footer-box"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <h2>🍽️ RecipeHub</h2>

          <p>
            Discover delicious recipes from around the world.
            Cook smarter, eat healthier, and enjoy every meal.
          </p>
        </div>

        <div
          className="footer-box"
          data-aos="fade-up"
          data-aos-delay="250"
        >
          <h3>Quick Links</h3>

          <a href="#">Home</a>
          <a href="#chicken">Chicken</a>
          <a href="#beef">Beef</a>
          <a href="#seafood">Seafood</a>
        </div>

        <div
          className="footer-box"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          <h3>Contact</h3>

          <p>📧 support@recipehub.com</p>

          <p>📞 +91 9876543210</p>

          <p>📍 India</p>
        </div>

        <div
          className="footer-box"
          data-aos="fade-up"
          data-aos-delay="550"
        >
          <h3>Follow Us</h3>

          <div className="socials">
            <span>📘</span>
            <span>📷</span>
            <span>🐦</span>
            <span>▶️</span>
          </div>
        </div>

      </div>

      <div className="copyright">
        © 2026 RecipeHub | Made with ❤️ using React
      </div>
    </footer>
  );
};

export default Footer;