const initialState = {
  items: [],
  terms: ''
}

const toggleTodo = (todos, id) => 
  todos.map(t => (t.id !== id ? t : { ...t, completed: !t.completed }));

const todos = (state = initialState, { type, payload }) => {
  switch (type) {
    case 'GET_ALL_TODOS_SUCCESS':
      return { items: [...state.items, ...payload ], terms: state.terms };
    case 'TOGGLE_ITEM':
      return { items: toggleTodo(state.items, payload), terms: state.terms };
    default:
      return state;
  }
};

export default todos;