import React, { useState } from "react";
import { connect } from "react-redux";
import {
  addTodo,
  toggleTodo,
  removeTodo,
  toddleEdit,
  editTodo
} from "../actions/actions";

const TableHead = () => {
  return (
    <thead>
      <tr>
        <th>isCompleted</th>
        <th>Caption</th>
        <th>Remove</th>
      </tr>
    </thead>
  );
};

const RenderText = props => {
  var [changedText, updateChangeText] = useState(props.row.caption);

  const onSubmit = event => {
    event.preventDefault();
    if (changedText !== "") props.editTodo(props.index, changedText);
  };

  const onChange = event => {
    const { value } = event.target;
    updateChangeText(value);
  };

  if (props.row.isEditable) {
    return (
      <form onSubmit={onSubmit}>
        <input type="text" onChange={onChange} value={changedText} />
      </form>
    );
  } else {
    return (
      <div className={props.row.isCompleted ? "line-through" : ""}>
        {props.row.caption}
      </div>
    );
  }
};

const TableBody = props => {
  return (
    <tbody>
      {props.todos.map((row, index) => {
        return (
          <tr key={index}>
            <td>
              <input
                type="checkbox"
                onChange={() => {
                  if (!row.isEditable) props.toggleTodo(index);
                }}
                checked={row.isCompleted}
              />
            </td>
            <td
              onDoubleClick={() => {
                if (!row.isCompleted && !row.isEditable) {
                  props.toddleEdit(index);
                }
              }}
            >
              <div
                className={
                  row.isCompleted && !row.isEditable ? "line-through" : ""
                }
              >
                <RenderText row={row} editTodo={props.editTodo} index={index} />
              </div>
            </td>
            <td>
              <button onClick={() => props.removeTodo(index)}>Delete</button>
            </td>
          </tr>
        );
      })}
    </tbody>
  );
};

class List extends React.Component {
  render() {
    return (
      <table>
        <TableHead />
        <TableBody
          todos={this.props.todos}
          toggleTodo={this.props.toggleTodo}
          removeTodo={this.props.removeTodo}
          toddleEdit={this.props.toddleEdit}
          editTodo={this.props.editTodo}
        />
      </table>
    );
  }
}

const mapStateToProps = state => {
  const todos = state;
  return { todos };
};

const mapDispatchToProps = dispatch => {
  return {
    addTodo: todoName => dispatch(addTodo(todoName)),
    toggleTodo: todoIndex => dispatch(toggleTodo(todoIndex)),
    removeTodo: todoIndex => dispatch(removeTodo(todoIndex)),
    toddleEdit: toddleIndex => dispatch(toddleEdit(toddleIndex)),
    editTodo: (todoIndex, todoCaption) =>
      dispatch(editTodo(todoIndex, todoCaption))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(List);
