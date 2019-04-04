import React, { Component } from 'react';
import TodoList from '../TodoList';
import { getTodos, toggleItem } from '../../reducers/todos/actions';
import { connect } from 'react-redux';

class TodoContainer extends Component {
  componentDidMount() {
    this.props.getTodos();
  }

  render = () => {
    return <div className="todoContainer">
      <TodoList todoItems={this.props.items} toggleItem={this.props.toggleItem} />
    </div>
  }
}

const mapStateToProps = state => ({
  items: state.todos.items
})

export default connect(
  mapStateToProps,
  { getTodos, toggleItem }
)(TodoContainer);
   
