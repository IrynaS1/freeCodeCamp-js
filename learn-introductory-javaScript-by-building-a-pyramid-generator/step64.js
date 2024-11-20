/*  Задача
 
Шаг 64
Чтобы узнать, как отформатировать строку, вашей функции padRow необходимо знать, 
на каком номере строки вы находитесь и сколько строк в общей сложности генерируется.

Лучший способ сделать это - создать для них параметры функции. 
Присвойте вашей функции padRow номер строки и параметр rowCount. Несколько параметров разделяются запятой:

Пример кода
function name(first, second) {

}
*/


const character = "#";
const count = 8;
const rows = [];

function padRow(rowNumber, rowCount) {

}

for (let i = 0; i < count; i = i + 1) {
	rows.push(character.repeat(i + 1))
}

let result = ""

for (const row of rows) {
	result = result + row + "\n";
}

console.log(result);