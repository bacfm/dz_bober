import React, { Component } from 'react';

export default class TodoTitle extends Component {
    render(){
        const { isEdit, title, onChange } = this.props;
        const onTitleChange = ev => onChange(ev.target.value);
        if(isEdit) {
            return (<input type="text" value={title} onChange={onTitleChange} />)
        }
        return (<h3>{title}</h3>)
    }
}