import React from 'react';

const Team = () => {
  const students = [
    { name: 'John Doe', performance: 'Excellent' },
    { name: 'Jane Smith', performance: 'Good' },
  ];

  return (
    <div>
      <h1>Our Team</h1>
      {students.map((student, index) => (
        <div key={index}>
          <h3>{student.name}</h3>
          <p>Performance: {student.performance}</p>
        </div>
      ))}
    </div>
  );
};

export default Team;
