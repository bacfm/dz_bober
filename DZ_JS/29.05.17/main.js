let numberOfPerson = prompt("Введите номер персонажа");
if (numberOfPerson < 1 || numberOfPerson > 87){
	 alert("Всего 87 персонажев!! Прости, бро 😞");
}
let fullInformation = [];
fetch(`http://swapi.co/api/people/${numberOfPerson}/`)
			.then(function(person){
			return person.json();
			})
			.then(function(character){
				fullInformation.push(character.name);
				let films = character.films.map(filmUrl => {
					return fetch(filmUrl).then(res => res.json());
				});
				let spec = character.species.map(specUrl => {
					return fetch(specUrl).then(res => res.json());
				});
				let information = spec.concat(films);
				return Promise.all(information);
			})
			.then(function(spec){
				fullInformation.push(spec[0].name);
				fullInformation.push(spec[0].language);
				let allFilms = spec.map(function(title){
					if(title.title === undefined){
						return title.title = "🎬";
					} else {
						return title.title;
					}
				});
				fullInformation.push(allFilms.join("      "));
				
				let peopleOfPlanet = spec[0].people.map(peopUrl => {
					return fetch(peopUrl).then(res => res.json());
				})
				return Promise.all(peopleOfPlanet);
			})
			.then(function(people){
				let planetPeople = people.map(name => name.name);
				fullInformation.push(planetPeople.join(", "));
			});
console.log(fullInformation);
			