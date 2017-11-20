import React, { Component } from 'react';
import TodoTitle from './todoTitle';
import TodoDesc from './todoDesc';
import Controlls from './controllsTodo';
import { connect } from 'react-redux';

class Todo extends Component {
    constructor(props){
        super(props);
        this.state = {
            editableTitle: this.props.title,
            editableDescription: this.props.description,
            toggleEditMode: false
        }
       this.onDelete = this.onDelete.bind(this);
       this.onEdit = this.onEdit.bind(this);
       this.onTitleChange = this.onTitleChange.bind(this);
       this.onDescChange = this.onDescChange.bind(this);
    }
    onDelete(ev){
        ev.preventDefault();
        const { id } = this.props;
        fetch('http://localhost:8888/todo', {
            method: "DELETE",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ id })
        });
    }
    onEdit(ev){
        ev.preventDefault();
        this.setState({
            toggleEditMode: !this.state.toggleEditMode
        })
    }
    onSave(id, title, description){
        fetch('http://localhost:8888/todo', {
            method: "PUT",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ id, title, description })
        });
    }
    onTitleChange(title){
        this.setState({
            editableTitle: title
        })
    }
    onDescChange(desc){
        this.setState({
            editableDescription: desc
        })
    }
    render(){
        const { toggleEditMode, editableTitle, editableDescription } = this.state;
        const { id } = this.props;
        return (
            <div className = 'todo'>
            <div className="controlls">
                <TodoTitle isEdit={toggleEditMode} title={editableTitle} onChange={this.onTitleChange}/>
                <div className="controlls-btns">
                <Controlls isEdit={toggleEditMode} onEdit={this.onEdit} onToggle={this.onToggleChange} onSave={this.onSave} id={id} title={editableTitle} desc={editableDescription} />
                <button className="delete" onClick={this.onDelete}>delete</button>
                </div>
            </div>
                <TodoDesc isEdit={toggleEditMode} desc={editableDescription} onChange={this.onDescChange}/>
            </div>
        );
    }
}

const mapState = (state, ownProps) => {
    return {
        id: ownProps.id
    }
}
export default connect (mapState)(Todo);
