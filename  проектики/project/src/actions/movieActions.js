export function addMovie(title, url, description){
	return {
		type: 'ADD_MOVIE',
		title: title,
		url: url,
		description: description
	}
}