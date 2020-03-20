const initialState = {
  title: 'React Redux Todo App',
  tasks: [
    {
      isCompleted: false,
      name: 'read c program',
      id: 'task-1'
    },
    {
      isCompleted: true,
      name: 'read bfeg-211',
      id: 'task-2'
    }
  ]
};

export default (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
