const React = require('react');
const ReactDOM = require('react-dom');

const rootElement = require('./rootElement');
const TodoList = require('./TodoList');

ReactDOM.render(<TodoList />, rootElement());
