import { getMovies } from '../api';
export const getMoviesSuccess = data => {
    return ({
        type: 'GET_DATA_SUCCESS',
        data
    });
}

export const fetchFilms = () => {
    return (dispatch) => {
        getMovies().then((res) => {
            dispatch(getMoviesSuccess(res.movielists)); 
        })
        .catch((err) => console.log(err));
    }
}