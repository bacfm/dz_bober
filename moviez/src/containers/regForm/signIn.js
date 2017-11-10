import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './style.css';

export class SignIn extends Component {
    constructor(props){
        super(props);
        this.state = {
            log: ' ',
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
        e.preventDefault();        
        const { log, pass } = this.state;
        fetch('/signup', {
            method: 'POST',
            credentials: 'include',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ username: log, password: pass })
        })
        .catch((err) => console.log(err));
    }
    render(){
        const { log, pass } = this.state;
        return (
            <div className='register'>
                <form action='/login' method='post' onSubmit={this.onFormSubmit}>
                  <div>
                      <label>Login</label>
                      <input onChange={this.onLogChange} type='text' name='username' placeholder='Enter your login' required />
                  </div>
                  <div>
                      <label>Password</label>
                      <input onChange={this.onPassChange} type='password' name='password' placeholder='Enter your password' required />
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