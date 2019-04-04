import React from 'react';

const TodoInput = ({ item, addItem, updateInput }) => (
  <div>
    <input className='itemInput' value={item} onChange={updateInput}/>
    <button onClick={addItem}>Add</button>
  </div>
)

export default TodoInput;