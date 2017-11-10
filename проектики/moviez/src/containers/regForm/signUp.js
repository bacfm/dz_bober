import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './style.css'


export class SignUp extends Component {
    constructor(props){
        super(props);
        this.state = {
            log: 'Enter your log',
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
                <form action='/signup' method='post' onSubmit={this.onFormSubmit}>
                    <div>
                        <label>Login</label>
                        <input onChange={this.onLogChange} type='text' value={log} placeholder='Enter your login' required />
                    </div>
                    <div>
                        <label>Password</label>
                        <input onChange={this.onPassChange} type='password' value={pass} placeholder='Enter your password' required />
                    </div>
                    <div className='reg-btns'>
                        <button>SignUp</button>
                        <button><Link to='/login'>SignIn</Link></button>
                    </div>
                </form>
            </div>
        );
    }
}