/*  Задача
 
Шаг 93 Ваш цикл больше не полагается на переменную continueLoop. 
Это делает переменную неиспользуемым объявлением.
 Как правило, вы хотите избежать неиспользуемых объявлений, чтобы избежать путаницы в будущем.
 Удалите переменную continueLoop.
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

let done = 0;

while (done !== count) {
	done++;
	rows.push(padRow(done, count));
}


let result = ""

for (const row of rows) {
	result = result + row + "\n";
}

console.log(result);