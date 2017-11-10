import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import Header from '../Header';
import MainMenu from '../MainMenu';
import SearchMovie from '../SearchMovie';
import './UserComments.css';

class UserComments extends Component {
	
  render() {
  	const { userStatus, comments, movies } = this.props;
    let userComments = comments.filter(comment => comment.user === userStatus.name);
    userComments = userComments.map((comment, index) => {
      const commentedMovie = movies.find(movie => movie.id === comment.movieID);
      const isPublished = comment.published ?
             null : <p className="confirmed">Comment is not checked by admin</p>;
      return (<div key={index} className ="userComment">
                  <p>Movie:&nbsp;
                    <Link to={`/main/movie/${commentedMovie.id}`}>
                      <b>{commentedMovie.name}</b>
                    </Link>
                  </p>
                  <p>Commented on:&nbsp;{comment.date}</p>
                  <p>{comment.comment}</p>
                  {isPublished}
              </div>)});
  	return (
      <div>
        <Header/>
        <div className="MainContent_Top">
          <MainMenu />
          <SearchMovie />
        </div>
        <h2>All your comments on {new Date(Date.now()).toLocaleDateString()}</h2>
        {userComments}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { userStatus: state.user,
           comments: state.comments,
           movies: state.movies
   }
}

export default UserComments = connect(mapStateToProps)(UserComments);