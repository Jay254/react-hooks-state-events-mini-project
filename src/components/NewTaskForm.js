import React, {useState} from "react";

function NewTaskForm({categories, onTaskFormSubmit}) {
  const [taskForm, setTaskForm] = useState({
    text: '',
    category: 'Code',
  });

  function handleChange(event) {
    //console.log(event.target.name);
    //console.log(event.target.value);
    setTaskForm({...taskForm, [event.target.name]: event.target.value});
    //console.log(taskForm);

  }
  function handleSubmit(e) {
    e.preventDefault();
    //console.log(taskForm);
    onTaskFormSubmit(taskForm);
  }

  return (
    <form className="new-task-form" onChange={handleChange} onSubmit={handleSubmit}>
      <label>
        Details
        <input type="text" name="text" />
      </label>
      <label>
        Category
        <select name="category">
          {/* render <option> elements for each category here */}
          {categories.map( (category) => {
            return (category === 'All' ? null : <option key={category}>{category}</option>);
          })}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
