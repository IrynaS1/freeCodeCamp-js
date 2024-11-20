/*  Задача
Шаг 85
Цикл while будет выполняться снова и снова, пока указанное условие не перестанет выполняться. 
Он имеет следующий синтаксис:

Пример кода
while (condition) {
  logic;
}

Используйте этот синтаксис, чтобы объявить цикл while с continueLoop в качестве условия. 
Тело должно быть пустым.
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

}

let result = ""

for (const row of rows) {
	result = result + row + "\n";
}

console.log(result);