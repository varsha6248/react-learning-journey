import React from 'react';
function HabitTrack(props){
    return(
        <div className="card">
            <h2>{props.habit}</h2>

            <p>
                <span style={{color:props.completed?"green":"red",fontweight:"bold",marginLeft:"5px"}}>
                Status:
                {
                    props.completed ? "Completed":"Pending"
                }
                </span>
            </p>

            <p>
                Time:{props.time}
            </p>
        </div>
    );
}

export default HabitTrack;