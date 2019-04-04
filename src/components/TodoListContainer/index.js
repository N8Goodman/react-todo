import React, { Component } from 'react';
import TodoList from '../TodoList';
import { getTodos } from '../../reducers/todos/actions';
import { connect } from 'react-redux';

class TodoContainer extends Component {
  componentDidMount() {
    this.props.getTodos();
  }

  render = () => {
    return <div className="todoContainer">
      <TodoList todoItems={this.props.items} />
    </div>
  }
}

const mapStateToProps = state => ({
    items: state.todos.items
})

const mapDispatchToProps = {
  getTodos: () => getTodos()
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoContainer);
   
