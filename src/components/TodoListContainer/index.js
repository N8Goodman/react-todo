import React, { Component } from 'react';
import TodoList from '../TodoList';
import TodoInput from '../TodoInput';

class TodoContainer extends Component {
  state = {
    items: ['first todo item'],
    term: ''
  }

  updateInput = (event) => {
    this.setState({term: event.target.value});
  }

  addItem = () => {
    this.state.term !== '' && this.setState({
      items: [...this.state.items, this.state.term],
      term: ''
    })
  }

  render = () => (
    <div className="todoContainer">
      <TodoInput item={this.state.term} addItem={this.addItem} updateInput={this.updateInput} />
      <TodoList todoItems={this.state.items} />
    </div>
  )
}

export default TodoContainer;
