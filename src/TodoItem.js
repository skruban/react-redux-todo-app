require('./TodoItem.css');
const React = require('react');
const { returnValidCSSClass } = require('./utils');

function TodoItem ({ item, handleTaskDelete }) {
  const [isTaskCompleted, updateTaskStatus] = React.useState(item.isCompleted);
  const taskCompletedStyle = returnValidCSSClass(isTaskCompleted, 'is-completed');
  const handleTaskStatusUpdate = () => updateTaskStatus(!isTaskCompleted);

  return (
    <div className={`todo-item ${item.id}`}>
      <input type="checkbox" checked={isTaskCompleted} onChange={handleTaskStatusUpdate} className="field-task-status" />
      <span className={`task-name ${taskCompletedStyle}`}>{item.name}</span>
      <button className="button-delete-task" onClick={() => handleTaskDelete(item.id)}>delete</button>
    </div>
  );
}

module.exports = TodoItem; 
