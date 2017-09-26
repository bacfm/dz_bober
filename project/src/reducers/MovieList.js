let idCounter = 7;
const initialState = [
	{
		id: 0,
		title: 'Ghost Rider',
		description: "bla-bla",
		url: 'http://annyas.com/screenshots/updates/wp-content/uploads/2010/08/star-wars-new-hope-1977-movie-title-small.jpg'
	},
	{
		id: 1,
		title: 'Iron Man',
		description: "bla-bla",
		url: 'http://annyas.com/screenshots/updates/wp-content/uploads/2010/08/star-wars-new-hope-1977-movie-title-small.jpg'
	},
	{
		id: 2,
		title: 'Spider Man',
		description: "bla-bla",
		url: 'http://annyas.com/screenshots/updates/wp-content/uploads/2010/08/star-wars-new-hope-1977-movie-title-small.jpg'
	},
	{
		id: 3,
		title: 'Star Wars',
		description: "bla-bla",
		url: 'http://annyas.com/screenshots/updates/wp-content/uploads/2010/08/star-wars-new-hope-1977-movie-title-small.jpg'
	},
	{
		id: 4,
		title: 'Star Wars 2',
		description: "bla-bla",
		url: 'http://annyas.com/screenshots/updates/wp-content/uploads/2010/08/star-wars-new-hope-1977-movie-title-small.jpg'
	},
	{
		id: 5,
		title: 'Star Wars 3',
		description: "bla-bla",
		url: 'http://annyas.com/screenshots/updates/wp-content/uploads/2010/08/star-wars-new-hope-1977-movie-title-small.jpg'
	},
	{
		id: 6,
		title: 'Star Wars 4',
		description: "bla-bla",
		url: 'http://annyas.com/screenshots/updates/wp-content/uploads/2010/08/star-wars-new-hope-1977-movie-title-small.jpg'
	},
	{
		id: 7,
		title: 'Star Wars 5',
		description: "bla-bla",
		url: 'http://annyas.com/screenshots/updates/wp-content/uploads/2010/08/star-wars-new-hope-1977-movie-title-small.jpg'
	}
];

export const movies = (state = initialState, action) => {

	switch(action.type){
		case 'ADD_MOVIE':
		return addMovie(state, action);
		default:
		return state;
	}
}


function addMovie(state, action) {
 return [...state, {title: action.title, url: action.url, description: action.description, id: ++idCounter}]
}