import React from 'react';

const TodoItem = ({ item }) => (
  <li>
    <input type="checkbox" />
    {item}
  </li>
)

export default TodoItem;