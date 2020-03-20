const React = require('react');
const ReactDOM = require('react-dom');
const { createStore } = require('redux');
const { Provider } = require('react-redux');

const rootElement = require('./rootElement');
const TodoList = require('./TodoList');
const reducer = require('./reducer').default;

const store = createStore(reducer);

ReactDOM.render(
  <Provider store={store}>
    <TodoList />
  </Provider>,
  rootElement()
);
