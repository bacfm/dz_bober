import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import Header from '../Header';
import MainUserMenu from '../MainUserMenu';
import SearchMovie from '../SearchMovie';
import { makeAdmin } from '../../actions';
import './UsersList.css';

class UsersList extends Component {
  constructor(props) {
    super(props);
  
  this.state = {
    isChanged: false
  }

  this.makeUserAdmin = this.makeUserAdmin.bind(this); 
  }
	
  makeUserAdmin(id) {
    const { makeAdmin } = this.props;
    makeAdmin(id);
    this.setState({isChanged: true});
  }

  render() {
    const { userStatus, users } = this.props;
    const { isChanged } = this.state;
    if (isChanged) return <Redirect to="/main"/>
    if (userStatus.name && userStatus.isAdmin) {
      let notAdminUsers = users.filter(user => user.isAdmin === false);
      notAdminUsers = notAdminUsers.map((user, index) => {
        return (
          <div className="notAdminUser" key={index}>
            <div>
              <img src='/img/user.png' alt="user"/>
            </div>
            <div>
              <h2>{user.login}</h2>
              <button onClick={() => this.makeUserAdmin(user.id)}>Make an admin</button>
            </div>
          </div>
          )
      })
      return (
        <div>
          <Header/>
          <div className="MainContent_Top">
            <MainUserMenu />
            <SearchMovie />
          </div>
          {notAdminUsers}
        </div>
      )
    }
    else return <Redirect to='/'/>
  }
}

const mapStateToProps = state => {
  return {
    users: state.users,
    userStatus: state.user
  }
}

const mapDispatchToProps = dispatch => {
  return {
    makeAdmin: (login) => dispatch(makeAdmin(login))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersList);