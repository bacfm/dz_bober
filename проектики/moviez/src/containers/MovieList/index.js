import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchFilms } from '../../actions/getData';
import MovieBlock from '../../components/Movie';
import './style.css';

class MovieList extends Component{
    componentDidMount(){
       this.props.getMovies();
    }
    render(){
        const { movies } = this.props;
        const movielist = movies.map(function(movie){
           return (<MovieBlock title={movie.title} cover={movie.cover} id={movie.id}/>
        )});
        return (
            <div className='movie-list'>
                {movielist}
            </div>
        );
    }
}

const mapState = (state) => {
    return {
        movies: state.movies.filter(movie => movie.title.includes(state.filterMovies))
    }
}

const mapDispatch = (dispatch) => {
    return {
        getMovies: () => dispatch(fetchFilms())
    }
}

export default connect (mapState, mapDispatch)(MovieList);