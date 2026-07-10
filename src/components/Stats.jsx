import CountUp from "react-countup";
import "./styles/Stats.css";
const Stats = () => {
  const stats = [
    { number: "5000+", title: "Recipes" },
    { number: "120+", title: "Countries" },
    { number: "500+", title: "Professional Chefs" },
    { number: "1M+", title: "Happy Users" },
  ];

  return (
    <section className="stats">
      <div className="stats-container">
        {stats.map((item, index) => (
          <div
  className="stat-card"
  key={index}
  data-aos="zoom-in-up"
  data-aos-delay={index * 150}
>
           <h2>{item.number}</h2>
            <p>{item.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Stats;