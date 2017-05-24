
function Bar(name, drinks = [], order = []){
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

Bar.prototype.addBarmen = function(name){
	this.bar.push(name);
	return this;
};
Bar.prototype.addWaiter = function(name){
	this.waiter.push(name);
	return this;
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
 	 if(bar.drinks.find(product => product.title === title)){
 	return name.order.push(order);
 } else {
 	return alert("Такого напитка нет.");
 	}
 }

Barman.prototype.theBestDrink = function(name){
	return console.log(`Сегодня фирменный коктейль - ${name}!`);
};

// Barman.prototype.doOrder = function (){

// }


const bar = new Bar("Alcohol", [], []);

 const sam = new Waiter("Sam", 23);
 const bob = new Waiter("Bob", 21);
 const elise = new Waiter("Elise", 27);
 const don = new Waiter("Don", 30);

 const edic = new Barman("Edic", 26);
 const alik = new Barman("Alik", 32);


bar
	.addWaiter(sam)
	.addWaiter(bob)
	.addWaiter(elise)
	.addWaiter(don)
	.addBarmen(edic)
	.addBarmen(alik);

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
