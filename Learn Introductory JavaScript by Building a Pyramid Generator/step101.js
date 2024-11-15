/*  Задача
 
Шаг 101 Ваш оператор итерации также будет отличаться. 
Вместо того, чтобы добавлять 1 к i в каждом цикле, вам нужно вычитать 1. Как вы делали ранее с i = i + 1, 
обновите свой оператор итерации, чтобы присвоить i значение вычитания 1 из самого себя.
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

for (let i = count; i > 0; i = i - 1) {

}

let result = ""

for (const row of rows) {
	result = result + row + "\n";
}

console.log(result);