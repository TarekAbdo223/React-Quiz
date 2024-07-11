import React from "react";

const Progress = ({ index, points, questions, maxPoints, answer }) => {
  return (
    <header className="progress">
      <progress
        max={questions.length}
        value={index + Number(answer !== null)}
      />
      <p>
        Question <strong>{index + 1}</strong> / {questions.length}
      </p>
      <p>
        <strong>{points}</strong> / {maxPoints}
      </p>
    </header>
  );
};

export default Progress;
