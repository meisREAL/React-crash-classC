import React, { Component } from "react";
import ToDoItem from "./ToDoItem";
import PropTypes from 'prop-types'

class ToDos extends Component {
    render() {
        return this.props.todos.map((todo) => (
            <ToDoItem key={todo.id} todo={todo} />
        ));
    }
}

//* PropTypes
ToDos.propTypes = {
    todos: PropTypes.array.isRequired
}

export default ToDos