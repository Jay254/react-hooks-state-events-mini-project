import React from "react";
import Task from "./Task";

function TaskList({tasks, handleClick}) {
  // const [updatedTasks, setUpdatedTasks] = useState(tasks);
  // console.log(updatedTasks)

  // function handleClick(taskToDelete) {
  //  const newTasks = updatedTasks.filter(task => (task !== taskToDelete));
  //  setUpdatedTasks(newTasks);
  // }
  return (
    <div className="tasks">
      {/* display a list of tasks using Task component */}
      {tasks.map((task, index) => (<Task key={index} task={task} text={task.text} category={task.category} handleClick={handleClick}/>))}
    </div>
  );
}

export default TaskList;
