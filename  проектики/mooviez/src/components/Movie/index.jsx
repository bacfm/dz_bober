import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import Header from '../Header';
import MainMenu from '../MainMenu';
import MainUserMenu from '../MainUserMenu';
import SearchMovie from '../SearchMovie';
import { addComment, addLike } from '../../actions';
import './Movie.css';

class Movie extends Component {
	constructor(props) {
		super(props);
		
		this.state = {
			comment: "",
			editMovieID: "changed"
		}

	this.changeComment = this.changeComment.bind(this);
	this.addComment = this.addComment.bind(this);
	this.addLike = this.addLike.bind(this);
	this.editMovie = this.editMovie.bind(this);
	}

	changeComment(e) {
		e.preventDefault();
		this.setState({comment: e.target.value})
	}

	addComment(e) {
		e.preventDefault();
		const { comment } = this.state;
		const { userStatus, addComment } = this.props;
		const movieID = Number(this.props.match.params.id);
		addComment(movieID, comment, userStatus.name);
		this.setState({comment: ""});
	}

	addLike(e) {
		e.preventDefault();
		const { userStatus, addLike, likes } = this.props;
		const movieID = Number(this.props.match.params.id);
		const movieHasLike = likes
			.find(like => (like.user === userStatus.name)&&(like.movieID === movieID));
		if (movieHasLike) return
			else {
				addLike(movieID, userStatus.name);
				this.setState({comment: ""});
			}
	}

	editMovie(movieID) {
		this.setState({ editMovieID: movieID })
	}

	render() {
		const { editMovieID } = this.state;
		if (editMovieID !== "changed")
			return <Redirect to={`/main/editmovie/${editMovieID}`}/>
		const { movies, userStatus, comments } = this.props;
		const dipslayedMovie = movies.find(movie => movie.id === Number(this.props.match.params.id));
		let displayedComments = comments
			.filter(comment => (comment.movieID === Number(this.props.match.params.id))&&
				                 (comment.published === true));
		const commentsList = displayedComments.map((comment, index) => (
			<div key={index} className="comment">
				<p><b>{comment.user}</b>&nbsp;&nbsp;&nbsp;{comment.date}</p>
				<p>{comment.comment}</p>
			</div>
			))
		const isAdmin = userStatus.isAdmin ?
			(<button onClick={() => this.editMovie(Number(this.props.match.params.id))}
				       className="editBtn">Edit movie
			 </button>) : null;

		const mainMenu = userStatus.isAdmin ? <MainUserMenu /> : <MainMenu />;

		if (userStatus.name) {
			if (!dipslayedMovie)
				return <Redirect to="/main"/>
			else return (
				<div>
					<Header/>
					<div className="MainContent_Top">
	          {mainMenu}
	          <SearchMovie />
        	</div>
					<div className="singleMovie">
		      		<div className="singleMovie_img">
		      			<img src={dipslayedMovie.img} alt={dipslayedMovie.title} />
		      		</div>
		      		<div className="singleMovie_description">
			        	<p><b>{dipslayedMovie.name}</b></p>
			        	<p>{dipslayedMovie.description}</p>
			        	<p><a href={`http://${dipslayedMovie.url}`}>{dipslayedMovie.url}</a></p>
			        	<p><img src="/img/calendar.png" alt="calendar" />&nbsp;&nbsp;&nbsp;{dipslayedMovie.date}</p>
			        	<p>
			        		<a className="clickable" 
			        		   onClick={this.addLike}>
			        		   <img src="/img/like.png" alt="like" />
			        		</a>&nbsp;
			        		{dipslayedMovie.likes}&nbsp;&nbsp;&nbsp;
			        		<img src="/img/comment.png" alt="comment" />
			        		&nbsp;
			        		{dipslayedMovie.comments}

			        	</p>
			        	{isAdmin}
		        	</div>
		      </div>
		      <form className="sendComment" onSubmit={this.addComment} method="POST">
	        	<label>Tell us what you think about this movie<br/>
	        		<textarea rows="10"
	        					 		name="comment"
	        					 		placeholder="Add your comment"
	        					 		value={this.state.comment}
	        					 		onChange={this.changeComment}
	        					 		required>
	        		</textarea>
	        	</label><br/>
	        	<button className="submitComment" type="submit">Send</button>
	        </form>
		     	<div>
		     		<p>What do other people think about this movie</p>
		     		{commentsList}
		     	</div>
		     </div>)
		}
		else return <Redirect to="/"/>
	}

}

const mapStateToProps = state => {
    return { 
    	movies: state.movies,
    	userStatus: state.user,
    	likes: state.likes,
    	comments: state.comments
    }
}

const mapDispatchToProps = dispatch => {
	return {
		addComment: (movieID, comment, user) =>  dispatch(addComment(movieID, comment, user)),
		addLike: (movieID, user) =>  dispatch(addLike(movieID, user))
	}
}
export default Movie = connect(mapStateToProps, mapDispatchToProps)(Movie);
