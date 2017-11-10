import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import './Movies.css';

class Movies extends Component {
	
  render() {
  	const { movies, filter } = this.props;
    if (filter.length === 0)
      return (
        <div className="Movies_List">
          { movies.map(movie => (
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
        </div>);
    return (
        <div className="Movies_List">
          { filter.map(movie => (
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
        </div>)
  }
}

const mapStateToProps = state => {
    return { movies: state.movies,
             filter: state.filter
       }
}

export default Movies = connect(mapStateToProps)(Movies);