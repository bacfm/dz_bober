let idCounter = 0
const initialState = [
	{
		name: "Guest",
		password: "123",
		id: 0,
		isAdmin: false
	},
	{
		name: "bober",
		password: "superAdmin",
		id: 0,
		isAdmin: true
	}
] 


export function users(state = initialState, action){
	const { type } = action;
	switch(type){
		case 'SING_UP':
		return addUser(state, action);
		default:
		return state;
	}
	return state;
} 

function addUser(state, action){
	return [...state, {name: action.name, password: action.password, id: ++idCounter, role: 1}]
}