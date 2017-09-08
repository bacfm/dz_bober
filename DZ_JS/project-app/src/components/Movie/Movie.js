import React, { Component } from 'react';
import './style.css';
export default class Movie extends Component {
	render() {
		const { title, url } = this.props;
		console.log(title, url)
		return (<div className="movie">
			<img src={url} className="movie_pict"  alt=""/>
			<p>{title}</p>
			</div>) 
	}
}