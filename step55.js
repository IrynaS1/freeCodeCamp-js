/*  Задача
Шаг 55 Прежде чем двигаться дальше, ознакомьтесь с принципом работы функций. 
Объявите функцию с именем addTwoNumbers. 
Эта функция должна принимать два аргумента и возвращать сумму этих двух аргументов. 
Ваша функция не должна использовать жестко заданные значения. 
Примером жестко запрограммированной функции может быть: 
Пример кода функции sayName(имя, фамилия) { возвращает "John Doe"; } 
Имя пользователя("Турист", "Кот"); 
Эта функция вернет "John Doe" независимо от аргументов, переданных параметрам FirstName и LastName, 
таким образом, "Джон Доу" считается жестко заданным значением. 
Объявите переменную sum и присвойте ей значение для вызова вашей функции addTwoNumbers с аргументами 5 и 10. 
Запишите переменную sum в консоль.
*/


const character = "#";
const count = 8;
const rows = [];

function padRow(name) {
	return name;
}

function addTwoNumbers(a, b) {
	return a + b;
}
const sum = addTwoNumbers(5, 10);
console.log(sum);

const call = padRow("Iryna");
console.log(call);


for (let i = 0; i < count; i = i + 1) {
	rows.push(character.repeat(i + 1))
}

let result = ""

for (const row of rows) {
	result = result + row + "\n";
}

console.log(result);