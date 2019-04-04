import React from 'react';
import TodoItem from '../TodoItem';

const TodoList = ({ todoItems }) => (
  <ul>
    {todoItems && todoItems.map((item, index) =>
      <TodoItem key={index} item={item} />
    )}
  </ul>
)

export default TodoList;