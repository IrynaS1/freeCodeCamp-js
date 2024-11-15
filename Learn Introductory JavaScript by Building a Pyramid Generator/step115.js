/*  Задача
 
Шаг 115
Если ваша пирамида не перевернута, то вам понадобится блок else, который строит пирамиду в обычном порядке.

На предыдущих шагах вы узнали, как работать с инструкцией else, подобной этой:

Пример кода

if (condition) {
  // if condition is true, run this code
} else {
  // if condition is false, run this code
}

Добавьте блок else к вашему блоку if.
*/


const character = "#";
const count = 8;
const rows = [];
let inverted = true;

function padRow(rowNumber, rowCount) {
	return " ".repeat(rowCount - rowNumber) + character.repeat(2 * rowNumber - 1) + " ".repeat(rowCount - rowNumber);
}

// TODO: use a different type of loop
for (let i = 1; i <= count; i++) {
	if (inverted) {
		rows.unshift(padRow(i, count));
	} else {

	}
}

/*while (rows.length < count) {
  rows.push(padRow(rows.length + 1, count));
}*/

/*for (let i = count; i > 0; i--) {
  rows.push(padRow(i, count));
}*/

let result = ""

for (const row of rows) {
	result = result + row + "\n";
}

console.log(result);