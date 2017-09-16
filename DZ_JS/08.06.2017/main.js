const a = document.querySelectorAll	("a");
const links = Array.from(a);
for(let i=0; i<links.length; i++){
	links[i].addEventListener("click", onClicked)
}

const getInf = /(\w+(?=\&))/g;

function Parapragh(str){
	p = document.body.querySelector("p");
	if(p!==null)
	document.body.removeChild(p);
	p = document.createElement("p");
	p.innerHTML = str;
	document.body.appendChild(p);
}

function onClicked(ev) {
	ev.preventDefault();
	const getInf = /(\w+(?=\&))/g;
	const href = this.href;
	let inf = href.match(/https?:\/\/\w+:\d+(.*)/)[1];
	let user = inf.match(/\/.*\/?name=(\w+)\&lastname=(\w+)&age=(\d+)/);
	let name = user[1];
	let lastname = user[2];
	let age = user[3];
	Parapragh(`Name: ${name}<br> Lastname: ${lastname}<br>Age: ${age}`);
	history.pushState({
		name: name,
		lastname: lastname,
		age: age
	}, null,href);
}

window.addEventListener("hashchange", changeUserInfo);

function changeUserInfo(){
	let hash = location.hash.slice(1);
	let links = Array.from(document.querySelectorAll('a'));
	let res = [];
	links.forEach(el => {res.push(el.res.match(/https?:\/\/\w+:\d+(.*)/)[1])});
	const person = [];
	res.forEach(el =>{
		let user = el.match(/\/.*\/?name=(\w+)\&lastname=(\w+)&age=(\d+)/);
		let inf = {};
		inf.name = user[1];
		inf.lastname = user[2];
		inf.age = user[3];
		person.push(inf);
	});
	let user = person.find(el => el.name === hash;)

	console.log(hash);
}