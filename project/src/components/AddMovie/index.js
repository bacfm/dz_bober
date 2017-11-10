import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addMovie } from '../../actions/movieActions';
import "./style.css";

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
		this.onCLick = this.onCLick.bind(this);
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
	onCLick(e){
		e.preventDefault();
		const { title, url, description } = this.state;
		const { onAddMovie } = this.props;
		onAddMovie(title, url, description );
		this.setState({
			title: " ",
			url: " ",
			description: " "
		})

	}
	render() {
		const { title, url, description } = this.state;
		const { onAddMovie } = this.props;
		return (
			<div className = "addMovie">
			<h2>Best Films</h2>
			<div className="addForm">
			<img src="https://i.pinimg.com/originals/17/bb/5d/17bb5d2526b933d179d6a99476cc3561.jpg" alt="logo"/>
			<form>
			<input
			 type="text"
			 onChange={this.onUrlChange}
			 placeholder="URL-icon"
			 />
			<input
			 type="text"
			 onChange={this.onTitleChange}
			 placeholder="Title"
			 />
			<input
			 type="text"
			 onChange={this.onDescriptionChange}
			 placeholder="Description"/>
			<button onClick={this.onCLick}>Добавить фильм</button>
			</form>
			</div>
			</div>
			);
	}
}


const mapDispatchToProps = (dispatch) => {
  return {
    onAddMovie: (title, url, description) => {
      dispatch(addMovie(title, url, description))
    }
  }
}
export default connect(null, mapDispatchToProps)(AddMovie);






