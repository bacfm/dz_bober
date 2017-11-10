import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import Header from '../Header';
import MainUserMenu from '../MainUserMenu';
import SearchMovie from '../SearchMovie';
import { newMovie } from '../../actions';

class AddMovie extends Component {
	constructor(props) {
		super(props);
		this.state = {
			url: "",
			title: "",
      description: "",
      image: "",
      isChanged: false
		}

		this.changeDescription = this.changeDescription.bind(this);
		this.changeTitle = this.changeTitle.bind(this);
		this.changeUrl = this.changeUrl.bind(this);
    this.changeImage = this.changeImage.bind(this);
		this.addMovie = this.addMovie.bind(this);
	}

	changeImage(e) {
    e.preventDefault();
    this.setState({image: e.target.value})
  }

  changeTitle(e) {
		e.preventDefault();
		this.setState({title: e.target.value})
	}

	changeDescription(e) {
		e.preventDefault();
		this.setState({description: e.target.value})
	}

	changeUrl(e) {
		e.preventDefault();
		this.setState({url: e.target.value})
	}

	addMovie(e) {
		e.preventDefault();
		const { url, title, description, image } = this.state
    const { movies, newMovie } = this.props;
    let createMovie = {
    	id: movies.length,
      img: image,
    	url: url,
    	name: title,
    	description: description,
    	date: new Date(Date.now()).toLocaleDateString(),
    	comments: 0,
    	likes: 0
    }
    newMovie(createMovie);
    this.setState({ isChanged: true })
	}

  render() {
  	const { userStatus } = this.props;
  	const { isChanged } = this.state;
    if (isChanged) return <Redirect to="/main"/>
    if (userStatus.name) {
     if (!userStatus.isAdmin)
	    return <Redirect to='/'/>
	  	else return (
	  		<div>
	      	<Header/>
          <div className="MainContent_Top">
            <MainUserMenu />
            <SearchMovie />
          </div>
	        <form onSubmit={this.addMovie} method="POST">
        	<label>Cover Url 
        		<input type="text"
        					 name="url"
        					 placeholder="Cover url"
        					 value={this.state.login}
        					 onChange={this.changeUrl}
        		/>
        	</label><br/>
        	<label>Movie Title
        		<input type="text"
        		       name="title"
        		       placeholder="Movie Title"
        		       value={this.state.title}
        		       onChange={this.changeTitle}
                   required
        		/>
        	</label><br/>
        	<label>Movie Description
        		<input type="text"
        		       name="description"
        		       placeholder="Movie Description"
        		       value={this.state.description}
        		       onChange={this.changeDescription}
                   required
        		/>
        	</label><br/>
          <label>Movie image
            <input type="text"
                   name="description"
                   placeholder="Movie Description"
                   value={this.state.image}
                   onChange={this.changeImage}
                   required
            />
          </label><br/>
        	<button type="submit">Publish movie</button>
        </form>
	      </div>
	  		)
			}

	  else return <Redirect to='/'/>
  }
}

const mapStateToProps = state => {
  return {
    movies : state.movies,
    userStatus: state.user
  }

}

const mapDispatchToProps = dispatch => {
  return {
    newMovie: (movie) => dispatch(newMovie(movie))
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(AddMovie);