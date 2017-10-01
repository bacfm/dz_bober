import React, { Component } from 'react';
import { connect } from 'react-redux';
//import { fetchFilms } from '../../actions/getData';


class MovieList extends Component{
    constructor(props){
        super(props);
    }

    componentDidMount(){
       fetch('/movies')
            .then((res) => res.json())
            .then((res) => console.log(res))
            .catch((err) => console.log(err))
    }
    render(){
        return (
            <div className='movie-list'>
            </div>
        );
    }
}

const mapState = (state) => {
    return {
        movies: state.movies
    }
}

// const mapDispatch = (dispatch) => {
//     return {
//         getMovies: () => dispatch(fetchFilms())
//     }
// }

export default connect (mapState)(MovieList);