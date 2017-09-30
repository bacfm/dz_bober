import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './style.css';


export default class Header extends Component {
    render () {
        return (
            <header>
                <h2> <Link to='/'> Mooooooviez <Link ></h2>
            </header>
        );
    }
}