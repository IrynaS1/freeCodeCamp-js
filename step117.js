/*  Задача
 
Шаг 117 Теперь ваш генератор пирамид находится в завершенном состоянии и обладает большей функциональностью, 
чем вы планировали изначально! 
Следующий шаг - очистка вашего кода. Удалите все комментарии, как однострочные, так и многострочные, из вашего кода.
*/


const character = "#";
const count = 8;
const rows = [];
let inverted = true;

function padRow(rowNumber, rowCount) {
	return " ".repeat(rowCount - rowNumber) + character.repeat(2 * rowNumber - 1) + " ".repeat(rowCount - rowNumber);
}

for (let i = 1; i <= count; i++) {
	if (inverted) {
		rows.unshift(padRow(i, count));
	} else {
		rows.push(padRow(i, count));
	}
}

let result = ""

for (const row of rows) {
	result = result + row + "\n";
}

console.log(result);