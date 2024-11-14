/*  Задача
 
Шаг 48 Чтобы использовать функцию, вам нужно вызвать ее. 
Вызов функции указывает вашему приложению на выполнение кода из функции, где бы вы ее ни выбрали. 
Синтаксис вызова функции - это имя функции, за которым следуют круглые скобки. 
Например, этот код определяет и вызывает тестовую функцию. Пример кода функции test() { } test();
 Вызовите вашу функцию padRow.
*/


const character = "#";
const count = 8;
const rows = [];

function padRow() {

}

padRow();
for (let i = 0; i < count; i = i + 1) {
	rows.push(character.repeat(i + 1))
}

let result = ""

for (const row of rows) {
	result = result + row + "\n";
}

console.log(result);