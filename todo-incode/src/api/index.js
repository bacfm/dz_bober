export default function getTodos(){
    return fetch("http://localhost:8888/todo").then((res) => res.json())
}