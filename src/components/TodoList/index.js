import React from 'react';
import TodoItem from '../TodoItem';

const TodoList = ({ todoItems }) => (
  <ul>
    {todoItems && todoItems.map((item) =>
      <TodoItem key={item.id} item={item} />
    )}
  </ul>
)

export default TodoList;