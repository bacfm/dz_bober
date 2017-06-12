let str = "2016/05/20-12:00:35+0300";

function getTimeStamp(str) {
	const getDate = /.+(?=-)/g;
	const getTime = /\d{2}((?=:)|(?=\+))/g;
	const getUtc = /\d{4}$/g;


	let date = str.match(getDate).toString().split("/");
	let time = str.match(getTime);
	let string = date.concat(time).join(",");
	console.log(string);
	console.log(Date.parse(string));
	let d = new Date(string);
	console.log(d);
}
getTimeStamp(str);












/*
let str = "apple:2016/5/27__bid_203.38-ask_203.43|2016/5/28__bid_203.35-ask_203.42|2016/5/28__bid_203.39-ask_203.45|";
 function fullInfo(str){
 	const getName = /(\w+(?=:))/g;
	const getDate = /(\d+\/\d+\/\d+)/g;
	const getBird = /(\d+\.\d+(?=-))/g;
	const getAsk = /(\d+\.\d+(?=\|))/g;
	let date = str.match(getDate);
	let bird = str.match(getBird);
	let ask = str.match(getAsk);
	let name = str.match(getName).toString();
	let ar = {};
	ar.rates = [];
 	for(let i = 0; i < date.length; i++){
 		ar.rates.push({
 			date: date[i],
 			bird: bird[i],
 			ask: ask[i]
 		})
 	}
 	ar.stockName = name;

 	return ar;
}

console.log(fullInfo(str));
*/












