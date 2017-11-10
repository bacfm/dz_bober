import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import Header from '../Header';
import MainMenu from '../MainMenu';
import SearchMovie from '../SearchMovie';

class NewMovies extends Component {

  render() {
  	const { userStatus, movies, login } = this.props;
    let newMovies = login.find(login => login.login === userStatus.name).movies;
    newMovies = movies.slice(newMovies, movies.length);
    return (
      <div>
          <Header/>
          <div className="MainContent_Top">
            <MainMenu />
            <SearchMovie />
          </div>
          <div className="Movies_List">
          { newMovies.map(movie => (
              <div key={movie.id} className="Movie">
                <div>
                  <Link to={`/main/movie/${movie.id}`}>
                    <img src={movie.img} alt={movie.title} />
                  </Link>
                </div>
                <p><span>{movie.name}</span></p>
                <p><img src="/img/like.png" alt="like" />&nbsp;&nbsp;&nbsp;{movie.likes}</p>
                <p><img src="/img/comment.png" alt="comment" />&nbsp;&nbsp;&nbsp;{movie.comments}</p>
                <p><img src="/img/calendar.png" alt="calendar" />&nbsp;&nbsp;&nbsp;{movie.date}</p>
              </div>))
            }
        </div>
      </div>);
  }
}

const mapStateToProps = state => {
  return {
    userStatus : state.user,
    movies: state.movies,
    login: state.login
  }
}

export default connect(mapStateToProps)(NewMovies);