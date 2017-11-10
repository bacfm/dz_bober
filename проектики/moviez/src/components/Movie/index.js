import React, { Component } from 'react';
import { Link } from "react-router-dom";
import './style.css';



export default class MovieBlock extends Component {
	render() {
        const { title, id, cover } = this.props;
        const url = cover ||'http://annyas.com/screenshots/updates/wp-content/uploads/2010/08/star-wars-new-hope-1977-movie-title-small.jpg';
		return (
            <div className="movie">
                <img src={url} className="movie_pict"  alt=""/>
                <p><Link to={`/movie/${id}`}>{title}</Link></p>
            </div>
            );
	}
}