import React, { Component } from 'react';

export default class TodoDesc extends Component {
    render(){
        const { isEdit, desc, onChange } = this.props;
        const onDescChange = ev => onChange(ev.target.value);
        if(isEdit) {
            return (<input type="text" value={desc} onChange={onDescChange} />)
        }
        return (<p>{desc}</p>)
    }
}