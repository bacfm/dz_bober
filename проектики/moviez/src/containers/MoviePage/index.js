import React, { Component } from 'react';
import { connect } from 'react-redux';
import './style.css';


class MoviePage extends Component {
    render(){
        const { title, cover, description, id } = this.props;
        const url = cover || 'http://annyas.com/screenshots/updates/wp-content/uploads/2010/08/star-wars-new-hope-1977-movie-title-small.jpg';
        return (
            <div className='movie-page'>
                <div className='movie-img'> 
                <img src={url} />
                </div>
                <div className='main-info'>
                    <h2>{title}</h2>
                    <p>{description}</p>
                </div>
            </div>
        );
    }
}

const mapState = ({movies}, {match}) => {
    const {id} = match.params;
    const movie = movies.find(movie => movie.id === id);
    if(!movie){
        return {
            title: null,
            cover: null,
            description: null,
            id: null
        }
    }
    return {
        id,
        title: movie.title,
        description: movie.description,
        cover: movie.cover
    }
}

export default connect(mapState)(MoviePage);