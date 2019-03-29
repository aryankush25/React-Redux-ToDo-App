let defaultState = [];

const todos = (state = defaultState, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return [
        ...state,
        {
          caption: action.caption,
          isCompleted: false,
          isEditable: false
        }
      ];
    case "TOGGLE_TODO":
      return state.map((todo, i) =>
        i === action.index
          ? {
              ...todo,
              isCompleted: !todo.isCompleted
            }
          : todo
      );
    case "REMOVE_TODO":
      return state.filter((todo, i) => {
        return i !== action.index;
      });
    case "TOGGLE_EDIT":
      return state.map((todo, i) =>
        i === action.index
          ? {
              ...todo,
              isEditable: !todo.isEditable
            }
          : todo
      );
    case "EDIT_TODO":
      return state.map((todo, i) =>
        i === action.index
          ? {
              ...todo,
              caption: action.caption,
              isEditable: !todo.isEditable
            }
          : todo
      );
    default:
      return state;
  }
};

export default todos;
