import React, { Component } from 'react';
import { connect } from 'react-redux';

import { filterMovies } from '../../actions';


class SearchMovie extends Component {
	constructor(props) {
		super(props);
		
		this.state = {
			searchString: ""
		}

		this.searchMovie = this.searchMovie.bind(this);
		this.enterSearchString = this.enterSearchString.bind(this);
	}

	enterSearchString(e) {
		this.setState({ searchString: e.target.value })
	}

	searchMovie(e) {
		e.preventDefault();
		const { searchString } = this.state;
		const { filterMovies } = this.props;
		filterMovies(searchString);
	} 

  render() {
    return (
      <div className="SearchMovie">
        <input type='text'
        			 placeholder="Search a movie"
        			 value={this.state.searchString}
        			 onChange={this.enterSearchString} />
        <button onClick={this.searchMovie}>Search</button>
      </div>
    );
  }
}

const mapStateToProps = state => {
	return { 
		filter: state.filter
	}
}

const mapDispatchToProps = dispatch => {
	return { 
		filterMovies: (searchString) => dispatch(filterMovies(searchString))
	}
}

export default SearchMovie = connect(mapStateToProps, mapDispatchToProps)(SearchMovie);