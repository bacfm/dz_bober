import React, { Component } from 'react';
import './style.css';
import { connect } from 'react-redux';
import { addUser } from '../../actions/registerForm';
import { Link } from 'react-router-dom';


class SingUp extends Component {
	constructor(props) {
		super(props);
		this.state = {
			name: '',
			password: ''
		}
		this.onNameChange = this.onNameChange.bind(this);
		this.onPasswordChange = this.onPasswordChange.bind(this);
		this.onSingUpClick = this.onSingUpClick.bind(this);
		this.onClear = this.onClear.bind(this);
	}
	onNameChange(e){
		this.setState({
			name: e.target.value
		});
	}
	onPasswordChange(e){
		this.setState({
			password: e.target.value
		});
	}
	onClear(){
		this.setState({
			name: '',
			password: ''
		});
	}
	onSingUpClick(e){
		const { name, password } = this.state;
		const { createUser } = this.props;
		fetch("/signup",
		{
			headers: {
			  'Accept': 'application/json',
			  'Content-Type': 'application/json'
			},
			method: "POST",
			body: {username: name, password: password}
		})
		.then(function(res){ console.log(res) })
		.catch(function(res){ console.log(res) })
		createUser(name, password);
		this.onClear();
	}
	render() {
		return (
			<div className="RegisterForm">
			<form>
			<div>
			<label>Login</label>
			<input type="text" onChange={this.onNameChange} value={this.state.name} required />
			</div>
			<div>
			<label>Password</label>
			<input type="text" onChange={this.onPasswordChange} value={this.state.password} required />
			</div>
			<div>
			<button onClick={this.onSingUpClick}>Sing up</button>
			<button><Link to="/login">Sing in</Link></button>
			</div>
			</form>
			</div>
			); 
	}
};

const mapDispatch = (dispatch) => {
	return {
		createUser: (name, password) => {
			dispatch(addUser(name, password));
		}
	}
}

export default connect(null, mapDispatch)(SingUp);