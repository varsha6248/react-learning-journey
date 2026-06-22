import React, { useState } from "react";

function HabitTrack(props) {
  const [completed, setCompleted] = useState(props.completed);

  return (
    <div className="card">
      <h2>{props.habit}</h2>

      <p>
        <span
          style={{
            color: completed ? "green" : "red",
            fontWeight: "bold"
          }}
        >
          Status: {completed ? "Completed" : "Pending"}
        </span>
      </p>

      <p>Time Period: {props.time}</p>

      {!completed && (
        <button onClick={() => setCompleted(true)}>
          Complete
        </button>
      )}
    </div>
  );
}

export default HabitTrack;