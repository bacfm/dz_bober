//-------------------FIRTS TASK---------------------
/*let obj = {
  num: 1.24,
  str: "not very long string",
  f() {
    return this.str.split(" ")
  },
  arr: ["some", "array", {someProp: "value"}],
  prop: { key: 1 },
  empty: null,
  last: 0
}

function allPropeties(object){
	let arr = [];
	for(let prop in object){
		arr += [typeof object[prop] + "; "];
		if(typeof object[prop] === "string") object[prop] = object[prop].toUpperCase();
	}
	var elements  = Object.keys(object);
	let newObject = {el: elements, str:"Свойств в объекте: " + elements.length, props: arr};
	Object.preventExtensions(object);
	 return  newObject;
}
 console.log(allPropeties(obj));
 console.log(obj);*/






//-----------------SECOND TASK---------------------

let object = {
	name: "Roma",
	surname: "Bobrovskiy",
	age: 18,
	learns: [{name: ["Front-end"]}, {teacher: ["Yriy"]}, {timeCourse: [120]}, {goneCourse: [0.6]}, {marks: [1, 2, 3, 4, 5]}],
	getFullName() {
		return `Hi! I'm ${this.name} ${this.surname}`;
	},
	getAge() {
		return `Student is ${this.age} years old`
	},
	getCourses(){
		let cours = this.learns[0].name;
		let teach = this.learns[1].teacher;
		let duration = this.learns[2].timeCourse;
		let numbers = this.learns[4].marks;
		return `Курс ${cours}. Учитель - ${teach}. Длительность курса - ${duration} часов. Оценки: ${numbers}.`;
	},
	addNewCourse(cour, teach, time){
		return this.learns[0].name.push(" " + cour),
				this.learns[1].teacher.push(" " + teach),
				this.learns[2].timeCourse.push(" " + time);
	},
	getAvarageMarkByCourse(){
		let arr = this.learns[4].marks;
		let sum = 0;
			for(let i = 0; i<arr.length; i++){
				sum += arr[i];
			}
			return sum/arr.length;
},
	addMark(figures){
		if(figures<6 && figures>0 && figures%1==0){
		return this.learns[4].marks.push(figures);
	} else { return alert("	Введите число от 1 до 5")}
	},
	addProgress(this.learns[0].name, this.learns[2].timeCourse){
		return this.learns[3].goneCourse;
	},
	getProgress(){

	}
}
 console.log(object.getCourses());
console.log(object.getAvarageMarkByCourse());
object.addMark(3);

console.log(object.learns[4].marks);



