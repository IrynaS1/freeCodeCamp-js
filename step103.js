/*  Задача
 
Шаг 103 Как и при сложении, для вычитания можно использовать различные операторы. 
Оператор присваивания вычитания -= вычитает заданное значение из текущего значения переменной, 
а затем присваивает результат обратно переменной. Замените ваш оператор 
итерации правильным оператором, используя оператор присваивания вычитания..
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

for (let i = count; i > 0; i -= 1) {
	rows.push(padRow(i, count));
}

let result = ""

for (const row of rows) {
	result = result + row + "\n";
}

console.log(result);