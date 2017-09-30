import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './style.css';

export default class AddMovie extends Component {
    constructor(props){
        super(props);
        this.state = {
            title: '',
            description: '',
            cover: ''
        }
        this.onTitleChange = this.onTitleChange.bind(this);
        this.onDescriptionChange = this.onDescriptionChange.bind(this);
        this.onCoverChange = this.onCoverChange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }
    onTitleChange(e){
        e.preventDefault();
        this.setState({
            title: e.target.value
        });
    }
    onDescriptionChange(e){
        e.preventDefault();
        this.setState({
            title: e.target.value
        });
    }
    onCoverChange(e){
        e.preventDefault();
        this.setState({
            title: e.target.value
        });
    }
    onFormSubmit(e){
        const { title, description, cover } = this.state;
        fetch('/add-movie', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ title: title, description: description, cover: cover })
        })
        .then((res) => res.json())
        .then((res) => console.log(res))
        .catch((err) => console.log(err));
    }

    render(){
        return (
            <div className='add-movie'>
                <form action='/add-movie' method='post' onSubmit={this.onFormSubmit}>
                    <div>
                        <label>Title</label>
                        <input onChange={this.onTitleChange} type='text' placeholder='Title' required />
                    </div>
                    <div>
                        <label>Description</label>
                       <textarea onChange={this.onDescriptionChange} placeholder='description' maxlength='200' required></textarea>
                    </div>
                    <div>
                        <label>Movie Cover</label>
                        <input onChange={this.onCoverChange} type='text' placeholder='Movie cover' />
                    </div>
                    <button>Add Movie</button>
                </form>
            </div>
        );
    }
}