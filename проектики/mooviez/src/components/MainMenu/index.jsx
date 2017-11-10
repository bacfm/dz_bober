import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import './MainMenu.css';

class MainMenu extends Component {
  render() {
    const { comments, likes, userStatus, movies, login } = this.props;
    const userComments = comments.filter(comment => comment.user === userStatus.name).length;
    const userLikes = likes.filter(like => like.user === userStatus.name).length;
    const moviesLength = movies.length;
    const newMovies = moviesLength - login.find(movie => movie.login === userStatus.name).movies;
    let active;
    //eslint-disable-next-line
    switch (location.pathname) {
      case "/main": { active = 1; break;}
      case "/main/votes": { active = 2; break;}
      case "/main/comments": { active = 3; break;}
      case "/main/new": { active = 4; break;}
    }
    return (
      <ul className="mainMenu">
        <li className={active === 1 ? "activeMenu" : null}><Link to="/main">All movies</Link><b>&nbsp;{moviesLength}</b></li>
        <li className={active === 2 ? "activeMenu" : null}><Link to="/main/votes">Your upvote</Link><b>&nbsp;{userLikes}</b></li>
        <li className={active === 3 ? "activeMenu" : null}><Link to="/main/comments">Your comments</Link><b>&nbsp;{userComments}</b></li>
        <li className={active === 4 ? "activeMenu" : null}><Link to="/main/new">New movies</Link><b>&nbsp;{newMovies}</b></li>
      </ul>
    );
  }
}

const mapStateToProps = state => {
    return { 
      comments: state.comments,
      likes: state.likes,
      userStatus: state.user,
      movies: state.movies,
      login: state.login
    }
}

export default MainMenu = connect(mapStateToProps)(MainMenu);