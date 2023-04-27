import React, {useState} from "react";
import CategoryFilter from "./CategoryFilter";
 import NewTaskForm from "./NewTaskForm";
 import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
// console.log("Here's the data you're working with");
// console.log({ CATEGORIES, TASKS });

function App() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [updatedTasks, setUpdatedTasks] = useState(TASKS);

  const handleDeleteClick = (taskToDelete) => {
    const newTasks = updatedTasks.filter(task => (task !== taskToDelete));
     setUpdatedTasks(newTasks);
  }

  const handleNewTaskUpdate = (newTask) => {
    setUpdatedTasks([...updatedTasks, newTask]);
  };

  const handleCategoryChange = (category) =>{
    setSelectedCategory(category);
  };
  //console.log(updatedTasks)

  const filteredTasks =
    selectedCategory === "All"
      ? updatedTasks
      : updatedTasks.filter((task) => task.category === selectedCategory);

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} onCategoryChange={handleCategoryChange}/>
      <NewTaskForm categories={CATEGORIES} onTaskFormSubmit={handleNewTaskUpdate}/>
      <TaskList tasks={filteredTasks} handleClick={handleDeleteClick}/>
    </div>
  );
}

export default App;
