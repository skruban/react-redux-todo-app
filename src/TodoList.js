require('./TodoList.css');
const React = require('react');
const AddTodo = require('./AddTodo');
const TodoItem = require('./TodoItem');
const { connect } = require('react-redux');

let handleTimeOut = null;
const ERROR_TIMEOUT = 10000;

function TodoList ({ title }) {
  const [todoList, addTodo] = React.useState([]);
  const [error, updateError] = React.useState({ show: false, message: null });

  const updateErrorHandler = (message) => {
    updateError({
      show: true,
      message
    });
    
    return setTimeout(() => updateError({ show: false, message: '' }), ERROR_TIMEOUT);
  };

  const handleSubmit = (name) => {
    if (handleTimeOut) {
      clearTimeout(handleTimeOut);
      handleTimeOut = null;
    }

    if (name.trim().length < 3) {
      handleTimeOut = updateErrorHandler('Task name should have atleast three characters.');
      return false;
    }

    if (error.show) {
      updateError({ show: false, message: '' });
    }

    addTodo([
      ...todoList,
      {
        isCompleted: false,
        name,
        id: `task-${todoList.length * name.length}`
      }
    ]);

    return true;
  };

  const handleTaskDelete = (taskId) => {
    addTodo(todoList.filter(({ id }) => {
      return id !== taskId;
    }));
  };

  return (
    <div className="todo-list">
      <h3 className="todo-title">{title}</h3>
      {error.show && (
        <div className="error-message">
          {error.message}       
        </div>
      )}
      <AddTodo handleSubmit={handleSubmit} />
      {todoList.map((item) => {
        return <TodoItem key={item.id} item={item} handleTaskDelete={handleTaskDelete} />
      })}
    </div>
  )
}


const EnahncedTodoList = connect(
  (state, ownProps) => ({
    title: state.title
  }),
  () => {}
)(TodoList);

module.exports = EnahncedTodoList;
