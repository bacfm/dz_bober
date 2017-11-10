import React, { Component } from 'react';
import { Link } from "react-router-dom";
import './style.css';



export default class Movie extends Component {
	render() {
		const { title, url, id } = this.props;
		return (<div className="movie">
			<img src={url} className="movie_pict"  alt=""/>
			<p><Link to={`/movie/${id}`}>{title}</Link></p>
			</div>) 
	}
}