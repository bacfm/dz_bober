export function addUser(name, password){
		return {
			type: "SING_UP",
			name: name,
			password: password
		}
}