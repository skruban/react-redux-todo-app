require('./AddTodo.css');
const React = require('react');

function AddTodo ({ handleSubmit }) {
  const [taskName, addTaskName] = React.useState('');
  const handleChange = ({ target: { value } }) => {
    addTaskName(value);
  };

  const handleClick = () => {
    if (handleSubmit(taskName)) {
      addTaskName('');
    }
  };

  return (
    <div className="add-todo">
      <input type="text" value={taskName} onChange={handleChange} className="field-task-name" />
      <button onClick={handleClick} className="button-add-task">Add Task</button>
    </div>
  );
}

module.exports = AddTodo;
