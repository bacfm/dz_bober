import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import { createUser } from '../../actions';

class SignUp extends Component {

	constructor(props) {
		super(props);

		this.state = {
			login: "",
			password: "",
			isChanged: false
		}

		this.changeLogin = this.changeLogin.bind(this);
		this.changePassword = this.changePassword.bind(this);
		this.createUser = this.createUser.bind(this);
	}
	
	changeLogin(e) {
		e.preventDefault();
		this.setState({login: e.target.value})
	}

	changePassword(e) {
		e.preventDefault();
		this.setState({password: e.target.value})
	}

	createUser(e) {
		e.preventDefault();
		const { login, password } = this.state
		const { users, createUser } = this.props;
		const userLoginCheck = users.find(user => user.login === login);
		if (userLoginCheck) {
			alert("This login is used by another person!");
			this.setState({
						password: "",
						login: "",
					})
			}
		else {
			createUser(login, password);
			this.setState({
						password: "",
						login: "",
						isChanged: true
					})
		}
	}

  render() {
  	const { isChanged } = this.state;
    if (!isChanged)
    return (
      <div className="Auth">
        <h1>Welcome to Mooviez</h1>
        <p>You rate matters</p>
        <div><img src="/img/logo.png" alt="logo"/></div>
        <form onSubmit={this.createUser} method="POST">
        	<h2>Please fill to create new user</h2>
        	<label>Login 
        		<input type="text"
        					 name="login"
        					 placeholder="Type your awesome nickname"
        					 value={this.state.login}
        					 onChange={this.changeLogin}
        					 required
        		/>
        	</label><br/>
        	<label>Password 
        		<input type="password"
        		       name="password"
        		       placeholder="Type your secure password"
        		       value={this.state.password}
        		       onChange={this.changePassword}
        		       required
        		/>
        	</label><br/>
        	<button type="submit">Create User</button>
        </form>
      </div>
    )
  else return <Redirect to='/'/>
  }
}

const mapStateToProps = state => {
	return {
		users: state.users
	}
}

const mapDispatchToProps = dispatch => {
	return {
		createUser: (login, password) =>  dispatch(createUser(login, password))
	}
}

export default SignUp = connect(mapStateToProps, mapDispatchToProps)(SignUp);