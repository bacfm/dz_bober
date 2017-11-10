export function findMovie(title){
	return {
		type: 'FIND_MOVIE',
		title: title
	}
}