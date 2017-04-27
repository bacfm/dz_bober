 var first = prompt("Здравствуйте! Предлагаю сыграть в игру, если вы согласны нажмите 'Y', а если вы трус нажмите  'N'");
 console.log(first);
 if(first=="Y") {
 	var n1 = Math.floor(Math.random() * (11 - 1 + 1)) + 1;
 	alert("Ваше число" + n1);
 	var secondTry=prompt("Хотите попробовать еще раз? Нажмите Y или N");
 	if(secondTry=="Y"){
 		n2 = Math.floor(Math.random() * (11 - 1 + 1)) + 1;
 		alert("Ваше второе число " + n2);
 		var result = n1 + n2;
 		alert("Ваш результат" + result);
 		if(result > 21) alert("Вы проиграли");
 	} else {
 		alert("Ваш результат " + n1);
 	}

 } else if(first=="N"){
 	alert("Очень жаль!");
 } else {
 	alert("Вы будете играть или нет? Чтобы начать/закончить игру нажмите 'Y' или 'N'. Повторите попытку ");
 }
var second = prompt("А вот и наш второй игрок, если вы готовы нажмите 'Y', а если вы трус и готовы отдать приз первому игроку нажмите  'N'");
 if(second=="Y") {
 	alert("Мы рады, что вы в игре");
 	var f1 = Math.floor(Math.random() * (11 - 1 + 1)) + 1;
 	alert("Ваше число" + f1);
 	var secondTry=prompt("Хотите попробовать еще раз? Нажмите Y или N");
 	if(secondTry=="Y"){
 		f2 = Math.floor(Math.random() * (11 - 1 + 1)) + 1;
 		alert("Ваше второе число " + f2);
 		var result1 = f1 + f2;
 		alert("Ваш результат" + result1);
 		if(result1 > 21) alert("Вы проиграли");
}else {
	alert("Ваш результат " + f2);
}

if (result > result1) {
	alert("Поздравляю, Игрок 1 победил!!!");
} else if (result < result1) {
	alert("Поздравляю, Игрок 2 победил!!!");
} else {
	alert("ПОБЕДИЛА ДРУЖБА!!!");
}
}