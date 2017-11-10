import initialState from '../state';

export function reducer(state = initialState, action) {
  
  switch (action.type) {
    
    case 'USER_LOGGED_IN':
      state.user.name = action.login;
      state.user.isAdmin = action.isAdmin;
      const lastLogin  = state.login.find(user => user.login === action.login);
      if (!lastLogin)
        state.login.push({login: action.user, movies: state.movies.length})
      return state
    
    case 'USER_LOGGED_OUT':
      state.user.name = "";
      state.user.isAdmin = false;
      const lastLoginOut  = state.login.find(user => user.login === action.user);
      lastLoginOut.movies = state.movies.length;
      return state

    case 'USER_CHANGED':
      const changedUser = state.users.find(currentUser => currentUser.login === action.name);
      state.users[changedUser.id].login = action.login;
      state.users[changedUser.id].pwd = action.password;
      state.user.name = action.login;
      state.user.isAdmin = changedUser.isAdmin;
      return state
    
    case 'USER_MADE_ADMIN':
      const adminUser = state.users.find(currentUser => currentUser.id === action.id);
      state.users[adminUser.id].isAdmin = true;
      return state
    
    case 'ADD_MOVIE':
      state.movies.push(action.movie);
      return state
    
    case 'ADD_COMMENT':
      const newComment = {id: state.comments.length,
                          movieID: action.movieID,
                          user: action.user,
                          comment: action.comment,
                          date: new Date(Date.now()).toLocaleDateString(),
                          published: false};
      state.comments.push(newComment);                  
      return state

    case 'ADD_LIKE':
      const movieToAddLike = state.movies.find(movie => movie.id === action.movieID);
      movieToAddLike.likes += 1;
      const newLike = {id: state.likes.length,
                          movieID: action.movieID,
                          user: action.user};
      state.likes.push(newLike);                  
      return state

    case 'ADD_USER':
      const newUser = {id: state.users.length,
                       login: action.login,
                       pwd: action.password,
                       date: new Date(Date.now()).toLocaleDateString(),
                       isAdmin: false};
      state.users.push(newUser);                  
      return state

    case 'EDIT_MOVIE':
      const movieToEdit = state.movies.find(movie => movie.id === action.movieID);
      movieToEdit.url = action.url;
      movieToEdit.img = action.image;
      movieToEdit.name = action.title;
      movieToEdit.description = action.description;
      return state

    case 'CONFIRM_COMMENT':
      const commentToConfirm = state.comments.find(comment => comment.id === action.commentID);
      commentToConfirm.published = true;
      const movieToConfirmComment = state.movies.find(movie => movie.id === action.movieID);
      movieToConfirmComment.comments += 1;
      return state

    case 'REJECT_COMMENT':
      const commentsBefore = state.comments.slice(0, action.commentID);
      const commentsAfter = state.comments.slice(action.commentID+1, state.comments.length);
      state.comments = [...commentsBefore, ...commentsAfter];
      state.comments.forEach((comment, index) => comment.id = index);
      return state

    case 'SEARCH_MOVIE':
    state.filter = undefined;
      const filteredMovies = state.movies
        .filter(movie => (movie.name.trim().toLowerCase().indexOf(action.text.trim().toLowerCase()) !== -1));
      state.filter = [...filteredMovies];
      return state

    default:
      return state
  }
}

