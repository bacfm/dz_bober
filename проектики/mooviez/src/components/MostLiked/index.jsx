import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect, Link } from 'react-router-dom';

import Header from '../Header';
import MainUserMenu from '../MainUserMenu';
import SearchMovie from '../SearchMovie';

class MostLiked extends Component {

	render() {
		const { movies, userStatus } = this.props;
		let sortedMovies = [...movies];
		sortedMovies = sortedMovies.sort(function (a, b) {
			  if (a.likes > b.likes) {
			    return -1;
			  }
			  if (a.likes < b.likes) {
			    return 1;
			  }
			  return 0;
			});
		sortedMovies = sortedMovies.map((movie, index) => (
					<div key={index} className="Movie">
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
		if (userStatus.name) {
			 return (
				<div>
					<Header/>
					<div className="MainContent_Top">
	          <MainUserMenu />
	          <SearchMovie />
        	</div>
					<div className="sorted">
						{sortedMovies}
					</div>
		    </div>)
		}
		else return <Redirect to="/"/>
	}

}

const mapStateToProps = state => {
    return { 
    	movies: state.movies,
    	userStatus: state.user
    }
}

export default MostLiked = connect(mapStateToProps)(MostLiked);