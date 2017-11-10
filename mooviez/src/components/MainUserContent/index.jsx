import React, { Component } from 'react';
import MainUserMenu from '../MainUserMenu';
import SearchMovie from '../SearchMovie';
import Movies from '../Movies';

import '../MainContent/MainContent.css';


class MainUserContent extends Component {
  
  render() {
    return (
      <div className="MainContent">
      	<div className="MainContent_Top">
	      	<MainUserMenu />
	      	<SearchMovie />
      	</div>
      	<Movies />
      </div>
    );
  }
}

export default MainUserContent;