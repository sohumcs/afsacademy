import React from "react";
import "../styles/Achievements.css";

const achievementsData = [
  {
    title: "National Championship 2023",
    description: "Secured 1st place in the National Basketball Championship.",
    image: "/images/achievement1.jpg",
  },
  {
    title: "Best Academy Award",
    description: "Awarded 'Best Sports Academy' by XYZ Organization.",
    image: "/images/achievement2.jpg",
  },
  {
    title: "State-Level Tournament",
    description: "Won 2nd place in the State-Level Basketball Tournament.",
    image: "/images/achievement3.jpg",
  },
];

const Achievements = () => {
  return (
    <div className="achievements-container">
      <div className="achievements-hero">
        <h1>Our Achievements</h1>
        <p>
          Here's a glimpse of our proud moments and milestones achieved over the years.
        </p>
      </div>
      <div className="achievements-grid">
        {achievementsData.map((achievement, index) => (
          <div className="achievement-card" key={index}>
            <img
              src={achievement.image}
              alt={achievement.title}
              className="achievement-image"
            />
            <h2 className="achievement-title">{achievement.title}</h2>
            <p className="achievement-description">{achievement.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Achievements;
