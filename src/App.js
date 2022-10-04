//use state inside of a function
import { useState } from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
const App = () => {
  //state is now at the top level
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
    <div className="container">
      <Header />
      <Tasks tasks={tasks} />
    </div>
  );
};

export default App;
