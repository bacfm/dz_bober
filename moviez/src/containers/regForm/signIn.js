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
    render(){
        const { log, pass } = this.state;
        return (
            <div className='register'>
                <form action='/login' method='post'>
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