// import React, { Component } from "react";
// import Form from "./Form";
// import List from "./List";

// class App extends Component {
//   state = {
//     todos: []
//   };

//   handleSubmit = todo => {
//     this.setState({ todos: [...this.state.todos, todo] });
//   };

//   removeTodos = index => {
//     const todos = this.state.todos;
//     const filteredTodos = todos.filter((todo, i) => {
//       return i !== index;
//     });
//     this.setState({
//       todos: [...filteredTodos]
//     });
//   };

//   toggleTodos = id => {
//     const todosObj = [...this.state.todos];
//     todosObj[id].isCompleted = !todosObj[id].isCompleted;
//     this.setState({
//       todos: todosObj
//     });
//   };

//   toggleEditable = id => {
//     const todosObj = [...this.state.todos];
//     todosObj[id].isEditable = !todosObj[id].isEditable;
//     this.setState({
//       todos: todosObj
//     });
//   };

//   editTodo = (id, caption) => {
//     const todosObj = [...this.state.todos];
//     todosObj[id].caption = caption;
//     todosObj[id].isCompleted = false;
//     todosObj[id].isEditable = false;
//     this.setState({
//       todos: todosObj
//     });
//   };

//   render() {
//     return (
//       <div className="container">
//         <h1>ToDo App</h1>
//         <Form handleSubmit={this.handleSubmit} />
//         <List
//           todos={this.state.todos}
//           removeTodos={this.removeTodos}
//           toggleTodos={this.toggleTodos}
//           toggleEditable={this.toggleEditable}
//           editTodo={this.editTodo}
//         />
//       </div>
//     );
//   }
// }

// export default App;


import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { exampleAction } from '../actions/actions';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        return (
            <div>
                <h1>Hello Aryan, This is React Redux</h1>
                <p>Here is our property: {this.props.examplePropsOne} + {this.props.examplePropsTwo}</p>
                {/* <p>{console.log(this.props.examplePropsOne)}</p> */}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    console.log("Hello");
    const { examplePropsOne, examplePropsTwo } = state
    console.log({ examplePropsOne, examplePropsTwo });
    return{
        examplePropsOne,
        examplePropsTwo
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ exampleAction }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(App);