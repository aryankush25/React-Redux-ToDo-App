export const addTodo = caption => ({
  type: "ADD_TODO",
  caption
});

export const toggleTodo = index => ({
  type: "TOGGLE_TODO",
  index
});

export const removeTodo = index => ({
  type: "REMOVE_TODO",
  index
});

export const toddleEdit = index => ({
  type: "TOGGLE_EDIT",
  index
});

export const editTodo = (index, caption) => ({
  type: "EDIT_TODO",
  index,
  caption
});
