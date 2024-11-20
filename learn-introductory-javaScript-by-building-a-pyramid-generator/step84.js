/*  Задача
 
Шаг 84 Теперь, когда вы попрактиковались в работе с операторами if...else if...else, вы можете удалить их из своего кода. 
 Как только вы это сделаете, используйте let для объявления переменной continueLoop 
 и присвоения ей логического значения false. Затем используйте let для объявления переменной done и присвоения ей значения 0.
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


let result = ""

for (const row of rows) {
	result = result + row + "\n";
}

console.log(result);