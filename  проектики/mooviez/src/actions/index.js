export function userAuth(login, isAdmin) {
	return {
		type: 'USER_LOGGED_IN',
		login,
		isAdmin
	}
}

export function userOut(user) {
	return {
		type: 'USER_LOGGED_OUT',
		user
	}
}

export function userChanged(name, login, password) {
	return {
		type: 'USER_CHANGED',
		name,
		login,
		password
	}
}

export function makeAdmin(id) {
	return {
		type: 'USER_MADE_ADMIN',
		id
	}
}

export function newMovie(movie) {
	return {
		type: 'ADD_MOVIE',
		movie
	}
}

export function addComment(movieID, comment, user) {
	return {
		type: 'ADD_COMMENT',
		movieID,
		comment,
		user
	}
}

export function addLike(movieID, user) {
	return {
		type: 'ADD_LIKE',
		movieID,
		user
	}
}

export function createUser(login, password) {
	return {
		type: 'ADD_USER',
		login,
		password
	}
}

export function editMovie(movieID, image, url, title, description) {
	return {
		type: 'EDIT_MOVIE',
		movieID,
		image,
		url,
		title,
		description
	}
}

export function rejectCommentByID(commentID, movieID) {
	return {
		type: 'REJECT_COMMENT',
		commentID,
		movieID
	}
}

export function confirmCommentByID(commentID, movieID) {
	return {
		type: 'CONFIRM_COMMENT',
		commentID,
		movieID
	}
}

export function filterMovies(text) {
	return {
		type: 'SEARCH_MOVIE',
		text
	}
}