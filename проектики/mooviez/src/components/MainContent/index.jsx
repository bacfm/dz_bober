import React, { Component } from 'react';

import MainMenu from '../MainMenu';
import SearchMovie from '../SearchMovie';
import Movies from '../Movies';

import './MainContent.css';


class MainContent extends Component {
  render() {
    return (
      <div className="MainContent">
      	<div className="MainContent_Top">
	      	<MainMenu />
	      	<SearchMovie />
      	</div>
      	<Movies/>
      </div>
    );
  }
}

export default MainContent;