/*  Задача
 
Шаг 88 Оператор равенства может привести к некоторому странному поведению в JavaScript. 
Например, "0" == 0 равно true, даже если единица является строкой, а единица - числом.
 Оператор строгого равенства === используется для проверки того, равны ли два значения и имеют ли они один и тот же тип. 
Как правило, этот оператор равенства следует использовать всегда. 
При использовании оператора строгого равенства значение "0" === 0 становится ложным, поскольку, 
хотя они могут иметь одинаковое нулевое значение, они не относятся к одному типу. 
Обновите свое условие done == count, чтобы использовать оператор строгого равенства.
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

	}
}

let result = ""

for (const row of rows) {
	result = result + row + "\n";
}

console.log(result);