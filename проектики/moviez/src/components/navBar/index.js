import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './style.css';


export default class Menu extends Component {
    render(){
        return (
            <nav className="nav-bar">
                <ul>
                    <li><Link to='/login'>Login</Link></li>
                    <li><Link to='/signup'>Signup</Link></li>
                    <li><Link to='/add-movie'>New movie</Link></li>
                </ul>
            </nav>
        );
    }
}