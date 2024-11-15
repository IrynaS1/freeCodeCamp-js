/*  Задача
 
Шаг 109 Теперь, когда вы испробовали эти методы, вы можете применить другой подход с перевернутой пирамидой. 
Но сначала вам нужно навести порядок в своих экспериментах. Удалите массив numbers, 
а также вызовы методов и журнал вызовов.
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