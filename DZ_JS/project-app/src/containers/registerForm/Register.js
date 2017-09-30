import React, { Component } from 'react';
import './style.css';
import { connect } from 'react-redux';
import { addUser } from '../../actions/registerForm';
import { Redirect, Link } from 'react-router-dom';
 

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
	logIn(e){
		e.preventDefault();
			const { users } = this.props;
			const { name, password, isAuthorized } = this.state;
			const checkLog = users.find(user => user.name === name);
			console.log(checkLog, checkLog.password)
			
			if(checkLog.name === name && checkLog.password === password){
				 this.setState({
					isAuthorized: true
				});
			} else if(!checkLog || !checkLog.password) {
				alert("Неправильный логин или пароль");
				this.setState({
					name: " ",
					password: " ",
					isAuthorized: false
				});
			} else {
				return;
			}
	}
	render() {
		const { name, password, isAuthorized } = this.state;
		console.log(isAuthorized);
		if(!isAuthorized){
		return (
			<div className="RegisterForm">
			<form>
			<div>
			<label>Login</label>
			<input type="text" onChange={this.onNameChange} value={name} required />
			</div>
			<div>
			<label>Password</label>
			<input type="text" onChange={this.onPasswordChange} value={password} required />
			</div>
			<div>
			<button onClick={this.logIn}>Sing in</button>
			<button><Link to="/singup">Sing up</Link></button>
			</div>
			</form>
			</div>
			); 
	} else {
		return <Redirect to="/" />
	}
}
};

const mapState = (state) => {
	return {
		users: state.users
	}
}

export default connect(mapState)(RegisterForm);
