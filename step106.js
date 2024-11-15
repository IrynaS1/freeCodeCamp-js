/*  Задача
 
Шаг 106
На самом деле вы можете построить перевернутую пирамиду без 
необходимости выполнять цикл "в обратном направлении", как вы это делали.

Для этого вам нужно изучить пару новых методов работы с массивами. 
Начните с использования const для объявления переменной numbers. 
Присвойте ему массив с элементами 1, 2 и 3. Затем запишите массив чисел
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

/*for (let i = count; i > 0; i--) {
  rows.push(padRow(i, count));
}*/

const numbers = [1, 2, 3];
console.log(numbers);

let result = ""

for (const row of rows) {
	result = result + row + "\n";
}

console.log(result);