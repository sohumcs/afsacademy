import React from "react";
import "../pages/Team.js";

const Team = () => {
  return (
    <div className="team-container">
      <div className="team-member">
        <div className="team-details">
          <h2>Ashwani Kumar Gupta</h2>
          <h3>Professional Athlete & Trainer</h3>
          <p className="section-heading">Achievements:</p>
          <ul>
            <li>
              <strong>Basketball (National Level):</strong> Competed in multiple Senior and Junior National Championships, including the Khelo India Youth Games (Bronze Medalist).
            </li>
            <li>
              <strong>Basketball (State Level):</strong> Medalist in Senior State Championships; guided teams in Uttar Pradesh Basketball Championships.
            </li>
            <li>
              <strong>Volleyball (State Level):</strong> Competed in Junior and Senior State Volleyball Championships.
            </li>
          </ul>
          <p className="section-heading">Experience:</p>
          <ul>
            <li>
              <strong>Basketball Coach:</strong> NIS Bangalore (SAI) & Loyola International School.
            </li>
            <li>Currently Head Coach at AFS Training Academy, Lucknow.</li>
            <li>
              Guided Lucknow teams to significant achievements in Under-17 and Under-19 State Championships.
            </li>
            <li>
              Coached teams at Sainik School and Central Academy, creating strong basketball programs.
            </li>
          </ul>
        </div>
        <div className="team-image">
          <img src="C:\Users\ASUS\Desktop\afsacademy\afsacademy\src\media\pfp1.jpg" alt="Ashwani Kumar Gupta" />
        </div>
      </div>
    </div>
  );
};

export default Team;
