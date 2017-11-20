import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class SignUp extends Component{
    constructor(props){
        super(props);
        this.state = {
            displayname: '',
            email: '',
            password: ''
        }
        this.onNameChange = this.onNameChange.bind(this);
        this.onEmailChange = this.onEmailChange.bind(this);
        this.onPasswordChange = this.onPasswordChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }
    onNameChange(ev){
        ev.preventDefault();
        this.setState({
            displayname: ev.target.value
        })
    }
    onEmailChange(ev){
        ev.preventDefault();
        this.setState({
            email: ev.target.value
        })
    }
    onPasswordChange(ev){
        ev.preventDefault();
        this.setState({
            password: ev.target.value
        })
    }
    onSubmit(e){
        e.preventDefault(); 
        const { displayname, email, password } = this.state;
        fetch("http://localhost:8888/signup", {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ displayname, email, password })
        });
        this.setState({
            displayname: '',
            email: '',
            password: ''
        })
    }
    render(){
        return (
            <form onSubmit={this.onSubmit}>
                <label>Name</label>
                <input onChange={this.onNameChange} type="text" name="displayname" value={this.state.displayname} required/>
                <label>Email</label>
                <input onChange={this.onEmailChange} type="text" name="email" value={this.state.email} required/>
                <label>Password</label>
                <input onChange={this.onPasswordChange} type="password" name="password" value={this.state.password} required/>
                <button>Sign Up</button>
            </form>
        );
    }
}

export default SignUp;