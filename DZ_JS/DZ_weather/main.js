;(function ($) {

$.ajax({
	url:'http://api.openweathermap.org/data/2.5/forecast/daily?lat=48.45&lon=34.98&lang=ru&APPID=6e01816cbcab6929b5fa18ca47a06ddb',
	 success: function  (ev){
	 	console.log(ev);
	 	const todayEverTemp = ev.list[0].temp.eve;
	 	const todayTemp = document.createElement("div");
	 	const temp = document.createElement("span");
	 	const article = document.createElement("span");
	 	const description = document.createElement("ul");
	 	const speed = document.createElement("li");
	 	const clouds = document.createElement("li");
	 	const humidity = document.createElement("li");
	 	const img = document.createElement("img");
	 	humidity.innerHTML = "влажность" + "-" + ev.list[0].humidity;
	 	clouds.innerHTML = "облачность" + "-" + ev.list[0].clouds;
	 	speed.innerHTML = "скорость ветра" + "-" + ev.list[0].speed;
	 	img.src = `http://openweathermap.org/img/w/${ev.list[0].weather[0].icon}.png`;
	 	todayTemp.className = "todayEverTemp";
	 	temp.innerHTML = todayEverTemp + "<br>";
	 	temp.className = "main-temp";
	 	$(".main-temp").attr('id', 'main'); 
	 	temp.appendChild(img);
	 	description.innerHTML = ev.list[0].weather[0].description;
	 	description.appendChild(humidity);
	 	description.appendChild(clouds);
	 	description.appendChild(speed);
	 	article.innerHTML = "Днепр";
	 	article.className = "city";
	 	description.className = "description";
	 	todayTemp.appendChild(article);
	 	todayTemp.appendChild(temp);
	 	todayTemp.appendChild(description);
	 	$(".main-info").append(article);
	 	$(".main-info").append(temp);
	 	$(".main-info").append(description);


	 	for(let i = 0; i < ev.list.length; i++){
	 		// let date = new Date(),
	 		// 	forWeek = new Date();
	 		// 	console.log(forWeek.setDate(date.getDate() + i));
	 		let li = document.createElement("li");
	 		let img = document.createElement("img");
	 		let icon = ev.list[i].weather[0].icon;
	 		img.src = `http://openweathermap.org/img/w/${icon}.png`;
	 		li.className = "tempForFewDays"
	 		li.innerHTML = ev.list[i].temp.eve;
	 		li.appendChild(img);
	 		$(".weather-for-week").append(li);
	 	};
	 	$(".celsi").click(function () {
	 		$(".celsi").css({
	 			"background": "white",
	 			"color": "black",
	 			"pointer-events": "none"
	 		});
	 		$(".kelvine").css({
	 			"background": "#8e8a83",
	 			"pointer-events": "auto"
	 		});
	 		const li = document.getElementsByClassName("tempForFewDays");
	 		console.log(li);
	 		for(let i = 0; i < li.length; i++){
	 			li[i].innerText = li[i].innerText.substring(0,3);
	 			li[i].innerText = li[i].innerText - 273;
	 		}
	 	});
	 	$(".kelvine").click(function () {
	 		$(".kelvine").css({
	 			"background": "white",
	 			"color": "black",
	 			"pointer-events": "none"
	 		});
	 		$(".celsi").css({
	 			"background": "#8e8a83",
	 			"pointer-events": "auto"
	 		});
	 		const li = document.getElementsByClassName("tempForFewDays");
	 		console.log(li);
	 		for(let i = 0; i < li.length; i++){
	 			console.log(li[i].innerTex);
	 			li[i].innerText = +li[i].innerText + 273;
	 		}
	 	});
	 },
	 error: function(er){
	 	console.warn(er);
	 }
})
})(jQuery);
