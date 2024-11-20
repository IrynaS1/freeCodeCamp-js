/*  Задача
 
Шаг 60 После инструкции return введите строку "Это работает!" в консоль. 
После этого вы увидите, что строка "Это работает!" не отображается в консоли, 
а строка console.log("Это работает!") не отображается серым цветом. 
Скопируйте журнал консоли и вставьте его над инструкцией return.
 Теперь в консоли должна появиться строка "Это работает!". 
 Важно знать о ключевом слове return то, что оно не просто определяет значение, 
 которое будет возвращено вашей функцией, оно также останавливает выполнение вашего кода внутри функции или инструкции block. 
Это означает, что любой код после инструкции return не будет выполнен.
*/


const character = "#";
const count = 8;
const rows = [];

function padRow(name) {
	const test = "Testing";
	console.log("This works!");
	return test;
	console.log("This works!");
}

const call = padRow("CamperChan");
console.log(call);


for (let i = 0; i < count; i = i + 1) {
	rows.push(character.repeat(i + 1))
}

let result = ""

for (const row of rows) {
	result = result + row + "\n";
}

console.log(result);