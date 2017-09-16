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






























