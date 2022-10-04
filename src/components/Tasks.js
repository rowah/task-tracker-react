//use state inside of a function
import { useState } from "react";
//rac

const Tasks = () => {
  //makes the array part of our component
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Visit barbershop",
      day: "Oct 5th at 1600HRS",
      reminder: true,
    },
    {
      id: 2,
      text: "Gym members meetup",
      day: "Oct 8th at 0800HRS",
      reminder: true,
    },
    {
      id: 3,
      text: "Morning Run",
      day: "Oct 9th at 0540HRS",
      reminder: false,
    },
  ]);
  return (
    <>
      {tasks.map((task) => (
        <h3 key={task.id} style={{ color: "black", marginLeft: "1em" }}>
          {task.text}
        </h3>
      ))}
    </>
  );
};

export default Tasks;
