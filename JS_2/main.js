

//-------------FIRST TASK------------------
/*function f(num, step, qt){
	for(var i = 0; i < qt; ++i){
		num += step;
		console.log(num);
	}
}
f(5, 3, 20);
*/





//---------------- Second Task--------------------
/*var string = prompt('Enter your string').toUpperCase();
string = string.replace(/A/g, "");
string = string.replace(/E/g, "");
string = string.replace(/I/g, "");
string = string.replace(/O/g, "");
string = string.replace(/U/g, "");
string = string.replace(/Y/g, "");
alert(string);*/

//----------------Third Task----------------------

/*function f(...params){
	return params.map(function(element){
		return typeof element;
	});
}
console.log(f(1, 2, 3, true, [1]));
*/




// ---------------------- Fourth Task ------------------

let nums = [1, 2, 3, 5, 8, 13, 21, 34];
let str = ["this", "is", "a", "very", "long", "array", "which", "has", "absolutely", "no", "sense"];


var doubleArr = nums.map(function(item){
	return item = item*2;
});
console.log(doubleArr);

var odd = nums.some(function(item){
	if(item%2==0) return true;
	else return false;
});
console.log(odd);

var longItem = str.map(function(item){
	return item + " " + item.length;
});
console.log(longItem);

var notOdd = nums.map(function(item){
	if (item%2!=0) {
		return item;
	} else {
		return "";
	}
});
console.log(notOdd);

nums.map(function(){
	let sum = 0;
	for(var i = 0; i < nums.length; i++){
		 sum += nums[i];
	}
	 if (sum > 100) {
		 	return console.log("true");
		 } else {
		 	return console.log("false");
		 }
});

var longestItem = str.map(function f(item){
	return item.length
});
longestItem.map(function(){
	var max = longestItem[0];
	for(var i = 0; i < longestItem.length; i++){
		if(max < longestItem[i]) max = longestItem[i];
	}
	console.log(max);
});

var doubleArray = str.concat(nums);
console.log(doubleArray);











