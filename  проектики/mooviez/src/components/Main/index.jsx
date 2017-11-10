import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import Header from '../Header';
import MainContent from '../MainContent';
import MainUserContent from '../MainUserContent';

class Main extends Component {
  render() {
  	const { userStatus } = this.props;
  	const isAdmin = userStatus.isAdmin ? <MainUserContent/> : <MainContent/>
    if (userStatus.name) 
	    return (
	      <div>
	      	<Header/>
	        {isAdmin}
	      </div>
	    )
	  return <Redirect to='/'/>
  }
}

const mapStateToProps = state => {
  return {
    userStatus : state.user
  }
}
export default connect(mapStateToProps)(Main);