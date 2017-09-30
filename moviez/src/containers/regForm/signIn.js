import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './style.css';

export class SignIn extends Component {
    constructor(props){
        super(props);
        this.state = {
            log: 'Enter your login',
            pass: ''
        }
        this.onLogChange = this.onLogChange.bind(this);
        this.onPassChange = this.onPassChange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }
    onLogChange(e){
        e.preventDefault();
        this.setState({
            log: e.target.value
        });
    }
    onPassChange(e){
        e.preventDefault();
        this.setState({
            pass: e.target.value
        });
    }
    onFormSubmit(e){
        const { log, pass } = this.state;
        fetch('/login', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-type': 'application/json'
            },
            body: JSON.stringify({ username: log, password: pass })
        })
        .then((res) => res.json())
        .then((res) => console.log(res))
        .catch((err) => console.log(err));
    }
    render(){
        const { log, pass } = this.state;
        return (
            <div className='register'>
                <form action='/login' method='post' onSubmit={this.onFormSubmit}>
                  <div>
                      <label>Login</label>
                      <input onChange={this.onLogChange} type='text' value={log} placeholder='Enter your login' required />
                  </div>
                  <div>
                      <label>Password</label>
                      <input onChange={this.onPassChange} type='password' value={pass} placeholder='Enter your password' required />
                  </div>
                    <div className='reg-btns'>
                        <button>SignIn</button>
                        <button><Link to='/signup'>SignUp</Link></button>
                    </div>
                </form>
            </div>
        );
    }
}