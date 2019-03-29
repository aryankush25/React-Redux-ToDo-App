import React from "react";
import { connect } from "react-redux";
import { addTodo } from "../actions/actions";

class Form extends React.Component {
  constructor(props) {
    super(props);

    this.initialState = {
      caption: ""
    };
    this.state = this.initialState;
  }

  handleSubmit = event => {
    event.preventDefault();
    if (this.state.caption !== "") {
      this.props.addTodo(this.state.caption);
    }
    this.setState(this.initialState);
  };

  handleChange = event => {
    const { value: caption } = event.target;

    this.setState({
      caption
    });
  };

  showState = () => {
    console.log(this.props.todos);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          placeholder="Enter Text"
          onChange={this.handleChange}
          value={this.state.caption}
        />
      </form>
    );
  }
}

const mapStateToProps = state => {
  const todos = state;
  return { todos };
};

const mapDispatchToProps = dispatch => {
  return {
    addTodo: todoName => dispatch(addTodo(todoName))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Form);
