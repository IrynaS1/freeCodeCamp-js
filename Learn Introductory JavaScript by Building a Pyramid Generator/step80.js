/*  Задача
 
Шаг 80 Теперь строка больше не выводится, потому что значение false не соответствует true.
 А как насчет других значений?  Попробуйте изменить условие на строку "false".
*/


const character = "#";
const count = 8;
const rows = [];

function padRow(rowNumber, rowCount) {
	return " ".repeat(rowCount - rowNumber) + character.repeat(2 * rowNumber - 1) + " ".repeat(rowCount - rowNumber);
}

// TODO: use a different type of loop
/*for (let i = 1; i <= count; i++) {
  rows.push(padRow(i, count));
}*/

if ('false') {
	console.log("Condition is true");
}

let result = ""

for (const row of rows) {
	result = result + row + "\n";
}

console.log(result);