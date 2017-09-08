import React, { Component } from 'react';
import { connect } from 'react-redux';
import Movie from '../components/Movie/Movie';

class MovieList extends Component {
	render() {
		let { movies } = this.props;
		let movieList = movies.movies.map(function(movie){
			return (<Movie url={movie.url} title={movie.title} />)
		});
		return (<div className = 'movies'>{movieList}</div>);
	}
}

function mapStateToProps(state){
	return{
		movies: state
	}
}

export default connect(mapStateToProps)(MovieList);