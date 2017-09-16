let idCounter = 0
const initialState = [
	{
		name: "Guest",
		password: "",
		id: 0,
		role: 0
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