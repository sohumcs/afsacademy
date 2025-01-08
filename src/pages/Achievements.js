import React from 'react';
import 'C:/Users/Sohum Srivastava/Desktop/afsacademy/afsacademy/src/styles/Achievements.css';

const Achievements = () => {
  const achievements = [
    { title: 'Regional Championship Winner', year: 2023, description: 'Won the inter-state regional basketball championship.' },
    { title: 'Best Training Camp', year: 2024, description: 'Recognized as the best basketball training camp in the region.' },
    { title: 'MVP Awards', year: 2023, description: 'Two students received MVP awards in state-level competitions.' },
  ];

  return (
    <div className="achievements-container">
      <h1>Our Achievements</h1>
      <ul>
        {achievements.map((achievement, index) => (
          <li key={index}>
            <h2>{achievement.title}</h2>
            <p><strong>Year:</strong> {achievement.year}</p>
            <p>{achievement.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Achievements;