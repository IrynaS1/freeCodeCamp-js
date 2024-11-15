/*  Задача
 
Шаг 74 Теперь пирамида выглядит немного забавно. 
Поскольку вы начинаете цикл с 1 вместо 0, вам не нужно добавлять единицу к i, 
когда вы передаете ее в padRow. Измените первый аргумент вашего вызова padRow на i.
*/


const character = "#";
const count = 8;
const rows = [];

function padRow(rowNumber, rowCount) {
	return " ".repeat(rowCount - rowNumber) + character.repeat(2 * rowNumber - 1) + " ".repeat(rowCount - rowNumber);
}

for (let i = 1; i < count; i++) {
	rows.push(padRow(i, count));
}

let result = ""

for (const row of rows) {
	result = result + row + "\n";
}

console.log(result);