import React, { Component } from 'react';
import { connect } from 'react-redux';
import { findMovie } from '../../actions/filtermovie';
import "./style.css"

class SearchForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			value: ''
		} 
		this.onValueChange = this.onValueChange.bind(this);
		this.onClick = this.onClick.bind(this);
	}

	onValueChange(e){
			this.setState({
				value: e.target.value
			});
		}

	onClick(e){
		e.preventDefault();
		this.props.onFilterMovie(this.state.value);
		this.setState({
			value: " "
		})
	}
	
	
	render() {
		return (
			<div className='searchForm'>
			<input type="text" placeholder="Search" onChange={this.onValueChange} value={this.state.value}/>
			<button onClick={this.onClick}>Search</button>
			</div>
			);
	}
}
const mapDispatch = (dispatch) => {
	return {
		onFilterMovie: (title) => {
			dispatch(findMovie(title));
		}
	}
}

export default connect(null, mapDispatch)(SearchForm);