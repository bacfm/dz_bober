import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './style.css';


export default class Header extends Component {
    render () {
        return (
            <header>
                <h1 className="logo-f"> NOT a</h1>
                <img src='./img/logo.png' />
                <h1 className="logo-s"><Link to='/'>Mooooooviez</Link></h1>
            </header>
        );
    }
}