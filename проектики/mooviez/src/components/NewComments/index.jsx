import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import Header from '../Header';
import MainUserMenu from '../MainUserMenu';
import SearchMovie from '../SearchMovie';
import { rejectCommentByID, confirmCommentByID } from '../../actions';

class NewComments extends Component {
  constructor(props) {
    super(props);
  
  this.state = {
    isChanged: false
  }

  this.confirmComment = this.confirmComment.bind(this);
  this.rejectComment = this.rejectComment.bind(this); 
  }
	
  confirmComment(id, movieID) {
    const { confirmCommentByID } = this.props;
    confirmCommentByID(id, movieID);
    this.setState({isChanged: true});
  }

  rejectComment(id, movieID) {
    const { rejectCommentByID } = this.props;
    rejectCommentByID(id, movieID);
    this.setState({isChanged: true});
  }

  render() {
    const { userStatus, comments } = this.props;
    const { isChanged } = this.state;
    if (isChanged) return <Redirect to="/main"/>
    if (userStatus.name && userStatus.isAdmin) {
      let newComments = comments.filter(comment => comment.published === false);
      newComments = newComments.map((comment, index) => {
        return (
          <div className="notPublishedComment" key={index}>
            
            <div>
              <h2>{comment.user}</h2>
              <p>{comment.date}</p>
              <p>{comment.comment}</p>
              <button onClick={() => this.confirmComment(comment.id, comment.movieID)}>Confirm</button>
              <button onClick={() => this.rejectComment(comment.id)}>Reject</button>
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
          {newComments}
        </div>
      )
    }
    else return <Redirect to='/'/>
  }
}

const mapStateToProps = state => {
  return {
    comments: state.comments,
    userStatus: state.user
  }
}

const mapDispatchToProps = dispatch => {
  return {
    rejectCommentByID: (id, movieID) => dispatch(rejectCommentByID(id, movieID)),
    confirmCommentByID: (id, movieID) => dispatch(confirmCommentByID(id, movieID))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewComments);