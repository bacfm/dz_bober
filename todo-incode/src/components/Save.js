import React, { Component } from 'react';

export default class Save extends Component {
    render(){
        const { onSaveClick, id, title, desc, onToggle } = this.props;
        const onClick = function(ev){
            ev.preventDefault();
            onSaveClick(id, title, desc);
        }
            return (<button onClick={onClick}>Save</button>)
    }
}