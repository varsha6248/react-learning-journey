import React from 'react';
import './App.css';
import HabitTrack from './HabitTrack';
function App(){
  const habits=[
    {
      id:1,
      habit:"DSA practice",
      completed:true,
      time:"1 hour"
    },
    {
      id:2,
      habit:"React Learning",
      completed:true,
      time:"2 hour"
    },
    {
      id:3,
      habit:"Aptitude",
      completed:false,
      time:"1 hour"
    },
    {
      id:4,
      habit:"Mock Interview",
      completed:true,
      time:"1 hour"
    }
  ];
  return(
    <div className="container">
      <h1>Daily Habit Tracker</h1>
      <h3>My Placement Preparation Habits</h3>
      {
        habits.map((habit)=>(
          <HabitTrack key={habit.id} habit={habit.habit} completed={habit.completed} time={habit.time}/>
        ))
      }
    </div>
  );
}
export default App;
