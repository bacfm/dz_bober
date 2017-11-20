import getTodos from "../api";

export const getTodosSuccess = data => {
    return ({
        type: 'GET_DATA_SUCCESS',
        data
    })
}
export const fetchTodos = () => {
    return (dispatch) => {
        getTodos().then((res) => {
            dispatch(getTodosSuccess(res.todoList))
        })
        .catch((err) => {
            console.log(err)
        }) 
    }
}

export const removeTodo = (id) => {
    return {
        type: "REMOVE_TODO",
        id: id
    }
}

export const getToken = (data) => ({
	type: "ADD_TOKEN",
	data
})