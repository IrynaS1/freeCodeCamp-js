/*  Задача
 
Шаг 87 Оператор равенства == используется для проверки равенства двух значений. 
Чтобы сравнить два значения, 
вы должны использовать оператор типа value == 8. 
Ниже done++ внутри вашего цикла добавьте оператор if. 
Оператор должен проверить, равно ли значение done значению count с помощью оператора равенства.
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
	if (done == count) {

	}
}

let result = ""

for (const row of rows) {
	result = result + row + "\n";
}

console.log(result);