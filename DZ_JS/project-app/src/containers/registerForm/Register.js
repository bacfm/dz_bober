import React, { Component } from 'react';
import './style.css';
import { connect } from 'react-redux';
import { addUser } from '../../actions/registerForm';
import { Link } from 'react-router-dom';
 

class RegisterForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			name: '',
			password: '',
			isAuthorized: false
		}
		this.onNameChange = this.onNameChange.bind(this);
		this.onPasswordChange = this.onPasswordChange.bind(this);
		this.onClear = this.onClear.bind(this);
		this.logIn = this.logIn.bind(this);
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
	logIn(){
			const { users } = this.props;
			const { name, password, isAuthorized } = this.state;
			users.find(function(user){
			if(user.name === name && user.password === password){
				return this.setState({
					isAuthorized: true
				});
			} else {
				return this.setState({
					isAuthorized: false
				});
			}
		});
	}
	render() {
		const { isAuthorized } = this.state;
		console.log(isAuthorized);
		const btn = isAuthorized ? <button><Link to="/logo">Sing in</Link></button> : <button><Link to="/">Sing in</Link></button>;
		return (
			<div className="RegisterForm">
			<form>
			<div>
			<label>Login</label>
			<input type="text" onChange={this.onNameChange} required />
			</div>
			<div>
			<label>Password</label>
			<input type="text" onChange={this.onPasswordChange} required />
			</div>
			<div>
			{btn}
			<button><Link to="/singup">Sing up</Link></button>
			</div>
			</form>
			</div>
			); 
	}
};

const mapState = (state) => {
	return {
		users: state.users
	}
}

export default connect(mapState)(RegisterForm);