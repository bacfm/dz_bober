import React, { Component } from 'react';
import { connect } from 'react-redux';

class MoviePage extends Component {
	render() {
		return (
			<div className="MoviePage">
			<div>
			<h3>{title}</h3>
			<p>{description}</p>
			<p>{data}</p>
			</div>

			</div>
			);
	}
}

export default connect()(MoviePage)