import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import SignOut from './SignOut';

import './User.css';

class User extends Component {
	
  render() {
  	const { userStatus } = this.props;
    const userImage = userStatus.isAdmin ? "/img/admin.png" : "/img/user.png";
  	return (
      <div className="user">
        <div>
          <p>{userStatus.name}</p>
          <img src={userImage} alt="userImage"/>
        </div>
        <Link to="/main/profile">Profile</Link><br/>
        <SignOut/>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { userStatus: state.user }
}

export default User = connect(mapStateToProps)(User);