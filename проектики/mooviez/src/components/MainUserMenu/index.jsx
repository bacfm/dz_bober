import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import '../MainMenu/MainMenu.css';

class MainUserMenu extends Component {
  render() {
    const { comments } = this.props;
    const newComments = comments.filter(comment => comment.published === false).length;
    let active;
    //eslint-disable-next-line
    switch (location.pathname) {
      case "/main": { active = 1; break;}
      case "/main/mostliked": { active = 2; break;}
      case "/main/mostcommented": { active = 3; break;}
      case "/main/newcomments": { active = 4; break;}
      case "/main/addmovie": { active = 5; break;}
      case "/main/users": { active = 6; break;}
    }
    //eslint-disable-next-line
    if (location.pathname.indexOf("/main/movie/") !== -1)
      active = 1;
    
    return (
      <ul className="mainMenu">
        <li className={active === 1 ? "activeMenu" : null}><b>&#157;</b><Link to="/main">All movies</Link></li>
        <li className={active === 2 ? "activeMenu" : null}><b>&#152;</b><Link to="/main/mostliked">Most liked</Link></li>
        <li className={active === 3 ? "activeMenu" : null}><b>&#156;</b><Link to="/main/mostcommented">Most commented</Link></li>
        <li className={active === 4 ? "activeMenu" : null}><Link to="/main/newcomments">New comments</Link><b>&nbsp;{newComments}</b></li>
        <li className={active === 5 ? "activeMenu" : null}><b>+</b><Link to="/main/addmovie">Add movie</Link></li>
        <li className={active === 6 ? "activeMenu" : null}><b>&#128;</b><Link to="/main/users">Make an admin</Link></li>
      </ul>
    );
  }
}

const mapStateToProps = state => {
    return { 
      comments: state.comments
    }
}

export default MainUserMenu = connect(mapStateToProps)(MainUserMenu);