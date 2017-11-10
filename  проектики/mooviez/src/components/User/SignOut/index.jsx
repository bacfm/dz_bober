import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import { userOut } from '../../../actions';

class SignOut extends Component {
	constructor(props) {
		super(props);
	
  this.state = {
    isChanged: false
  }
	this.signOut = this.signOut.bind(this);
	}

	signOut() {
		const { userOut, userStatus } = this.props;
		userOut(userStatus.name);
    this.setState({isChanged: true})
	}

  render() {
  	const { userStatus } = this.props;
    const { isChanged } = this.state;
    if (userStatus.name && !isChanged)
    return (
      <div className="signout">
        <button onClick={this.signOut}>Sign Out</button>
      </div>
    )
  else return <Redirect to='/'/>
  }
}

const mapStateToProps = state => {
  return {
    userStatus : state.user
  }
}
const mapDispatchToProps = dispatch => {
	return {
		userOut: (user) =>  dispatch(userOut(user))
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(SignOut);