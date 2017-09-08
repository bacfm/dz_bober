import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addMovie } from '../actions/movieActions';

class AddMovie extends Component {
	constructor(props) {
		super(props);
		this.state = {
			title: " ",
			description: " ",
			url: " ",
		}
		this.onTitleChange = this.onTitleChange.bind(this);
		this.onUrlChange = this.onUrlChange.bind(this);
		this.onDescriptionChange = this.onDescriptionChange.bind(this);
		
	}
	onTitleChange(e){
		this.setState({
			title: e.target.value
		});
	}
	onUrlChange(e){
		this.setState({
			url: e.target.value
		});
	}
	onDescriptionChange(e){
		this.setState({
			description: e.target.value
		});
	}
	render() {
		const { title, url, description } = this.state;
		return (
			<form>
			<label>URL иконки</label>
			<input
			 type="text"
			 value={url}
			 onChange={this.onUrlChange}
			 />
			<label>Название Фильма</label>
			<input
			 type="text"
			 value={title}
			 onChange={this.onTitleChange}
			 />
			<label>Описание</label>
			<input
			 type="text"
			 value={description}
			 onChange={this.onDescriptionChange}/>
			<button onClick={this.props.onAddMovie(title, url, description)}>Добавить фильм</button>
			</form>
			);
	}
}
const mapStateToProps = state => {
	return {}
}


const mapDispatch = dispatch => {
	return {
		onAddMovie: (title, url, description) => dispatch(addMovie(title, url, description))
	}
}
export default connect(mapStateToProps, mapDispatch)(AddMovie);






