import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect, Link } from 'react-router-dom';

import { userAuth } from '../../actions';

import './Auth.css';

class Auth extends Component {

	constructor(props) {
		super(props);

		this.state = {
			login: "",
			password: "",
			remember: true
		}

		this.changeLogin = this.changeLogin.bind(this);
		this.changePassword = this.changePassword.bind(this);
		this.changeRemember = this.changeRemember.bind(this);
		this.checkUser = this.checkUser.bind(this);
	}
	
	changeLogin(e) {
		e.preventDefault();
		this.setState({login: e.target.value})
	}

	changePassword(e) {
		e.preventDefault();
		this.setState({password: e.target.value})
	}

	changeRemember(e) {
		e.preventDefault();
		this.setState({remember: !this.state.remember})
	}

	checkUser(e) {
		e.preventDefault();
		const { login, password } = this.state
		const { users, userAuth } = this.props;
		const userLoginCheck = users.find(user => user.login === login);
		if (!userLoginCheck) {
			alert("No such user!");
			this.setState({
						password: "",
						login: "",
						remember: true
					})
			}
			else { 
				const userPasswordCheck = userLoginCheck.pwd;
				if (userPasswordCheck !== password) {
					alert("Wrong password!")
					this.setState({
						password: "",
						login: "",
						remember: true
					})
					}
				else {
					const  { isAdmin } = userLoginCheck;
					userAuth(login, isAdmin);
					this.setState({
						password: "",
						login: "",
						remember: true
					})

				}
			}
	}

  render() {
  	const { userStatus } = this.props;
    if (!userStatus.name)
    return (
      <div className="Auth">
        <h1>Welcome to Mooviez</h1>
        <p>You rate matters</p>
        <div><img src="/img/logo.png" alt="logo"/></div>
        <form onSubmit={this.checkUser} method="POST">
        	<h2>Please sign in to the app</h2>
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
        	<label>Remember me 
        		<input type="checkbox" 
        					 name="remember"
        					 onChange={this.changeRemember}
        					 checked={this.state.remember}
        		/>
        	</label><br/>
        	<button type="submit">Sign In</button>
        	<Link to="/signup">Sign Up</Link>
        </form>
      	<ul>features to develop:
      		<li>search movie</li>
      		<li>save user data in cookies</li>
      	</ul>
      </div>
    )
  else return <Redirect to='/main'/>
  }
}

const mapStateToProps = state => {
	return { users: state.users,
	         userStatus : state.user
	       }
}

const mapDispatchToProps = dispatch => {
	return {
		userAuth: (login, isAdmin) =>  dispatch(userAuth(login, isAdmin))
	}
}

export default Auth = connect(mapStateToProps, mapDispatchToProps)(Auth);