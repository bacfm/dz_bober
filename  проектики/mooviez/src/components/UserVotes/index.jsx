import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import Header from '../Header';
import MainMenu from '../MainMenu';
import SearchMovie from '../SearchMovie';
import './UserVotes.css';

class UserVotes extends Component {
	
  render() {
  	const { userStatus, likes, movies } = this.props;
    let userLikes = likes.filter(like => like.user === userStatus.name);
    userLikes = userLikes.map((like, index) => {
      const likedMovie = movies.find(movie => movie.id === like.movieID);
      return (<div key={index} className ="userVote">
                <p>Movie:&nbsp;
                  <Link to={`/main/movie/${likedMovie.id}`}>
                    <b>{likedMovie.name}</b>
                  </Link>
                </p>
              </div>)});
  	return (
      <div>
        <Header/>
        <div className="MainContent_Top">
          <MainMenu />
          <SearchMovie />
        </div>
        <h2>All your likes on {new Date(Date.now()).toLocaleDateString()}</h2>
        {userLikes}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { userStatus: state.user,
           likes: state.likes,
           movies: state.movies
   }
}

export default UserVotes = connect(mapStateToProps)(UserVotes);