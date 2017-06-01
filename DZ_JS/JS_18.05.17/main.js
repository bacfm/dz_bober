
/*function Bar(name, drinks = [], order = []){
	this.name = name;
	this.drinks = drinks;
	this.order = order;
	this.bar = [];
	this.waiter = [];
}

function Drink(title, num){
	this.title = title;
	this.num = num;
}

function Staff(name, age){
	this.name = name;
	this.age = age;
}


function Waiter(name, age){

	Staff.apply(this, arguments);
}


function Barman(name, age){
	Staff.apply(this, arguments);
}

Waiter.prototype = Object.create(Bar.prototype);
Barman.prototype = Object.create(Bar.prototype);
Drink.prototype = Object.create(Bar.prototype);

Bar.prototype.tip = 0;

Waiter.prototype.getPlace = "Waiter";
Barman.prototype.getPlace = "Barman";


Bar.prototype.addStaff = function(name){
	if(name.getPlace === "Waiter"){
		this.waiter.push(name);
		return this;
	} else if(name.getPlace === "Barman"){
		this.bar.push(name);
		return this;
	} else {
		return alert("Такой должности нет!");
	}
};

Bar.prototype.addDrinks = function (title, num){
	var water = new Drink(title, num);
	this.drinks.push(water);
	return this;
};
Bar.prototype.addTips = function (num){
	  Bar.prototype.tip += num;
	  return this.tip;
};
Bar.prototype.getTips = function (){
	var result = this.tip / this.waiter.length;
	return result;
};
Bar.prototype.removeStaff = function (name){
	if(this.bar.find(person => person.name === name)){
		return delete person.name;
	} else if(this.waiter.find(person => person.name === name)){
		return delete person.name;
	} else{ console.log("Такого сотрудника нету!!!!")}
};

 Waiter.prototype.addOrder = function (name, title, num){
 	var order = new Drink(title, num);
 	 if(name.drinks.find(product => product.title === title)){
 	return name.order.push(order);
 } else {
 	return alert("Такого напитка нет.");
 	}
 }

Barman.prototype.theBestDrink = function(name){
	return console.log(`Сегодня фирменный коктейль - ${name}!`);
};

 Barman.prototype.doOrder = function (name, title, quantity){
 	for(let i = 0; i<name.order.length; i++){
 	if(name.order[i].title === title){
 		let drinkQuantity = name.order[i].num -= quantity;
 		if(drinkQuantity > 0){
 			return name.order[i].num -= quantity;
 		} else {
 			return alert("У нас столько нет!");
 		}

 	} else {
 		return alert("У нас нету такого напитка");
 	}
}
 }


const bar = new Bar("Alcohol", [], []);

 const sam = new Waiter("Sam", 23);
 const bob = new Waiter("Bob", 21);
 const elise = new Waiter("Elise", 27);
 const don = new Waiter("Don", 30);

 const edic = new Barman("Edic", 26);
 const alik = new Barman("Alik", 32);
console.log(bob.getPlace);
 bar
	.addStaff(sam)
	.addStaff(bob)
	.addStaff(elise)
	.addStaff(don)
	.addStaff(edic)
	.addStaff(alik);

sam.addTips(1000);
bob.addTips(500);
elise.addTips(2000);

bar.addDrinks("cola", 10);
bar.addDrinks("juce", 10);
bar.addDrinks("vodka", 20);
bar.addDrinks("samogon", 15);
bar.addDrinks("medovyxa", 30);
 sam.addOrder(bar, "cola", 5);
 sam.addOrder(bar, "vodka", 5);

 edic.theBestDrink("Tequila");

 edic.doOrder(bar, "cola", 6);

console.log(bar);
*/
//-----------------------CONSTRUCTOR-----------------------------------
/*let Drink = {
	constructor(title, num){
		this.title = title;
		this.num = num;

		return this;
	}
}

let Bar = {
	constructor(name, drinks = [], order = [], barman = [], waiter = []){
		this.name = name;
		this.drinks = drinks;
		this.order = order;
		this.barman = barman;
		this.waiter = waiter;

		return this;
	},
	addStaff(name){
	if(name.getPlace === "Waiter"){
		this.waiter.push(name);
		return this;
	} else if(name.getPlace === "Barman"){
		this.barman.push(name);
		return this;
	} else {
		return alert("Такой должности нет!");
	}
},
addDrinks(title, num){
	var water = Object.create(Drink).constructor(title, num);
	this.drinks.push(water);
	return this;
},
removeStaff(name){
	if(this.bar.find(person => person.name === name)){
		return delete person.name;
	} else if(this.waiter.find(person => person.name === name)){
		return delete person.name;
	} else{ console.log("Такого сотрудника нету!!!!")}
}
}




let Person = {
	constructor(name, age){
		this.name = name;
		this.age = age;

		return this;
	}
}


let Barman = Object.create(Person);

Barman.constructor = function(name, age, topDrink) {
	Person.constructor.apply(this, arguments);
	this.topDrink = topDrink;

	return this;
}
Barman.getPlace = "Barman";
Barman.theBestDrink = function(){
	 console.log(`Сегодня фирменный коктейль - ${this.topDrink}!`);
};

 Barman.doOrder = function (name, title, quantity){
 	for(let i = 0; i<name.order.length; i++){
 	if(name.order[i].title === title){
 		let drinkQuantity = name.order[i].num -= quantity;
 		if(drinkQuantity > 0){
 			return name.order[i].num -= quantity;
 		} else {
 			return alert("У нас столько нет!");
 		}

 	} else {
 		return alert("У нас нету такого напитка");
 	}
}
 }

let Waiter = Object.create(Person);

Waiter.constructor = function(name, age){
	Person.constructor.apply(this, arguments);

	return this;
}
Waiter.getPlace = "Waiter";
Waiter.addOrder = function (name, title, num){
 	var order = Object.create(Drink).constructor(title, num);
 	 if(name.drinks.find(product => product.title === title)){
 	return name.order.push(order);
 } else {
 	return alert("Такого напитка нет.");
 	}
 }


let bar = Object.create(Bar).constructor("Bar");





let bob = Object.create(Waiter).constructor("Bob", 23);
let lucy = Object.create(Waiter).constructor("Lucy", 19);
let jack = Object.create(Waiter).constructor("Jack", 24);
let tony = Object.create(Barman).constructor("Tony", 25, "Tequila");
let marley = Object.create(Barman).constructor("Marley", 27, "Vodka");

bar
	.addStaff(bob)
	.addStaff(lucy)
	.addStaff(jack)
	.addStaff(tony)
	.addStaff(marley)
	.addDrinks("vodka", 10)
	.addDrinks("juce", 5)
	.addDrinks("Byrbone", 3);

	// bob.addOrder(bar, "vodka", 5);

	// marley.doOrder(bar, "vodka", 6);
// tony.theBestDrink();


console.log(bar);

*/

//------------------------CLASS----------------------------------
/*class Drink{
	constructor(title, num){
		this.title = title;
		this.num = num;
	}
}

class Bar{
	constructor(name, drinks = [], order = []){
		this.name = name;
		this.drinks = drinks;
		this.order = order;
		this.barman = [];
		this.waiter = [];
	}
	addStaff(name){
	if(name.place === "Waiter"){
		this.waiter.push(name);
		return this;
	} else if(name.place === "Barman"){
		this.barman.push(name);
		return this;
	} else {
		return alert("Такой должности нет!");
	}
}
addDrinks(title, num){
	var water = new Drink(title, num);
	this.drinks.push(water);
	return this;
}
removeStaff(name){
	if(this.bar.find(person => person.name === name)){
		return delete person.name;
	} else if(this.waiter.find(person => person.name === name)){
		return delete person.name;
	} else{ console.log("Такого сотрудника нету!!!!")}
}
}

class Person{
	constructor(name, age){
		this.name = name;
		this.age = age;
	}
}

class Barman extends Person{
	constructor(name, age, theBestDrink, place){
		super(name, age);
		this.theBestDrink = theBestDrink;
		this.place = "Barman";
	}
	theBestDrink(){
	 console.log(`Сегодня фирменный коктейль - ${this.topDrink}!`);

}
doOrder(name, title, quantity){
 	for(let i = 0; i<name.order.length; i++){
 	if(name.order[i].title === title){
 		let drinkQuantity = name.order[i].num -= quantity;
 		if(drinkQuantity > 0){
 			return name.order[i].num -= quantity;
 		} else {
 			return alert("У нас столько нет!");
 		}

 	} else {
 		return alert("У нас нету такого напитка");
 	}
}
 }
 getPlace (){
 	return "Barman"
 }
}



class Waiter extends Person{
	constructor(name, age, place){
		super(name, age);
		this.place = "Waiter";
	}
	addOrder(name, title, num){
 	var order = new Drink(title, num);
 	 if(name.drinks.find(product => product.title === title)){
 	return name.order.push(order);
 } else {
 	return alert("Такого напитка нет.");
 	}
 }
}


let bar = new Bar("Bar");
const sam = new Waiter("Sam", 23);
 const bob = new Waiter("Bob", 21);
 const elise = new Waiter("Elise", 27);
 const don = new Waiter("Don", 30);

 const edic = new Barman("Edic", 26, "Russian vodka");
 const alik = new Barman("Alik", 32, "Bomba");


bar
	.addStaff(sam)
	.addStaff(bob)
	.addStaff(elise)
	.addStaff(don)
	.addStaff(edic)
	.addStaff(alik)
	.addDrinks("vodka", 10)
	.addDrinks("juce", 5)
	.addDrinks("Byrbone", 3);
	bob.addOrder(bar, "vodka", 5);
	edic.doOrder(bar, "vodka", 6);
	
console.log(bar);


*/






