// history.pushState({item: 10}, "", "/hello");

// window.addEventListener("popstate", ev => {
// 	console.log("onpopstate", ev.state);
// });

// const a = document.querySelector("a");

// a.addEventListener("click", onLinkClicked);
// let i = 0;

// function onLinkClicked(ev){
// 	ev.preventDefault();

// 	const href = this.href;
// 	i += 1;

	
// 	document.querySelector("#history").textContent = i;







// 	history.pushState({i}, null, href + "/" + i);
// }


// window.addEventListener("popstate", function(ev){
// 	document
// 			.querySelector("#history")
// 			.textContent = ev.state.i;
// });


// const links = Array.from(document.querySelectorAll('a'));
// const customEvent = new Event('a-clicked', {
//     bubbles: true,
//     cancelable: true
// })
// links.forEach(a => {
//     a.addEventListener('click', function(ev){
//         ev.preventDefault();
//         customEvent.detail = {
//             href: this.href
//         }
//         this.dispatchEvent(customEvent);
//     })
// })
// const nav = document.querySelector('nav');
// nav.addEventListener('a-clicked', function(ev){
//     console.log(`href: ${ev.detail.href}`);
// });

// setTimeout(function() {
// 	links.forEach(a => {
// 		a.removeEventListener('a-clicked', someFunc)
// 	});
// }, 5000);

// document.querySelector("nav").addEventListener("click", ev => {
// 	console.log("captured ev -> nav clicked");

// }, true);

// document.querySelector("nav").addEventListener("click", ev => {
// 	console.log("bubbled ev -> nav clicked");
// });


// document.querySelector("nav").addEventListener("click", ev => {
// 	ev.stopPropagation();
// 	if(ev.ctrlKey){
// 		ev.preventDefault();
// 		console.log()
// 	}
// 	console.log("a clicked", ev);
// }, true);


// function hello(){
// 	return "hello";
// }

// hello.toJSON = function () {
// 	return {
// 		hello: "hello"
// 	};
// }

// console.log(JSON.stringify(hello));



//-------------------------- CHAT ------------------------------------

const socket = io('http://46.101.241.147:8888');

socket.on("chat message", data => {
	console.log(data);
	addNewMessage(data);
});

const form = document.querySelector("form");
const $message = document.getElementById("message");
const $messagelist = document.getElementById("message-list");
const $giftslst = document.getElementById("gifts-list");


form.addEventListener("submit", ev => {
	ev.preventDefault();

	const message = $message.value.trim();

	if(!message) return;

	socket.emit("chat message", { message, type: "TEXT" });

	$message.value = "";
});
fetch("http://api.giphy.com/v1/gifs/trending?api_key=dc6zaTOxFJmzC")
	.then(res => res.json())
	.then(res => {
		const fragment = document.createDocumentFragment();
		res.data.forEach(function(data) {
			const img = document.createElement("img");

			img.src = data.images.fixed_height_small.url;
			img.setAttribute("data-id", data.id);

			fragment.appendChild(img);
		});

		$giftslst.appendChild(fragment);
	});

$giftslst.addEventListener("click", function(ev) {
	imageId = ev.target.dataset.id;
		
	socket.emit("chat message", { message, type: "GIF" })
});
function addNewMessage({ message, type }){
	if(type === "TEXT"){
	const fragment = document.createDocumentFragment();
	const p = document.createElement("p");

	p.textContent = message;

	fragment.appendChild(p);

	$messagelist.appendChild(fragment);
	} else if (type === "GIF"){
		const fragment = document.createDocumentFragment();
		const i = document.createElement("img");
		fetch(`http://api.giphy.com/v1/gifs/${imageId}?api_key=dc6zaTOxFJmzC`)
		.then(res => res.json())
		.then(res => {
			url = res.data.images.fixed_width.url;
			i.src = url;
		});
		fragment.appendChild(i);

		$messagelist.appendChild(fragment);
	} else {
		return;
	}
}






























