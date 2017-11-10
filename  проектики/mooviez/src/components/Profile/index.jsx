import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import Header from '../Header';
import MainUserMenu from '../MainUserMenu';
import MainMenu from '../MainMenu';
import SearchMovie from '../SearchMovie';
import { userChanged } from '../../actions';

class Profile extends Component {
		constructor(props) {
		super(props);

		this.state = {
			newLogin: "",
			newPassword: "",
      isChanged: false
		}

		this.changeLogin = this.changeLogin.bind(this);
		this.changePassword = this.changePassword.bind(this);
    this.changeUser = this.changeUser.bind(this);
	}
	
	changeLogin(e) {
		e.preventDefault();
		this.setState({newLogin: e.target.value})
	}

	changePassword(e) {
		e.preventDefault();
		this.setState({newPassword: e.target.value})
	}

  changeUser(e) {
    e.preventDefault();
    const { newLogin, newPassword } = this.state
    const { user, userChanged } = this.props;
    userChanged(user.name, newLogin, newPassword);
    this.setState({ isChanged: true })
  }

  render() {
    const { isChanged } = this.state;
    const { user } = this.props;
    const mainMenu = user.isAdmin ? <MainUserMenu /> : <MainMenu />;
    if (isChanged) return <Redirect to="/main"/>
    return (
      <div>
      	<Header />
        <div className="MainContent_Top">
            {mainMenu}
            <SearchMovie />
          </div>
      	<form onSubmit={this.changeUser} method="POST">
        	<label>New login 
        		<input type="text"
        					 name="login"
        					 placeholder="Type your new awesome username"
        					 value={this.state.newLogin}
        					 onChange={this.changeLogin}
                   required
        		/>
        	</label><br/>
        	<label>New password 
        		<input type="password"
        		       name="password"
        		       placeholder="Type your secure password"
        		       value={this.state.newPassword}
        		       onChange={this.changePassword}
                   required
        		/>
        	</label><br/>
        	<button type="submit">Update</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.user
  }
}

const mapDispatchToProps = dispatch => {
  return {
    userChanged: (oldLogin, newLogin, newPassword) => dispatch(userChanged(oldLogin, newLogin, newPassword))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile);