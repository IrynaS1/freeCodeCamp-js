/*  Задача
 
Шаг 91 Оператор строгого неравенства !== позволяет проверить, не равны ли два значения или не имеют ли они одинакового типа. 
Синтаксис аналогичен оператору равенства: value !== 4. 
Обновите условие цикла while, чтобы проверить, не равно ли значение done значению count.
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


while (done !== count) {
	done++;
	rows.push(padRow(done, count));
	if (done === count) {
		continueLoop = false;
	}
}


let result = ""

for (const row of rows) {
	result = result + row + "\n";
}

console.log(result);