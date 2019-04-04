const initialState = {
  items: [],
  terms: ''
}

const todos = (state = initialState, { type, payload }) => {
  switch (type) {
    case 'GET_ALL_TODOS_SUCCESS':
      return { items: [...state.items, ...payload ], terms: state.terms };
    default:
      return state;
  }
};

export default todos;