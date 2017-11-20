import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchTodos } from '../actions';

class AddTodo extends Component {
    constructor(props){
        super(props);
        this.state = {
            title: '',
            description: ''
        }
        this.onTitleChange = this.onTitleChange.bind(this);
        this.onDescChange = this.onDescChange.bind(this);
        this.onClick = this.onClick.bind(this);
        this.onClear = this.onClear.bind(this);
    }
    onTitleChange(ev){
        ev.preventDefault();
        this.setState({
            title: ev.target.value
        })
    }
    onDescChange(ev){
        ev.preventDefault();
        this.setState({
            description: ev.target.value
        })
    }
    onClear(){
        this.setState({
            title: '',
            description: ''
        })
    }
    onClick(ev){
        ev.preventDefault();
        const { title, description } = this.state;
        fetch("http://localhost:8888/todo", {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ title, description })
        });
        this.props.onUpdate();
        this.onClear();
    }
    render(){
        const { title, description } = this.state;
        console.log(title, description);
        return (
            <div className="add-todo">
                <div className="add-title">
                    <h4>Title</h4>
                    <input type="text" onChange={this.onTitleChange}/>
                </div>
                <div className="add-desc">
                    <h4>Add description</h4>
                    <textarea onChange={this.onDescChange}></textarea>
                </div>
                <button onClick={this.onClick}><Link to = "/">Add new todo</Link></button>
            </div>
        );
    }
}

const mapDispatch = (dispatch) => {
    return {
      onUpdate: () => {
          dispatch(fetchTodos());
      }
    }
}

export default connect(null, mapDispatch)(AddTodo);

