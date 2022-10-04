//rac

const Tasks = ({ tasks }) => {
  //makes the array part of our component
  //array tasks will be accessed from other components and should not be in the Tasks component so we put it in our app js as global state and pass it down as we want
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
