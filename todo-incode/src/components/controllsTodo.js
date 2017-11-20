import React, { Component } from 'react';
import Edit from './Edit';
import Save from './Save';


export default class Controlls extends Component {
    render(){
        const { onEdit, onSave, id, title, desc } = this.props;
        const { isEdit } = this.props;
        if(isEdit){
            return (<Save onSaveClick={onSave} id={id} title={title} desc={desc} />)
        } else { return (<Edit onEditClick={onEdit}/>)}
    }
}