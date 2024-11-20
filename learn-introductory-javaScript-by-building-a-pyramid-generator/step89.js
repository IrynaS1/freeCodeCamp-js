/*  Задача
 
Шаг 89 Когда значение done достигнет значения count, мы хотим, 
чтобы цикл прекратил выполнение. В теле if присвойте логическое значение false вашей переменной continueLoop.
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

let continueLoop = false;
let done = 0;

while (continueLoop) {
	done++;
	if (done === count) {
		continueLoop = false;
	}
}

let result = ""

for (const row of rows) {
	result = result + row + "\n";
}

console.log(result);