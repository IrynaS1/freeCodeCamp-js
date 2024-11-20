/*  Задача
Шаг 72 Поскольку вы увеличиваете значение i только на 1, вы можете использовать оператор инкремента ++. 
Этот оператор увеличивает значение переменной на 1, обновляя присвоение для этой переменной. 
Например, значение test здесь стало бы равным 8: Пример кода: пусть test = 7; test++; 
Заменит ваше назначение сложения оператором приращения для вашей итерации цикла.
*/


const character = "#";
const count = 8;
const rows = [];

function padRow(rowNumber, rowCount) {
	return " ".repeat(rowCount - rowNumber) + character.repeat(2 * rowNumber - 1) + " ".repeat(rowCount - rowNumber);
}

for (let i = 0; i < count; i++) {
	rows.push(padRow(i + 1, count));
}

let result = ""

for (const row of rows) {
	result = result + row + "\n";
}

console.log(result);