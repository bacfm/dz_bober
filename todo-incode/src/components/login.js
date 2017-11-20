import React, { Component } from 'react';
import { getToken } from '../actions';


class LogIn extends Component {
    constructor(props){
        super(props);
        this.state = {
            email: '',
            password: ''
        }
        this.onEmailChange = this.onEmailChange.bind(this);
        this.onPasswordChange = this.onPasswordChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }
    onEmailChange(ev){
        this.setState({
            email: ev.target.value
        })
    }
    onPasswordChange(ev){
        this.setState({
            password: ev.target.value
        })
    }
    onSubmit(ev){
        ev.preventDefault();
        const { email, password } = this.state;
        const { onGetToken } = this.props;
        console.log(onGetToken);
        fetch("http://localhost:8888/login", {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-type': 'application/json'
            },
            body: JSON.stringify({ email, password })
        })
        .then((res) => res.json())
        .then(function(res){
            localStorage.setItem('token', res.token)
        })
        this.setState({
            email: '',
            password: ''
        })
    }
    render(){
        return(
            <form onSubmit={this.onSubmit}>
                <label>Email</label>
                <input type="text" name="email" value={this.state.email} onChange={this.onEmailChange} required/>
                <label>Password</label>
                <input type="password" name="password" value={this.state.password} onChange={this.onPasswordChange} required/>
                <button>LogIn</button>
            </form>
        );
    }
}



export default LogIn;