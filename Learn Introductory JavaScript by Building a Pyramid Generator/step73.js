/*  Задача
 
Шаг 73 Вместо того, чтобы передавать i + 1 в вызов padRow, вы могли бы начать цикл с 1. 
Это позволило бы вам создать цикл с одним индексом. Обновите свой итератор, чтобы он начинался с 1 вместо 0.
*/


const character = "#";
const count = 8;
const rows = [];

function padRow(rowNumber, rowCount) {
	return " ".repeat(rowCount - rowNumber) + character.repeat(2 * rowNumber - 1) + " ".repeat(rowCount - rowNumber);
}

for (let i = 1; i < count; i++) {
	rows.push(padRow(i + 1, count));
}

let result = ""

for (const row of rows) {
	result = result + row + "\n";
}

console.log(result);