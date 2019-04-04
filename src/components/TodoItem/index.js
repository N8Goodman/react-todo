import React from 'react';

const TodoItem = ({ item, toggleItem }) => (
  <li>
    <input type="checkbox" checked={item.completed} onChange={() => toggleItem(item.id)} />
    {item.title}
  </li>
)

export default TodoItem;