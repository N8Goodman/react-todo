import React from 'react';
import TodoItem from '../TodoItem';

const TodoList = ({ todoItems, toggleItem }) => (
  <ul>
    {todoItems && todoItems.map((item) =>
      <TodoItem 
        key={item.id}
        item={item}
        toggleItem={toggleItem}
      />
    )}
  </ul>
)

export default TodoList;