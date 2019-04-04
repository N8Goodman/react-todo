import React from 'react';

const TodoItem = ({ item }) => (
  <li>
    <input type="checkbox" checked={item.completed} />
    {item.title}
  </li>
)

export default TodoItem;