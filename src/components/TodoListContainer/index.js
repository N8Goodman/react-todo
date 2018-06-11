import React, { Component } from 'react';
import TodoList from '../TodoList';
import TodoInput from '../TodoInput';

class TodoContainer extends Component {
  state = {
    items: ['first todo item'],
    term: ''
  }

  render = () => (
    <div className="todoContainer">
    </div>
  )
}

export default TodoContainer;
