import React from "react";

function Task({task, text, category, handleClick}) {
  //console.log(task.category)
  return (
    <div className="task">
      <div className="label">{text}</div>
      <div className="text">{category}</div>
      <button className="delete" onClick={() => handleClick(task)}>X</button>
    </div>
  );
}

export default Task;
