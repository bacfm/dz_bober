import React, { Component } from 'react';
import Main from '../components/main';
import RegForm from '../components/regForm';



export default class IsAuth extends Component {
    render(){
        if(localStorage.getItem('token')){
            return (<Main />);
        } else {
            return (<RegForm />);
        }
    }
}