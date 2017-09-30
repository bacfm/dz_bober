export function getMovies(){
    return fetch('/movies').then((res) => res.json())
}

export function getUsers(){
    return fetch('/users').then((res) => res.json())
}