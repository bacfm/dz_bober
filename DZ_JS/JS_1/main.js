
var mail = prompt("Введите ваш e-mail", '@');
var a = mail.indexOf("@");
var b = mail.indexOf(".");
var c = b-a;
console.log(c);
console.log(a);
console.log(mail.charAt(-5));
if(a < 3){
	alert('Вы ввели слишком короткое имя адреса');
} else if(c<3 || c>10){
	alert('Вы ввели неверный адрес "@"');
} else if(mail.substr(-2).includes(".")){
	alert('Вы ввели неверный адрес после точки');
} else{
	alert('Спасибо!');
}

