export function addUser(name, password){
		return {
			type: "SING_UP",
			name: name,
			password: password
		}
}

export function logIn(name, password, isAdmin){
	return {
		type: 'LOG_IN',
		name,
		password,
		isAdmin
	}
}