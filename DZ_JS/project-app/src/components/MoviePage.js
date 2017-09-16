import React, { Component } from "react";
import { connect } from "react-redux"; 
import { Redirect } from 'react-router';
import { Link } from 'react-router-dom';


class MoviePage extends Component {
	render() {
		const { title, url, description } = this.props;
		return (
			<div className="MoviePage">
			<div>
			<h3>{title}</h3>
			<img src={url} />
			<p>{description}</p>
			</div>
			</div>
			);
	}
}
const mapStateToProps = ({movies}, {match}) => {
	const { id } = match.params;
	const movieId = Number.parseInt(id, 10);
	const movie = movies.find(movie => movie.id === movieId);
	if(!movie){
		return {
			title: null,
			movieId: null,
			url: null,
			description: null
		}
	};
	return {
		movieId,
		title: movie.title,
		url: movie.url,
		description: movie.description
	}
}


export default connect(mapStateToProps)(MoviePage)