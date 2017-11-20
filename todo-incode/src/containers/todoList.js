import React, { Component } from 'react';
import { connect } from 'react-redux';
import Todo from "../components/todo";
import { fetchTodos } from "../actions";
class TodoList extends Component {
    componentDidMount(){
        this.props.getTodos();
    }
    render () {
        const { todos } = this.props;
        const todosList = todos.map(function(todo) {
            return (<Todo title={todo.title} description={todo.description} id={todo.id} />);
        });
        return (
            <div className = 'todo-list'>
                {todosList}
            </div>
        );
    }
}

const mapState = (state) => {
    return {
        todos: state.todo,
    }
} 

const mapDispatch = (dispatch) => {
    return {
        getTodos: () => dispatch(fetchTodos())
    }
}

export default connect (mapState, mapDispatch)(TodoList);