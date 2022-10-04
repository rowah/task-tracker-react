import Task from "./Task";
//rac

const Tasks = ({ tasks }) => {
  //makes the array part of our component
  //array tasks will be accessed from other components and should not be in the Tasks component so we put it in our app js as global state and pass it down as we want
  return (
    <>
      {tasks.map((task) => (
        <Task
          key={task.id}
          task={task}
          style={{ color: "black", marginLeft: "1em" }}
        />
      ))}
    </>
  );
};

export default Tasks;
