import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import TodoList from '../containers/todoList'
import AddTodo from './addTodo';




export default class Main extends Component {
    render(){
        // if(window.location.pathname === "/login" || "/signup"){
        //     return (<Route to="/"  component={TodoList}/>)
        // }else{
            return (
                <div>
                <Route exact path = "/" component={TodoList} />
                <Route path="/add-todo" component={AddTodo} />
                </div>
            );
        }
        
    }